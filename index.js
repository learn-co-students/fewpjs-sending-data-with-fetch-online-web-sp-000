const url = 'http://localhost:3000/users'
const name = "valentino"
const email = "valentino@gmail.com"
const body = document.querySelector('body')
function submitData(name,email){
   return fetch(url, {
       method: "POST",
       headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
       },
       body: JSON.stringify({name: name, email: email})
   })
   .then(response =>{
    return response.json()
   })
   .then(data => {
       renderUser(data)
       return data
   })
   .catch(error =>{
    body.innerHTML  = error.message
   })
}
function renderUser(json){
body.innerHTML = `<h2> ${json.id} </h2>`
}
// submitData(name,email)