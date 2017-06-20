Template.OrganizationJoin.events ({
    'click .fa-close': function () {
        Session.set('joinOrganization', false);
        Session.set('submitMembership', false);
    },
   'click .join-organization': function () {
      Session.set('submitMembership', true);
   }

});

Template.OrganizationJoin.helpers({
    organizationList: () => {
 
      var organizationItems = Organizations.find({});
        return organizationItems;
    },

});