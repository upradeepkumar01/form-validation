ContactManager.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'basic_contact': 'basicContact',
    'address': 'addressDetails',
    'success': 'success'
  }
});
