let listProductHTML = document.querySelector('.full-img');
let iconCart = document.querySelector('.icon_cart');
let closeCart = document.querySelector('.close');
let cartSec =document.querySelector('.cartSec');
let checkOut = document.querySelector('.checkOut');
// let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCartSpan = document.querySelector('.icon_cart span');
let total_money = document.querySelector('.total_money');

let listProducts = [];
let carts = [];

checkOut.addEventListener('click', ()=> {
    console.log('Total Money');
})

iconCart.addEventListener('click', () => {
    cartSec.classList.toggle('showCart');

});
closeCart.addEventListener('click', () => {
    cartSec.classList.toggle('showCart')
});

const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    if(listProducts.length > 0){
        listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.dataset.id = (product.id)
            newProduct.innerHTML = `
                <img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">${product.price}</div>
                <button class="addCart">
                    Add To Cart
                </button>
             `;
             listProductHTML.appendChild(newProduct);
        })
    }
}
listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let product_img = positionClick.parentElement.parentElement.querySelector('img').src;
        let product_price = positionClick.parentElement.querySelector('p').innerText.substring(12);
        
        addToCart(product_id,product_img,product_price);    
    }
})

const addToCart = (product_id,product_img,product_price) => {
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
    // console.log(positionItemInCart);
    // console.log(carts);
    if(carts.length <= 0){
        carts = [{
            product_id: product_id,
            product_img: product_img,
            product_price: product_price,
            quantity: 1
        }]
    }else if(positionThisProductInCart < 0){ 
        carts.push({
            product_id: product_id,
            product_img: product_img,
            product_price: product_price,
            quantity: 1
        })
    }else{
        carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
    addCartToMemory();
}

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(carts));
}

const addCartToHTML = () => {
    listCartHTML.innerHTML =``;
    let totalQuantity = 0;
    let totalMoney = 0;

    if(carts.length > 0){
        carts.forEach(cart=> {
            totalQuantity = totalQuantity + cart.quantity;
            let newCart = document.createElement('div');
            newCart.classList.add('item');
            newCart.dataset.id = cart.product_id;
            let totalPrice = cart.product_price * cart.quantity; 
            totalMoney = totalMoney + totalPrice;
            total_money.innerText = `${totalMoney} RS`;
            let positionProduct = listProducts.findIndex((value) => value.img_id == cart.product_id.toLowerCase());
            // console.log(positionProduct);
            let info = listProducts[positionProduct];
            // console.log();
            newCart.innerHTML = `
            <div class="image">
            <img src="${cart.product_img}" alt="">
                </div>
                <div class="name">
                    ${cart.product_id}
                </div>
                <div class="totalPrice">
                RS ${totalPrice}
                </div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${cart.quantity}</span>
                    <span class="plus">></span>
                </div>
                `;
        listCartHTML.appendChild(newCart);
        })
    }
    else{
        total_money.innerText = `0 RS`;
    }
    iconCartSpan.innerText = totalQuantity;
}
listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantity(product_id, type);
    }
})

const changeQuantity = (product_id, type) => {
    let positionItemInCart = carts.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart => 0){
        switch (type) {
            case 'plus':
                carts[positionItemInCart].quantity = carts[positionItemInCart].quantity + 1;
                break;
            default:
                let valueChange = carts[positionItemInCart].quantity - 1;
                if(valueChange > 0){
                    carts[positionItemInCart].quantity = valueChange;
                }else{
                    carts.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToMemory();
    addCartToHTML();
}
        
const  initApp=  async() => {
    let response = await fetch('../../api_building/api.php?categoryType='+catName);
    // console.log(response);  //json format
    data = await response.json();
    // console.log(data[0].img_src);
    listProducts = await data;
         
    // await addDataToHTML();

    // get cart from memory
    if(localStorage.getItem('cart')){
        carts = JSON.parse(localStorage.getItem('cart'));
        addCartToHTML();
    }
}
initApp();