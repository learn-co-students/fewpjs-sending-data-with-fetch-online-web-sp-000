function submitData(name,email) {
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
}

return fetch("http://localhost:3000/users", configObj)
.then(function(response) {
    return response.json()
  })
  .then(function(object) {
    let div=document.createElement('div')
    document.body.innerHTML=object.id
  })
.catch(function(error) {
  document.body.innerHTML=error.message;
})
}


submitData("Adil","adilnm23@gmail.com")
