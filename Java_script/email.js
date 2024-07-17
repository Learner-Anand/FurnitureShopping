//function to send the message when click on button send

function sendMsg(e){
    e.preventDefault();
    const form =document.querySelector('.contac_form'),
          name =document.querySelector('.name'),
          email =document.querySelector('.email'),
          msg =document.querySelector('.msg');
     


//functio Send Email ....

Email.send({
    SecureToken:"",
    To: 'ankushverma1683@gmail.com',
    From: "ava",
    Subject: "Contact Details",
    Body: f,
}).then(
    message => alert(message)
);

}

//add the event listner submit

form.addEventListener('submit'.sendMsg)