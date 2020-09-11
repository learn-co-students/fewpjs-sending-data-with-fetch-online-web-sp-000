// Add your code here
function submitData(name, email){
  let userData = {
    name: name,
    email: email
  };

  let configObj = {
    method: "Post",
    headers: {
      "Content-Type" : "application/json",
      "Accept" : "application/json"
    },
    body: JSON.stringify(userData)
  };
  return fetch("http://localhost:3000/users", configObj)
    .then(function(resp) {
      return resp.json();
    })
    .then(function(object) {
      let h2 = document.createElement('h2');
      h2.innerHTML = object.id;
      document.body.appendChild(h2)
      console.log(object)
    })
    .catch(function(error) {
      let h3 = document.createElement('h3');
      h3.innerHTML = error.message;
      document.body.appendChild(h3);
      console.log(error.mesage);
    });

}
