const url = "http://localhost:3000/users"

function submitData(name, email) {
    return fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name, 
            email
        })
    })
    .then(resp => resp.json())
    .then(function(object) {
        document.body.innerHTML = object["id"]
    })
    .catch(function(error) {
        alert("We've got problems!");
        document.body.innerHTML = error.message
    })
};
