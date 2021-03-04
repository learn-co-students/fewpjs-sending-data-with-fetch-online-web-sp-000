submitData = (name,email) => {
    return fetch('http://localhost:3000/users',{
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify({
            'name': name,
            'email': email
        })
    })
    .then(r => r.json())
    .then(resp => {
        document.body.innerHTML = resp['id']
    }).catch(e => document.body.innerHTML = e.message) 
}

