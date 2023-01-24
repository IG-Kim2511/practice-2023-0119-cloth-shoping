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

// render cart items
// onclick change number of units, 
// onclick kremove item from cart

function renderCartItems() {
    cartItemsEl.innerHTML="";
    cart.forEach(pp_item => {
        cartItemsEl.innerHTML += `
        <div class="cart-item">
            <div class="item-info" onclick="removeItemFromCart(${pp_item.id})">
                <img src="${pp_item.imgSrc}" alt="${pp_item.name}">
                <h4>${pp_item.name}</h4>
            </div>
            <div class="unit-price">
                <small>$</small>${pp_item.price}
                <img src="./img/icons8-delete-128.png" alt="" class="delete"  onclick="removeItemFromCart(${pp_item.id})">
            </div>
            <div class="units">
                <div class="btn plus" onclick="changeNumberOfUnits('plus', ${pp_item.id})">+</div>           
                <div class="number">${pp_item.numberOfUnits}</div>
                <div class="btn minus" onclick="changeNumberOfUnits('minus', ${pp_item.id})">-</div>
            </div>
        </div>
    `
        
    });
    
}

// js28 change number of ounits

/* 

return
action, id

10 cart 안의 item.id === conclikc으로 넘어온 id
minus + 1
plus + instock

item.id != onclic id
return



*/

function changeNumberOfUnits(action, id) {
    
}