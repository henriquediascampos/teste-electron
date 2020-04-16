const { BrowserWindow } = require('electron');
const path = require('path');

const createSplash = () => {
    const windowSplash = new BrowserWindow({
      width: 370,
      height: 370,
      icon: 'assets/book-icon.png',
      frame: false,
      webPreferences: {
        nodeIntegration: true
      }
    });

    console.log(__dirname);
    
    windowSplash.loadURL(path.join('file://', __dirname, '/../view/splash.html'));
    // windowSplash.webContents.openDevTools();
    return windowSplash;
}   


module.exports = { createSplash };