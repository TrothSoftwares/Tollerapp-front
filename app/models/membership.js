import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr('boolean'),

  group:DS.belongsTo('group',{embeded: 'always',async:true}),
  membership:DS.belongsTo('membership',{embeded: 'always',async:true}),

});
