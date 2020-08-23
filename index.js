// Add your code here
function submitData(name, email) {
  let formData = {
    name: name,
    email: email
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
      return response.json()
    })
    .then(function(object) {
      const id = object.id;
      const p = document.createElement('p')
      p.textContent = id;
      document.body.appendChild(p);
      console.log(p)
      console.log(document.body.innerHTML)
    })
    .catch(function(error) {
      const p = document.createElement('p')
      p.textContent = error.message;
      document.body.appendChild(p);
      console.log(p)
      console.log(document.body.innerHTML)
    });
};