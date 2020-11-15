// Add your code here



function submitData(username, useremail){
    
    return fetch('http://localhost:3000/users', {
        method: "Post",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify({
            name: username,
            email: useremail
        })
    })
    .then(function(response){
        return response.json() // convert [Response][response] to an object
    })
    .then(function(object){
        document.body.innerHTML = object['id'] // impt to use innerHTML here to get test to pass
    })
    .catch(function(error){
        document.body.innerHTML = error.message
    })
    
}