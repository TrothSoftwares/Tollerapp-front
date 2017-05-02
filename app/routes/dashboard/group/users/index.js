import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),


  model:function(){
    var self = this;
    var users;
    var user = this.store.findRecord('user',this.get('session.data.authenticated.user_id') );
    return user.then(function(user){
      var group = user.get('group');
      return group.then(function(group){

       users = group.get('users');
       return users.filter(function(user){
          return parseInt(user.get('id')) !== self.get('session.data.authenticated.user_id');
       });

    });
    });


  },



  setupController: function(controller ,model) {
    controller.set('memberusers',model);



  }
});
