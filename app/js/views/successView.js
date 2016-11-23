ContactManager.Views.SuccessView = Backbone.View.extend({
  template: _.template($('#tpl-success').html()),
  
  events: {
    'click .basic-form': 'onClicked'
  },

  render: function() {
    var html = this.template();
    this.$el.append(html);
    return this;
  },
  
  onClicked: function(e) {
    e.preventDefault();
    this.trigger('link:clicked');
  }
  
});
