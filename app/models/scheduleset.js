import Ember from 'ember';

import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  timings:DS.hasMany('timing',{embeded: 'always',async:true}),
  assignations:DS.hasMany('assignation',{embeded: 'always',async:true}),
  user:DS.belongsTo('user',{embeded: 'always',async:true}),




    mondayAssigned: function() {
      // var scheduleset = this.get('scheduleset');
      var assignations = this.get('assignations');

      return assignations.any(function(assignation){
        if(assignation.get('day')==='monday'){
          return true;
        }else{
          return false;
        }
      });
    }.property('assignations.@each.day'),



    tuesdayAssigned: function() {
      // var scheduleset = this.get('scheduleset');
      var assignations = this.get('assignations');

      return assignations.any(function(assignation){
        if(assignation.get('day')==='tuesday'){
          return true;
        }else{
          return false;
        }
      });
    }.property('assignations.@each.day'),


    wednessdayAssigned: function() {
      // var scheduleset = this.get('scheduleset');
      var assignations = this.get('assignations');
      return assignations.any(function(assignation){
        if(assignation.get('day')==='wednessday'){
          return true;
        }else{
          return false;
        }
      });

    }.property('assignations.@each.day'),


    thursdayAssigned: function() {
      // var scheduleset = this.get('scheduleset');
      var assignations = this.get('assignations');
      return assignations.any(function(assignation){
        if(assignation.get('day')==='thursday'){
          return true;
        }else{
          return false;
        }
      });
    }.property('assignations.@each.day'),


    fridayAssigned: function() {
      // var scheduleset = this.get('scheduleset');
      var assignations = this.get('assignations');
      return assignations.any(function(assignation){
        if(assignation.get('day')==='friday'){
          return true;
        }else{
          return false;
        }
      });
    }.property('assignations.@each.day'),



    saturdayAssigned: function() {
      // var scheduleset = this.get('scheduleset');
      var assignations = this.get('assignations');
      return assignations.any(function(assignation){
        if(assignation.get('day')==='saturday'){
          return true;
        }else{
          return false;
        }
      });
    }.property('assignations.@each.day'),


    sundayAssigned: function() {
      // var scheduleset = this.get('scheduleset');
      var assignations = this.get('assignations');
      return assignations.any(function(assignation){
        if(assignation.get('day')==='sunday'){
          return true;
        }else{
          return false;
        }
      });
    }.property('assignations.@each.day'),






});
