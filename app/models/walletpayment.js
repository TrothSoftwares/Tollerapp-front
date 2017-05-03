import DS from 'ember-data';

export default DS.Model.extend({
user:DS.belongsTo('user',{embeded: 'always',async:true}),
paymentdate :DS.attr('date'),
amount :DS.attr('number'),
previouswalletbalance:DS.attr('number'),
afterwalletbalance:DS.attr('number'),
paymentmethod:DS.attr('string'),
refno:DS.attr('string'),
remarks:DS.attr('string'),
});
