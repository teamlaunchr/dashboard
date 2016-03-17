if(Meteor.isClient) {
    
    Meteor.subscribe("allUsers");
    Meteor.subscribe("teams");
    
    //initialize
    Session.set("currentTab", "Updates");    
    
    Template.dashboard.helpers({
        isEventsTab: function() {
            return Session.get("currentTab") === "Events";
        },
        
        isUpdatesTab: function() {
            return Session.get("currentTab") === "Updates";
        },
        
        isResourcesTab: function() {
            return Session.get("currentTab") === "Resources";
        },
        
        isYourTeamTab: function() {
            return Session.get("currentTab") === "Your Team";
        },  
        
        getCurrentTab: function() {
            return Session.get("currentTab");
        },
        
        initUserDetails: function() {
            UserSession.set("team_id", Meteor.user().team_id);
            if(!window.location.hash) {
                    window.location = window.location + '#loaded';
                    window.location.reload();
            }
        }
    });
    
    Template.dashboard.events({
        "click .nav-updates": function() {
            Session.set("currentTab", "Updates");
        },
        
        "click .nav-events": function() {
            Session.set("currentTab", "Events");
        },
        
        "click .nav-resources": function() {
            Session.set("currentTab", "Resources");
        },
        
        "click .nav-team": function() {
            Session.set("currentTab", "Your Team");
        },
        
        "click .nav-signout": function() {
            
            console.log("click event");
            bootbox.confirm("Are you sure you want to log out?", function(result) {
                console.log(result);
                
              if(result) {
                  Meteor.logout(function(err) {
                      
                  });
              }
            }); 
        }
    });
}