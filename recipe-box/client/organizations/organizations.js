Template.Recipes.onCreated(function() {

});
Template.Organizations.onCreated(function(){
    this.editMode = new ReactiveVar(false);
    this.autorun(() => {
        this.subscribe('organizations');
  });
});

Template.Organizations.helpers({
    updateOrganizationsId: function() {
        return this._id;
    },
    editMode: function() {
        return Template.instance().editMode.get();
    }
});

Template.Organizations.events({
    // 'click.toggle-organization': function() {
    //     Meteor.call('toggleOrganizationMembership', this._id, this.inOrganization);
    // },
    'click .fa-trash' : function () {
        Meteor.call ('deleteOrganizations', this._id);
    },
    'click .fa-pencil' : function (event, template) {
        template.editMode.set(!template.editMode.get());
    },
    // 'click .toggle-organization' : function () {
    //     var membership = Organizations.findOne({ members: this.userId });
    //     if (membership) {
    //         Organizations.members.remove(membership); 
                       
    //     } else {
    //       Organizations.members.insert(membership);
    //     }
    // }
});

Template.Organizations.helpers({
    organizationList: () => {
 
      var organizationItems = Organizations.find({});

        return organizationItems;
    }
});