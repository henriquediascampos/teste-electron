class Singleton { 
    static instance;

    constructor() {
        // if (!this.canConstruct) {
        //     throw new Error('impossivel construir');
        // }
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
}

module.exports = { Singleton }