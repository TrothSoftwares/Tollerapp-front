import Ember from 'ember';

export default Ember.Controller.extend({
  days:[{id:1,day:'monday'},{id:2,day:'tuesday'},{id:3,day:'wednesday'}],
  assignations:[],
   hours:[1,2,3,4,5,6,7,8,9,10,11,12],
  minutes:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59],
  meridian:['AM','PM'],



  actions:{


    saveAssignation:function(){
      var assignations =  this.get('assignations');
      console.log(assignations);
      assignations.forEach(function(assignation){
        console.log(assignation.day);
      });

    },

    editTiming:function(timing){
console.log(timing.get('editTiming'));
timing.set('editTiming',true);
    },

    saveTiming:function(timing){
      console.log(timing);
      timing.set('editTiming',false);
    },

    selectFile:function(audio) {

      console.log(audio.get('filename'));
    },
    selectHour:function(hour) {

      console.log(hour);
    }
  }
});
