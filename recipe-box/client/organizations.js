Template.Organizations.onCreated(function() {
  this.autorun(() => {
    this.subscribe('organizations');
  });
});

Template.Organizations.helpers({
    recipes: () => {
        return Organizations.find({});
    }
});


Template.Organizations.events({
      'click .btn-organization': () => {
        Session.set('newOrganization', true);
      }
});

