function submitData(userName, userEmail ) {
  let user = {
    name: userName,
    email: userEmail
  };
  let obj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(user)
  };
    return fetch("http://localhost:3000/users", obj)
    .then(function(response) {
     return response.json();
    })
    .then(function(object) {
      let body = document.querySelector("body")
      let newObj = document.createElement("P")
      newObj.innerHTML = object.id 
      body.appendChild(newObj)  
    })
    .catch(function(error) {
      let body = document.querySelector("body")
      let message = document.createElement("P")
      message.innerHTML = error.message
      body.appendChild(message) 
     });
  }
  
  
  