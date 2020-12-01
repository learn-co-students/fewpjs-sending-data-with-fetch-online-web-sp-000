// Add your code here
function submitData(nameValue, emailValue) {
    let formData = {
        name: nameValue,
        email: emailValue
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch('http://localhost:3000/users', configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        let element = document.createElement('div')
        element.innerHTML = `name: ${object.name} <br> email: ${object.email} <br> id: ${object.id}`
        document.body.appendChild(element)
    })
    .catch(function(error) {
        alert(error.message);
        let errorDiv = document.createElement('p')
        errorDiv.innerHTML = `${error.message}`
        document.body.appendChild(errorDiv)
    });

}