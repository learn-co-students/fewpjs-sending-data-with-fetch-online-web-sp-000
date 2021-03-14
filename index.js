function submitData (name, email){
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
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(object => {
      document.body.innerHTML = object.id
    })
    .catch(error => {
      document.body.innerHTML = error.message
    });
}
