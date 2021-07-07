


const body = document.querySelector("body");

function submitData(subName, subEmail){
    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers:{
            "content-type":"application/json",
            "accept":"application/json"
        },
        body: JSON.stringify({
            name: subName,
            email: subEmail
        })
    })
    .then(r => r.json())
    .then(json => {
        let p = document.createElement("p")
        p.innerHTML = `${json.id}`
        body.append(p)
    })
    .catch(function(error){

     let alertMessage = document.createElement("p")
        alertMessage.innerHTML = `${error.message}`
        body.append(alertMessage)
        
    });
}



