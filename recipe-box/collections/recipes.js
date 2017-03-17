import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Recipes = new Mongo.Collection('recipes');

RecipeSchema = new SimpleSchema({
    name: {
        label: "Name",
        type: String
    },
    desc: {
        label: "Description",
        type: String
    },
    author: {
        type: String,
        label: "Author",
        autoform: {
            type: "hidden"
        },
        autoValue: function(){
            return this.userId;
        },
    },
    createdAt: {
        type: Date,
        label: "CreatedAt",
        autoform: {
            type: "hidden"
        },
        autoValue: function() {
            return new Date();
        },
    }
});

Recipes.attachSchema(RecipeSchema);