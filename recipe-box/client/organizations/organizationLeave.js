
Meteor.subscribe('organizations');
 
Template.NewOrganization.events ({
    'click .fa-close': function () {
        Session.set('leaveOrganization', false);
    }
});
