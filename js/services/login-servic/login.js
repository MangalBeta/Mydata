app.service('loginService',function($location,$localStorage, $window){
this.logout=function(){
 $location.path('/login');
}
this.mySignpage=function(){
 $location.path('/signUp');
}	
	
var adduserInfo=[{
		id: 0,
		name: 'John',
		lastName: 'baba',
		email: 'admin@gmail.com',
		password:'welcome123'
	}];
this.Savedata = function (myname,mylastName,myemail,mypassword) {
adduserInfo.push({name:myname,lastName:mylastName,email:myemail,password:mypassword})
for(i in adduserInfo){
                $localStorage.emailMessage = adduserInfo[i].email;
                 $localStorage.passwordMessage =adduserInfo[i].password;
               // console.log($localStorage.emailMessage)
      }
 $window.alert($localStorage.emailMessage + "\n" + $localStorage.passwordMessage);
    
           }
       
this.validUser=function(email,pass){
if($localStorage.passwordMessage== pass && $localStorage.emailMessage == email){
			console.log($localStorage.emailMessage);
			console.log($localStorage.passwordMessage);
         return $location.path('/viewLogin');
			}
			else{
	   alert("username or password is incorrect  \n     Plz try again !!!");
        return $location.path('/');
			}
			
			
		}
		
});
	
	
	
	
