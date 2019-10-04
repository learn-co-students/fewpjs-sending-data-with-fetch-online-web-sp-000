// Add your code here

function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json',
      "Accept": 'application/json';
    },
    body: stringify.JSON()
  })
}
