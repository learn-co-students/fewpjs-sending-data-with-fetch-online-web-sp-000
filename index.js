function submitData(name, email) {
  let data = {
    name: name,
    email: email
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      let element = document.createElement('div')
      element.innerHTML = object["id"]
      document.querySelector('body').appendChild(element)
    })
    .catch(function(error) {
      document.body.innerHTML = error.message
    });
};
