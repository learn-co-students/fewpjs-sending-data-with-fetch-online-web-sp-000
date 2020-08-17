// Add your code here
function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    }
    
    let configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    return fetch("http://localhost:3000/users", configObject)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        document.body.innerHTML = object.id;
        
    })
    .catch(function(error) {
        alert("uh oh");
        document.body.innerHTML = error.message;
    });
}

submitData("Sqweeps", "sqweep@email.com");