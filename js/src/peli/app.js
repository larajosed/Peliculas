import Add from './modules/add.js'
import List from './modules/list.js';
import Storage from './modules/storage.js';
import search from './modules/search.js';

export default class App {
    constructor() {
        this.add = new Add();
        this.list = new List();
        this.storage = new Storage();
    }

    load() {

        this.add.peliSave();

        const pelis = this.storage.getData();
        this.list.show(pelis);

        search();

        console.log("La aplicación de peliculas a sido iniciada");
    }

}

