const { BrowserWindow } = require('electron');
const path = require('path');

const createLogin = () => {
    const windowLogin = new BrowserWindow({
      width: 370,
      height: 600,
      show: false,
      // frame: false,
      webPreferences: {
        nodeIntegration: true
      }
    });
    windowLogin.loadURL(path.join('file://', __dirname, '/../view/login.html'));
   
    windowLogin.webContents.openDevTools()
    windowLogin.once('ready-to-show', () => {
      windowLogin.show();
    });

    return windowLogin;
}

module.exports = { createLogin };
