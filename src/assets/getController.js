myApp.controller("getController", ($scope, $http) => {
  $scope.load = (url = "?page=2", action) => {
    $http({ method: "GET", url: `https://reqres.in/api/users${url}` }).then(
      (response) => {
        if (action === "rev") {
          $scope.data = response.data.data.reverse();
        } else {
          $scope.data = response.data.data;
        }
        console.log($scope.data);
        $scope.style1 = $scope.styleUnclicked;
        $scope.buttonVisibility = true;
      }
    );
  };
  $scope.data = [];
  $scope.style1 = {};
  $scope.styleUnclicked = {
    "background-color": "rgba(59, 51, 51, 0.15)",
    padding: "10px 0",
  };
  $scope.buttonVisibility = false;
});

// http://universities.hipolabs.com/search?country=Belarus
