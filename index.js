function submitData(name, email) {
    
    const userUrl = "http://localhost:3000/users"
    let formData = {
        name, 
        email
        }
    const fetchOptions = {
       method: "POST",
       headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
       },
       body: JSON.stringify(formData)       
    }
    return fetch(userUrl, fetchOptions)
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