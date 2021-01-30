 
// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// };

// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };

// fetch("http://localhost:3000/dogs", configObj);

 
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

  function submitData(username, email) {
    let userData = {
      name: username,
      email: email
    }
    return fetch("http://localhost:3000/users", {
    // let headerData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userData)
    })
   
  .then(function(response) {
        return response.json()
      })
      .then(function(object) {
        console.log("lkjasdglkjasdgasdgflkadsglkjasgdelkj")
        let p = document.createElement("p")
document.body.innerHTML = object['id']
        console.log(object)
      })
  .catch (function(error) {

    document.body.innerHTML = error.message
  });
  }
  // let configObj = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Accept": "application/json"
  //   },
  //   body: JSON.stringify(formData)
  // };
  
  // fetch("http://localhost:3000/dogs", configObj);

  