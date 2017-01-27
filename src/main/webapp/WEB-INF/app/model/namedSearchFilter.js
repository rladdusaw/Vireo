vireo.model("NamedSearchFilter", function NamedSearchFilter(WsApi) {

	return function NamedSearchFilter() {
		var namedSearchFilter = this;

		namedSearchFilter.set = function(filter) {

			var promise = WsApi.fetch(namedSearchFilter.getMapping().setFilter, {
				data: filter
			});

			return promise;
		};

		namedSearchFilter.removeFilter = function(criterionName, filterValue) {

			var promise = WsApi.fetch(namedSearchFilter.getMapping().removeFilter, {
				"data": {
					"criterionName":criterionName,
					"filterValue":filterValue
				}
			});

			return promise;
		};

		namedSearchFilter.clearFilters = function() {
			var promise = WsApi.fetch(namedSearchFilter.getMapping().clearFilters);
			return promise;
		};

		return namedSearchFilter;
	};

});