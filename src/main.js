const { app, ipcMain, dialog } = require('electron')
const { Routing, startRouter, routerInstance } = require('./start/routing');

let routing = null;

app.on('ready', () => {
  const routing = startRouter();
  routing.then((route) => route.init());
});



// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// });

// app.on('activate', () => {
// });

module.exports = { routing }