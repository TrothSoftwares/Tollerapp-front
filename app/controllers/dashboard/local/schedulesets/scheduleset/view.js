import Ember from 'ember';

export default Ember.Controller.extend({







  actions:{


    saveAssignation:function(day,scheduleset){

      // if assigned , check assignation is linked to only one scheduleset, if exist delete the assignation , and create new assignation with the scheduleset
      var controller = this;

      controller.store.query('assignation', {filter: {day: day}
    }).then(function(prevAssignation) {

        let prevassign = prevAssignation.get("firstObject");
        if(prevassign){

        if (prevassign.get('scheduleset.id') !== scheduleset.id){//if prev assign and of another ssid
        prevassign.deleteRecord();
        prevassign.save().then(function(){
          let newAssign = controller.store.createRecord('assignation',{
            scheduleset:scheduleset,
            day:day
          });
          newAssign.save();
          // scheduleset.save();

        }).catch(function(){
        });
      }else{// if no previous assignation on same day
        prevassign.deleteRecord();
        prevassign.save();
        // scheduleset.save();
      }
    }else{
      let newAssign = controller.store.createRecord('assignation',{
        scheduleset:scheduleset,
        day:day
      });
      newAssign.save();
      // scheduleset.save();
    }
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
