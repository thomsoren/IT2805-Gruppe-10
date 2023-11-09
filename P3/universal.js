const meny = `
<div id="menu">
        <img id="logo" src="img/logo.png" alt="logo"/>
        <button id="cart_button"><img id="cart_img"src="img/cart.png" alt="cart" ></button>
        <div class="dropdown">
          <button class="dropbtn"><img id="burger_bar" src="img/dropdown menu.png" alt="dropdown"/></button>
          <div class="content">
          <a href="./frontpage.html" class="dropdown_links">Home</a>
          <a href="./buy.html" class="dropdown_links">Buy</a>
          <a href="./sell.html" class="dropdown_links">Sell</a>
          <a href="./about.html" class="dropdown_links">About us</a>
          <a href="./contact.html" class="dropdown_links">Contact</a>
        </div>
        </div>
        <div id="menu_div">
          <a href="./frontpage.html" class="menu_link">Home</a>
          <a href="./buy.html" class="menu_link">Buy</a>
          <a href="./sell.html" class="menu_link">Sell</a>
          <a href="./about.html" class="menu_link">About us</a>
          <a href="./contact.html" class="menu_link">Contact</a>
        </div>
    </div>
`
document.querySelector('#hovedmeny').innerHTML = meny

const footer = `
<footer>
  <div class="flex-container">
      <div class="flex-box">
        <h1>Address & postal office</h1>
        <p>Klokkeveien 123 A</p>
        <p>7052, Trondheim</p>
        <p>Norway</p>
      </div>
      <div class="flex-box">
        <h1>Contact</h1>
        <p><img src="img/telephonew.png" alt="phone" id="phone"> +47 901 23 456</p>
        <p id="emailtekst"><img src="./img/Message.png" alt="message" id="message">Somethingsomething@gmail.com</p>
      </div>
      <div class="flex-box">
        <h1>Sitemap</h1>
          <a href="./frontpage.html" class="footer_link">Home</a>
          <br/>
          <a href="./buy.html" class="footer_link">Buy</a>
          <br/>
          <a href="./sell.html" class="footer_link">Sell</a>
          <br/>
          <a href="./about.html" class="footer_link">About us</a>
          <br/>
          <a href="./contact.html" class="footer_link">Contact</a>
      </div>
    </div>
  </footer>`
  document.querySelector('#footer').innerHTML = footer
