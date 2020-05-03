function submitData(userNameString, userEmailString) {
  let userData = {
    name: userNameString,
    email: userEmailString
  };
  
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  };
  
  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
      appendIdToDom(object);
    })
    .catch(function(error) {
      console.log(error.message);
      appendMessageToDom(error.message);
    });
};

function appendIdToDom(object) {
  let objId = object.id;
  console.log(objId)
  let el = document.createElement('div');
  el.innerHTML = objId;
  document.body.appendChild(el);
};

function appendMessageToDom(message) {
  let el = document.createElement('div');
  el.innerHTML = message;
  document.body.appendChild(el);
};


 