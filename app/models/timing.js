import DS from 'ember-data';

export default DS.Model.extend({
  time: DS.attr('date'),
  file: DS.attr('string'),
  scheduleset:DS.belongsTo('scheduleset',{embeded: 'always',async:true}),
});
