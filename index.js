const { object } = require("chai-spies");

// Add your code here
 destinationURL = "http://localhost:3000/dogs"



configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
          dogName: "Byron",
          dogBreed: "Poodle"
      })
    
  };


  fetch(destinationURL, configurationObject)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  })
  .catch( err => {console.log(err.message)})

  function submitData(userName, userEmail){
    let userObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    }

    return fetch("http://localhost:3000/users", userObj)
    .then(response => response.json())
    .then(obj => {updateHeading(obj.id)})
    .catch( err => {updateHeading(err.message)})
  }

function updateHeading(data){
    heading = document.getElementById("heading")
    heading.innerHTML = data

