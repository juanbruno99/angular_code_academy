//Main Controller
app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Top Sellers in E-Books';
    $scope.promo = 'Promotions On the rise!';
    $scope.product = {
        name:'The Book of Trees',
        price:19
    };
}]);