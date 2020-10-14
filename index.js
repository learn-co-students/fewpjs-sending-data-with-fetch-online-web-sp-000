// Add your code here
function submitData(userName, userEmail) {
    let formData = {
        name: userName,
        email: userEmail
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
        // console.log(object.id);
        addId(object);
    })
    .catch(function(error) {
        addMessage(error);
    })

    function addId(object) {
        let id = object.id;
        let element = document.createElement('p');
        element.textContent = object.id;
        document.body.appendChild(element);
    }

    function addMessage(error) {
        let message = error.message;
        let errorMessage = document.createElement('p');
        errorMessage.textContent = message;
        document.body.appendChild(errorMessage);
    }

}