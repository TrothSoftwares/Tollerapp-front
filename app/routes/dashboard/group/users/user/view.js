import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return Ember.RSVP.hash({
    user: this.modelFor('dashboard.group.users.user'),

  });
  },

setupController: function(controller ,model) {
  controller.set('user',model.user );




}

});
