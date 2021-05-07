// Add your code here
const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: {
    name: "",
    email: ""
  }
}

function submitData(name, email) {
  configurationObject.body = JSON.stringify({
    name,
    email
  })
  // configurationObject.body.name = name
  // configurationObject.body.email = email
  // JSON.stringify(configurationObject.body)
  return fetch('http://localhost:3000/users', configurationObject)
  .then(resp => resp.json())
  .then(json => {
    let id = json.id
    let h3 = document.createElement('h3')
    h3.innerHTML = id
    document.body.appendChild(h3)
  })
  .catch(error => {
    let p = document.createElement('p')
    p.innerHTML = error.message
    document.body.appendChild(p)
  })
}

submitData('Steve Wilson','s.wilson@gmail.com')