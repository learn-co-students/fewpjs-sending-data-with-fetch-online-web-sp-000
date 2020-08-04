
// let formData = { dogName: "Byron", dogBreed: "Poodle"};
// let configurationObject = {
//     // method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// }

// function addBreed() {
//     fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function(response) { return response.json(); })
//     .then(function(object) { console.log(object); })
//     .catch(function(error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//     })
// }


function submitData(userName, userEmail) {
    let configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"},
        body: JSON.stringify({name: userName, email: userEmail})
    }
    
    return fetch("http://localhost:3000/users", configurationObject)
    .then(function(response) { return response.json() })
    .then(function(object) { 
        // console.log(object);
        document.body.innerHTML = object.id })
    .catch(function(error) {
        // alert(error);
        document.body.innerHTML = error
    })
}