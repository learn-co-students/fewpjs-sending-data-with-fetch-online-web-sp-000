function submitData(name, email) {

    let formData = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(function(response){
            return response.json();
        })
        .then(function(obj){
            let h3 = document.createElement('h3');
            h3.innerHTML = obj.id;
            h3.innerText = obj.name;
            document.body.appendChild(h3);
            console.log(obj);
        })
        .catch(function(error){
            let h4 = document.createElement('h4')
            h4.innerHTML = error.message;
            document.body.appendChild(h4);
            console.log(error.message);
        });

}











// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// };

// let configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// };

// fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(object) {
//         console.log(object);
//     })
//     .catch(function (error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//     });




// fetch("http://localhost:3000/dogs", {
//     method: "POST",
//     headers: {

//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSOBStrinfigy({
//         dogName: "Byron",
//         dogBreed: "Poodle"
//     })
// });