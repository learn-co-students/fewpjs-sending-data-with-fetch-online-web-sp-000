function submitData() {
    const formData = {
        name: "Steve",
        email: "steve@steve.com"
      };
       
      const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };
       
      const data = fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
            let p = document.createElement('p');
            p.innerHTML = object.id
            document.body.appendChild(p);
        })
        .catch(function(error) {
            let p = document.createElement('p');
            p.innerHTML = "Unauthorized Access"
            document.body.appendChild(p);
          });
          return data;
}
submitData();