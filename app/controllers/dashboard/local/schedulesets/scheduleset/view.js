import Ember from 'ember';

export default Ember.Controller.extend({





   hours:[1,2,3,4,5,6,7,8,9,10,11,12],
  minutes:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59],
  meridian:['AM','PM'],



  actions:{


    saveAssignation:function(day,scheduleset){

      // if assigned , check assignation is linked to only one scheduleset, if exist delete the assignation , and create new assignation with the scheduleset
      var controller = this;
      console.log(scheduleset);

      controller.store.query('assignation', {filter: {day: day}
    }).then(function(prevAssignation) {
      console.log(scheduleset);

        let prevassign = prevAssignation.get("firstObject");
        if(prevassign){

        if (prevassign.get('scheduleset.id') !== scheduleset.id){//if prev assign and of another ssid
          console.log('scheduleset not of this one');

        prevassign.deleteRecord();

        prevassign.save().then(function(){
          console.log(scheduleset);
          let newAssign = controller.store.createRecord('assignation',{
            scheduleset:scheduleset,
            day:day
          });
          newAssign.save();
          scheduleset.save();

        }).catch(function(){
          console.log('failed');
        });

      }else{// if no previous assignation on same day

        console.log('scheduleset of same');
        prevassign.deleteRecord();
        prevassign.save();
        scheduleset.save();


      }
    }else{
      let newAssign = controller.store.createRecord('assignation',{
        scheduleset:scheduleset,
        day:day
      });
      newAssign.save();
      scheduleset.save();
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
