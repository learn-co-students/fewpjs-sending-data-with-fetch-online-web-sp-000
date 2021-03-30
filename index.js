
function submitData(name, email) {

    return fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
      name: name, 
      email: email 
  })
})
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        const para = document.createElement("p")
        document.body.appendChild(para)
        para.innerHTML = object.id
    })
    .catch(function(error) {
        alert("Unauthorized Access");
        const para = document.createElement("p")
        document.body.appendChild(para)
        para.innerHTML = error.message
    })

};

