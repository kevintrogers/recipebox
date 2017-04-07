import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Organizations = new Mongo.Collection('organizations');
Members = new Mongo.Collection('members');

Organizations.allow({
    insert: function(userId, doc){
        return !!userId;
    },
    update: function(userId, doc){
        return !!userId;
    }
    
});

MembersSchema = new SimpleSchema ({
    name: {
        label: "name",
        type: String
    },
    role: {
        label: "amount",
        type: "String",
        options: coming_soon
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
OrganizationSchema = new SimpleSchema ({
    name: {
        label: "name",
        type: String
    },
    memebers: {
        label: "members",
        type: Array
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


Members.attachSchema(MembersSchema);
Organizations.attachSchema(OrganizationSchema);
