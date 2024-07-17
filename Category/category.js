let heading = document.querySelector(".category_name");
let nextBtn = document.querySelector('.next');
let cat_section = document.querySelector(".cat-section");

// access category name from url //
const queryString = window.location.search; 
const urlParams = new URLSearchParams(queryString);
const name = urlParams.get('name');
let catName = name;

heading.innerText = `Welcome to ${catName} Section`;

if(catName == "Almirah"){
    catName=Almirah;
}
else if(catName == "Bed"){
    catName = Bed;
}
else if(catName == "Door"){
    catName = Door;
}
else if(catName == "Dressing"){
    catName = Dressing;
}
else if(catName == "Kitchen"){
    catName = Kitchen;
}
else if(catName == "Led"){
    catName = Led;
}
else if(catName == "Mandir"){
    catName = Mandir;
}
else if(catName == "ShoeRack"){
    catName = ShoeRack;
}
else if(catName == "Sofa"){
    catName = Sofa;
}
else if(catName == "Stool"){
    catName = Stool;
}
else if(catName == "Table"){
    catName = Table;
}
else if(catName == "Window"){
    catName = Window;
}


let productNo=1;
let nextImg=0;
let productImg = catName[nextImg][0];
let productPrice = catName[nextImg][1];


while(nextImg < 10) {
    createCard(productNo,catName[nextImg][0],catName[nextImg][1]);
    productNo++;
    nextImg++;
    console.log(productNo);
    if( catName.length == nextImg){
        nextBtn.remove();
        break;
    }   
}

function createCard(productNo,productImg,productPrice){
    let boxCard = document.createElement("div");
    let catDetails = document.createElement("div");
    let cardHeding = document.createElement("h2");
    let cardImg = document.createElement("img");
    let cardPrice = document.createElement("h2");

    boxCard.setAttribute("class","box","card","translate");
    boxCard.setAttribute("name",productNo);
    cat_section.append(boxCard);
    boxCard.append(catDetails,cardImg,cardPrice);
    catDetails.append(cardHeding);
    cardHeding.innerText=`Product ${productNo}`;
    cardImg.src=productImg;
    cardPrice.innerText=productPrice;
    let prod_name = name+productNo
    cardImg.addEventListener('click', function (e){
        // console.log(productImg);
        openFullImg(this.src,productPrice,prod_name);
        return;
    });
}

function nextImages(){
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



