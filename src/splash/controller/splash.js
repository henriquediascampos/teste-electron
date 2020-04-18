const { BrowserWindow } = require('electron');
const path = require('path');

class Splash {

  constructor() {
    this.windowSplash = new BrowserWindow({
      width: 370,
      height: 370,
      icon: 'assets/book-icon.png',
      frame: false,
      webPreferences: {
        nodeIntegration: true
      }
    });

    this.windowSplash.loadURL(path.join('file://', __dirname, '/../view/splash.html'));
  }

  hide() {
    if (this.windowSplash)
      this.windowSplash.hide();
    else
      this.hide();
  }
}

module.exports = { Splash };