import DS from 'ember-data';

export default DS.Model.extend({

  users: DS.hasMany('user' , {embedded: 'always', async:true}),
  memberships: DS.hasMany('membership',  {embedded: 'always', async:true}),

});
