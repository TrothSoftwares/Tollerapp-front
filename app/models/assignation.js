import DS from 'ember-data';

export default DS.Model.extend({
time: DS.attr('date'),
day: DS.attr('string'),
scheduleset:DS.belongsTo('scheduleset',{embeded: 'always',async:true}),
});
