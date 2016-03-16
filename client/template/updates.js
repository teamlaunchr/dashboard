if (Meteor.isClient) {
    Meteor.subscribe('updates');
    
    Template.updates.helpers({
        'getUpdates': function() {
            return Updates.find({});   
        },
        
        'isUpdateActive': function() {
            if(UserSession.get(this._id)) {
                return false;
            } else {
                return true;
            }
        },
        
        'isUpdateDismissed': function() {
            if(UserSession.get(this._id)) {
                return true;
            } else {
                return false;
            }
        }
    });
    
    Template.updates.events({
       "click .dismiss-update": function() {
           UserSession.set(this._id, "dismissed");
       },
        
        'click .active-update': function() {
            UserSession.delete(this._id);
        }
    });
}