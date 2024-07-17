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
    catName="Almirah";
}
else if(catName == "Bed"){
    catName = "bed";
}
else if(catName == "Door"){
    catName = "Door";
}
else if(catName == "Dressing"){
    catName = "Dressing";
}
else if(catName == "Kitchen"){
    catName = "Kitchen";
}
else if(catName == "Led"){
    catName = "Led";
}
else if(catName == "Mandir"){
    catName = "Mandir";
}
else if(catName == "ShoeRack"){
    catName = "ShoeRack";
}
else if(catName == "Sofa"){
    catName = "Sofa";
}
else if(catName == "Stool"){
    catName = "Stool";
}
else if(catName == "Table"){
    catName = "Table";
}
else if(catName == "Window"){
    catName = "Window";
}

// let resultData;


// Api Calling for fetch data from database
const apiCalling = async () => {
    // console.log("getting data....");
    let response = await fetch('../../api_building/api.php?categoryType='+catName);
    console.log(response);  //json format
    data = await response.json();
    // console.log(data[0].img_src);
    resultData = await data;
    // console.log(data);
    await startingPhotos();
}    

let resdata = apiCalling();

let productNo=1;
let nextImg=0;
let productId = resultData[nextImg].img_id;
let productImg = resultData[nextImg].img_src;
let productPrice = resultData[nextImg].price;

function startingPhotos (){
    while(nextImg < 10) {
        createCard(productNo,resultData[nextImg].img_id,resultData[nextImg].img_src,resultData[nextImg].price);
        productNo++;
        nextImg++;
        console.log(productNo);
        if( data.length == nextImg){
            nextBtn.remove();
            break;
        }   
    }
}


function createCard(productNo,productId,productImg,productPrice){
    let boxCard = document.createElement("div");
    let catDetails = document.createElement("div");
    let cardHeding = document.createElement("h2");
    let cardImg = document.createElement("img");
    let cardPrice = document.createElement("h2");

    boxCard.setAttribute("class","box","card","translate");
    boxCard.setAttribute("name",productNo);
    boxCard.setAttribute("data-id",productId);
    cat_section.append(boxCard);
    boxCard.append(catDetails,cardImg,cardPrice);
    catDetails.append(cardHeding);
    cardHeding.innerText=`Product ${productNo}`;
    cardImg.src=productImg;
    cardPrice.innerText=productPrice;
    let prod_name = name+productNo;
    cardImg.addEventListener('click', function (e){
        // console.log(productImg);
        openFullImg(this.src+"&sz=w1600",productPrice,prod_name);
        return;
    });
}

function nextImages(){
    for (let i = 0; i < 5;i++) {

        console.log(nextImg)
        createCard(productNo,resultData[nextImg].img_src,resultData[nextImg].price)
        
        productNo++;
        nextImg++;
        console.log(data.length)
        if( data.length == nextImg){
            nextBtn.remove();
            break;
        }        
    }
}

// function createCard(productNo,productImg,productPrice){
//     let boxCard = document.createElement("div");
//     let catDetails = document.createElement("div");
//     let cardHeding = document.createElement("h2");
//     let cardImg = document.createElement("img");
//     let cardPrice = document.createElement("h2");

//     boxCard.setAttribute("class","box","card","translate");
//     boxCard.setAttribute("name",productNo);
//     cat_section.append(boxCard);
//     boxCard.append(catDetails,cardImg,cardPrice);
//     catDetails.append(cardHeding);
//     cardHeding.innerText=`Product ${productNo}`;
//     cardImg.src=productImg;
//     cardPrice.innerText=productPrice;
//     let prod_name = name+productNo;
//     cardImg.addEventListener('click', function (e){
//         // console.log(productImg);
//         openFullImg(this.src+"&sz=w1600",productPrice,prod_name);
//         return;
//     });
// }

// function nextImages(){
//     let productNo=resdata[1];
//     let nextImg=resdata[0];
//     let productImg = resultData[nextImg].img_src;
//     let productPrice = resultData[nextImg].price;

//     for (let i = 0; i < 5;i++) {

//         console.log(nextImg)
//         createCard(productNo,productImg,productPrice)
        
//         productNo++;
//         nextImg++;
//         console.log(resultData.length)
//         if( resultData.length == nextImg){
//             nextBtn.remove();
//             break;
//         }        
//     }
// }