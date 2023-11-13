const meny = `
<div id="menu">
        <img id="logo" src="img/logo.png" alt="logo"/>
        <a href="./checkout.html" id="cart_button"><img id="cart_img"src="img/cart.png" alt="cart" ></a>
        <div class="dropdown">
          <a href="./checkout.html class="dropbtn"><img id="burger_bar" src="img/dropdown menu.png" alt="dropdown"/></a>
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
  document.querySelector("#footer").innerHTML = footer

  function linkroll(element) {
    element.style.transform = "scale(1.1)";
    element.style.transition = "transform 0.1s";
  }
  
  function resetScale(element) {
    element.style.transform = "scale(1)";
  }
  
  // since getElementsclassName returns a live nodeList, we have to itterate over each one to see if they are being hovered.
  function applyScaleEffect(elements) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener("mouseover", function() {
        linkroll(elements[i]);
      });
      elements[i].addEventListener('mouseout', function() {
        resetScale(elements[i]);
      });
    }
  }
  
  let footer_links = document.getElementsByClassName("footer_link");
  let dropdown_links = document.getElementsByClassName("dropdown_links");
  let menu_links = document.getElementsByClassName("menu_link");
  
  // Apply the scaling effect to each group
  applyScaleEffect(footer_links);
  applyScaleEffect(dropdown_links);
  applyScaleEffect(menu_links);
  