Template.OrganizationJoin.events ({
    'click .fa-close': function () {
        Session.set('joinOrganization', false);
        Session.set('submitMembership', false);
    },
    'click .toggle-organization': function () {
      Session.set('submitMembership', true);
      var elementPosition = $(this).index();
    }
});

Template.OrganizationJoin.helpers({
    organizationList: () => {
 
      var organizationItems = Organizations.find({});

        return organizationItems;
    },

});