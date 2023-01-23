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
                <img src="${p_product.imgSrc}" alt="${p_product.name}">
            </div>
            <div class="desc">
                <h2>${p_product.name}</h2>
                <h2><small>$</small>${p_product.price}</h2>
                <p>
                    ${p_product.description}
                </p>
            </div>              
            <div class="add-to-cart" onclick="addToCart(${p_product.id})">
                <img src="./icons/bag-plus.png" alt="add to cart">
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


function addToCart(p_id) {

    if (cart.some(pp_item=>pp_item.id === p_id)) {
        // changeNumberOfUnits('plus',p_id)
        
    } else {
        const item = products.find(product=> product.id ===p_id)
        cart.push(
            {
                ...item,
                numberOfUnits:1,
            }
        );
    }
    console.log(cart)
    updateCart();
    
}

// addToCart();

function updateCart() {
    // renderCartItems();
    // rendersubtotal();

    localStorage.setItem('CART',JSON.stringify(cart));
}
updateCart();