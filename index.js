// Add your code here

function setFormData(userName, userEmail){
  let myData = {
  }
  myData.name = userName;
  myData.email = userEmail;
  return myData;
}

function createConfigObject(formData){
  let myConfigObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
  return myConfigObject;
};

function displayNewID(newID){
  let element = document.getElementById('returned_id');
  element.innerHTML = newID;
};

function displayError(message){
  let element = document.getElementById('returned_error');
  element.innerHTML = message;
};

function postRequest(configObj){
  return fetch("http://localhost:3000/users", configObj)
          .then(function(response) {
            return response.json();
          })
          .then(function(object) {
            console.log("this is what was returned")
            console.log("ID = " + object.id)
            console.log(object);
            displayNewID(object.id)
          })
          .catch(function(error) {
            console.log(error.message);
            displayError(error.message);
          });
};

function submitData(userName, userEmail){
  let myPost = postRequest(createConfigObject(setFormData(userName, userEmail)));
  return myPost;
};
  

  

 