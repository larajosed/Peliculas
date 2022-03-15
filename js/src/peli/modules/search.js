import Storage from "./storage.js";
import List from "./list.js";


export default function () {

    const storage = new Storage();
    const list = new List();

    let content = document.querySelector("#content");
    let search_btn = document.querySelector("#search")

    search_btn.onclick = (e) => {
        e.preventDefault();

        let wanted = document.querySelector("#search_field").value;

        let peli_stored = storage.getData();

        const new_pelis = peli_stored.filter(peli => {
            return peli.tittle.toLowerCase().includes(wanted.toLowerCase());
        });

        if (new_pelis.length <= 0) {
            content.innerHTML = "<div><h2>No hay conincidencias</h2></div>";
        } else {
            list.show(new_pelis);
        }


        console.log(new_pelis);
        return false
    }
}