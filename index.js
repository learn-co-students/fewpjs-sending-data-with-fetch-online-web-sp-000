function submitData(userName, userEmail) {
  const formData = {
    name: userName,
    email: userEmail
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
      console.log(object["id"]);
      const newP = document.createElement('p');
      newP.innerHTML = object["id"];
      document.body.appendChild(newP);
    })
    .catch(function(error) {
      let message = 'Unauthorized Access'
      const errorP = document.createElement('p');
      errorP.innerHTML = message;
      document.body.appendChild(errorP);
    });

};
