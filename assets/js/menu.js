const botaoMenu = document.querySelector("nav h2");
const linksMenu = document.querySelector(".menu");
const icone = document.querySelector(".icone");

botaoMenu.addEventListener("click", function(event){
    event.preventDefault();
    linksMenu.classList.toggle("aberto");
    if (linksMenu.classList.contains("aberto")) {
        icone.innerHTML = "Fechar &times;"
    } else {
        icone.innerHTML = "Menu &equiv;"
    }
});