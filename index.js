const { object } = require("chai-spies");

function submitData(name, email){
  let formData = {name, email};

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };


  return fetch("http://localhost:3000/users", configObj)
  .then(response => {return response.json();})
  .then(object => {document.body.innerHTML = object.id;})
  .catch(error => { document.body.innerHTML = error.message;});

}