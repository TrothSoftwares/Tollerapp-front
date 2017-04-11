import Ember from 'ember';

export default Ember.Controller.extend({

  actions:{
    SaveUser:function(user){
      user.save();
    }
  }
});
