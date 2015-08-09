angular.module('estudioAngular')
	.controller('controlador-estudio', function($scope, $location, $window) {
 		$scope.mostrarVentana = function(){
 			$location.reload();
 		};

 		$scope.submit = function(){
 			if (!$scope.testForm.$valid) {
 				console.log('formulario invalido');
 			}else{
 				// manejar la respuesta del formulario
 			}
 		};
});