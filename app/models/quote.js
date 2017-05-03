import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  quotetext: DS.attr('string'),
  author: DS.attr('string'),
  status: DS.attr('boolean'),
  isQuoteEditing:DS.attr('boolean',{default:false}),

  isCreateQuoteDisabled:Ember.computed('quotetext','author',function(){
    if(Ember.isEmpty(this.get('quotetext')) ||
    Ember.isEmpty(this.get('author'))
  ){return 'disabled';}
  else{return '';}
}),
});
