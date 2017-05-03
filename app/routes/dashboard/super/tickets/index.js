import Ember from 'ember';

export default Ember.Route.extend({

model:function(){
  return Ember.RSVP.hash({
    tickets:this.store.findAll('ticket',{reload:true})
  });
},



setupController: function(controller ,model) {
  controller.set('tickets',model.tickets);
}

});
