Template.OrganizationJoin.onCreated(function() {
  this.autorun(() => {
    this.subscribe('organizations');
  });
});


Template.OrganizationJoin.events ({
    'click .fa-close': function () {
        Session.set('joinOrganization', false);
    }// ,
    // 'click .toggle-organization': function () {
      
    // }
});

Template.OrganizationJoin.helpers({
    organizationList: () => {
 
      var organizationItems = Organizations.find({});

        return organizationItems;
    }
});