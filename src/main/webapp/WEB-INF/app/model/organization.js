vireo.model("Organization", function Organization($q, WsApi, RestApi) {

	return function Organization() {

		//Overrride
		this.save = function() {
			var organization = this;
			var promise = $q(function(resolve) {
				if(organization.dirty()) {
					angular.extend(organization.getMapping().update, {data: organization});
					RestApi.post(organization.getMapping().update).then(function(res) {
						resolve(res);
					});
				}
				else {
					var payload = {};
					payload[organization.constructor.name] = organization;
					resolve({
						payload: payload,
						meta: {
							type: "SUCCESS"
						}
					});
				}
			});
			return promise;
		};

		//Override
		this.delete = function() {
			var organization = this;
			var promise = RestApi.post(apiMapping.Organization.remove, {
				data: organization
			});
			promise.then(function(res) {
				if(res.meta.type == "INVALID") {
					organization.setValidationResults(res.payload.ValidationResults);
					console.log(organization);
				}
			});
			return promise;
		};

		this.addEmailWorkflowRule = function(templateId, recipient, submissionStateId) {

			var organization = this;
			var promise = WsApi.fetch(apiMapping.Organization.addEmailWorkflowRule, {
				pathValues: {
					organizationId: organization.id
				},
				data: {
					templateId: templateId,
					recipient: recipient,
					submissionStateId: submissionStateId
				}
			});
			
			return promise;

		};

		this.removeEmailWorkflowRule = function(rule) {

			var organization = this;
			var promise = WsApi.fetch(apiMapping.Organization.removeEmailWorkflowRule, {
				pathValues: {
					organizationId: organization.id+"/remove-email-workflow-rule/"+rule.id,
				}
			});
			
			return promise;	

		};

		this.editEmailWorkflowRule = function(rule) {
			var organization = this;
			angular.extend(apiMapping.Organization.editEmailWorkflowRule, {
				'method': organization.id+"/edit-email-workflow-rule/"+rule.id,
				'data': {
					templateId: rule.emailTemplate.id,
					recipient: rule.emailRecipient
				}
			});

			var promise = WsApi.fetch(apiMapping.Organization.editEmailWorkflowRule);
			
			return promise;	
		};

		this.changeEmailWorkflowRuleActivation = function(rule) {
			var organization = this;

			var promise = WsApi.fetch(apiMapping.Organization.changeEmailWorkflowRuleActivation, {
				pathValues: {
					orgId: organization.id,
					ruleId: rule.id	
				} 
			});
			
			return promise;	
		};

		return this;

	};
});
