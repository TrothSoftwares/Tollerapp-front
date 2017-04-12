import DS from 'ember-data';

export default DS.Model.extend({
  name:DS.attr('string'),
  dyndns:DS.attr('string'),
  internetport:DS.attr('string'),
  ethernetport:DS.attr('string'),
  nameofinstitution:DS.attr('string'),
  contactno:DS.attr('string'),
  location:DS.attr('string'),
  installationdate:DS.attr('date'),
  audios: DS.hasMany('audio' ,{embedded: 'always', async:true}),
  schedulesets: DS.hasMany('scheduleset' ,{embedded: 'always', async:true}),
  tickets: DS.hasMany('ticket' ,{embedded: 'always', async:true}),

  groups: DS.hasMany('group' , {embedded: 'always', async:true}),
  memberships: DS.hasMany('membership',  {embedded: 'always', async:true}),


});
