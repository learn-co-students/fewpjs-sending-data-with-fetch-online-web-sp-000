// Add your code here
function submitData (name, email) {
    let formData = {
        name: name,
        email: email
      };

    let configObj = {
        method: "Post",
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify(formData)
      };

    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      let element = document.createElement('h1')
      element.innerHTML = object["id"]
      document.querySelector('body').appendChild(element)
    })
    .catch(function(error) {
      document.body.innerHTML = error.message
    });
}