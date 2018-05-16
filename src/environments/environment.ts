// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAfHgntrXpikI877CWXmTzxfJloG9YcpPY',
    authDomain: 'angular-integraion.firebaseapp.com',
    databaseURL: 'https://angular-integraion.firebaseio.com',
    projectId: 'angular-integraion',
    storageBucket: 'angular-integraion.appspot.com',
    messagingSenderId: '696690987520'
  }
};
