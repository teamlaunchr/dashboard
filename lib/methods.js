Meteor.methods({
    'setUserDetails': function(id) {
        team_code = id;
    },
    
    'addPhoneNumber' : function(phone_number) {
        console.log(phone_number);
        
        Meteor.users.update({_id:Meteor.userId()}, {
              $set: {
                phone: phone_number
              }
        });     
    }
});
            
