Template.ShoppingList.onCreated(function() {
  this.autorun(() => {
    
    this.subscribe('recipes');
    this.subscribe('shoppingItems');
    
  });
});



Template.ShoppingList.helpers({
    shoppingList: () => {
      var recipes = Recipes.find({inMenu: true});
      var listItems = shoppingItems.find({});

        return listItems;
    }
});

