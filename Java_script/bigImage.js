let fullImgBox= document.getElementById("fullImgBox");
let product_numb = document.querySelector(".card_heading")
let fullImg= document.getElementById("fullImg");

let imgPrice = document.querySelector("#Price");

// console.log(product_numb.innerText)
function openFullImg(pic,rate,cattype){
    fullImgBox.style.display="flex";
    fullImgBox.dataset.id=cattype;
    fullImg.src=pic;
    // console.log(fullImg.src)
    product_numb.innerText = `Product id is ${cattype}`;
    imgPrice.innerText = `Price :- RS ${rate}`;
    }

function closeFullImg(){
    fullImgBox.style.display="none";
}