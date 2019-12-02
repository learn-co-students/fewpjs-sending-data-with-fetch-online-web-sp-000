const body = document.querySelector("body")

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`
        })
    }).then(function(resp) {
        return resp.json();
    }).then(function(object) {
        console.log(object),
        body.innerHTML = object.id;
    }).catch(function(error) {
        console.log(error.message);
        body.innerHTML = error.message;
    });
};
