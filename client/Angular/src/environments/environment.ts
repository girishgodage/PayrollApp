// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  emailAPI: 'http://XXXXXX.com/contact-form.php',
  database: 'graphql' ,
  social: {
    fblink: 'https://www.facebook.com/girish.godage.5',
    linkedin: 'https://linkedin.com/girish-godage0a80422',
    github: 'https://github.com/girishgodage',
    emailid: 'girishgodage@gmail.com'
  },
  socialAuthEnabled: false,
  graphql: 'http://localhost:3000/graphql'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
