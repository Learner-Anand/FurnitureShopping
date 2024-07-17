// Select all filter buttons and filterable cards
const filterButtons = document.querySelectorAll(".filter_buttons button");
const catSection = document.querySelectorAll(".cat-section .box");
   
//Define the filterCards function
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    console.log(e.target);

    //Iterate over each filterable card
    catSection.forEach(card => {
        //Add "hide" class to hide the card initially
        card.classList.add("hide");
        //Check if the card matches the selected filter or "all" is selected
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide");
        }
    })
};

//Add click event listener to each filter button
filterButtons.forEach(button => button.addEventListener("click",filterCards));