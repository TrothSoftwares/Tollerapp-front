import Ember from 'ember';

export default Ember.Component.extend({
hours:['Select Hour',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
  actions:{
    selectHour:function(hour){
      // console.log(hour);
      var  timing = this.get('timing');
      var time = timing.get('time');
      console.log(time);

      console.log(time.setHours(hour));

      console.log(time);
      timing.set('time',time);
      timing.save();
    }
  }
});
