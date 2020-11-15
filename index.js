// Add your code here
function submitData(name, email){
    let userData = {
        name: name,
        email: email
      };

    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(userData)
      };  

    // fetch("http://localhost:3000/users", configObj).then(resp=>resp.json()).then(json=>console.log(json))
    return  fetch('http://localhost:3000/users', configObj)
    .then(function(response) {
            return response.json();
          })
          .then(function(object) {
            console.log(object),
            document.body.innerHTML = object.id   
          }).
          catch(error=>{
              console.log(error.message)
              document.body.innerHTML = error.message
          })
 


    
    
}

