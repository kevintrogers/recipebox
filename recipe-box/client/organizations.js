


Template.Organizations.onCreated(function() {
  this.autorun(() => {
    this.subscribe('organizations');
  });
});

Template.Organizations.helpers({
    organizations()  {
        return Organizations.find({});
    }
});


Template.Organizations.events({
      'click .btn-organization': () => {
        Session.set('newOrganization', true);
      },
      'click .btn-join': () => {
        Session.set('joinOrganization', true);
      },
      'click .btn-deny': () => {
        Session.set('leaveOrganization', true);
      }
      
});

Template.NewOrganization.helpers({
    organizationList: () => {
 
      var organizationItems = Organizations.find({});

        return organizationItems;
    }
});