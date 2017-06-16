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
                return Meteor.userId;
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
        // "members.$": {
        //     type: Object
        // },
        // "members.$.name": {
        //     type: String,
        //     label: "Name"
            
        // },
        "members.$.memberId": {
            type: String,
            label: "Member ID",
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
    deleteOrganizations: function(id) {
        Organizations.remove(id);
    },
//     joinOrganization: function (organization, id) {
//   Organizations.update ({
      
//   },
//   { $set:{ 
//           "organization": organization,
//           "members.$.memberId" : this.userId }
//   },
//   {update:true
//   });
// }
        
    
});

SimpleSchema.debug = true;

Organizations.attachSchema(OrganizationSchema);

