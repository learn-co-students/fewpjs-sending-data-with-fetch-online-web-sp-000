// Add your code here
// mocha is the test runner and enables to run tests in the browser and inspect the response
function submitData(name, email)
{
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // telling the server what kind of data
            "Accept": "application/json" // accept this type of data?
        },
        body: JSON.stringify({
            // how do you pass the name and email here
            name,
            email
        })
    };

    fetch('http://localhost:3000/users', configObj)
    .then(function(response){
       // debugger
        return response.json();
    })
    .then(function(object){
        
         document.body.innerHTML = object["id"]; // not appending but setting the body to this object ID
        //document.getElementById("id")
    
    })
    .catch(function(error){
        document.body.innerHTML = error.message;
    });
}

// submitData();