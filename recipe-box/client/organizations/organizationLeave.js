
Meteor.subscribe('organizations');
 
Template.OrganizationLeave.events ({
    'click .fa-close': function () {
        Session.set('leaveOrganization', false);
    }
});
