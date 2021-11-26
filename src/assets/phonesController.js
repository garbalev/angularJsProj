// const { data } = require("jquery");

myApp.controller("phoneController", function ($scope) {
  $scope.phones = [
    {
      name: "Nokia Lumia 630",
      rate: 10,
      price: 200,
      company: "Nokia",
    },
    {
      name: "Samsung Galaxy S 4",
      rate: 9,
      price: 400,
      company: "Samsung",
    },
    {
      name: "Mi 5",
      rate: 8,
      price: 300,
      company: "Xiaomi",
    },
  ];
  $scope.tablets = [
    {
      name: "Samsung Galaxy Tab S4",
      rate: 15,
      price: 300,
      company: "Samsung",
    },
    {
      name: "LG G PAD 8.3",
      rate: 14,
      price: 180,
      company: "LG",
    },
    {
      name: "IdeaTab A8",
      rate: 13,
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
  $scope.sortparam = "";
  $scope.checkValid = function () {
    if ($scope.answerForm.$invalid) {
      $scope.valid = true;
    } else {
      $scope.valid = false;
      $scope[$scope.data.mode].push({
        name: $scope.answer.device,
        rate: 0,
        price: $scope.answer.price,
        company: $scope.answer.production,
      });
      $scope.answer.phone = "";
      $scope.answer.price = "";
      $scope.answer.production = "";
    }
  };
  $scope.selection = function () {
    if ($scope.data.mode === "tablets") {
      return "Модель планшета";
    }
    return "Модель телефона";
  };
  $scope.voteUp = function (device) {
    device.rate++;
  };
  $scope.voteDown = function (device) {
    device.rate--;
  };
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

myApp.directive("answerList", function () {
  return {
    link: function (scope, element, attrs) {
      console.log(scope);
    },
    restrict: "A",
    templateUrl: "./assets/phoneTemplate.html",
    transclude: true,
  };
});
