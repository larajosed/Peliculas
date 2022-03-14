export default class Storage {
    constructor() {
        this.id = 1;
    }

    getData() {
        let pelis = JSON.parse(localStorage.getItem('pelis'));
        if (!pelis || pelis.length < 1) {
            pelis = [
                {
                    id: 0,
                    tittle: "Peliculas",
                    description: "TodasLasPelis"
                }
            ];
            this.id = 1;
        } else {
            var lastPeli = pelis[pelis.length - 1];
            this.id = lastPeli.id + 1;
        }
        return pelis;
    }

    getLastId() {
        return this.id;
    }

    save(data) {
        localStorage.setItem('pelis', JSON.stringify(data));
    }
}