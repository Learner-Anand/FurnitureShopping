let heading = document.querySelector(".category h3");
let moreImg = document.querySelector(".moreImg");
let cat_section = document.querySelector(".cat-section");
let contact_us = document.querySelector(".contact-us");
let feedback = document.querySelector(".signin");
let nextBtn = document.querySelector('.next');



function categoryMode(name){
    heading.innerText=`Welcome to ${name} Section`;
    contact_us.style.display = "none";
    feedback.style.display = "none";
    catName = name;
    
    if(moreImg.innerText == ""){
        let moreBtn = document.createElement("button");
        moreBtn.innerHTML="More&raquo;";
        moreBtn.setAttribute("class","next")
        moreBtn.setAttribute("onclick","nextImages()");
        moreImg.append(moreBtn);
        cat_section.innerHTML="";
        nextImages();
    }
}

let productNo=1;
let nextImg=0;
let productImg = catName[nextImg][0];
let productPrice = catName[nextImg][1];

function createCard(productNo,productImg,productPrice){
    let boxCard = document.createElement("div");
    let catDetails = document.createElement("div");
    let cardHeading = document.createElement("h2");
    let cardImg = document.createElement("img");
    let cardPrice = document.createElement("h2");
    let addToCart = document.createElement("button");

    boxCard.setAttribute("class","box","card");
    boxCard.setAttribute("name",productNo)
    addToCart.setAttribute("class","addToCart");
    cat_section.append(boxCard);
    boxCard.append(catDetails,cardImg,cardPrice);
    // fullImgBox``.append(addToCart);
    catDetails.append(cardHeading);
    // addToCart.innerText="Add to Cart"
    cardHeading.innerText=`Product ${productNo}`;
    cardImg.src=productImg;
    cardPrice.innerText=`₹ ${productPrice}`;
    cardImg.addEventListener('click', function (e){
        console.log(productImg);
        openFullImg(this.src,productPrice);
        return;
    });
}

let nextImages=()=>{
    for (let i = 0; i < 5;i++) {

        console.log(nextImg)
        createCard(productNo,catName[nextImg][0],catName[nextImg][1])
        
        productNo++;
        nextImg++;
        console.log(catName.length)
        if( catName.length == nextImg){
            nextBtn.remove();
            break;
        }        
    }
    
}