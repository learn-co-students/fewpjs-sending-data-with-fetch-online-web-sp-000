function submitData(userName, userEmail) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
      },
      body: JSON.stringify({
        name: userName,
        email: userEmail
      })})
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      const textNode = document.createTextNode("Water"); 
      let x = document.createElement('p');
      x.innerHTML = data.id;
      console.log(`The current data.id is ${data.id}`)
      document.body.innerHTML = data.id;
    })
    .catch(function(error) {
      alert("Bad things! Ragnarők!");
      document.body.innerHTML = error.message;
    });
}

