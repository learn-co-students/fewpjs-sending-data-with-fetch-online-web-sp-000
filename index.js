// Add your code here



function submitData(name, email) {
    const url = 'http://localhost:3000/users';

    let body = document.querySelector('body');

    let formData = { name: name, email: email };
    let configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    };

   return fetch(url, configObj)
    .then(response => response.json())
    .then(function(object) {
        
        let p = document.createElement('p')
        p.innerHTML = object['id']
        body.appendChild(p)
        console.log(object)
    })
    .catch(function(error) {
        let p = document.createElement('p')
        p.innerHTML = error.message
        body.appendChild(p)
        console.log(error.message);
    })
}