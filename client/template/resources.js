if(Meteor.isClient) {
    
    Meteor.subscribe("pdfs");
    Meteor.subscribe("websites");
    
    Template.resources.helpers({
        'getBooks' : function() {
            return PDFs.find({});
        }, 
        
        'getWebsites' : function() {
            return Websites.find({});
        }
    });
    
    Template.resources.events({
        
    });
    
}