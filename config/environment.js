/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'tollerapp-front',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
  'default-src': "'self' *",
  'script-src': "'self'  'unsafe-inline' ,'unsafe-eval' *",
  'font-src': "'self'  data: http://fonts.gstatic.com https://fonts.googleapis.com   * ",
  'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com  * ",
  'connect-src': "'self' *",
  'media-src': "'self' *",
  'img-src' : "'self' data: http://fonts.gstatic.com *"
},
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };


  ENV['simple-auth-devise'] = {
     tokenAttributeName: 'token',
     identificationAttributeName: 'email',
     serverTokenEndpoint:  ENV.APP.host  + '/users/sign_in',
     authorizer: 'devise',
     crossOriginWhitelist: ['*'],
   };

 ENV['ember-simple-auth'] = {
     authenticationRoute: 'login',
     routeAfterAuthentication: 'dashboard',
     routeIfAlreadyAuthenticated: 'dashboard'
   };

  if (environment === 'development') {
        ENV.APP.host =  'http://localhost:3001';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    ENV['ember-simple-auth'] = {
  store: 'simple-auth-session-store:ephemeral'
};

ENV.APP.host =  'http://localhost:3000';
// Testem prefers this...
ENV.baseURL = '/';
ENV.locationType = 'none';



    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
