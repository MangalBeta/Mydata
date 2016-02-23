 app.controller('loginController',['$scope','loginService','$localStorage', '$sessionStorage', '$window',
 function ($scope,loginService,$localStorage, $sessionStorage, $window) {
$scope.logOut=true; 
$scope.message="helloo";
	$scope.clickCreateUser=true;
 $scope.userData=function(){
	   $scope.logOut=false; 
	  loginService.validUser( $scope.email,$scope.pass);
	 
 }
 $scope.signUpUser=function(){
 	  $scope.clickCreateUser=true;
          loginService.Savedata($scope.myname,$scope.mylastName,$scope.myemail, $scope.mypassword)
    	

 }
 
  }]);
  
 //*******************ViewLoginController*******************************

app.controller('viewController',['$scope','loginService','createUser','$localStorage', 
	function ($scope,loginService,createUser,$localStorage) {
  $scope.data = $localStorage.emailMessage;
  
 console.log($scope.data);
	$scope.logOut=true; 
	$scope.logOutUser=function(){
	loginService.logout();	 
	}
	$scope.clickCreateUser=false;
	$scope.contacts=createUser.list();
	    console.log($scope);
	   
	$scope.addUser=function(){
	createUser.saveData($scope.newContact)
	$scope.clickCreateUser=false;
        $scope.newContact={};

	}

   $scope.deletName=function(id){
   createUser.deletedata(id);
if($scope.newContact.id == id){
$scope.newContact={};
}
}
$scope.$watch('deletName',function(){
 console.log("inside the delete");
});

 $scope.edit=function(id){
       $scope.newContact= angular.copy(createUser.getData(id));
       	$scope.clickCreateUser=true;
     }	
    }]);


