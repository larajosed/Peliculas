import deleteOfList from "./delete.js"

export default class List {
    constructor() {
        this.content = document.querySelector('#content');
    }

    peliTemplate(peli) {
        console.log(peli);
        return `<article class="peli-item id="peli-${peli.id}">
                <h3 class="tittle">${peli.tittle}</h3>
                <p class="description">${peli.description}</p>

                <button class="edit" data-id="${peli.id}">Editar</button>
                <button class="delete" data-id="${peli.id}">Borrar</button>
            </article>`;
    }

    show(pelis) {
        this.content.innerHTML = ""

        pelis.forEach(peli => {
            this.content.innerHTML += this.peliTemplate(peli);
        });

        deleteOfList();
    }
}