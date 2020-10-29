// Add your code here
function submitData(userName, userEmail){
  let formData = {
      name: userName,
      email: userEmail
    };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };

  return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
    })
    .then(function(object) {
      return addToDOM(object.id);
    })
    .catch(function(error) {
    alert("Bad things! Ragnarők!");
    addToDOM(error.message);
    });
}

function addToDOM(stuff) {
  let body = document.querySelector('body')
  let header = document.createElement('h1')
  header.innerHTML = stuff
  body.appendChild(header);
}
