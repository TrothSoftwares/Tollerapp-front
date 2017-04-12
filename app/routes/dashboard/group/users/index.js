import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  memberuserids:Ember.computed('session',function(){
    var user = this.store.findRecord('user',this.get('session.data.authenticated.user_id') );

    user.then(function(user){


      var groups = user.get('groups');
      groups.then(function(groups){
      groups.forEach(function(group){
        console.log('------------');
      var memberships = group.get('memberships');
      memberships.then(function(){
        return memberships;

        // memberships.forEach(function(membership){
        //   let memberuser = membership.get('user');
        //   memberuser.then(function(memberuser){
        //     console.log(memberuser.get('name'));
        //   });
        // });
      });

      });
    });
      // console.log(user.get('groups'));
    });
  }),

  model:function(){

console.log("++++++");

    return Ember.RSVP.hash({

      schedulesets:this.store.findAll('scheduleset',{reload:true}),

    });
  },



  setupController: function(controller ,model) {
    controller.set('schedulesets',model.schedulesets);
    console.log(this.get('memberuserids'));
    // controller.set('memberusers',model.memberusers);


  }
});
