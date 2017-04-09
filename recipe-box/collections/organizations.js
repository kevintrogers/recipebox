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



OrganizationSchema = new SimpleSchema ({
    organization: {
        label: "organization name",
        type: String
    },
    id: {
        label: "ID",
        type: String,
        autoform: {
            type: "hidden"
        }
        
    },
    members: {
        type: Array
    },
        "members.$": Object,
        "members.$.name": String,
        "members.$.role": String,
       
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





Organizations.attachSchema(OrganizationSchema);
