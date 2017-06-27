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
     },
         "members.$" : {
             type: Object,
         },
         "members.$.name" : {
            type: String,
            label: "Your Name",
                autoValue: function () {
                    let user = Meteor.user();
                    if (user.username){
                        return user.username;
                    } else {
                        user.username = $(this).val();
                        return $(this).val();
                    }
                }
            },
        "members.$.memberId": {
            type: String,
            label: "Member ID",
                autoform: {
                    type: "hidden"
                },
            autoValue: function() {
                return this.userId;
            }
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
    joinOrganization: function(id, userID) {
        Organizations.update({_id:id}, {
            $set: {
                'members.$.memberId': this.userId
            }
        });
    },
    
    deleteOrganizations: function(id) {
        Organizations.remove(id);
    },
  
    
});

SimpleSchema.debug = true;

Organizations.attachSchema(OrganizationSchema);

