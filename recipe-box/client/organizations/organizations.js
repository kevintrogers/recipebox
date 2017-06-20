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
    },
    'click .join-organization' : function () {
    Organizations.this.organization.update ({ _id: this.id },{ name: this.name, "members.$.name": this.username,  "members.$.memberId": this.userId},{ upsert: true });
       
    Meteor.users.update({_id: this.userId}, { orgs: newOrg  }, { upsert: true });  }

        

    
});


Template.Organizations.helpers({
    organizationList: () => {
 
      var organizationItems = Organizations.find({});

        return organizationItems;
    }
});


