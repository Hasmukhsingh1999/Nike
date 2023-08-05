var menu = document.querySelector("#menu");
var block = document.querySelector(".blocks");

menu.addEventListener("click", function (event) {
  block.style.display = "initial";
  event.stopPropagation();
  // Stop the click event from propagating to the document
});

  

