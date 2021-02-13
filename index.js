// Add your code here

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
//     .catch(function(error) {
//         alert("Bad things! Ragnarok!");
//         console.log(error.message);
//     });

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
        .then(resp => resp.json())
        .then(function(obj) {
            // const h1 = document.createElement('h1');
            // h1.innerText = obj.id;
            // const body = document.querySelector('body');
            // body.appendChild(h1);
            document.body.innerHTML = obj.id;
        })
        .catch(function(error) {
            // const p = document.createElement('p');
            // p.innerText = error.message;
            // const body = document.querySelector('body');
            // body.appendChild(p);
            document.body.innerHTML = error.message;
        });
}

