/*let footer = document.getElementById("footer")
document.body.appendChild(footer.content);
//funksjon for å gjøre html om til en string.

function createTemplate(html){
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstChild;
}
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
