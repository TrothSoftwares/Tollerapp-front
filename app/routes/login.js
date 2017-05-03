import Ember from 'ember';

export default Ember.Route.extend({

    model: function() {
      return Ember.RSVP.hash({
      quotes: this.store.findAll('quote'),
      backgroundimages:this.store.findAll('backgroundimage')
    });
    },

  setupController: function(controller ,model) {
    controller.set('quotes',model.quotes );
    controller.set('backgroundimages',model.backgroundimages );




  }
});
