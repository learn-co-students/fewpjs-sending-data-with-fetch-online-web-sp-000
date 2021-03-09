let userData = {
  name: "Steve",
  email: "steve@steve.com"
};

const configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(userData)
};

function submitData() {
  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      document.body.innerHTML = object['id'];
    })
    .catch(function(error) {
      alert("Oh Dear Lord");
      document.body.innerHTML = error.message
    })
}