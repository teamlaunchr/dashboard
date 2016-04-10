Meteor.methods({
   'getUserByEmail' : function(email) {
       email = 'yash.shah830@gmail.com';
       console.log(email);
       if(Accounts.findUserByEmail(email)) {
           return true;
       } else {
           return false;
       }
   } 
});