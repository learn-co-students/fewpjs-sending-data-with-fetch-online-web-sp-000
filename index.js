function submitData(name, email){
  let fData = {
    name: name,
    email: email
  };
  
  let configdObj = {
    method: 'Post',
    headers: {
      "Content-Type":"application/json",
      "Accept":"application/json"
    },
    body: JSON.stringify(fData)
  };
  
  return fetch('http://localhost:3000/users',configdObj)
  .then(response => response.json())
  .then(json => {
    let insertion = document.createElement('h2');
    insertion.innerHTML = json.id;
    document.body.appendChild(insertion);
  })
  .catch(error => {
    let insertion = document.createElement('h3');
    insertion.innerHTML = error.message;
    document.body.appendChild(insertion);
  })
}
 