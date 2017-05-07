Template.OrganizationLeave.onCreated(function() {
  this.autorun(() => {
    this.subscribe('organizations');
  });
});


 
Template.OrganizationLeave.events ({
    'click .fa-close': function () {
        Session.set('leaveOrganization', false);
    }
});


Template.OrganizationLeave.helpers({
    organizationList: () => {
 
      var organizationItems = Organizations.find({});

        return organizationItems;
    }
});