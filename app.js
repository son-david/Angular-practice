angular.module('app',[])
  .controller('control', function ($scope){

    $scope.container = [];
    $scope.style = {};
    $scope.message = '';

    $scope.clear = function (){
      for (var i = 0; i < $scope.container.length; i++){
        $scope.container[i].style = {'background-color': 'white'};
        $scope.container[i].colored = false;
      }
    }

    $scope.click = function (obj){
      if (obj.colored) {
        obj.style = {'background-color':'white'};
        obj.colored = false;
      } else {
        obj.style = {'background-color': randomColor()};
        obj.colored = true;
      }
    }

    $scope.create= function(num){
      if (isNaN(num)){
        $scope.message = 'try inputting a number';
        return;
      }
      $scope.message = '';
      $scope.style = {'width': String(num*100+1)+'px'};
      $scope.container = [];
      for (var i = 0; i < (num*num); i++) {
        $scope.container.push({'num':i+1,'colored':false, 'style':{}});
      }

    }

    $scope.random = function (){
      for (var i = 0; i < $scope.container.length; i++){
        $scope.container[i].style = {'background-color': randomColor()};
        $scope.container[i].colored = true;
      }
    }

    var randomColor = function(){
      var r = Math.floor(Math.random()*255);
      var g = Math.floor(Math.random()*255);
      var b = Math.floor(Math.random()*255);

      return 'rgb('+r+','+g+','+b+')';
    }

  });