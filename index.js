function submitData(name, email) {
  let formData = {
    name: name,
    email: email,
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      let p = document.createElement('p');
      document.body.appendChild(p);

      let par1 = document.querySelector('p')
      par1.innerHTML += `${object.id}`
    })
    .catch(function(error) {
      alert("uh oh")
      let par2 = document.querySelector('p')
      par2.innerHTML += `${error.message}`
    })
};
