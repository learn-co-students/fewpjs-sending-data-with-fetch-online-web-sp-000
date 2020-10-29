
// let configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         name, 
//         email
//     })
// };


function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
        .then(resp => resp.json())
        .then(result => {
            document.body.innerHTML = result['id']
        })
        .catch(error =>  {
            document.body.innerHTML = error.message 
        })
};
