// Add your code here

function submitData(name, email){

    let formData = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(function(response){
        return response.json();
        })
        .then(function(json){
            
        //    let box = document.createElement("UL")
        //    let item = document.createElement("LI")
        let newEle = document.createElement("p")
            newEle.innerText = json.id
            document.body.appendChild(newEle)
            
        return newEle
            //box.appendChild(item)
        })

        .catch(function(error) {
            document.body.appendChild(error.message);
          });

    
}

document.addEventListener('DOMContentLoaded', (event) => {
    submitData(name, email);
});

