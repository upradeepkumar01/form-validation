ContactManager.Views.BasicForm = Backbone.View.extend({
  template: _.template($('#tpl-basic-contact').html()),

  events: {
    'submit .basic-form': 'onFormSubmit'
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
      fName: this.$('.contact-fName-input').val(),
      lName: this.$('.contact-lName-input').val()
    });
  }
});
