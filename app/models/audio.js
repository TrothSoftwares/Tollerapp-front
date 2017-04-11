import DS from 'ember-data';

export default DS.Model.extend({
 description: DS.attr('string'),
 url: DS.attr('string'),
 fullurl: DS.attr('string'),
 thumburl: DS.attr('string'),
 filename: DS.attr('string'),
 forsignedurl: DS.attr('string'),
 user: DS.belongsTo('user' , {async:true }),
 isFetchButtonDisabled:DS.attr('string' ,{default:''})
});
