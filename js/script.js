// BAR MENU
function hendleClick(event){
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide-menu");
    menu.classList.toggle("show-menu");

}

// INPUT RESI
const BASE_URL = "https://be-jayapura-19-production.up.railway.app";

function cekResi(event) {
    event.preventDefault(); 

    const inputResi = document.querySelector("#resi");
    const trackingNumber = inputResi.value.trim(); 

    if (!trackingNumber) {
        // Memeriksa apakah input kosong
        alert("Please enter a tracking number."); // Menampilkan alert jika input kosong
        return;
    }

    fetch(`${BASE_URL}/get-paket-by-resi?resi=${trackingNumber}`)
        .then((response) => response.json())
        .then((response) => {
            if(response.data.length > 0) {
                document.querySelector("#content-no-resi").innerHTML = response.data[0].resi;
                document.querySelector("#content-tanggal-pengiriman").innerHTML = response.data[0].tanggal;
                document.querySelector("#content-penerima").innerHTML = response.data[0].penerima;
                document.querySelector("#content-status").innerHTML = response.data[0].status;
            }else{
                alert("Tracking number not found.")}
            })
        .catch((error) => {
            console.error(error);
        });
}

// SUBMIT KOMENTAR


function submitComment(event){
    const name = document.querySelector("#name");
    const comment = document.querySelector("#comment");
    
    fetch(`${BASE_URL}/store-komen`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nama: name.value,
            komen: comment.value,
        }),
    })
    .then((response) => response.json())
    .then((response) => {

        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });
}
