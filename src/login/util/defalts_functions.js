
class Teste {
    constructor(window) {
        this.window = window;
    }

    addEventById(id, fn, type = 'click') {
        this.window.webContents.on('did-finish-load', () => {
             this.window.webContents
                .executeJavaScript(`document.getElementById("${id}").addEventListener("${type}", ${fn.toString()})`);
        });
    }


    // requireWindow() {
    //     // windowSplash.show();
    // }

}

module.exports = { Teste };