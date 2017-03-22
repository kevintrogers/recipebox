Template.RecipeSingle.onCreated(function() {
  this.autorun(() => {
    this.subscribe('recipes');
  });
});

Template.RecipeSingle.helpers({
    recipe: () => {
        var id = FlowRouter.getParam('id');
        return Recipes.findOne({_id: id});
    }
});