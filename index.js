// Add your code here
let submitData = {
    name: "Donna",
    email: "donna@donna.com"
  };
   
  // method: "POST" is missing from the object below
  let configObj = {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(submitData) 
  };
   
  fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
    })
    .catch(function(error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
    }); 