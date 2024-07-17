const sign_in_form = document.querySelector(".sign_in_form")
const create_account = document.querySelector(".create_account")
const forget_form = document.querySelector(".forget_form")

const formBtn = document.querySelectorAll(".form-element button")
formBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let errorMsg = "";
        e.preventDefault()
        let inputsAre = e.target.parentElement.parentElement.querySelectorAll("input")
        inputsAre.forEach((input,i)=>{
            if (inputsAre.length != i+1){
                validation(input)
            }
        })
        if(errorMsg){
            alert(errorMsg)
        }
        function validation(input){
            console.log(input.type);
            switch(input.type){
                case 'text':
                    if(input.value.length < 5){
                        errorMsg = "Wrong ID or/and password"
                    }
                case 'password':
                    if (!errorMsg){
                        if(input.value.length < 8){
                        errorMsg = "Please enter at least 8 charactors in Password"
                        }
                    }
            }
        }
        
    })
});

document.querySelectorAll("form form-element button").forEach(btn => {
    btn.addEventListener('')
})

document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
    // hideslider();
    document.querySelector(".login_section").classList.add("login_active");
    // hideslider();
});

document.querySelector(".popup .close-btn").addEventListener("click",function(){
    sign_in_form.classList.remove("login_form");
    forget_form.classList.remove("display_forget_form");
    document.querySelector(".create_account").classList.remove("display_create");
    document.querySelector(".login_section").classList.remove("login_active");
    document.querySelector(".popup").classList.remove("active");
    document.querySelector(".forget_form").classList.remove("display_forget_password")
});
document.querySelector(".cancel_forget").addEventListener("click",function(){
    document.querySelector(".form").classList.remove("login_form","active");
    document.querySelector(".form").classList.add("active");
    document.querySelector(".forget_form").classList.remove("display_forget_form");
});

document.querySelector(".create_new").addEventListener("click", ()=>{
    document.querySelector(".create_account").classList.add("display_create");
    document.querySelector(".create_account").classList.add("active");
    document.querySelector(".form").classList.add("login_form","active");
});
document.querySelector(".create_New").addEventListener("click", ()=>{
    document.querySelector(".forget_form").classList.remove("display_forget_form");
    document.querySelector(".create_account").classList.add("display_create");
    document.querySelector(".create_account").classList.add("active");
    document.querySelector(".form").classList.add("login_form","active");
});

document.querySelector(".login_account").addEventListener("click",() => {
    document.querySelector(".create_account").classList.remove("display_create");
    document.querySelector(".create_account").classList.remove("active");
    document.querySelector(".form").classList.remove("login_form","active");
    document.querySelector(".form").classList.add("active");
});

document.querySelector(".form-element .forget_password").addEventListener("click", () => {
    document.querySelector(".forget_form").classList.add("display_forget_form");
    document.querySelector(".form").classList.add("login_form","active");
})
