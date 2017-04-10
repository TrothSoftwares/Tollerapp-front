import DS from 'ember-data';

export default DS.Model.extend({
title: DS.attr('string'),
body: DS.attr('string'),
status: DS.attr('string'),
user:DS.belongsTo('user',{embeded: 'always',async:true}),
});
