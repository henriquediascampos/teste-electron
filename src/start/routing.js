const { Splash } = require('../splash/controller/splash');
const { Login } = require('../login/controller/login');
const { Main } = require('../main/controller/main');
const { Singleton } = require('./singleton');
const { ipcMain, dialog } = require('electron');

let routerInstance = null;

class Routing extends Singleton {

    splash = null;
    login = null;
    main = null;
    started = false;

    init() {
        this.started = true;
        this.splash = new Splash();
        this.main = new Main();
        this.login = new Login();
        this.routeWindow(this.getLogin(), [this.getSplash()])
    }

    routeWindow(windowShow, windowHiden) {
        windowShow.show(windowHiden);
    }

    static getInstance() {
        if (!this.instance) {
            // this.canConstruct = true;
            this.instance = new Routing();
            // this.canConstruct = false;
        }
        return this.instance;
    }

    getSplash() {
        return this.splash;
    }

    getLogin() {
        return this.login;
    }

    getMain() {
        return this.main;
    }
}

ipcMain.on('error', function () {
    routerInstance.routeWindow(routerInstance.getMain(), [routerInstance.getLogin()])
});

ipcMain.on('vaiCavalo', function () {
    // dialog.showErrorBox('An error message', 'Demo of an error message')
    routerInstance.routeWindow(routerInstance.getLogin(), [routerInstance.getMain()])
});


function startRouter() {
    return new Promise(resolve => {
        routerInstance = Routing.getInstance();
        return resolve(routerInstance);
    });
}

module.exports = { Routing, startRouter, routerInstance }