// Add your code here
const body = document.querySelector("body");

function submitData(name, email) {
  let formData = {
    name: name,
    email: email
  }

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(resp => resp.json())
  .then(json => body.innerHTML+=Object.entries(json))
  .catch(function(error) {
    alert("there's an error");
    body.innerHTML+= (error.message);
  });
}
