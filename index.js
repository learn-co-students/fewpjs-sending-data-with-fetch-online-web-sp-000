// Add your code here

function submitData(name, email) {
    const userObj = {
        name: name,
        email: email
    }

    const configObj = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify(userObj)
    }
    return fetch("http://localhost:3000/users", configObj)
        .then(response => response.json())
        .then(user => {
            document.querySelector("body").append(user.id + " ")
        }).catch(e => {
            document.querySelector("body").append(e.message)
        })
}
