// BAR MENU
function hendleClick(event){
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide-menu");
    menu.classList.toggle("show-menu");

}

// INPUT RESI
const BASE_URL = "https://be-jayapura-19-production.up.railway.app";
function cekResi(){
    const inputResi = document.querySelector("#resi");
    fetch('${BASE_URL}/get-paket-by-resi?resi=${inputResi.value}')
    .then((response) => response.json())
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });
}

// SUBMIT KOMENTAR

document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("comment-form");
    const commentList = document.getElementById("comment-list");

    commentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nameInput = document.getElementById("name");
        const commentInput = document.getElementById("comment");

        const name = nameInput.value;
        const comment = commentInput.value;

        if (name && comment) {
            const commentItem = document.createElement("div");
            commentItem.classList.add("comment-item");
            commentItem.innerHTML = `
                <strong>${name}:</strong>
                <p>${comment}</p>
            `;

            commentList.appendChild(commentItem);

            // Reset input nama dan komentar
            nameInput.value = "";
            commentInput.value = "";
        } else {
            alert("Nama dan komentar harus diisi!");
        }
    });
});

