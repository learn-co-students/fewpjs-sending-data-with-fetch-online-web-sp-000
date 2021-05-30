// Add your code here
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };

// const configuartionObject = {
//   method: "POST",
//   headers: {
//     "Contetn-Type": "application/json",
//     "Accept": "application/json",
//   },
//   body: JSON.stringify(formData)
// };

// fetch("http://localhost:3000/dogs", configObj)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object);
//   })
//   .catch(function(error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });


  function submitData(username, userEmail) {
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: username,
        email: userEmail
      })
    };

    return fetch("http://localhost:3000/users", configObj)
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        document.body.innerHTML = object["id"];
      })
      .catch(function(error) {
       document.body.innerHTML = error.message
      });
  }