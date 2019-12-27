// Add your code here
function submitData(name, email){
  /*let formData = {
    name: username,
    email: email
  };*/

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify( {
        name,
        email
      } )
  };

  return fetch('http://localhost:3000/users', configObj)
  .then(function(response) {
    //appendIt(response.json().id);
    return response.json();
  })
  .then(function(object) {
    //appendIt(object.id);
    //return object["id"];
    //id = object["id"];
    appendIt(object.id);
  })
  .catch(function(error) {
    appendIt(error.message);
  });
}

function appendIt(it){
  document.body.innerHTML = it;/*
  const divElement = document.createElement('div');
  divElement.innerHTML = `${it}`;
  document.body.append(divElement);*/
  //document.querySelector('body').innerHTML = `${it}`;
}

//submitData();
