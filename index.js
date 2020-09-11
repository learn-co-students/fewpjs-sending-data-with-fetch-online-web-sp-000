function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      'name': name,
      'email': email
    })
  })
    .then(function(resp) {
      return resp.json()
    })
    .then(function(obj) {
      let div = document.createElement('div')
      div.textContent = obj.id
      document.body.appendChild(div)
    })
    .catch(function(err) {
      let div = document.createElement('div')
      div.textContent = err.message
      document.body.appendChild(div)
    })
}
