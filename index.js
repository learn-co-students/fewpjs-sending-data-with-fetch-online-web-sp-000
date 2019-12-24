// Add your code here
function submitData(name,email){
  let configurationObject = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name,
      email
    })
  }
  return fetch('http://localhost:3000/users',configurationObject)
    .then(resp=>resp.json())
    .then(function(json){
      console.log(json.id)
      document.body.innerHTML = json.id
    })
    .catch(function(message){
      document.body.innerHTML = message
    })
}

