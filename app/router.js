import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('dashboard', {path: '/'}, function() {

    //START OF LOCAL USERS //
    this.route('local', function() {
      this.route('mediamanager');
      this.route('schedulesets', function() {
        this.route('scheduleset',{path: ':id'} , function() {
          this.route('view');
        });
      });
      this.route('tickets', function() {
        this.route('ticket', {path: ':id'} ,  function() {
          this.route('view');
          this.route('edit');
        });
        this.route('new');
      });
      this.route('configuration');
      this.route('profile');
    });
    //END OF LOCAL USERS //


    //START OF GROUP USERS //
    this.route('group', function() {
      this.route('users', function() {
        this.route('user' , {path: ':id'} , function() {
          this.route('view');
          this.route('edit');
        });
      });
    });
    //END OF GROUP USERS //

    //START OF SUPER USER //

    this.route('super', function() {
      this.route('users', function() {
        this.route('user',  {path: ':id'} , function() {
          this.route('view');
          this.route('edit');
        });
      });
      this.route('tickets', function() {
        this.route('ticket', {path: ':id'} , function() {
          this.route('view');
          this.route('edit');
        });
      });
    });

    //END OF SUPER USER //
  });
});

export default Router;



// <CORSConfiguration>
//     <CORSRule>
//         <AllowedOrigin>*</AllowedOrigin>
//         <AllowedMethod>GET</AllowedMethod>
//         <MaxAgeSeconds>3000</MaxAgeSeconds>
//         <AllowedHeader>Authorization</AllowedHeader>
//     </CORSRule>
// </CORSConfiguration>
