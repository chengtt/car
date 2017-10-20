

app.factory("baseServer", function ($http, $q) {
    var factory = {
        ajax: function (type, url, data) {
            var defer = $q.defer();
            if (type == "JSONP") {
                $.ajax({
                    url: url,
                    dataType: "jsonp",
                    success: function (res) {
                        defer.resolve(res);
                    }, error: function (err) {
                        defer.reject(err);
                    }
                });
                return defer.promise;
            } else {
                $http({
                    method: type || "get",
                    url: url,
                    data: data || null
                }).success(function (data) {
                    defer.resolve(data);
                }).error(function (error) {
                    defer.reject(error);
                });
            }
            return defer.promise;
        }
    };
    return factory;
});