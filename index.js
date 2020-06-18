function submitData(name, email) {
    
    let configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email 
        })
    };

   return fetch("http://localhost:3000/users", configObject) // Remember to include return!
        .then(function(response) {
            return response.json(); // Return our response
        })
        .then(function(object) {
            document.body.innerHTML = object["id"]
        })
        .catch(function(error) {
            alert("Unauthorized Access");
            document.body.innerHTML = error.message
      });
}
