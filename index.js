// Add your code here
// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
   
//   let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
   
//   fetch("http://localhost:3000/dogs", configObj)
//     .then(resp => resp.json())
//     .then(obj => console.log(obj))
//     .catch(error => {
//         alert("Bad");
//         console.log(error.message); 
//     });
const ul = document.getElementById('id-lists');
const body = document.querySelector('body');

function submitData(name, email){
    let data = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    };
    // console.log(configObj);

    return fetch("http://localhost:3000/users", configObj)
        .then(resp => resp.json())
        .then(json => {
            console.log(json);
            const li = document.createElement('li');
            li.innerHTML = json.id;
            ul.appendChild(li);
        })
        .catch(error => {
            alert("Bad");
            const p = document.createElement('p');
            p.innerHTML = error.message;
            body.appendChild(p);
            console.log(error.message); 
        });
    }