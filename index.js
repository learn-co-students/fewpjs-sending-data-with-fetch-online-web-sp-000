// Add your code here

// SOLUTION

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

/* MY CODE
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(response => response.json())
  .then(object => renderId(object))
  .catch(error => document.body.innerHTML = error.message )
}

function renderId(object) {
  document.body.innerHTML = object[ "id" ]
}
*/