import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

userId: Ember.computed('session', function() {
	  return (this.get('session.data.authenticated.user_id'));
	}),

  isCreateTicketDisabled:Ember.computed('title','body',function(){
    if(Ember.isEmpty(this.get('title')) ||
    Ember.isEmpty(this.get('body'))
  ){return 'disabled';}
  else{return '';}
}),


    actions:{
      createTicket:function(){
        var controller = this;
        console.log(controller.get('userId'));
        var user = controller.store.findRecord('user', parseInt(controller.get('userId')));

        user.then(function(){

          var newTicket = controller.store.createRecord('ticket',
        {
          title:controller.get('title'),
          body:controller.get('body'),
          user:user

        });

        newTicket.save();

        });


      }
    }
});
