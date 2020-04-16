const { app } = require('electron')
const { createSplash } = require('./splash/controller/splash');
const { createLogin } = require('./login/controller/login');

let windowSplash = null
let windowLogin = null



app.on('ready', () => {
  // windowSplash = createSplash();

  // setTimeout(() => {
    // windowSplash.hide();
      windowLogin = createLogin();
  // }, 3500);
});



// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// });

// app.on('activate', () => {
// });



