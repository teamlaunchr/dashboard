if(Meteor.isClient) {
    
    Meteor.subscribe("allUsers");
    Meteor.subscribe("teams");
    
    //initialize
    Session.set("currentTab", "Updates");    
    
    Template.dashboard.helpers({
       "userName": function() {
            return Meteor.user().services.google.name;
       },
        
        "userEmail": function() {
            return Meteor.user().services.google.email;
        },
        
        "userImage": function() {
            return Meteor.user().services.google.picture;
        },
        
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
            var dialog = document.querySelector('dialog');
            dialog.showModal();
        },
        
        "click .log-out": function() {
            Meteor.logout(function(err) {
                
            });
            var dialog = document.querySelector('dialog');
            dialog.close();
        },
        
        "click .dismiss": function() {
            var dialog = document.querySelector('dialog');
            dialog.close();
        }
    });
}