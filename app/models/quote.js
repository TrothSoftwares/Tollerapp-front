import DS from 'ember-data';

export default DS.Model.extend({
  quotetext: DS.attr('string'),
  author: DS.attr('string'),
  status: DS.attr('string'),
});
