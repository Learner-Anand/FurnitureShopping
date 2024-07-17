const form = document.getElementById('login-form');
const responseDiv = document.getElementById('response');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch('login.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  .then(response =>response.json())
  .then(data => {
    if(data.success) {
        responseDiv.innerHTML = data.message;
    }else{
        responseDiv.innerHTML = data.message;
    }
  })
})