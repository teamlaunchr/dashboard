if (Meteor.isServer) {
    
    // Publishing Code for Collections
    Meteor.publish("teams", function() {
        return teams.find({},  {fields: {name: 1, key: 1}});
    });
    
    Meteor.publish('allUsers', function() {
        cursor = Meteor.users.find({}, {fields: {_id: 1, username: 1, name: 1, emails: 1, services: 1, team_id: 1, phone: 1}});
        return cursor;
    });
    
    Meteor.publish('updates', function() {
       return Updates.find({}, {fields: {
           title: 1,
           supportingText: 1
       }}); 
    });
    
    Meteor.publish("pdfs", function() {
        return PDFs.find({},  {fields: {title: 1, link: 1, picture: 1}});
    });
    
    Meteor.publish("websites", function() {
        return Websites.find({},  {fields: {title: 1, link: 1, picture: 1}});
    });
    
    // Verify User has a team before adding it to the db
    Accounts.onCreateUser((options, user) => {
        if (! user.services.google) {
            throw new Error('Expected login with Google only.');
        }
                
        if(! team_code) {
            throw new Meteor.Error('user-not-registered');
        }

        user.team_id = team_code; 
        team_code = null;
        return user;
    });
}