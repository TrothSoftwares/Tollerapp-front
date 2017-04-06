import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  timings:DS.hasMany('timing',{embeded: 'always',async:true}),
  assignations:DS.hasMany('assignation',{embeded: 'always',async:true}),
  user:DS.belongsTo('user',{embeded: 'always',async:true}),


  mondayAssigned: function() {
    var assignations = this.get('assignations');

    return assignations.any(function(assignation){
      if(assignation.get('day')==='monday'){
        return true;
      }else{
        return false;
      }
    });
  }.property('assignations.content@each.day'),



  tuesdayAssigned: function() {
    var assignations = this.get('assignations');
    return assignations.any(function(assignation){
      if(assignation.get('day')==='tuesday'){
        return true;
      }else{
        return false;
      }
    });
  }.property('assignations.content@each.day'),

  wednessdayAssigned: function() {
    var assignations = this.get('assignations');
    return assignations.any(function(assignation){
      if(assignation.get('day')==='wednessday'){
        return true;
      }else{
        return false;
      }
    });

  }.property('assignations.content@each.day'),


  thursdayAssigned: function() {
    var assignations = this.get('assignations');
    return assignations.any(function(assignation){
      if(assignation.get('day')==='thursday'){
        return true;
      }else{
        return false;
      }
    });
  }.property('assignations.content@each.day'),


  fridayAssigned: function() {
    var assignations = this.get('assignations');
    return assignations.any(function(assignation){
      if(assignation.get('day')==='friday'){
        return true;
      }else{
        return false;
      }
    });
  }.property('assignations.content@each.day'),



  saturdayAssigned: function() {
    var assignations = this.get('assignations');
    return assignations.any(function(assignation){
      if(assignation.get('day')==='saturday'){
        return true;
      }else{
        return false;
      }
    });
  }.property('assignations.content@each.day'),


  sundayAssigned: function() {
    var assignations = this.get('assignations');
    return assignations.any(function(assignation){
      if(assignation.get('day')==='sunday'){
        return true;
      }else{
        return false;
      }
    });
  }.property('assignations.content@each.day'),






});
