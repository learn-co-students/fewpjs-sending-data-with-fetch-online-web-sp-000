// Add your code here
function submitData(userName, userEmail) {
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ name: userName, email: userEmail })
  };
  let p = document.createElement("p");
  return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    p.innerHTML = `${object.id}`;
    document.body.appendChild(p);
  })
  .catch(function(error) {
    p.innerHTML = "Unauthorized Access";
    document.body.appendChild(p);
  });
}