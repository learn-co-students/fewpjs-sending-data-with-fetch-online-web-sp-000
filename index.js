// Add your code here

function submitData(userName, userEmail) {
  let formData = {
    name: userName,
    email: userEmail
  }

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }

  fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
      // let newId = document.createElement('p');
      // newId.innerText = object.id.toString();
      document.body.innerText += object.id.toString();
    })
    .catch(function(error) {
      // let errorMessage = document.createElement('p');
      // errorMessage.innerText = error.message;

      document.body.innerText += error.message;
    });
}
