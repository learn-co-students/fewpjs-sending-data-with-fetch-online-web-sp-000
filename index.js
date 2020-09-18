// Add your code here
function submitData(username, useremail) {
    let formData = {
        name: username,
        email: useremail
      };
       
      // method: "POST" is missing from the object below
      let configObj = {
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
          //console.log(object);
            
            document.body.innerHTML = JSON.stringify(object)
        })
        .catch(function(error) {
          alert("Unauthorized Access");
          document.body.innerHTML = 'Unauthorized Access'
          console.log(error.message);
        });
}