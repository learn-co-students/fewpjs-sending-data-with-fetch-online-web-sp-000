// Add your code here

// fetch("http://localhost:3000/dogs", {
//     method: "POST", 
//     headers: { 
//         "Content-Type": "application/JSON", 
//         "Accept" : "application/JSON"
//     }, 
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle"
//     })
// });


function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST", 
        headers: {
            "Content-Type": "application/json", 
            "Accept": "application/json"
        }, 
        body: JSON.stringify({
            name, 
            email
        })
    })
    .then(function(response) {
        return response.json();
    })

    .then(function(object) {
        document.body.innerHTML = object["id"];
    })

    .catch(function(error) {
        document.body.innerHTML = error.message
    })
}


