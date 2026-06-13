function voltear(tarjeta){
    tarjeta.classList.toggle("girada");
}

document.getElementById("btn-linkedin").addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/karen-nathalia-martinez-biscunda-full-stack", "_blank");
});

document.getElementById("btn-github").addEventListener("click", function() {
    window.open("https://github.com/Nathalia010", "_blank");
});

function enviarCorreo() {
    window.location.href = "mailto:k.nathalia.martinez.b@gmail.com";
};


