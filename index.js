// Add your code here
function submitData(stringOne, stringTwo) {
    const formData = {
        name: stringOne,
        email: stringTwo
    };

    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObject).then(resp => resp.json()).then(function(json) {
        let body = document.body;
        body.innerHTML = json["id"];
    }).catch(function(error) {
        let body = document.body;
        body.innerHTML += error["message"];
    });
}
