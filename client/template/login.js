if(Meteor.isClient) {
    
    Meteor.subscribe("teams");
    
    Template.login.helpers({
        getErrorMessage: function() {
            return Session.get("errorMessage");
        }
        
    });
        
    Template.login.events({
                
       "click .register-button": function() {
            var input = document.getElementById("team_auth_code").value;
            var query = {}
            query["key"] = input;
            if(teams.find(query).count() > 0) {
                Meteor.call("setUserDetails", input);
                
                Meteor.loginWithGoogle({}, function(err) {
                        if(err) {
                            console.log(err);
                            throw new Meteor.Error('login-failed');    
                        }
                    }
                );
                
            } else {
                alert("The Team Authorization Code you entered is not valid. Check your input and try again.");
            }
        },
        
        "click .login-button": function() {
            Meteor.loginWithGoogle({}, function(err) {
                    if(err.error === 'user-not-registered') {
                        alert("User not found. Please register with a valid authorization code before you sign in.");
                    }
                }
            );
        }
    });
}