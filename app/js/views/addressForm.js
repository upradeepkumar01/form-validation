ContactManager.Views.AddressForm = Backbone.View.extend({
  template: _.template($('#tpl-address-details').html()),

  events: {
    'submit .address-form': 'onFormSubmit'
  },

  render: function() {
    var html = this.template(_.extend(this.model.toJSON(), {
      isNew: this.model.isNew()
    }));
    this.$el.append(html);
    return this;
  },

  onFormSubmit: function(e) {
    e.preventDefault();

    this.trigger('form:submitted', {
      addressOne: this.$('.contact-addrOne-input').val(),
      addressTwo: this.$('.contact-addrTwo-input').val(),
      city: this.$('.contact-city-input').val(),
      state: this.$('.contact-state-input').val(),
      country: this.$('.contact-country-input').val(),
      zipcode: this.$('.contact-zipcode-input').val()
    });
  }
});
