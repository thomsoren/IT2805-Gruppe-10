/*let footer = document.getElementById("footer")
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

function createTemplate(html){
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstChild;
}
<<<<<<< HEAD
const Nav = createTemplate('<div id="menu">\n' +
    '        <img id="logo" src="img/logo.png" alt="logo"/>\n' +
    '        <button id="cart_button"><img id="cart_img"src="img/cart.png" alt="cart" ></button>\n' +
    '        <div id="menu_div">\n' +
    '          <button class="menu_link">Home</button>\n' +
    '          <button class="menu_link">Buy</button>\n' +
    '          <button class="menu_link">Sell</button>\n' +
    '          <button class="menu_link">About us</button>\n' +
    '          <button class="menu_link">Contact</button>\n' +
    '        </div>'
)
 */
const html = `
<!--legg html her--!>
`
document.querySelector('#div').innerHTML = html