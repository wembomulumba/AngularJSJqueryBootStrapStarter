angular.module("myapp", [])
         
         .controller("HelloController", function($scope) {
            $scope.helloTo = {};
            $scope.helloTo.title = "Dear User !";
            $scope.helloTo.desc = "here the descript coming from the hellocontroller"
           
});
