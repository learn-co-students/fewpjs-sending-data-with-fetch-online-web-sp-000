// Add your code here



const usersUrl = "http://localhost:3000/users"

function submitData(name, email) {

  let formData = {
    name: name,
    email: email
  }

let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
}

return fetch(usersUrl, configObj)
  .then(function(response) {
    return response.json()
  })
  .then(function(object) {
    appendIdToDOM(object)
  })
  .catch(function(error) {
    appendErrorToDom(error);
  })
}

  function appendIdToDOM(object){
    const h2 = document.createElement('h2')
    h2.innerHTML = object.id
    document.getElementById('id').appendChild(h2)
  }

  function appendErrorToDom(error){
    const p = document.createElement('p')
    p.innerHTML = error.message
    document.getElementById('error').appendChild(p)
  }
