import DS from 'ember-data';

export default DS.Model.extend({
  email:DS.attr('string'),
  role:DS.attr('string'),
  name:DS.attr('string'),
  dyndns:DS.attr('string'),
  internetport:DS.attr('string'),
  ethernetport:DS.attr('string'),
  nameofinstitution:DS.attr('string'),
  contactno:DS.attr('string'),
  location:DS.attr('string'),
  password:DS.attr('string'),
  password_confirmation:DS.attr('string'),
  installationdate:DS.attr('date'),
  audios: DS.hasMany('audio' ,{embedded: 'always', async:true}),
  schedulesets: DS.hasMany('scheduleset' ,{embedded: 'always', async:true}),
  tickets: DS.hasMany('ticket' ,{embedded: 'always', async:true}),



  group:DS.belongsTo('group',{embeded: 'always',async:true}),


});
