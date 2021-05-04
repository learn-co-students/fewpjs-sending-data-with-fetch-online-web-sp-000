function submitData(name, email) {
    const formData = {
        name: name,
        email: email
    };

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },

        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(resp => resp.json())
        .then(e => {
            console.log("Adding, " + e)
            let child = document.createElement('p')
            child.id = e.id
            child.textContent = `${e.name} - ${e.email}`
            document.body.appendChild(child)
        })
        .catch(e => {
            let child = document.createElement('p')
            child.textContent = 'Unauthorized Access'
            child.class = 'error'
            document.body.appendChild(child)
        });
}