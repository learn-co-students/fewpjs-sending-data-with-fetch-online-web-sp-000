// Add your code here

function submitData (name, email) {
    let formData = {
        name: name,
        email: email
    }
    
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    return fetch('http://localhost:3000/users', configObj)
    .then(function(response) {
         return response.json();
    })
    .then(function (json) {
        const el = document.createElement('p');
        el.innerHTML = json.id;
        document.body.appendChild(el)
    })
    .catch(function(error) {
        const el = document.createElement('p');
        el.innerHTML = error.message;
        document.body.appendChild(el)
    })
}