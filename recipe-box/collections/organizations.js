import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);


Organizations = new Mongo.Collection('organizations');


Organizations.allow({
    insert: function(userId){
        return !!userId;
    },
    update: function(userId, doc){
        return !!userId;
    }
});


OrganizationSchema = new SimpleSchema ({
    organization: {
        label: "Organization Name",
        type: String
    },
    admin: {
        label: "Administrator",
        type: String,
                    autoform: {
                type: "hidden"
            },
            autoValue: function() {
                return this.userId;
        }
    },
    members: {
        type: Array,
        optional: true,
        minCount: 0,
        autoform: {
            type: "hidden"
        },
    },
        "members.$": Object,
        "members.$.name":  String,
        "members.$.memberId": String,

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
    deleteOrganizations: function(id) {
        Organizations.remove(id);
    },
    
});

SimpleSchema.debug = true;

Organizations.attachSchema(OrganizationSchema);

