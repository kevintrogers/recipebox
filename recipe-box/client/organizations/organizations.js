let newOrg = {
    organizationName: this.organization,
    orgId:  this._id
};


Template.Organizations.onCreated(function(){
    this.editMode = new ReactiveVar(false);
    this.autorun(() => {
        this.subscribe('organizations');
  });
});


Template.Organizations.events({

    'click .fa-trash' : function () {
        Meteor.call ('deleteOrganizations', this._id);
    },
    'click .fa-pencil' : function (event, template) {
        template.editMode.set(!template.editMode.get());
    }
    
});


Template.Organizations.helpers({
    organizationList: () => {
 
      var organizationItems = Organizations.find({});

        return organizationItems;
    }
});


