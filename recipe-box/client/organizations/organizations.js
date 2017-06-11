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

    'click .fa-trash' : function () {
        Meteor.call ('deleteOrganizations', this._id);
    },
    'click .fa-pencil' : function (event, template) {
        template.editMode.set(!template.editMode.get());
    },
    'click . join-organization' : function () {
        
    },
    'click . join-organization' : function () {
        
    }
    
});

Template.Organizations.helpers({
    organizationList: () => {
 
      var organizationItems = Organizations.find({});

        return organizationItems;
    }
});

const newOrg = {
    name: this.organizations.organization,
    orgId:  this.organizations._id
};

Meteor.users.update(userId, {
  $set: {
    orgs: newOrg
  }
});