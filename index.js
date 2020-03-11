// Add your code here
function submitData(name, email){
    let configObj = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
        body: JSON.stringify({
            "name": name,
            "email": email
        })
    }
    return fetch(http://localhost:3000/users, configObj)
}