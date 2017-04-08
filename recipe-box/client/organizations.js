Template.ShoppingList.onCreated(function() {
  this.autorun(() => {
    
    this.subscribe('organizations');
    this.subscribe('members');
    
  });
});

Template.Organizations.helpers({
  options() {
    return [
      {
        
        options: [
          {label: "Administrator", value: 'administrator'},
          {label: "Member", value: 'member'},
          {label: "Guest", value: 'guest'}
        ]
      }
    ]
  }
});

Template.Organizations.helpers({
    organizationList: () => {
 
      var listItems = Organizations.find({});

        return listItems;
    }
});