import Ember from 'ember';

export default Ember.Route.extend({

  model:function(){
    return this.store.findAll('quote',{reload:true});
  },

  setupController:function(controller,model){
  controller.set('quotes',model);
  }
});
