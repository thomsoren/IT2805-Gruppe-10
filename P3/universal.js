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

  let productDescription1 = document.createTextNode("The Breitling Superocean watch is a sublime fusion of modern design and robust functionality, capturing the essence of underwater exploration with undeniable style. Crafted with precision and durability, its sturdy case, available in stainless steel, projects strength and resilience. The unidirectional rotating bezel, a signature feature, underscores its commitment to dive-ready performance. The Superocean's dial, marked by bold indices and luminescent hands, ensures optimal readability in challenging underwater environments. Engineered for aquatic adventures, this timepiece combines reliability with a distinctive aesthetic. The attention to detail extends to the integrated bracelet, highlighting Breitling's dedication to both form and function. The Breitling Superocean stands as a symbol of underwater excellence, marrying cutting-edge design with the technical prowess required for deep-sea exploration.")
  let productDescription2 = document.createTextNode("The Omega Aquaterra watch is a paragon of Swiss watchmaking, harmonizing contemporary design with precision engineering. Featuring a sleek and versatile design, the timepiece seamlessly combines elegance with functionality. Its stainless steel or premium metal case, coupled with a distinctive teak-patterned dial, reflects a commitment to both style and substance. The Aquaterra is more than a watch; it's an embodiment of Omega's maritime heritage, offering water resistance and robust performance. The co-axial movement ensures accurate timekeeping, while the refined detailing, including a polished bezel and integrated bracelet, signifies Omega's dedication to craftsmanship. The Omega Aquaterra stands as a beacon of modern sophistication, marrying form and function effortlessly.")
  let productDescription3 = document.createTextNode("The Omega Seamaster watch is a testament to the brand's maritime legacy, seamlessly blending contemporary design with cutting-edge functionality. Crafted with precision, the Seamaster boasts a robust stainless steel or premium metal case, embodying both strength and sophistication. Its iconic wave-patterned dial not only adds a distinctive touch but also reflects a connection to the sea. Engineered for underwater excellence, the Seamaster ensures water resistance and durability. The co-axial movement guarantees precise timekeeping, while the refined details, such as the unidirectional rotating bezel and integrated bracelet, showcase Omega's commitment to both form and function. The Omega Seamaster stands as an enduring symbol of adventure, innovation, and timeless style.")
  let productDescription4 = document.createTextNode("The Laurent Ferrier timepiece is a pinnacle of horological excellence, marrying classical elegance with meticulous craftsmanship. Renowned for its understated sophistication, the watch features a refined case crafted from premium materials, radiating both strength and refinement. The minimalist dial design, marked by subtle details, reflects a timeless aesthetic. Powered by a precision movement, the Laurent Ferrier watch ensures accurate timekeeping, a hallmark of traditional watchmaking. The attention to detail extends to the meticulously finished case and the carefully integrated bracelet, exemplifying the brand's dedication to unparalleled craftsmanship. More than just a watch, Laurent Ferrier stands as an emblem of refined luxury, epitomizing the fusion of classic design and mechanical artistry.")
  let productDescription5 = document.createTextNode("The Royal Oak watch by Audemars Piguet is a pinnacle of Swiss craftsmanship, seamlessly fusing avant-garde design with traditional watchmaking. Its iconic octagonal bezel and integrated case, crafted from stainless steel or precious metals, exude strength and elegance. The tapisserie dial adds a refined touch, while polished hexagonal screws and an integrated bracelet showcase meticulous detailing. Powered by a high-precision mechanical movement, the Royal Oak is not just a timepiece but a symbol of sophistication and status. A coveted accessory, it stands as a timeless testament to the marriage of form and function, epitomizing superior craftsmanship.")
  let productDescription6 = document.createTextNode("The Rolex GMT watch is an embodiment of iconic design and technical prowess, seamlessly merging classic aesthetics with modern functionality. Crafted with precision and durability, its robust case, available in stainless steel or precious metals, exudes a timeless allure. The distinctive bi-color bezel, a hallmark of the GMT series, allows for dual time zone tracking, catering to the needs of globetrotters. Powered by a highly accurate movement, the Rolex GMT ensures impeccable timekeeping. The attention to detail extends to the meticulously finished bracelet and the iconic cyclops lens over the date window, showcasing Rolex's commitment to unparalleled craftsmanship. A symbol of travel and sophistication, the Rolex GMT is a true testament to the brand's enduring legacy.")
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