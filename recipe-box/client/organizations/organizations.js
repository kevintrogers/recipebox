Template.Organizations.onCreated(function(){
    this.editMode = new ReactiveVar(false);
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
    'click.toggle-menu': function() {
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    },
    'click .fa-trash' : function () {
        Meteor.call ('deleteOrganizations', this._id);
    },
    'click .fa-pencil' : function (event, template) {
        template.editMode.set(!template.editMode.get());
    }
});