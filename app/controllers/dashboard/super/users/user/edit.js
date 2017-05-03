import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{

    saveUser:function(user){
      var controller = this;

      user.set('password',controller.get('password'));
      user.set('password_confirmation',controller.get('password_confirmation'));
      user.save();

    }
  }
});
