import { products } from "./products.js"
const main = document.getElementById("main");
const searchBar = document.getElementById("search-bar");

searchBar.addEventListener("keyup", searchProducts)

products.map((item, index) => {
    main.innerHTML += `
        <div class="card">
            <div class="product">
                <img src="${item.image}" alt="${item.alt}" class="product-img">
                <p class="product-name">${item.productName}</p>
                <div class="product-price">
                    <span>Price</span>
                    <span>&#8377; ${item.pice}</span>
                </div>
            </div>
            <div class="addToCart">
                <p>Add to cart</p>
                <div class="buttons">
                    <button id="add"><b>+</b></button>
                    <span class="count"></span>
                    <button id="minus"><b>-</b></button>
                </div>
            </div>
        </div>
    `
})

function searchProducts() {
    const searchVal = searchBar.value.toLowerCase()
    const productsSearched = products.filter(obj => obj.productName.toLowerCase().includes(searchVal))
    main.innerHTML = ""
    productsSearched.map((item, index) => {
        main.innerHTML += `
        <div class="card">
            <div class="product">
                <img src="${item.image}" alt="${item.alt}" class="product-img">
                <p class="product-name">${item.productName}</p>
                <div class="product-price">
                    <span>Price</span>
                    <span>&#8377; ${item.pice}</span>
                </div>
            </div>
            <div class="addToCart">
                <p>Add to cart</p>
                <div class="buttons">
                    <button id="add"><b>+</b></button>
                    <span class="count"></span>
                    <button id="minus"><b>-</b></button>
                </div>
            </div>
        </div>
    `
    })
}