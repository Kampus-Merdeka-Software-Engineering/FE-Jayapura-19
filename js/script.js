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