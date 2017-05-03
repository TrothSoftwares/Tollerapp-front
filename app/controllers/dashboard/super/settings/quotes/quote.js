import Ember from 'ember';

export default Ember.Controller.extend({

  isCreateQuoteDisabled:Ember.computed('quotetext','author',function(){
    if(Ember.isEmpty(this.get('quotetext')) ||
    Ember.isEmpty(this.get('author'))
  ){return 'disabled';}
  else{return '';}
}),



actions:{

  createQuote:function(){

    var controller = this;
    var newQuote = controller.store.createRecord('quote',{
      quotetext:controller.get('quotetext'),
      author:controller.get('author'),
      status:controller.get('status')
    });

    newQuote.save();
  },

  editQuote:function(quote){
    quote.set('isQuoteEditing',true);
    quote.save();
  },

  saveQuote:function(quote){
    quote.set('isQuoteEditing',false);
    quote.save();
  },

  deleteQuote:function(quote){
    quote.set('isQuoteEditing',false);
    quote.destroyRecord();
  }
}
});
