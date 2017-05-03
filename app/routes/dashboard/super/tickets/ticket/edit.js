import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return Ember.RSVP.hash({
    ticket: this.modelFor('dashboard.super.tickets.ticket'),

  });
  },

setupController: function(controller ,model) {
  controller.set('ticket',model.ticket );




}
});
