function submitData(name, email) {
  const formData = {
    name: name,
    email: email
  };
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configObj)
    .then((response) => { return response.json(); })
    .then((json) => { document.querySelector('body').innerHTML += `<h1>User ID: ${json.id}</h1>` })
    .catch((error) => { document.querySelector('body').innerHTML += `<h1>Error: ${error.message}</h1>` });
}