// Add your code here
function submitData(name, email) {
    const createUserUrl = "http://localhost:3000/users"
    const fetchOptions = {
       method: "POST",
       headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
       },
       body: JSON.stringify({
          name, 
          email
       })
    }
    return fetch(createUserUrl, fetchOptions)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log(json)
            const newId = document.createElement("p")
            newId.textContent = json["id"]
            document.body.appendChild(newId)
         })
         .catch(function(error) {
            const newErr = document.createElement("p")
            newErr.textContent = error.message
            document.body.appendChild(newErr)
      });
   }
