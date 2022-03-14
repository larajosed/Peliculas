import Storage from "./storage.js";
import List from "./list.js";

export default class Add {
    constructor() {

        this.storage = new Storage();
        this.list = new List();
        this.tittle_field = document.querySelector("#tittle");
        this.description_field = document.querySelector("#description");
        this.save_btn = document.querySelector("#save");
    }

    peliSave() {
        this.save_btn.onclick = (e) => {
            e.preventDefault();

            let pelis = this.storage.getData();
            let lastId = this.storage.getLastId();
            console.log(pelis, lastId);

            let tittle = this.tittle_field.value
            let description = this.description_field.value

            if (tittle != "" || description != "") {

                let peli = {
                    id: lastId++,
                    tittle,
                    description
                };

                pelis.push(peli);


                this.storage.save(pelis);

                //this.list.addToList(peli, pelis);
                this.list.show(pelis);
            } else {
                alert("Introduce bien los datos")
            }

            return false;
        };
    }
}