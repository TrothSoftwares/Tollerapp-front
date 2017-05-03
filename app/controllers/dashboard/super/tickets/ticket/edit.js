import Ember from 'ember';

export default Ember.Controller.extend({
  isCreateTicketDisabled:Ember.computed('ticket.title','ticket.body',function(){
    if(Ember.isEmpty(this.get('ticket.title')) ||
    Ember.isEmpty(this.get('ticket.body'))
  ){return 'disabled';}
  else{return '';}
}),

actions:{
  SaveTicket:function(ticket){
    // var controller = this;
    ticket.save();
  }
}

});
