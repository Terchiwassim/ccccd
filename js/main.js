//open close cart

var cart =document.querySelector('.cart');

function open_cart() {
    cart.classList.add("active")
}
function close_cart() {
    cart.classList.remove("active")
}
// add itimes in cart

var all_products_json;

var items_in_cart = document.querySelector(".items_in_cart");
let product_cart = [];

function addtocart(id , btn) {
    product_cart.push(all_products_json[id])
    btn.classList.add("active")
    console.log(product_cart);
    getCartItems()
}



 let count_item = document.querySelector('.count_item');
 let count_item_cart = document.querySelector('.count_item_cart');
 let price_cart_total = document.querySelector('.price_cart_total');
 let price_cart_head = document.querySelector('.price_cart_head');

function getCartItems() {
    let total_price = 0;
    let items_c = "";
    for (let i = 0; i < product_cart.length; i++) {
       items_c += `
         
        <div class="item_cart">
                <img src="${product_cart[i].img}" alt="">
                <div class="content">
                    <h4>${product_cart[i].name}</h4>
                    <p class="price_cart">${product_cart[i].price}</p>
                </div>
                <button onclick="remove_from_cart(${i})" class="delete_item"><i class="fa-solid fa-trash-arrow-up"></i></button>
           </div>

       `
       total_price += product_cart[i].price
    }
    items_in_cart.innerHTML = items_c

    price_cart_head.innerHTML = "$" + total_price
    count_item.innerHTML = product_cart.length

    count_item_cart.innerHTML = `(${product_cart.length}item in cart)`
    price_cart_total.innerHTML = "$" + total_price

}


function remove_from_cart(index) {
    product_cart.splice(index,1)
    getCartItems()

    let addToCartButtons = document.querySelectorAll(".fa-cart-arrow-down")
    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].classList.remove("active")

        product_cart.forEach(product =>{
            if (product.id == i) {
                addToCartButtons[i].classList.add("active")
                }
            }
        )

        
    }
}

// back to top

 let back_to_top = document.querySelector(".back_to_top")

 back_to_top.addEventListener("click" , function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
 })
