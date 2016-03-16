if(Meteor.isClient) {
    
    Meteor.subscribe('teams');
    
    Template.yourteam.helpers({
        "getUsers": function() {
            return Meteor.users.find({});
        },
        
        "isValidUser" : function() {
            if(this.team_id === Meteor.user().team_id) {
                return true;
            } else {
                return false;
            }
        },
        
        "getTeamTitle" : function() {
            var query = {};
            query["key"] = Meteor.user().team_id;
            var cursor = teams.find(query);
            return cursor.fetch()[0].name;
        },
        
        "isCurrentUser" : function() {
            return this._id === Meteor.user()._id;
        }
    });
    
}