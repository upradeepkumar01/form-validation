window.ContactManager = {
  Models: {},
  Collections: {},
  Views: {},

  start: function() {
    var contacts = new ContactManager.Collections.Contacts(),
        contact = new ContactManager.Models.Contact(),
        router = new ContactManager.Router(),
        isAuthorized = false;

    router.on('route:home', function() {
      router.navigate('basic_contact', {
        trigger: true,
        replace: true
      });
    });

    router.on('route:basicContact', function() {
       try{
        var basicContactForm = new ContactManager.Views.BasicForm({
            model: contact
        });
        
        basicContactForm.on('form:submitted', function(attrs) {
            contact.set(attrs);
            isAuthorized = true;
            router.navigate('address', true);
        });

        $('.main-container').html(basicContactForm.render().$el);
       }catch(ex){
            console.log("Error while redirecting to address screen", ex);
        }
    });

    router.on('route:addressDetails', function() {
       try{
        if(!isAuthorized){
            router.navigate('', true);
            return;
        }  
        var addressForm = new ContactManager.Views.AddressForm({
            model: contact
        });

        addressForm.on('form:submitted', function(attrs) {
            contact.set(attrs);
            router.navigate('success', true);
        });

        $('.main-container').html(addressForm.render().$el);
       }catch(ex){
            console.log("Error while redirecting to success screen", ex);
        }
    });

    router.on('route:success', function(id) {
        try{
            if(!isAuthorized){
            router.navigate('', true);
            return;
            }        
        
            var successView = new ContactManager.Views.SuccessView({});
            successView.on('link:clicked', function() {
                contact = new ContactManager.Models.Contact();
                router.navigate('basic_contact', true);
            });
            $('.main-container').html(successView.render().$el);
        }catch(ex){
            console.log("Error while redirecting to home screen", ex);
        }
    });

    Backbone.history.start();
  }
};
