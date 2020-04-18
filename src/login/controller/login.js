const { BrowserWindow } = require('electron');

const path = require('path');
const { BasicWindow } = require('../../abstract/BasicWindow');

class Login extends BasicWindow {

  constructor() {
    super(
      new BrowserWindow({
        width: 370,
        height: 600,
        show: false,
        x: 2,
        y: 2,
        // frame: false,
        webPreferences: {
          nodeIntegration: true,
          // nativeWindowOpen: true,
        },
        icon: 'assets/book-icon.png',
      }));

      setTimeout(() => {
        this.window.loadURL(path.join('file://', __dirname, '/../view/login.html'));
    }, 2000);

    // this.window.webContents.openDevTools()
  }
}


module.exports = { Login };
