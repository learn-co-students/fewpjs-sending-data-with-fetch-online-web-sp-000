// Add your code here


function submitData(userName, userEmail) {
    let formData = {
        name: userName,
        email: userEmail
    }
    let configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    }
    return fetch('http://localhost:3000/users', configObj)
        .then(resp => resp.json())
        .then(json => {
            const pNode = document.createElement('p')
            pNode.innerHTML = `${json["id"]}`
            document.body.appendChild(pNode)
        })
        .catch(error => {
            const pNode = document.createElement('p')
            pNode.innerHTML = `${error.message}`
            document.body.appendChild(pNode)
        })
}