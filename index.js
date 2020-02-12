// Add your code here



function submitData(userName, userEmail) {

    let formData = {
        name: userName,
        email: userEmail
    }

    let configObj = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
            
    }

    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        document.body.innerHTML += `<h1>${json.id}</h1>`
      })
      .catch(function(error) {
        if (error.message){
            document.body.innerHTML += `<h1>${error.message}</h1>`
        }
      });
}