import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),



  model: function() {
return Ember.RSVP.hash({
  backgroundimages: this.store.findAll('backgroundimage',{reload:true})
});
},



setupController: function(controller ,model) {
controller.set('backgroundimages',model.backgroundimages);
 
},

actions: {
	    reloadModel: function() {
	      this.refresh();
	    }
	  }

});
