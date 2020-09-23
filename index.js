// Add your code here

function submitData(formData) {

  let formData = {
    name: "Jennifer Beaver",
    email: "jen.lee.beaver@gmail.com"
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type":
      "application/json",
    },
    body: JSON.stringify
  };

  fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
    })
    .catch(function(error) {
      alert("There has been an error.");
      console.log(error.message);
    });
    return fetch 
}
