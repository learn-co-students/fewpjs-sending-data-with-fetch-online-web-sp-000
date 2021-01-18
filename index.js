// Add your code here

let formData = {
    dogName: "bryon",
    dogBreed: "poodle"
};




let configurationObject = {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
    },
    body: JSON.stringify(formData)
};


fetch('http://localhost:3000/dogs', configurationObject);


function submitData(namez, emailz){

    let userData = {
        name: namez,
        email: emailz
    }

    let userObject = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify(userData)
    };

  let lefetch = fetch(" http://localhost:3000/users", userObject)
    .then(resp => resp.json())
    .then(function(object) {
      addP(object.id);
    })
    .catch(function(error){
        alert ("holy shmokes");
       addP(error.message);
       
    })
    
    return lefetch
    
}


function addP(num){
    let p = document.createElement("p");
    p.textContent = num;
    document.body.appendChild(p);
}
