// Add your code here
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
    .then(response => response.json())
    .then(json => {
      let node = document.createElement("p");
      node.textContent = json.id;
      document.body.appendChild(node);
    })
    .catch(json => {
      let message = json.message;
      let node = document.createElement("p");
      node.textContent = message;
      document.body.appendChild(node);
    });
}
