const meny = `
<div id="menu">
        <img id="logo" src="img/logo.png" alt="logo"/>
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

function changeURL(){
  let url = window.location.href
  if (url.includes('product1')) {
    var newURL = "checkout.html?product1";
    document.getElementById("product--button").href = newURL;
  }
  else if (url.includes('product2')) {
    var newURL = "checkout.html?product2";
    document.getElementById("product--button").href = newURL;
  }
  else if (url.includes('product3')) {
    var newURL = "checkout.html?product3";
    document.getElementById("product--button").href = newURL;
  }
  else if (url.includes('product4')) {
    var newURL = "checkout.html?product4";
    document.getElementById("product--button").href = newURL;
  }
  else if (url.includes('product5')) {
    var newURL = "checkout.html?product5";
    document.getElementById("product--button").href = newURL;
  }
  else if (url.includes('product6')) {
    var newURL = "checkout.html?product6";
    document.getElementById("product--button").href = newURL;
  }
}

function individualWatchesImage() {
  let url = window.location.href
  let productImage = document.createElement('img');
  //create image
  //Gjør livet mitt lettere ved å forkorte noe jeg bruker om igjen.
  let productParagraph = document.getElementById('product--description')
  let productHeader = document.getElementById('product--header')
  let productPrice = document.getElementById('product--price')

  let productHeader1 = document.createTextNode("Breitling Superocean")
  let productHeader2 = document.createTextNode("Omega Aquaterra")
  let productHeader3 = document.createTextNode("Omega Seamaster")
  let productHeader4 = document.createTextNode("Laurent Ferrier")
  let productHeader5 = document.createTextNode("Audemars Piguet")
  let productHeader6 = document.createTextNode("Rolex GMT")
  //Headerene sin tekst.

  let productPrice1 = document.createTextNode("45 000kr")
  let productPrice2 = document.createTextNode("55 000kr")
  let productPrice3 = document.createTextNode("50 000kr")
  let productPrice4 = document.createTextNode("200 000kr")
  let productPrice5 = document.createTextNode("1 000 000kr")
  let productPrice6 = document.createTextNode("160 000kr")

  let productDescription1 = document.createTextNode("Breitling Superocean er orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis iaculis sem vitae egestas. Maecenas ac enim fringilla nulla congue pellentesque. Proin laoreet tortor ac nunc sodales, a eleifend neque ullamcorper. Nullam sit amet iaculis risus, eu dictum urna. Curabitur viverra metus sit amet hendrerit porta. Nam ornare feugiat porttitor orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis iaculis sem vitae egestas. Maecenas ac enim fringilla nulla congue pellentesque. Proin laoreet tortor ac nunc sodales, a eleifend neque ullamcorper. Nullam sit amet iaculis risus, eu dictum urna. Curabitur viverra metus sit amet hendrerit porta. Nam ornare feugiat porttitororem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis iaculis sem vitae egestas. Maecenas ac enim fringilla nulla congue pellentesque. Proin laoreet tortor ac nunc sodales, a eleifend neque ullamcorper. Nullam sit amet iaculis risus, eu dictum urna. Curabitur viverra metus sit amet hendrerit porta. Nam ornare feugiat porttitor.")
  let productDescription2 = document.createTextNode("Omega Aquaterra er orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis iaculis sem vitae egestas. Maecenas ac enim fringilla nulla congue pellentesque. Proin laoreet tortor ac nunc sodales, a eleifend neque ullamcorper. Nullam sit amet iaculis risus, eu dictum urna. Curabitur viverra metus sit amet hendrerit porta. Nam ornare feugiat porttitor orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis iaculis sem vitae egestas. Maecenas ac enim fringilla nulla congue pellentesque. Proin laoreet tortor ac nunc sodales, a eleifend neque ullamcorper. Nullam sit amet iaculis risus, eu dictum urna. Curabitur viverra metus sit amet hendrerit porta. Nam ornare feugiat porttitororem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis iaculis sem vitae egestas. Maecenas ac enim fringilla nulla congue pellentesque. Proin laoreet tortor ac nunc sodales, a eleifend neque ullamcorper. Nullam sit amet iaculis risus, eu dictum urna. Curabitur viverra metus sit amet hendrerit porta. Nam ornare feugiat porttitor.")
  let productDescription3 = document.createTextNode("Omega Seamaster er orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis iaculis sem vitae egestas. Maecenas ac enim fringilla nulla congue pellentesque. Proin laoreet tortor ac nunc sodales, a eleifend neque ullamcorper. Nullam sit amet iaculis risus, eu dictum urna. Curabitur viverra metus sit amet hendrerit porta. Nam ornare feugiat porttitor orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis iaculis sem vitae egestas. Maecenas ac enim fringilla nulla congue pellentesque. Proin laoreet tortor ac nunc sodales, a eleifend neque ullamcorper. Nullam sit amet iaculis risus, eu dictum urna. Curabitur viverra metus sit amet hendrerit porta. Nam ornare feugiat porttitororem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis iaculis sem vitae egestas. Maecenas ac enim fringilla nulla congue pellentesque. Proin laoreet tortor ac nunc sodales, a eleifend neque ullamcorper. Nullam sit amet iaculis risus, eu dictum urna. Curabitur viverra metus sit amet hendrerit porta. Nam ornare feugiat porttitor.")
  let productDescription4 = document.createTextNode("Laurent Ferrier er orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis iaculis sem vitae egestas. Maecenas ac enim fringilla nulla congue pellentesque. Proin laoreet tortor ac nunc sodales, a eleifend neque ullamcorper. Nullam sit amet iaculis risus, eu dictum urna. Curabitur viverra metus sit amet hendrerit porta. Nam ornare feugiat porttitor orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis iaculis sem vitae egestas. Maecenas ac enim fringilla nulla congue pellentesque. Proin laoreet tortor ac nunc sodales, a eleifend neque ullamcorper. Nullam sit amet iaculis risus, eu dictum urna. Curabitur viverra metus sit amet hendrerit porta. Nam ornare feugiat porttitororem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis iaculis sem vitae egestas. Maecenas ac enim fringilla nulla congue pellentesque. Proin laoreet tortor ac nunc sodales, a eleifend neque ullamcorper. Nullam sit amet iaculis risus, eu dictum urna. Curabitur viverra metus sit amet hendrerit porta. Nam ornare feugiat porttitor.")
  let productDescription5 = document.createTextNode("Audermars Piquet er orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis iaculis sem vitae egestas. Maecenas ac enim fringilla nulla congue pellentesque. Proin laoreet tortor ac nunc sodales, a eleifend neque ullamcorper. Nullam sit amet iaculis risus, eu dictum urna. Curabitur viverra metus sit amet hendrerit porta. Nam ornare feugiat porttitor orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis iaculis sem vitae egestas. Maecenas ac enim fringilla nulla congue pellentesque. Proin laoreet tortor ac nunc sodales, a eleifend neque ullamcorper. Nullam sit amet iaculis risus, eu dictum urna. Curabitur viverra metus sit amet hendrerit porta. Nam ornare feugiat porttitororem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis iaculis sem vitae egestas. Maecenas ac enim fringilla nulla congue pellentesque. Proin laoreet tortor ac nunc sodales, a eleifend neque ullamcorper. Nullam sit amet iaculis risus, eu dictum urna. Curabitur viverra metus sit amet hendrerit porta. Nam ornare feugiat porttitor.")
  let productDescription6 = document.createTextNode("Rolex GMT er orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis iaculis sem vitae egestas. Maecenas ac enim fringilla nulla congue pellentesque. Proin laoreet tortor ac nunc sodales, a eleifend neque ullamcorper. Nullam sit amet iaculis risus, eu dictum urna. Curabitur viverra metus sit amet hendrerit porta. Nam ornare feugiat porttitor orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis iaculis sem vitae egestas. Maecenas ac enim fringilla nulla congue pellentesque. Proin laoreet tortor ac nunc sodales, a eleifend neque ullamcorper. Nullam sit amet iaculis risus, eu dictum urna. Curabitur viverra metus sit amet hendrerit porta. Nam ornare feugiat porttitororem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis iaculis sem vitae egestas. Maecenas ac enim fringilla nulla congue pellentesque. Proin laoreet tortor ac nunc sodales, a eleifend neque ullamcorper. Nullam sit amet iaculis risus, eu dictum urna. Curabitur viverra metus sit amet hendrerit porta. Nam ornare feugiat porttitor.")
  //  Paragrafet sin tekst

 


  if (url.includes('product1')) {
    productImage.src = "./img/breitling_superocean.png"
    productHeader.appendChild(productHeader1)
    productPrice.appendChild(productPrice1)
    productParagraph.appendChild(productDescription1)
  } else if (url.includes('product2')) {
    productImage.src = "./img/omega_aquaterra.png"
    productHeader.appendChild(productHeader2)
    productPrice.appendChild(productPrice2)
    productParagraph.appendChild(productDescription2)
  } else if (url.includes('product3')) {
    productImage.src = "./img/omega_seamaster.png"
    productHeader.appendChild(productHeader3)
    productPrice.appendChild(productPrice3)
    productParagraph.appendChild(productDescription3)
  } else if (url.includes('product4')) {
    productImage.src = "./img/laurent_ferrier.png"
    productHeader.appendChild(productHeader4)
    productPrice.appendChild(productPrice4)
    productParagraph.appendChild(productDescription4)
  } else if (url.includes('product5')) {
    productImage.src = "./img/Audemars_piguet.png"
    productHeader.appendChild(productHeader5)
    productPrice.appendChild(productPrice5)
    productParagraph.appendChild(productDescription5)
  } else if (url.includes('product6')) {
    productImage.src = "./img/rolex_gmt.png"
    productHeader.appendChild(productHeader6)
    productPrice.appendChild(productPrice6)
    productParagraph.appendChild(productDescription6)
  } else if (url.includes('individualWatches.html')) {
    productImage.src = "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"

  }


  //Skjekker om linken inneholder X og loader forskjellig bilder og tekst ut ifra det.
  document.getElementById('product--image').appendChild(productImage)
//Skriver ut bilde.
}

function checkout(){
  let url = window.location.href;

  let checkoutPretax = document.getElementById("pretax")
  let checkoutTax = document.getElementById("tax")
  let total = document.getElementById("total")
  let newPrice;
  let tax;
  let pretax;

  if (url.includes('product1')) {
      newPrice = "45 000kr";
      tax = "11 250kr";
      pretax = "33 850kr";
  } else if (url.includes('product2')) {
      newPrice = "55 000kr"
      tax = "13 750kr"
      pretax = "41 350kr"
  } else if (url.includes('product3')) {
      newPrice = "50 000kr"
      tax = "12 500kr";
      pretax = "37 400kr"
  } else if (url.includes('product4')) {
      newPrice = "200 000kr";
      tax = "10 000kr"
      pretax = "190 000kr"
  } else if (url.includes('product5')) {
      newPrice = "1 000 100kr"; 
      tax = "250 000kr"
      pretax = "750 000kr"
  } else if (url.includes('product6')) {
      newPrice = "160 100kr";
      tax = "40 000kr"
      pretax = "120 000kr"
  }

  checkoutPretax.textContent = pretax;
  checkoutTax.textContent = tax;
  total.textContent = newPrice;
}

// Call the function to update the price
checkout();