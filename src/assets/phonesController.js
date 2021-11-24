myApp.controller("phoneController", function ($scope) {
  $scope.phones = [
    {
      name: "Nokia Lumia 630",
      year: 2014,
      price: 200,
      company: "Nokia",
    },
    {
      name: "Samsung Galaxy S 4",
      year: 2014,
      price: 400,
      company: "Samsung",
    },
    {
      name: "Mi 5",
      year: 2015,
      price: 300,
      company: "Xiaomi",
    },
  ];
  $scope.tablets = [
    {
      name: "Samsung Galaxy Tab S4",
      year: 2014,
      price: 300,
      company: "Samsung",
    },
    {
      name: "LG G PAD 8.3",
      year: 2013,
      price: 180,
      company: "LG",
    },
    {
      name: "IdeaTab A8",
      year: 2014,
      price: 220,
      company: "Lenovo",
    },
  ];
  $scope.data = {
    mode: "close",
  };
  $scope.modes = [
    {
      value: "tablets",
      label: "Планшеты",
    },
    {
      value: "phones",
      label: "Смартфоны",
    },
  ];
  $scope.somestyle = { background: "pink", color: "#333" };
  $scope.someclass = "myclass";
  $scope.left = 0;
  $scope.style = {
    position: "relative",
    left: `${20}px`,
    background: "rgb(190 255 201)",
    width: "fit-content",
  };
  $scope.ngstyle = function () {
    $scope.left += 20;
    $scope.style.left = `${$scope.left}px`;
  };
  $scope.focusOrBlur = "blur";
  $scope.styleButton = { background: "lightgray" };
  $scope.focus = function () {
    $scope.styleButton.background = "yellow";
    $scope.focusOrBlur = "focus";
  };
  $scope.blur = function () {
    $scope.styleButton.background = "lightgray";
    $scope.focusOrBlur = "blur";
  };
});
