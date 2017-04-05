import DS from 'ember-data';

export default DS.Model.extend({
description: DS.attr('string'),
timings:DS.hasMany('timing',{embeded: 'always',async:true}),
assignations:DS.hasMany('assignation',{embeded: 'always',async:true}),
user:DS.belongsTo('user',{embeded: 'always',async:true}),


});
