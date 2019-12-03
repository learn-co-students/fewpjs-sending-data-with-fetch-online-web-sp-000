// // Add your code here
function submitData (name, email) {

  let object = {
    name: name,
    email: email
  }

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(object)
  };


  // why the return? returning the fetch chain can tack on other .then() functions

  return fetch("http://localhost:3000/users", configObj)
    .then(response => {
      return response.json();
    })
    .then(json => {
      // let id;
      // id = document.createElement("p")
      // id.innerHTML = json["id"]
      // document.body.appendChild(id)
      document.body.innerHTML = json["id"]
    })
    .catch(error => {
      // let err;
      // err = document.createElement("ul")
      // err.innerHTML = error.message
      // document.body.appendChild(err)
      document.body.innerHTML = error.message
    });
};


// function submitData( name, email ) {
// return fetch( 'http://localhost:3000/users', {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify( {
//       name,
//       email
//     } )
//   } )
//   .then( function ( response ) {
//     return response.json()
//   } )
//   .then( function ( object ) {
//     document.body.innerHTML = object[ "id" ]
//   } )
//   .catch( function ( error ) {
//     document.body.innerHTML = error.message
//   } )
// }
