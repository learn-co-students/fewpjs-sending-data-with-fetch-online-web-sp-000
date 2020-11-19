// Add your code here

function submitData(name, email) {
   let destinationURL = "http://localhost:3000/users";
   let userData = {
      name: `${name}`,
      email: `${email}`
   }
   let configObj = {
      method: "POST",
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
      },
      body: JSON.stringify(userData)
   }
   return fetch(destinationURL, configObj)
      .then(function(response) {
         return response.json();
      })
      .then(function(object) {
         // debugger;
         let body = document.querySelector("body");
         body.innerHTML = object.id;
      })
      .catch(function(error) {
         let body = document.querySelector("body");
         body.append(error.message);
      });
}
