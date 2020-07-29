// Add your code here

function submitData(name, email) {
    //get data from form
    let userData = {
        name: name,
        email: email
    };
    // set the post config
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    };
    //post
    return fetch('http://localhost:3000/users', configObj )
        .then(resp => resp.json())
        .then(obj => {
            document.body.innerHTML = obj.id
            console.log(obj)
        })
        .catch(error => {
            console.log(error)
            document.body.innerHTML = error.message
        })
}