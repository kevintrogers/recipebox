import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Recipes = new Mongo.Collection('recipes');

Recipes.allow({
    insert: function(userId, doc){
        return !!userId;
        
    }
    
});


RecipeSchema = new SimpleSchema({
    
    name: {
        label: "Name",
        type: String
    },
    desc: {
        label: "Description",
        type: String
    },
      ingredients: {
        type: Array
     },
     "ingredients.$": Object,
     "ingredients.$.name": String,
     "ingredients.$.amount": String,
      inMenu: {
          type: Boolean,
          defaultValue: false,
          optional: true,
            autoform: {
                type: 'hidden'
            }
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
