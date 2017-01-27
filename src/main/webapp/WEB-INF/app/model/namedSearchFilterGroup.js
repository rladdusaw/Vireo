vireo.model("NamedSearchFilterGroup", function (WsApi) {

	return function NamedSearchFilterGroup() {
		var namedSearchFilterGroup = this;

		namedSearchFilterGroup.set = function(filter) {

			var promise = WsApi.fetch(namedSearchFilterGroup.getMapping().setFilter, {
				"data": filter
			});

			return promise;
		};

		namedSearchFilterGroup.addFilter = function(criterionName, filterValue, filterGloss, exactMatch) {

			var promise = WsApi.fetch(namedSearchFilterGroup.getMapping().addFilter, {
				data: {
					"criterionName": criterionName,
					"filterValue": filterValue,
					"filterGloss": filterGloss,
					"exactMatch": exactMatch
				}
			});

			return promise;

		};

		namedSearchFilterGroup.removeFilter = function(namedSearchFilterName, filterCriterion) {

			var promise = WsApi.fetch(namedSearchFilterGroup.getMapping().removeFilter, {
				data: filterCriterion,
				pathValues: {
					namedSearchFilterName: namedSearchFilterName
				}
			});

			return promise;
		};

		namedSearchFilterGroup.clearFilters = function() {
			var promise = WsApi.fetch(namedSearchFilterGroup.getMapping().clearFilters);
			return promise;
		};

		return namedSearchFilterGroup;
	};

});