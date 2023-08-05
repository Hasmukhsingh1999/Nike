

var one = document.querySelector(".nav-links1");
one.addEventListener("click", function (event) {
  event.preventDefault();

  document.querySelector(".loader").style.display = "initial";
  setTimeout(() => {
    window.location.href = "/index.html";
  });
});
var two = document.querySelectorAll(".nav-links2");
console.log(two)
two.forEach(function (eleme) {
  eleme.addEventListener("click",function (event) {
    event.preventDefault();
    document.querySelector(".loader").style.display = "initial";
    setTimeout(() => {
      window.location.href = "/About.html";
    }, 1000);
  });
});

var four = document.querySelectorAll(".nav-links4");
console.log(four);
four.forEach(function (elem) {
  elem.addEventListener("click", function (event) {
    event.preventDefault();

    document.querySelector(".loader").style.display = "initial";
    setTimeout(() => {
      window.location.href = "/Collections.html";
    }, 1000);
  });
});



var backButton = document.querySelector(".nav");
backButton.addEventListener("click",function(val){
  val.preventDefault();
  document.querySelector(".loader").style.display = "initial";
  setTimeout(() => {
    window.location.href = "/index.html";
  }, 1000);
})
