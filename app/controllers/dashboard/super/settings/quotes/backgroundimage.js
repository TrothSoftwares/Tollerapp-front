import Ember from 'ember';
import EmberUploader from 'ember-uploader';
import ENV from '../../../../../config/environment';
import AWS from 'npm:aws-sdk';

export default Ember.Controller.extend({
session: Ember.inject.service('session'),


  imageUploading:false,
  uploadPercent:0,


  actions:{
    uploadProfilePic :function(params){
       var controller = this;

       var authenticated = controller.get('session.data.authenticated');
       let files = params.files;

       var newBackgroundimage = controller.store.createRecord('backgroundimage',{description: ''});

       newBackgroundimage.save().then(function(newDesignImage){



       var uploader = EmberUploader.Uploader.extend({
         url: ENV.APP.host + '/backgroundimages/'+newDesignImage.id,
         method: 'PATCH',
         paramNamespace: 'backgroundimage',
         paramName: 'url',
         ajaxSettings: {
           headers: {
             'Authorization':'Token token="'+ authenticated.token +'", email="'+ authenticated.email +'"'
           }
         },

       }).create();


       uploader.on('progress', function(e) {



         controller.set('imageUploading',true);
         controller.set('uploadPercent',e.percent);
       });

       uploader.on('didUpload', function() {
         controller.notifications.addNotification({
           message:  'File uploaded' ,
           type: 'success',
           autoClear: true
         });
         controller.set('imageUploading',false);
         controller.send('reloadModel');
       });

       uploader.on('didError', function(jqXHR, textStatus, errorThrown) {
         controller.notifications.addNotification({
           message: 'Sorry something went wrong' ,
           type: 'success',
           autoClear: true
         });
         controller.set('imageUploading',false);
       });


       if (!Ember.isEmpty(files)) {
         uploader.upload(files[0]).then(function(){
           controller.get('user').reload();
         }
       );
     }


  });

     //


   },


   gets3file:function(file,index){
     console.log(file,index);
   var ep = new AWS.Endpoint('s3.amazonaws.com');

   AWS.config.update(
     {
       accessKeyId: "AKIAJDVUHRLQMCTUS2DA",
       secretAccessKey: "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",
       signatureVersion: 'v4',
         region: 'ap-south-1',
         Endpoint:'https://tollerapp.s3.amazonaws.com'
     }
   );
   var s3 = new AWS.S3({endpoint: ep});




   var params = {Bucket: 'tollerapp', Key: 'tollerapp/'+file.get('forsignedurl')};
   var url = s3.getSignedUrl('getObject', params);
  //  console.log(url);

   var audio = document.getElementById(index);


   var source = document.getElementById("source_"+index);
   source.src=url;

   audio.load(); //call this to just preload the audio without playing
   file.set('isFetchButtonDisabled','disabled');
         //  audio.play(); //call this to play the song right away




     Ember.$("source_"+index).attr("src", url);





    }
  }
});
