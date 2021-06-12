// Add your code here
function submitData(userName, userEmail) {
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
            "Accept": "application/json"
        },
        body: JSON.stringify( {name: userName, email: userEmail} )
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(response => response.json())
        .then(function(object) {
            const newElem = document.createElement("div");
            const body = document.querySelector("body");
            newElem.innerHTML = object["id"];
            body.appendChild(newElem)})
        .catch(function(error) {
            const newError = document.createElement("div");
            const body = document.querySelector("body");
            newError.innerHTML = error.message;
            body.appendChild(newError)});
}