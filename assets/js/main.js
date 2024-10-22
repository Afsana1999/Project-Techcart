//create product
const products = [
  {
    id: 1,
    imgUrl: "./assets/images/IPG-card1jpg.jpg",
    description:
      "1tablet Grandstream GWN7831 Enterprise Layer 3 efso  Managed Aggregation                  Switch, 20 x SFP, 4 x SFP/GigE Combo, 4 x SFP+, Redundant PSU",
    price: 475,
  },
  {
    id: 2,
    imgUrl: "./assets/images/MF-SG-card2BLK.jpg",
    description:
      "2tablet Grandstream GWN7831 Enterprise Layer 3 efso  Managed Aggregation  Switch, ",
    price: 550,
  },
  {
    id: 3,
    imgUrl: "./assets/images/33827-card4320EX-Speedlite-Flash.jpg",
    description:
      "2tablet Grandstream GWN7831 Enterprise Layer 3 efso  Managed Aggregation  Switch, ",
    price: 550,
  },
  {
    id: 4,
    imgUrl: "./assets/images/52174-Canon-8x20-IS-card5jpg.jpg",
    description:
      "2tablet Grandstream GWN7831 Enterprise Layer 3 efso  Managed Aggregation  Switch, ",
    price: 550,
  },
  {
    id: 5,
    imgUrl: "./assets/images/33827-card4320EX-Speedlite-Flash.jpg",
    description:
      "2tablet Grandstream GWN7831 Enterprise Layer 3 efso  Managed Aggregation  Switch, ",
    price: 550,
  },
  {
    id: 6,
    imgUrl: "./assets/images/MF-SG-card2BLK.jpg",
    description:
      "2tablet Grandstream GWN7831 Enterprise Layer 3 efso  Managed Aggregation  Switch, ",
    price: 550,
  },
  {
    id: 7,
    imgUrl: "./assets/images/MF-SG-card2BLK.jpg",
    description: "telefon lorem ipsum lorem, ",
    price: 550,
  },
  {
    id: 8,
    imgUrl: "./assets/images/MF-SG-card2BLK.jpg",
    description: "laptop Managed Aggregation  Switch, ",
    price: 550,
  },
];

//loadRecommended
function createRecommendeds() {
  const recomendeds = document.querySelector("#recomendeds");
  products.forEach((product) => {
    let recomended = `
<div class="card">
                <div class="card-img h-[200px]">
                  <img
                    src="${product.imgUrl}"
                    class="object-contain w-full h-full"
                  />
                </div>
                <p class="cardTitle pb-5 h-[120px] pt-6 text-gray-500">
                 ${product.description}
                </p>
                <span class="cardPrice block font-semibold pb-5 pt-3">AUD 475$</span>
                <p id="id" class="hidden"> ${product.id}</p>
                <button
                  class="addBtn py-2 px-5 mb-7 text-[#0099CC] font-semibold text-lg border-2 border-solid border-[#0099CC]"
                >
                  ADD TO CART
                </button>
              </div>
`;
    recomendeds.innerHTML += recomended;
  });
}
createRecommendeds();

//search
function search(title) {
  const fproducts = products.filter((x) =>
    x.description.toLocaleLowerCase().includes(title.toLocaleLowerCase())
  );

  const searchProducts = document.querySelector("#searchProducts");
  if (searchInput.value.trim().length === 0) {
    searchProducts.innerHTML = "";
    searchProducts.classList.remove("bg-white");
  } else {
    searchProducts.classList.add("bg-white");
    searchProducts.innerHTML = "";

    fproducts.forEach((product) => {
      searchProducts.append(createSearchTag(product));
    });
  }
}

//createNewTAg
const createSearchTag = (product) => {
  let p = document.createElement("p");
  p.classList.add("py-4", "flex");
  p.innerHTML = `<img class="w-[40px] h-[40px]" src="${product.imgUrl}"> Title: ${product.description}  <b class="pl-2">Price:${product.price}AUD</b>`;
  return p;
};
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  search(searchInput.value);
});

//dropdown menu
let dropAnchor = document.querySelector(".dropAnchor");
let dropDownMenu = document.querySelector(".dropDown-menu");
dropAnchor.addEventListener("click", (event) => {
  event.preventDefault();
  dropDownMenu.classList.toggle("hidden");
});

document.addEventListener("click", (event) => {
  if (
    !dropAnchor.contains(event.target) &&
    !dropDownMenu.contains(event.target)
  ) {
    dropDownMenu.classList.add("hidden");
  }
});

//addBtn click(add too cart start)

let addBtn = document.querySelectorAll(".addBtn");
let basketSection = document.querySelector("#basket");
let overlay = document.querySelector("#overlay");

addBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    document.body.classList.add("pointer-events-none", "overflow-hidden");
    basketSection.classList.add("pointer-events-auto");
    overlay.classList.remove("hidden");

    let addBtnParent = event.target.parentNode;

    let isId = addBtnParent.querySelector("#id");

    let id = isId.textContent;

    createBasket(id);
    showBAsket();


  });
});
//closebasket
function closeBasket(){
  let basketHidden = document.querySelector(".basketHidden");
  basketHidden.classList.remove("hidden");
  
  let closeBtn = document.querySelector(".closeBtn");
  
  closeBtn.addEventListener("click", () => {
    overlay.classList.add("hidden");
    basketHidden.classList.add("hidden");
  
    document.body.classList.remove("pointer-events-none", "overflow-hidden");
  });
}


//createBasketDiv
function createBasket(id) {
  let basketArr = JSON.parse(localStorage.getItem("basketArr")) || [];
  let isProducts = basketArr.find((mId) => mId.id == id);

  if (isProducts) {
    isProducts.count++;

    const index = basketArr.findIndex((mId) => mId.id == id);

    if (index !== -1) {
      basketArr[index] = isProducts;
    }
  } else {
    basketArr.push({
      id: id,
      count: 1,
    });
  }
  localStorage.setItem("basketArr", JSON.stringify(basketArr));
  closeBasket()
}

//showbasketcreate
function showBAsket() {
  let basketArr = JSON.parse(localStorage.getItem("basketArr")) || [];

  let basketProduct = document.querySelector(".basket-product");

  if (basketArr.length === 0) {
    basketProduct.innerHTML = "<p>sebet bosdur.</p>";
    return;
  }
  basketProduct.InnetHtml = "";

  basketArr.forEach((item) => {
    const product = products.find((p) => p.id == item.id);
    const basketItem = `
   
        <div class="py-1 flex items-center justify-between px-2">
          <img src="${product.imgUrl}" width="15%" >
          <p>${product.description}</p>
          <button class="productDelete border-2  rounded-full px-1 text-gray-400 hover:text-gray-700 hover:duration-500"> <i class="fa-solid fa-xmark"></i></button>
        </div>
        <div>
          <p class="border-b-2 text-gray-500 font-semibold py-2 productPrice block text-center">
          ${product.count} x AUD $${product.price}</p>
        </div>
   `;

    basketProduct.innerHTML += basketItem;
  });

 
}
//openbasketicon
function openBasket() {
  const basketSection = document.querySelector("#basket");
  const overlay = document.querySelector("#overlay");

  document.body.classList.add("pointer-events-none", "overflow-hidden");
  basketSection.classList.remove("hidden");
  overlay.classList.remove("hidden");
  showBAsket();

}

document.getElementById("openBasketButton").addEventListener("click", () => {
  openBasket();
  
});

//registerBtn click
let registerBtn=document.querySelector(".registerBtn")
let popubLogin=document.querySelector(".popubLogin")
let overlayregister=document.getElementById("overlayregister")


registerBtn.addEventListener("click",()=>{
  overlayregister.classList.remove("hidden")
  popubLogin.classList.remove("hidden")
  document.body.classList.add("overflow-hidden")
})

//burgerMenu
let burgerMenu=document.querySelector(".burgerMenu")
let responsivBurger=document.getElementById("responsivBurger")
let burgerClose=document.querySelector(".burgerClose")
//open
burgerClose.addEventListener("click",()=>{
  responsivBurger.classList.add("hidden")
  document.body.classList.remove("overflow-hidden")
  overlayregister.classList.add("hidden")

})
//close
burgerMenu.addEventListener("click",()=>{
  responsivBurger.classList.remove("hidden")
  document.body.classList.add("overflow-hidden")
  overlayregister.classList.remove("hidden")
})