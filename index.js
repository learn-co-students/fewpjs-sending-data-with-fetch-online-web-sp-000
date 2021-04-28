// Add your code here
const body = document.querySelector("body")

function submitData(userName, userEmail) {
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({"name": userName, "email": userEmail})
    };

   return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            body.innerHTML+=Object.entries(object)
        })
        .catch(function(error) {
            alert("ERROR!");
            body.innerHTML+=(error.message);
        });
};