const { BrowserWindow } = require('electron');
const path = require('path');

const { BasicWindow } = require('../../abstract/BasicWindow');

class Main extends BasicWindow {

    constructor() {
        super(
            new BrowserWindow({
                // width: 'auto',
                // height: 'auto',
                title: 'BIBLIA',
                show: false,
                maximizable: true,
                // simpleFullscreen: true,
                // fullscreenWindowTitle: true,
                x: 2,
                y: 2,
                webPreferences: {
                    nodeIntegration: true,
                },
                icon: 'assets/book-icon.png',
            }));

        this.window.loadURL(path.join('file://', __dirname, '/../view/main.html'));
        // this.window.maximize();
        this.window.webContents.openDevTools()
    }
}

module.exports = { Main }