// fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//         return response.json() //response- what the server sent back to us. json() is built-in method, converts body of script from json to js object, returns result
//     })
//     .then(function(object) { //makes use of return value from above, deals with that data
//         console.log(object)
//     })
//     //log returned: {dogName: "Byron", dogBreed: "Poodle", id:6}, id created by server 

// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// }

// let configObj = {
//     method: "POST"
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": 'application/json'
//     },
//     body: JSON.stringify({formData
// }

//use catch(function(error)) to return an error if one is hit- otherwise then is silent

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": 'application/json'
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(function(response) {
        return response.json() 
    })
    .then(function(object) { 
        document.body.innerHTML = object["id"]
    })
    .catch(function(error) {
        document.body.innerHTML = error.message
    }
    )

}
