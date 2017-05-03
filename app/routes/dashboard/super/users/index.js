import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),


  model:function(){
    return Ember.RSVP.hash({
   users: this.store.findAll('user' ,{reload :true}).then(function(data){
       return data.filter(function(item){
          return item.get('role') !== 'super';
       });
     }),
   });

  },



  setupController: function(controller ,model) {
    controller.set('users',model.users);



  }
});
