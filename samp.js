	angular.module('myapp',[]).controller('control',function($scope)
		{	
			
			$scope.operationToken = "";
			$scope.add=function(num1,num2)
			{
				$scope.result=num1+num2;

			}
			$scope.subtract=function(num1,num2)
			{
				$scope.result=num1-num2;

			}
			$scope.multiply=function(num1,num2)
			{
				$scope.result=num1*num2;

			}
			$scope.divide=function(num1,num2)
			{
				$scope.result=num1/num2;

			}
			$scope.updateOutput = function(btn) {
				if($scope.output == "0") {
				$scope.output = btn;
			} else {
				$scope.output += String(btn);
			}
			}
		});
