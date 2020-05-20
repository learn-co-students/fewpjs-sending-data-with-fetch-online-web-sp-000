// Add your code here
function submitData(name, email){
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
          name,
          email
        } )
    };

    return fetch('http://localhost:3000/users', configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      appendIt(object.id);
    })
    .catch(function(error) {
      appendIt(error.message);
    });
  }

  function appendIt(it){
    document.body.innerHTML = it;
}