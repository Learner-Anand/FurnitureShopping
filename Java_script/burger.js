// burger=document.querySelector('.burger')
// navbar=document.querySelector('.navbar')
// rightnav=document.querySelector('.rightnav')
// cross=document.querySelector('.cross')



// burger.addEventListener('click',()=>{
//     rightnav.classList.toggle('v-nav-resp');
//     navbar.classList.toggle('h-nav-resp')
//     cross.classList.toggle('v-nav-resp')
//     burger.classList.toggle('n-nav-resp')
// })


var rightnav= document.getElementById("rightnav");
var fullImg= document.getElementById("burger");

        function showslider(){
            rightnav.style.display="flex";
            burger.style.display="none";
            cross.style.display="flex";
            
         }

        function hideslider(){
            rightnav.style.display="none";
            cross.style.display="none";
            burger.style.display="flex";
        }

document.querySelector("#rightnav .home").addEventListener("click",function(){
    hideslider();
});
document.querySelector("#rightnav .contact").addEventListener("click",function(){
    hideslider();
});



// function showslider(){
//     const sidebar=document.querySelector('.rightnav')
//     sidebar.getElementsByClassName.display='flex'
// }
// function hideslider(){
//     const sidebar=document.querySelector('.rightnav')
//     sidebar.getElementsByClassName.display='none'
// }

