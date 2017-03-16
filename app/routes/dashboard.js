import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
export default Ember.Route.extend(AuthenticatedRouteMixin,{
  session: Ember.inject.service('session'),




  setupController: function(controller ,model) {

    controller.setProperties(model);

    if(Ember.isEqual('local', this.get('session.data.authenticated.role'))){
      controller.set('isLocal',true );
    }
    if(Ember.isEqual('group', this.get('session.data.authenticated.role'))){
      controller.set('isGroup',true );
    }
    if(Ember.isEqual('super', this.get('session.data.authenticated.role'))){
      controller.set('isSuper',true );
    }


  },



  actions: {
    logout() {

      this.get('session').invalidate();
      this.transitionTo('login');
    }
  }

});
