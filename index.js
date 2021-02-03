// Add your code here
function submitData(name, email) {
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
      };
       
    return  fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
          const body = document.querySelector('body')
          const p = document.createElement('p')
          p.innerHTML = object['id']
          body.appendChild(p)
        })
        .catch(function(error) {
            document.body.innerHTML = error.message;
        });
}