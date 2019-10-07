function submitData(userName, userEmail) {
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
    .then(function (response) {
      return response.json()
    })
    .then(function (object) {
      console.log(object.id)
      let id = object.id
      let idDiv = document.createElement('div')
      idDiv.textContent = id
      document.body.appendChild(idDiv)
    })
    .catch(error => {
      let div = document.createElement('div')
      div.textContent = error.message
      document.body.appendChild(div)
    });
}
