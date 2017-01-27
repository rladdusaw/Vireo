vireo.model("Configuration", function Configuration($sanitize, WsApi) {

	return function Configuration() {

		// additional model methods and variables

		this.reset = function() {
			$sanitize(this.value).replace(new RegExp("&#10;", 'g'), "")
			var promise = WsApi.fetch(this.getMapping().reset, {
				data: this
			});
			promise.then(function(res) {
				console.log(angular.fromJson(res.body).payload);
			});
			return promise;
		};

		return this;
	}

});