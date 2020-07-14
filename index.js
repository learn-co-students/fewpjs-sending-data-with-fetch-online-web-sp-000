// Add your code here


function submitData(name, email) {
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
                name,
                email
            })
        })
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
            let h1 = document.createElement("h1");
          h1.innerText = object.id;
          document.body.appendChild(h1)
        })
        .catch(function (error) {
            document.body.innerText = error
        })

}

// document.addEventListener("DOMContentLoaded", submitData("Steve", "steve@steve.com"))
   
