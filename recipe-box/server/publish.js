Meteor.publish('recipes', function() {
    return Recipes.find({author: this.userId})
});

Meteor.publish('singleRecipe', function(id) {
    check(id, String);
    return Recipes.find({_id: id})
});

Meteor.publish('organizations', function() {
        return Organizations.find({})
});

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('shoppingList', function tasksPublication() {
    return ShoppingItems.find();
  });

}
 