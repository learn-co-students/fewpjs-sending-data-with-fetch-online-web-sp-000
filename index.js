// write method submitData, that takes two strings arguments,
// one representing a user's name and the other representing a user's email

// Note: The tests in this lab need access to the fetch() request inside submitData. In order to give them access, write you solution so that submitData returns the fetch(). This will not change the behavior of your fetch().

function submitData(username, userEmail) {
  let formData = {
    name: username,
    email: userEmail
  };

  let configObj = {
    method: "POST",         // Request with GET/HEAD method cannot have body while request with POST method can have body
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)    // data exchanged between a client and a server is sent as text; can be converted into object with key/value pairds
  };

  let content = document.body

  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      let data = document.createElement('p')
      data.textContent = object.id;
      content.appendChild(data);
    })
    .catch(function(error) {
      let errorMessages = document.createElement('p')
      errorMessages.textContent = error.message;
      content.appendChild(errorMessages);
    });
}
