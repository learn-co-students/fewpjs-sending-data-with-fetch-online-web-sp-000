// Add your code here
function submitData(userNameInput, emailInput){
    let addToBody = {
        name: userNameInput,
        email: emailInput}
    return fetch('http://localhost:3000/users',{
        method: "POST",
        headers: {"Content-Type":"application/json", "Accept":"application/json"},
        body: JSON.stringify(addToBody)
    }).then(
        function(response){
            return response.json()
        }).then(
            function(object){
                const userData = document.createElement('p')
                userData.id = object.id
                document.body.appendChild(userData)}
            ).catch(function(error){
                document.body.innerHTML = error.message})

}