function submitData(name, email) {
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  }

  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      // let body = document.querySelector("body")
      let entry = document.createElement("h3")
      entry.textContent = `${object.id}`
      document.body.appendChild(entry)

      console.log(`Hi, I'm Mr. ${object}`)
    })
    .catch(function(error) {
      alert("Hold up..");
      console.log(error.message);
      
      let h3 = document.createElement("h3")
      h3.textContent = `${error.message}`
      document.body.appendChild(h3)

    });
}


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
 
// fetch("http://localhost:3000/dogs", configObj)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object);
//   });
