import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Organizations = new Meteor.Collection('organizations');


Organizations.allow({
    insert: function(userId, doc){
        return !!userId;
    }
});



OrganizationSchema = new SimpleSchema ({
    organization: {
        label: "Organization Name",
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
          inOrganization: {
            type: Boolean,
            defaultValue: true,
          
            autoform: {
                type: 'hidden'
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





Organizations.attachSchema(OrganizationSchema);

