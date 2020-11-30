// Add your code here
function submitData(name, email){
  let formData = {
    Name: name,
    eMail: email
  };

  let configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
  let destinationURL = "http://localhost:3000/users";

  function appendId(id){

    let h1 = document.createElement("h1");

    h1.innerText = `User id: ${id}`;

    document.body.appendChild(h1);

  };

  fetch(destinationURL, configurationObject)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        appendId(object.id);
    })
    .catch(function(error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
    });     
};