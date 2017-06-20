Template.Organizations.onCreated(function() {
  this.autorun(() => {
    this.subscribe('organizations');
    this.subscribe('users');
  });
});
Meteor.subscribe("users");
Template.Organizations.helpers({
    organizations()  {
        return Organizations.find({});
    }
});


Template.Organizations.events({
      'click .btn-organization': () => {
        Session.set('newOrganization', true);
        Session.set('joinOrganization', false);
        Session.set('leaveOrganization', false);
      },
      'click .btn-join': () => {
        Session.set('joinOrganization', true);
        Session.set('newOrganization', false);
        Session.set('leaveOrganization', false);
      },
      'click .btn-deny': () => {
        Session.set('leaveOrganization', true);
        Session.set('joinOrganization', false);
        Session.set('newOrganization', false);
      }
      
});

