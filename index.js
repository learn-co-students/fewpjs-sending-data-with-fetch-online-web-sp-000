// Add your code here
function submitData(name,email){
  let configurationObject = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email:email
    })
  }
  fetch('http://localhost:3000/users',configurationObject)
    .then(resp=>resp.json())
    .then(function(json){
      console.log(json.id)
      document.body.innerHTML = json.id
    })
}

function addJsonToDom(json){
   console.log(json.id)
  
}