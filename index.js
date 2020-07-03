// Add your code here

function submitData (name, email) {
  const formData = {
    name: name,
    email: email
  }

  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(formData)
  }

  return fetch('http://localhost:3000/users', configObj)
    .then(r => {
      return r.json()
    })
    .then(o => {
      document.body.innerHTML = o.id
    })
    .catch(e => {
      document.body.innerHTML = e.message
    })
}
