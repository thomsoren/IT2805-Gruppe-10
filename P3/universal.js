let footer = document.getElementById("footer")
document.body.appendChild(footer.content);
<<<<<<< HEAD

document.addEventListener("DOMContentLoaded", function() {
    loadComponent("header-placeholder", "header.html");
    loadComponent("footer-placeholder", "footer.html");
});

function loadComponent(placeholderId, url) {
    fetch(url).then(response => {
        return response.text();
    }).then(data => {
        document.getElementById(placeholderId).innerHTML = data;
    }).catch(error => {
        console.error('Error loading component:', error);
    });
}
=======
//funksjon for å gjøre html om til en string.
/*
function createTemplate(html){
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}
const Nav = createTemplate(`
        <div id="menu">
        <img id="logo" src="img/logo.png" alt="logo"/>
        <button id="cart_button"><img id="cart_img"src="img/cart.png" alt="cart" ></button>
        <div id="menu_div">
          <button class="menu_link">Home</button>
          <button class="menu_link">Buy</button>
          <button class="menu_link">Sell</button>
          <button class="menu_link">About us</button>
          <button class="menu_link">Contact</button>
        </div>
´)
*/
>>>>>>> origin
