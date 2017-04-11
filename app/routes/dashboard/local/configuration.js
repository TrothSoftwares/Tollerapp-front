import Ember from 'ember';


export default Ember.Route.extend({
  session: Ember.inject.service('session'),



  model: function() {

  return this.store.findRecord('user', this.get('session.data.authenticated.user_id'));
},

setupController: function(controller ,model) {
  controller.set('user',model);
}

});
