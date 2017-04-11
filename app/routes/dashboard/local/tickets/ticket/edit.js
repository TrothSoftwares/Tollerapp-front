import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return Ember.RSVP.hash({
    ticket: this.modelFor('dashboard.local.tickets.ticket'),

  });
  },

setupController: function(controller ,model) {
  controller.set('ticket',model.ticket );
}

});
