// method: "POST" is missing from the object below




function submitData() {
    const targetEl = document.querySelector('body');

    let data = {
        name: "Nick",
        email: "test@test.com"
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
            body: JSON.stringify(data)
    };

    fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            for (const [key, value] of Object.entries(object)) {
                addDomElement(targetEl, 'p', value)
            }
        })
        .catch(function(error) {
            alert("An error occurred please try again.");
            console.log(error.message);
        }
    );
}

function addDomElement(targetEl, type, content) {
    newEl = document.createElement(`${type}`);
    newEl.innerText = `${content}`;
    targetEl.appendChild(newEl);
}

submitData();