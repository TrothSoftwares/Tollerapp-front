import Ember from 'ember';

export default Ember.Route.extend({

model:function(){
  return Ember.RSVP.hash({
    schedulesets:this.store.findAll('scheduleset',{reload:true})
  });
},



setupController: function(controller ,model) {
  controller.set('schedulesets',model.schedulesets);
}

});
