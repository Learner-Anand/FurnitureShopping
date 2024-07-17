// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const searchIcon = document.querySelector(".searchIcon");

let lisTProducts = [];
let image_src = [];
const apiCalling = async () => {
  let response = await fetch("../../api_building/api.php?categoryType=img_id");
  lisTProducts = await response.json();

  let src_fetch  = await fetch("../../api_building/api.php?categoryType=search");
  image_src = await src_fetch.json();
  
  // data = await response.json();
  // lisTProducts = await data;
  await matchData();
};
apiCalling();

const matchData = () => {  
  inputBox.onkeyup = (e) => {
    let userData = e.target.value; //user entered data
    let emptyArray = ['1','2'];
    if (userData) {
      emptyArray = lisTProducts.filter((data) => {
        // console.log(lisTProducts);
        // filtering array value and user char to lowercase and return only those
        // word/sentc which are starts with user entered word
        return data
          .toLocaleLowerCase()
          .startsWith(userData.toLocaleLowerCase());
      });
      let temp = [];
      emptyArray.forEach((element)=>{
        let item = Object.values(image_src).find(items => items.img_id === element)

        temp.push("<div class ='searchRow'> <img src='" + item.img_src + "'>"+"<li>" + element + "</li> </div>");
        // console.log(temp);
      });
      // emptyArray = emptyArray.map((data) => {
      //   return "<img src=''>"+"<li>" + data + "</li>";
      // });
      // console.log(temp);
      searchWrapper.classList.add("active"); // show autocomplete box
      showSuggestions(temp);
      let allList = suggBox.querySelectorAll("li");
      for (let i = 0; i < allList.length; i++) {
        // adding onclick attribute in all li tag
        allList[i].setAttribute("onclick", "select(this)");
      }
    } else {
      searchWrapper.classList.remove("active"); // hide autocomplete box
    }
  };
};

function select(element) {
  let selectUserData = element.textContent;
  inputBox.value = selectUserData; // passing the user selected list item data in textfield
  searchWrapper.classList.remove("active"); // Hide autocomplete box
  suggBox.innerHTML = "";
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    listData = "<li>" + "Not Found";
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}

let search_img_id;
let search_img_src;
let search_price;

addToCartIcon.addEventListener('click',() => {
  if(localStorage.getItem('cart')){
    let temp = 1;
    carts.forEach((cart) => {
      let product = cart.product_id.toLowerCase() === search_img_id;      
 
      if(product == true){
        cart.quantity = cart.quantity + 1;
        localStorage.setItem('cart', JSON.stringify(carts));        
        window.location.reload();
        return;
      }
      else if (temp == carts.length){
        carts.push({
          product_id: search_img_id,
          product_src: search_img_src,
          product_price: search_price,
          quantity: 1
        })
        localStorage.setItem('cart', JSON.stringify(carts));   
        window.location.reload();
        return;
      }
      temp = temp + 1;
        console.log(cart);
      
      console.log(carts);
      return
    })
    // addCartToMemory();
  }
});

searchIcon.addEventListener('click',async() => {
  let fetchData  = await fetch("../../api_building/api.php?categoryType=search");
  allData = await fetchData.json();
  allData.forEach((element)=>{
    let item = Object.values(allData).find(items => items.img_id === inputBox.value);
    search_img_id = item.img_id;
    search_img_src = item.img_src;
    search_price = item.price;
    
    openFullImg(search_img_src,search_price,search_img_id);
    
      // carts[] = {product_id: item.img_id, product_img: item.src, product_price: item.price,  quentity: 1};



//     addToCart(item.img_id,item.img_src,item.price); 

//     const addCartToHTML = () => {
//       listCartHTML.innerHTML =``;
//       let totalQuantity = 0;
//       if(carts.length > 0){
  //           carts.forEach(cart=> {
//               totalQuantity = totalQuantity + cart.quantity;
//               let newCart = document.createElement('div');
//               newCart.classList.add('item');
//               newCart.dataset.id = cart.product_id;
//               let positionProduct = listProducts.findIndex((value) => value.img_id == cart.product_id.toLowerCase());
//               // console.log(positionProduct);
//               let info = listProducts[positionProduct];
//               // console.log();
//               newCart.innerHTML = `
//               <div class="image">
//               <img src="${cart.product_img}" alt="">
//                   </div>
//                   <div class="name">
//                       ${cart.product_id}
//                   </div>
//                   <div class="totalPrice">
//                   RS ${cart.product_price * cart.quantity}
//                   </div>
//                   <div class="quantity">
//                       <span class="minus"><</span>
//                       <span>${cart.quantity}</span>
//                       <span class="plus">></span>
//                   </div>
//                   `;
//           listCartHTML.appendChild(newCart);
//           })
//       }
//       iconCartSpan.innerText = totalQuantity;
//   }

//   listCartHTML.addEventListener('click', (event) => {
//     let positionClick = event.target;
//     if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
//         let product_id = positionClick.parentElement.parentElement.dataset.id;
//         let type = 'minus';
//         if(positionClick.classList.contains('plus')){
//             type = 'plus';
//         }
//         changeQuantity(product_id, type);
//     }
// })

// const changeQuantity = (product_id, type) => {
//   let positionItemInCart = carts.findIndex((value) => value.product_id == product_id);
//   if(positionItemInCart => 0){
//       switch (type) {
//           case 'plus':
//               carts[positionItemInCart].quantity = carts[positionItemInCart].quantity + 1;
//               break;
//           default:
//               let valueChange = carts[positionItemInCart].quantity - 1;
//               if(valueChange > 0){
//                   carts[positionItemInCart].quantity = valueChange;
//               }else{
//                   carts.splice(positionItemInCart, 1);
//               }
//               break;
//       }
//   }
//   addCartToMemory();
//   addCartToHTML();
// }

//     if(localStorage.getItem('cart')){
//       carts = JSON.parse(localStorage.getItem('cart'));
//       const changeQuantity = (product_id, type) => {
//         let positionItemInCart = carts.findIndex((value) => value.product_id == product_id);
//         if(positionItemInCart => 0){
//             switch (type) {
//                 case 'plus':
//                     carts[positionItemInCart].quantity = carts[positionItemInCart].quantity + 1;
//                     break;
//                 default:
//                     let valueChange = carts[positionItemInCart].quantity - 1;
//                     if(valueChange > 0){
//                         carts[positionItemInCart].quantity = valueChange;
//                     }else{
//                         carts.splice(positionItemInCart, 1);
//                     }
//                     break;
//             }
//         }
//         addCartToMemory();
//         addCartToHTML();
//     }

      // })
  // }
  });
});