if(Meteor.isClient) {
    
    Template.login.helpers({
       
        
        
    });
    
    Template.login.events({
       
        "click .login-email": function() {
            var emailInput = document.getElementById("login-email").value;
            
            var passwordInput = document.getElementById("login-password").value;
            
            if(Meteor.call('getUserByEmail', 'yash.shah830@gmail.com')) {
            
                Meteor.loginWithPassword(emailInput, passwordInput, function(err) {
                    if(err) {
                        bootbox.alert("Login Failed. The email or password you entered was incorrect");
                    }
                });
            } else {
                bootbox.alert("User does not exist. Please create an account before logging in.")
            }
        }
        
    });
    
}