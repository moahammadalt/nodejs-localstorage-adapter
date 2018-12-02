var { writeFile, existsSync, readFileSync, unlink } = require('fs');

class LocalStorage {

    constructor() {
        if (existsSync('localStorage.json')) {
            console.log('Loading items from localStorage.json');
            var txt = readFileSync('localStorage.json');
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
        unlink('localStorage.json', () => {
            console.log('localStorage file removed');
        })
    }

    writeJsonFile(json){
        writeFile('localStorage.json', JSON.stringify(json), error => {
            if (error) {
                console.error(error);
            }
        });
    }

}

module.exports = new LocalStorage();
