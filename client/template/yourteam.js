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
        
    Template.yourteam.events({
        "click .add-phone" : function() {
            
            function BootboxContent(){
                var content = $("#frm").clone(true);
                $(content).css('visibility','visible');
                 content.find('.mask').mask("999-999-9999",{placeholder:"_"});
                return content ;
            }
            
            $(document).on('change', '#add-phone-input', function(e) {
                $('#add-phone-input').val($(this).val());
            });
            
            bootbox.dialog({
              message: BootboxContent,
              title: "Edit User Data",         
              buttons: {
                success: {
                  label: "SAVE",
                  className: "btn-primary",
                  callback: function() {
                        var input = document.getElementById("add-phone-input").value;
                        Meteor.call('addPhoneNumber', input);
                  }
                }
              }
            });
        }
    });
    
}