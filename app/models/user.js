import DS from 'ember-data';

export default DS.Model.extend({
  name:DS.attr('string'),
  audios: DS.hasMany('audio' ,{embedded: 'always', async:true}),

});
