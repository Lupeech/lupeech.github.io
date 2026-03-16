document.addEventListener('keydown', function(e) {
    // 116 es el código de la tecla F5
    if (e.keyCode === 116) {
        e.preventDefault(); // Previene la recarga por defecto
        window.location.href = 'index.html'; // Redirige al index
    }
});

function filterSelection(category){

let items = document.getElementsByClassName("item");

if(category == "all") category = "";

for(let i=0;i<items.length;i++){

items[i].style.display = "none";

if(items[i].className.indexOf(category) > -1){

items[i].style.display = "block";

}

}

}