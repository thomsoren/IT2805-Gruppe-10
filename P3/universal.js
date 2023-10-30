let nav= document.getElementById("nav")
let footer = document.getElementById("footer")
document.body.appendChild(footer.content);

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