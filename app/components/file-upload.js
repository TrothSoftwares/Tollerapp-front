


import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  url: '',
  filesDidChange: function(files) {

         this.get('on-upload')({
              files: files,

       user : this.get('user')
       });
  }
});
