let footer = document.getElementById("footer")
document.body.appendChild(footer.content);
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