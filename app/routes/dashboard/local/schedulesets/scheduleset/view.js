import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return Ember.RSVP.hash({
    scheduleset: this.modelFor('dashboard.local.schedulesets.scheduleset'),
    audios: this.store.findAll('audio',{reload:true}),
    assignations:this.store.findAll('assignation',{reload:true})
  });
  },

setupController: function(controller ,model) {
  controller.set('scheduleset',model.scheduleset );
  controller.set('audios',model.audios );
  controller.set('assignations',model.assignations );


    
}

});
