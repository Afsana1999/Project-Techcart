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
    description:
      "2tablet Grandstream GWN7831 Enterprise Layer 3 efso  Managed Aggregation  Switch, ",
    price: 550,
  },
  {
    id: 8,
    imgUrl: "./assets/images/MF-SG-card2BLK.jpg",
    description:
      "2tablet Grandstream GWN7831 Enterprise Layer 3 efso  Managed Aggregation  Switch, ",
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
                    class="object-cover w-full h-full"
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

const createSearchTag = (product) => {
  let p = document.createElement("p");
  p.classList.add("py-4","flex")
  p.innerHTML = `<img class="w-[40px] h-[40px]" src="${product.imgUrl}"> Title: ${product.description}  <b>Price:${product.price}AUD</b>`;
  return p;
};
const searchInput = document.getElementById("searchInput");
console.log(searchInput);

searchInput.addEventListener("input", () => {
  search(searchInput.value);
});

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

