const newOrg = {
    name: this.organizations.organization,
    orgId:  this.organizations._id
};

Meteor.users.update(userId, {
  $set: {
    orgs: newOrg
  }
});