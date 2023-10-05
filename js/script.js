// INPUT RESI
function cekResi(event) {
    const input = document.querySelector("#resi");
    const value = input.value;
    console.log(value);

}

// BAR MENU
function hendleClick(event){
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide-menu");
    menu.classList.toggle("show-menu");

}
// SUBMIT KOMENTAR
function submitComment(event) {
    event.preventDefault();

    const opinionTextarea = document.getElementById("opinion-textarea");
    const commentsList = document.getElementById("comments-list");

    const opinion = opinionTextarea.value;
    if (opinion.trim() !== "") {
        const commentItem = document.createElement("li");
        commentItem.textContent = opinion;
        commentsList.appendChild(commentItem);
        opinionTextarea.value = "";

        // Tambahkan komentar ke bagian bawah form
        const commentSection = document.getElementById("comment-section");
        commentSection.appendChild(commentItem);
    }
}