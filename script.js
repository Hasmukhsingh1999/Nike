function hamburger() {
  var menu = document.querySelector("#menu");
  var block = document.querySelector(".block");

  menu.addEventListener("click", function (event) {
    block.style.display = "initial";
    event.stopPropagation(); // Stop the click event from propagating to the document
  });

  // document.addEventListener("mouseup", function (event) {
  //   if (!block.contains(event.target) && event.target !== block) {
  //     block.style.display = "none";
  //   }
  // });
}

function ShoeCollections() {
  var count = 0;
  var inc = 0;
  margin = 0;
  var imagesData = [
    {
      images:
        "https://i.pinimg.com/564x/38/e9/f2/38e9f2f9bd8972c52fab4b1d68fe152d.jpg",
      name: "Nike Air Max 1",
      price: "$120.00",
    },
    {
      images:
        "https://i.pinimg.com/564x/eb/00/68/eb0068800462399630b04360a0a0803c.jpg",
      name: "Air griffey Max 1",
      price: "$120.00",
    },
    {
      images:
        "https://i.pinimg.com/564x/ba/a9/d0/baa9d0a2dd652ef288d062e493bb6f88.jpg",
      name: "Nike air max 95",
      price: "$120.00",
    },
    {
      images:
        "https://i.pinimg.com/564x/2f/fe/85/2ffe85593265619f88431d38938a4445.jpg",
      name: "Nike air max Correl",
      price: "$120.00",
    },
    {
      images:
        "https://i.pinimg.com/564x/30/fd/a5/30fda596079fe3b63ee5ce7884afaa32.jpg",
      name: "Air griffey max Plus",
      price: "$120.00",
    },
    {
      images:
        "https://i.pinimg.com/564x/d7/bf/31/d7bf310d02a52751190e9381f52920ea.jpg",
      name: "Nocta hot step air",
      price: "$120.00",
    },
    {
      images:
        "https://i.pinimg.com/564x/db/a6/68/dba668436471bc99eb368874e755afb3.jpg",
      name: "Nike Air Max Dawn",
      price: "$120.00",
    },
    {
      images:
        "https://i.pinimg.com/564x/23/e2/a0/23e2a0aa0b82726c432616764ccdef8d.jpg",
      name: "Nike Air Max 12",
      price: "$120.00",
    },
    {
      images:
        "https://i.pinimg.com/564x/89/ae/16/89ae16ffb52a272298b436bb9c778814.jpg",
      name: "Nike Air Max 120",
      price: "$120.00",
    },
    {
      images:
        "https://i.pinimg.com/564x/18/f0/25/18f025e3090dfd45931b6f64812a3842.jpg",
      name: "Air Max pro1",
      price: "$120.00",
    },
    {
      images:
        "https://i.pinimg.com/564x/ef/7b/d7/ef7bd77fc861c4972dcb89b3127dfd17.jpg",
      name: "Nike Air Max 1",
      price: "$120.00",
    },
    {
      images:
        "https://i.pinimg.com/564x/53/e5/4d/53e54de49753f672b2ff5f1efd93a11e.jpg",
      name: "Nike Air Max 1",
      price: "$120.00",
    },
  ];
  var clutter = ``;
  imagesData.forEach(function (elem, index) {
    clutter += `
    <div class="item"><img src="${elem.images}" alt=""></div>`
  })
  document.querySelector(".slider-width").innerHTML = clutter;
  var slider = document.getElementsByClassName("slider-width")[0];
  var itemDisplay = 0;
  if (screen.width > 990) {
      itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-d");
      margin = itemDisplay * 5;
  }
  if (screen.width > 700 && screen.width < 990) {
      itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-t");
      margin = itemDisplay * 6.8;
  }
  if (screen.width > 280 && screen.width < 700) {
      itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-m");
      margin = itemDisplay * 20;
  }


  var items = document.getElementsByClassName("item");
  var itemleft = items.length % itemDisplay;
  var itemslide = Math.floor(items.length / itemDisplay) - 1;
  for (let i = 0; i < items.length; i++) {
      items[i].style.width = (screen.width / itemDisplay) - margin + "px";
  }

  function next() {
    document.querySelector("#next").addEventListener("click",function(){
      if (inc !== itemslide + itemleft) {
        if (inc == itemslide) {
            inc = inc + itemleft;
            count = count - (screen.width / itemDisplay) * itemleft;
        }
        else {
            inc++;
            count = count - screen.width;
        }
    }
    slider.style.left = count + "px";
    })
      
  }

  function prev() {
    document.querySelector("#prev").addEventListener("click",function(){
      if (inc !== 0) {
        if (inc == itemleft) {
            inc = inc - itemleft;
            count = count + (screen.width / itemDisplay) * itemleft;
        }
        else {
            inc--;
            count = count + screen.width;
        }
    }
    console.log(inc)
    slider.style.left = count + "px";
    })
  }
  prev()
  next()


}

hamburger();
ShoeCollections();
