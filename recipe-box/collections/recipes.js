Recipes = new Meteor.Collection('recipes');

RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: 'Name'
    },
    desc: {
        type: String,
        label: 'Description'
    },
    author: {
        type: String,
        label: 'Author',
        autoValue: function () {
            return this.UserId;
        }
    },
    createdAt: {
        type: Date,
        label: 'Date',
        autoValue: function () {
            return new Date();
        }
    }
});

Recipes.attachSchema (RecipeSchema);