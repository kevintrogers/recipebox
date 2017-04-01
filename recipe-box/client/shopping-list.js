Template.ShoppingList.onCreated(function() {
  this.autorun(() => {
    this.subscribe('recipes');
  });
});

Template.ShoppingList.helpers({
    shoppingList: () => {
        return Recipes.find({inMenu: true}) && ShoppingList.find({});
        
    }
});

// Template.ShoppingList.events({
//     'click.add-to-list': function() {
//         Meteor.call('addToList');
//     }, don't know if I need this yet

// });