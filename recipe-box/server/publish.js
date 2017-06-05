
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('recipes', function() {
    return Recipes.find({author: this.userId})
});

Meteor.publish('singleRecipe', function(id) {
    check(id, String);
    return Recipes.find({_id: id});
});

  Meteor.publish('shoppingList', function tasksPublication() {
    return ShoppingItems.find();
  });

  Meteor.publish('organizations', function tasksPublication() {
    return Organizations.find();
  });
  Meteor.publish("users", function(){
  return Meteor.users.find();
})
}
 