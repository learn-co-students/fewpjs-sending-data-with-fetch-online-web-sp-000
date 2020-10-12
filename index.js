function submitData(name, email) {
    let url = 'http://localhost:3000/users';
    let formData = {
        name,
        email
    };
    
    let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

    return fetch(url, configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      // console.log(object.id);
      document.body.innerHTML = object.id;
    })
    .catch(function(error) {
      document.body.innerHTML = error.message;
    });