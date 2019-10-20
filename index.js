// Add your code here
const submitData = ( name, email ) => {
  let formData = {
    name: name,
    email: email
  }
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify( formData )
  }
  return fetch ( 'http://localhost:3000/users', configObj )
    .then( response => response.json() )
    .then( obj => {
      let element = document.createElement( 'p' )
      element.textContent = obj.id
      document.querySelector('body').appendChild( element )
    })
    .catch( error => {
      let element = document.createElement( 'p' )
      element.textContent = error.message
      document.querySelector('body').appendChild( element )
    })
}
