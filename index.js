// Add your code here
function submitData(username, userEmail){
  let userData = {
    name: username,
    email: userEmail
  };

  let configObject = {
    method: "POST",
    headers: {
      "Content-Type": 'application/json',
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  };

  return fetch("http://localhost:3000/users", configObject)
    .then(resp => resp.json())
    .then(json => appendId(json))
    .catch(error => appendError(error));

  function appendId(json){
    const body = document.querySelector("body");
    let p = document.createElement("p")
    p.innerHTML = json.id;
    body.appendChild(p);
    //console.log(json);
  }

  function appendError(error){
    const body = document.querySelector("body");
    let p = document.createElement("p")
    p.innerHTML = error.message;
    body.appendChild(p);
  }
}