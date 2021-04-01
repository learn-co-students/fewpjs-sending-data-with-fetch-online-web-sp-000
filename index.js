function submitData(thisName, thisEmail){
    return fetch("http://localhost:3000/users", 
    {
        method: "POST",
        headers: 
        {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify
        (
            {
                name: thisName,
                email: thisEmail
            }
        )
    }
    ).then(resp => resp.json()).then(resp => 
        {
            let info = document.createElement('p')
            info.innerHTML = `${resp.name} - ${resp.email} - ${resp.id}`
            document.body.appendChild(info)
        }
    ).catch(error => {
        let err = document.createElement('h3')
        err.innerHTML = `${error.message}`
        document.body.appendChild(err)
    })
}

submitData("name", "email")