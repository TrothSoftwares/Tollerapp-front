import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),



  model: function() {
return Ember.RSVP.hash({
  user: this.store.findRecord('user', this.get('session.data.authenticated.user_id') ),
  audios: this.store.findAll('audio',{reload:true})
});
},



setupController: function(controller ,model) {
controller.set('user',model.user);
controller.set('audios',model.audios);
},

actions: {
	    reloadModel: function() {
	      this.refresh();
	    }
	  }

});
