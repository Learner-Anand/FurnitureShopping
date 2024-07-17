fetch('api.php')
    .then(response => response.json())
    .then(data => {
        // Do something with the data
        console.log(data);
 
        // Display data on the page
        // data.forEach(item => {
        //     const html = `
        //     <div>
        //     <h2>${item.img_id}</h2>
        //     <p>${item.img_src}</p>
        //     </div>`;
        //     document.body.insertAdjacentHTML('beforeend',html);
        // });
    })
    .catch(error => {
        // Handle error
        console.error(error);
    });




        // let heading = document.querySelector(".heading");
        // let img = document.querySelector("img");
        // let price = document.querySelector(".price");
        
        // heading.innerText = data[0].img_id;
        // img.src = data[0].img_src;
        // price.innerText = data[0].price