if(Meteor.isClient) {
    
    Meteor.subscribe("teams");
    
    Template.login.helpers({
        getErrorMessage: function() {
            return Session.get("errorMessage");
        }
        
    });
        
    Template.login.events({
                
       "click .registerBtn": function() {
            var input = document.getElementById("team_auth_code").value;
            var query = {}
            query["key"] = input;
            if(teams.find(query).count() > 0) {
                Meteor.call("setUserDetails", input);
                
                Meteor.loginWithGoogle({}, function(err) {
                        if(err) {
                            throw new Meteor.Error("login-failed");    
                        }
                    }
                );
                
            } else {
                var errorDialog = document.querySelector('dialog');
                Session.set("errorMessage", "The Team Authorization Code you entered is not valid. Check your input and try again.");
                errorDialog.showModal();
            }
        }, 
        
        "click .error-ok": function() {
            var errorDialog = document.querySelector('dialog');
            errorDialog.close();
        },
        
        "click .loginBtn": function() {
            Meteor.loginWithGoogle({}, function(err) {
                    if(err.error === 'user-not-registered') {
                        var errorDialog = document.querySelector('dialog');
                        Session.set("errorMessage", "User not found. Please register with a valid authorization code before you sign in.");
                        errorDialog.showModal(); 
                    }
                }
            );
        }
    });
}