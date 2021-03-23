// Add your code here
// function submitData(name, email){
    
//     const userData = {name, email}
//     const configObject = {
//         method: "POST",
//         headers: {
//             "Content-Type" : "application/json",
//             "Accepts" : "application/json"
//         },
//         body: JSON.stringify(userData)
//     }
    
//     return fetch( 'https://localhost:3000/users', configObject)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(resp){
//         document.body.innerHTML = resp["id"]
//     })
//     .catch(function(error){
//         document.body.innerHTML = error.message
//     })
// }
// const userData = {}

// const bodyElement = document.querySelector("body")

// .then(function(response){
//     return response.json()
// })
// .then(function(resp){
//     document.body.innerHTML = resp["id"]
// })
// .catch(function(error){
//     document.body.innerHTML = error.message
// })

function submitData( name, email ) {
    const userData = {name: `${name}`, email: `${email}`}
    const configObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(userData)
        } 
        
    return fetch( 'http://localhost:3000/users', configObject )
      .then( function ( response ) {
        return response.json()
      } )
      .then( function ( resp ) {
        document.body.innerHTML = resp[ "id" ]
      } )
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
  }