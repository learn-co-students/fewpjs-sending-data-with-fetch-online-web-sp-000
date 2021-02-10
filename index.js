// Add your code here
// let formData = {
//     "name": userName,
//     "email": userEmail,
// };

// let configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// };

function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json" 
        },
        body: JSON.stringify(
            {
                "name": userName,
                "email": userEmail
            }
        )
    })
    .then(response => response.json())
    .then(body => {
        document.querySelector('body').innerHTML = body["id"];
    })
    .catch(message => {
        document.querySelector('body').innerHTML = message;
    });
};