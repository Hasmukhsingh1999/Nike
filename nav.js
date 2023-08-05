function abc(){
    document.addEventListener("DOMContentLoaded", function () {
        const navLinks = document.querySelectorAll(".xx");
        const loader = document.getElementById("loader");
    console.log(navLinks)
        navLinks.forEach(function (navLink) {
          navLink.addEventListener("click", function (event) {
            event.preventDefault();
            loader.style.display = "block";
    
            const href = navLink.getAttribute("href");
            setTimeout(function () {
              loader.style.display = "none";
              window.location.href = href;
            }, 2000);
          });
        });
      });
}

abc()