Template.ShoppingList.onCreated(function() {
  this.autorun(() => {
    
    this.subscribe('recipes');
    this.subscribe('shoppingList');
    
  });
});

Template.OtherItems.onCreated(function() {
  this.autorun(() => {

    this.subscribe('shoppingList');
    
  });
});

Template.ShoppingList.helpers({
    shoppingList: () => {
      var recipes = Recipes.find({inMenu: true});


        return recipes;
    }
});

Template.OtherItems.helpers({
    shoppingList: () => {
          var listItems = ShoppingItems.find({});

      var listItems = ShoppingItems.find({});

        return listItems;
    }
});
