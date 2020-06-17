function submitData(userName, userEmail) {
    const users = "http://localhost:3000/users"
    const formData = {
        name: userName,
        email: userEmail
    }
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }
    return fetch(users, configObj)
            .then(function(response) {
                return response.json();
            })
            .then(function(object) {
                let newIdEl = document.createElement("p")
                newIdEl.textContent = object.id
                document.body.appendChild(newIdEl)
            })
            .catch(function(error) {
              alert("Yeet yeet yeet!")
              let errorMessage = "Unauthorized Access";
              let errorDisplay = document.createElement("p");
              errorDisplay.textContent = errorMessage;
              document.body.appendChild(errorDisplay)
            })
}
