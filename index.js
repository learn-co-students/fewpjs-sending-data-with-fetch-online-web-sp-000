// Add your code here
function submitData(name, email) {
    let data = {
        name: name,
        email: email
    };

    let configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(data)
    };

    //i think due to closure or something, this fetch will get access to the 2 variables above....

    return fetch('http://localhost:3000/users', configObject).
    then( function(response) { return response.json() }).
    then( function(object) { renderResponse(object)  }).
    catch( function(error) { renderErrorMessage( error.message)  })
};

function renderResponse(object) {
    let bodyElement = document.getElementsByTagName("body")[0]
    bodyElement.innerHTML = `id: ${object.id}`;
    //the test would only accept directly the id in the body element... very rigid
}

function renderErrorMessage(message) {
    let bodyElement = document.getElementsByTagName("body")[0]
    bodyElement.innerHTML = `error: ${message}`;

}