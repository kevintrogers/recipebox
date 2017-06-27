import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Recipes = new Mongo.Collection('recipes');
ShoppingItems = new Mongo.Collection('shoppingList');


Recipes.allow({
    insert: function(userId, doc){
        return !!userId;
    },
    update: function(userId, doc){
        return !!userId;
    }
    
});

ShoppingItems.allow({
    insert: function(userId, doc){
        return !!userId;
    },
    update: function(userId, doc){
        return !!userId;
    }
});


IngredientSchema = new SimpleSchema ({
    name: {
        label: "name",
        type: String
    },
    amount: {
        label: "amount",
        type: "String"
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
        }
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
          
            autoform: {
                type: 'hidden'
            }
      },
        directions: {
            type: Array
        },
        "directions.$": Object,
        "directions.$.step": String,
        
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
        }

    }
});



Meteor.methods({
    toggleMenuItem: function(id, currentMenuState){
        Recipes.update(id, {
            $set: {
                inMenu: !currentMenuState
            }
        });
        
    },
    deleteRecipe: function(id) {
        Recipes.remove(id);
    },
    deleteItems: function(id) {
        ShoppingItems.remove(id);
    },
});


Recipes.attachSchema(RecipeSchema);
ShoppingItems.attachSchema(IngredientSchema);
