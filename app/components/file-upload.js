import Ember from 'ember';


import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  session: Ember.inject.service('session'),



   

  url: '',
  filesDidChange: function(files) {

         this.get('on-upload')({
              files: files,

       user : this.get('user')
       });
  }
});
