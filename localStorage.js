var { writeFile, existsSync, readFileSync, unlink } = require('fs');

class LocalStorage {

    constructor() {
        if (existsSync('localStorage.json')) {
            var txt = readFileSync('localStorage.json');
            console.log('txt: ', txt);
            this.items = JSON.parse(txt);
        } else {
            this.items = {};
        }
    }

    get length() {
        return Object.keys(this.items).length;
    }

    getItem(key) {
        return this.items[key];
    }

    key(index){
        return Object.keys(this.items)[index];
    }

    setItem(key, value) {
        this.items[key] = value;
        this.writeJsonFile(this.items);
    }

    removeItem(key){
        delete this.items[key];
        this.writeJsonFile(this.items);
    }

    clear() {
        this.items = {};
        return unlink('localStorage.json');
    }

    writeJsonFile(json){
        return writeFile('localStorage.json');
    }

}

module.exports = new LocalStorage();
