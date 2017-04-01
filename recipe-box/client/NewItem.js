Template.NewItem.onCreated(function() {
  this.autorun(() => {
    this.subscribe('shoppingList');
  });
});

Template.NewItem.helpers({
    recipes: () => {
        return ShoppingList.find({});
    }
});