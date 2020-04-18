
class BasicWindow {

    isReady = false;

    constructor(window) {
        this.window = window;
        this.ready();
    }

    addEventById(id, fn, type = 'click') {
        this.window.webContents.on('did-finish-load', () => {
            this.window.webContents
                .executeJavaScript(`document.getElementById("${id}").addEventListener("${type}", ${fn.toString()})`);
        });
    }

    ready() {
        return new Promise( resolve => {
            this.window.once('ready-to-show', () => {
                this.isReady = true
                return resolve(this.isReady);
            });
        })
    }

    show(hidden) {
        if (this.isReady) {
            hidden.forEach(win => {
                win.hide();
            });
            this.window.show();
        } else {
            const a = this.ready();
            a.then((ready) => {
                hidden.forEach(win => {
                    win.hide();
                });
                this.window.show()
            });
        }
    }

    hide() {
        this.window.hide();
    }

}

module.exports = { BasicWindow };