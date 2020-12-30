// Add your code here

/*fetch("http://localhost:3000/dogs", configurationObject)
  
  //I have no idea what is this for below
  //.then(function(response) {
  //  return response.json();
  //})
  //.then(function(object) {
  //  console.log(object);
  //}); 
configurationObject = {
    //to change from default GET to POST
    method: "POST"
   // headers contain information about the data being sent.
    headers: {
         //"Content-Type" tells the destination server what type of data we're sending(json)
        "Content-Type": "application/json"
        // tell the server what data format we accept in return.
        "Accept": "application/json"
      }
      //We now have the destination URL, our HTTP verb, and headers that include information
      // about the data we're sending. The last thing to add is the data itself.

      //Data being sent in fetch() must be stored in the body of the configurationObject.
      // Whatever data we're assigning to the body of our request needs to be a string
      //By passing an object in, JSON.stringify() will return a string

    body: JSON.stringify({
    dogName: "Byron",
    dogBreed: "Poodle"
    })
    






  };
  */

 function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
      .then( function ( response ) {
        return response.json()
      } )
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
  }