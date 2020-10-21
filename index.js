// Add your code here

const body = document.getElementsByTagName('body')[0]

let formData = {
    name: "Steve",
    email: "steve@steve.com"
};

let configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
};

function submitData() {
    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        body.innerHTML = object.id;
    })
    .catch(function(error) {
    alert("Unauthorized Access");
    body.innerHTML = error.message;
    });
};