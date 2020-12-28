// Add your code here
function submitData(username, userEmail){
    let configData = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({
            name: username,
            email: userEmail
        })
    };

    return fetch("http://localhost:3000/users", configData)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        showId(json.id);
    })
    .catch(function(error){
        appendMessage(error);
    });
}

function showId(id){
    let p = document.createElement('p');
    p.innerHTML= id;
    document.body.appendChild(p);
}

function appendMessage(error){
    let p = document.createElement('p');
    p.innerHTML = error.message;
    document.body.appendChild(p);
}