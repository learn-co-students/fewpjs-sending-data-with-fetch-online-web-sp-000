// Add your code here

//json enables key value pairs within the string 
// method = submitData 
function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    };

// configuration object = javascript object
//HTTP verb, POST, adding method key to our configuration object 
    let configObj = {
        method: "POST",
    //metadata: headers, contain info about the data being sent
    //"Content-Type" is a common header to indicate what format the data is being sent in  (json)
        headers: {
          "Content-Type": "application/json", //key value pair 
          "Accept": "application/json" //key value pair, telling server what data type we accept in return (json)
        },
        //stringify is a built in method for converting objects to strings
        body: JSON.stringify(formData) //data being sent in fetch() must be stored in the body of the config object 
    };

    // sending a POST request with fetch()
    //takes a string representing the destination URL
    // AND the javascript Ojbect as the second argument 

//use a series of calls to then() which are given function callbacks 
//takes in a response as an argument 
    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
            let h2 = document.createElement('h2');
            h2.innerHTML = object.id;
            document.body.appendChild(h2);
            console.log(object);
        })
        //similar to then()
        //used when something goes wrong in fetch()
        //error work can be performed
        //
        .catch(function(error) {
            alert("wrong!");
            let h3 = document.createElement('h3');
            h3.innerHTML = error.message;
            document.body.appendChild(h3);
            console.log(error.message);
        });
} 
//    ✓ makes a POST request to /user with a name and email
//    ✓ handles the POST request response, retrieves the new id value and appends it to the DOM
//    ✓ handles a failed POST request using catch, appends the error message to the DOM
//{ id: 62, name: 'Steve', email: 'steve@steve.com' }
//{ id: 113, name: 'Sam', email: 'sam@sam.com' }