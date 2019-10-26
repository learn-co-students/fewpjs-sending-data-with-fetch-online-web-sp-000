// Add your code here

function submitData(name, email){
  let configurationObject = {
    method: 'POST',
    headers: {
      "Content-Type" : "application/json",
      Accept :"application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  };

  return fetch("http://localhost:3000/users", configurationObject)
  .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      document.querySelector('body').innerHTML = object["id"];

    })
    .catch(function(error) {
    alert("Unauthorized access");
    document.querySelector('body').innerHTML = error.message;
  });

}
