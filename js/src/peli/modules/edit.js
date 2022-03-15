import List from "./list.js";
import Storage from "./storage.js";

export default function () {

    const storage = new Storage();
    const list = new List();

    let pelis_stored = storage.getData();
    let pelis_viewed = document.querySelectorAll(".peli-item");

    pelis_viewed.forEach(peli => {

        let edit_btn = peli.querySelector(".edit");

        edit_btn.onclick = function () {

            const peli_id = parseInt(this.getAttribute("data-id"));


            edit_btn.remove();
            peli.querySelector(".delete").remove();

            let peli_edit_html = `
            <div class="edit_form">
                
                 <h3 class="tittle">Editar peliculas</h3>
                <form>
                    <input type="text" class="edited_tittle" value="${peli.querySelector(".tittle").innerHTML}"/>
                    <textarea class="edited_description">${peli.querySelector(".description").innerHTML}</textarea>
                    <input type="submit" class="update" value="Actualizar" />
                </form>
            </div>
        `;

            peli.innerHTML += peli_edit_html;

            let update_btn = peli.querySelector(".update");

            update_btn.onclick = function (e) {
                e.preventDefault();

                let index = pelis_stored.findIndex(peli => peli.id === peli_id);

                pelis_stored[index] = {
                    id: peli_id,
                    tittle: peli.querySelector(".edited_tittle").value,
                    description: peli.querySelector(".edited_description").value
                };

                storage.save(pelis_stored);

                list.show(pelis_stored)



                return false;
            }
        }

    })


}