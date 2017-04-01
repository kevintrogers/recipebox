Template.ShoppingList.onCreated(function() {
  this.autorun(() => {
    this.subscribe('recipes');
  });
});

Template.ShoppingList.helpers({
    shoppingList: () => {
        return Recipes.find({inMenu: true});
    }
});

Template.ShoppingList.events({
    'click.add-to-list': function() {
        Meteor.call('addToList', this._id, this.inMenu);
    },

});