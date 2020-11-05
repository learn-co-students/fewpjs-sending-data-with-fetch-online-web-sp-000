// Add your code here
let userData = {
  name: "Steve",
  email: "steve@steve.com"
};

let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(userData)
}

const userURL = 'http://localhost:3000/users'
const body = document.querySelector('body');
const idElement = document.createElement('div');
const errorMessage = document.createElement('div');

let submitData = function() {
  fetch(userURL, configObj).then(function(response) {
    return response.json();
  })
  .then(function(object) {
    const id = object["id"];
    idElement.innerHTML = `${id}`
    body.appendChild(idElement);
  })
  .catch(function(error) {
    alert("Unauthorized Access");
    error.message = "Unauthorized Access";
    errorMessage.innerHTML = "<p>" + error.message + "</p>";
    body.appendChild(errorMessage);
  });
}
