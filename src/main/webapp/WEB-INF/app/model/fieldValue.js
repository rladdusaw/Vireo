vireo.model("FieldValue", function FieldValue(WsApi) {

	return function FieldValue() {
		
		// additional model methods and variables
		
		var fieldValue = this;
		
		fieldValue.save = function(submissionId) {
			var promise = WsApi.fetch(fieldValue.getMapping().update, {
				pathValues: {
					submissionId: submissionId,
				},
				data: fieldValue
			});
			
			promise.then(function(response) {
				fieldValue.update(angular.fromJson(response.body).payload.FieldValue);
			});
			
			return promise;
		};

		return fieldValue;
	}

});