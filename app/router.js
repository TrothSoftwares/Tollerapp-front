import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('dashboard', {path: '/'}, function() {
    this.route('local', function() {
      this.route('scheduleset');
      this.route('mediamanager');
    });
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
