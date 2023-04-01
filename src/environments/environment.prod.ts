export const environment = {
  firebase: {
    projectId: process.env["projectId"] || '',
    appId: process.env["appId"] || '',
    storageBucket: process.env["storageBucket"] || '',
    apiKey: process.env["apiKey"] || '',
    authDomain: process.env["authDomain"] || '',
    messagingSenderId: process.env["messagingSenderId"] || '',
    measurementId: process.env["measurementId"] || '',
  },
  production: true
};
