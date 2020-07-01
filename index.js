// write a method, submitData, that takes two strings arguments, one representing a user's name and the other representing a user's email.
// The tests in this lab need access to the fetch() request inside submitData
// In order to give them access, write you solution so that submitData returns the fetch()

// Test 1 - Send Data
// In submitData, write a valid POST request to http://localhost:3000/users using fetch(). This request should include:
// -The destination URL
// -Headers for 'Content-Type' and 'Accept' set to 'application/json'
// -A body with the name and email passed in as arguments to submitData. These should be assigned to name and email keys within an object.
//  This object should then be stringified.

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

// Test 2 - Handle the Response
// On a successful POST request, expect the server to respond with a [Response][response] object.
// the body property of this response will contain the data from the POST request along with a newly assigned id.
// Use a then() call to access the Response object and use its built in json() method to parse the contents of the body property. 
// Use a second then() to access this newly converted object.
// From this object, find the new id and append this value to the DOM.

// Test 3 - Handle Errors
// When writing the callback function for your catch(), expect to receive an object on error with a property, message,
//  containing info about what went wrong.
//  Append this message to the DOM when catch() is called.


// Using index.html and the JSON server, if your code is successful, calling submitData in the console should cause an id number to appear on the page.