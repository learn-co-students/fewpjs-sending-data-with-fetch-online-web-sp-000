// Add your code here

let configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
};

function submitData(userName, userEmail) {
    configurationObject.body = JSON.stringify({name: userName, email: userEmail});
    return fetch("http://localhost:3000/users", configurationObject)
            .then(function(response) {
                return response.json();
            })
            .then(function(object) {
                let userId = document.createElement("p");
                let body = document.querySelector("body");
                userId.innerHTML = object.id;
                body.appendChild(userId);
            })
            .catch(function(error) {
                let msg = document.createElement("p");
                let body = document.querySelector("body");
                msg.innerHTML = error.message;
                body.appendChild(msg);
            });
}