// 🍀코딩용... 자동으로 가장 밑으로 스크롤시키기
window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });

const productsEl = document.querySelector('.products');
const cartItemsEl = document.querySelectorAll('.cart-items');
const subtotalEl = document.querySelector('.subtotal');
const totalItemsInCartEl = document.querySelector('.total-items-in-cart');

// products.js
console.log(products)

// js09 render products

/* 
productsData
inerhtml +=
onClick 

*/

function renderProducts() {
    products.forEach(p_product => {
        productsEl.innerHTML +=`
   
            <div class="item">
                    <div class="item-container">
                        <div class="item-img">
                            <img src="./img/Clothing-Fill-Color(1).png" alt="">

                        </div>
                        <div class="desc">
                            <h2>product.name</h2>
                            <h2><small>$</small>product.price</h2>
                            <p>product.description</p>
                        </div>
                        <div class="add-to-wishlist">
                            <img src="./icons/heart.png" alt="">
                        </div>
                        <div class="add-to-cart">
                            <img src="./icons/bag-plus.png" alt="">
                        </div>
                    </div>
                </div>
        
        `
        
    });
    
}
renderProducts();

// js13. add to total-items-in-cart

let cart= [];
// let cart = JSON.parse(localStorage.getItem("CART")); || [];

// object.find(()=>{})
/* 

array
objectArray.find()

js13
let cart
array.find()
const i  tem
...spread operator
<numberofunits:1></numberofunits:1>
changenumberofunits
array.some
render cart items
*/