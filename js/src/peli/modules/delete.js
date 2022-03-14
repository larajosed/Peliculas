import Storage from "./storage.js";
import List from "./list.js";

export default function () {

    const storage = new Storage();
    const list = new List();

    let pelis_stored = storage.getData();
    let pelis_viewed = document.querySelectorAll("#content .peli-item");

    pelis_viewed.forEach(peli => {
        let delete_btn = peli.querySelector(".delete");
        delete_btn.onclick = function () {
            const peli_id = this.getAttribute("data-id")

            const new_pelis_stored = pelis_stored.filter((peli) => peli.id !== parseInt(peli_id));

            storage.save(new_pelis_stored);

            list.show(new_pelis_stored);

        }
    })
} 