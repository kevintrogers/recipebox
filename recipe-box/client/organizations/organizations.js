Template.ShoppingList.onCreated(function() {
  this.autorun(() => {
    
    this.subscribe('organizations');
    this.subscribe('members');
    
  });
});



Template.Organizations.helpers({
    organizationList: () => {
 
      var listItems = Organizations.find({});

        return listItems;
    }
});

Template.Organizations.events({
      'click .btn-organization': () => {
        Session.set('newOrganization', true);
      }
});

// Template.Recipes.events({
//       'click .new-recipe': () => {
//         Session.set('newRecipe', true);
//       }
// });