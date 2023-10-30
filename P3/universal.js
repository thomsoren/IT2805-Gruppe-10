const meny = `
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
`
document.querySelector('#hode').innerHTML = meny

const footer = `
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
          <button class="footer_link">Home</button>
          <br/>
          <button class="footer_link">Buy</button>
          <br/>
          <button class="footer_link">Sell</button>
          <br/>
          <button class="footer_link">About us</button>
          <br/>
          <button class="footer_link">Contact</button>
      </div>
    </div>
`
document.querySelector('#feet').innerHTML = footer