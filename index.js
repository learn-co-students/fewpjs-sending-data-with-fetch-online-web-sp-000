// Add your code here
let formData = {
  name: "Steve",
  email: "steve@steve.com"
};

let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};

function submitData() {
  const ftc = fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    const place = document.getElementById("place");
    const p = document.createElement("p")
    p.innerHTML = `${object.id}`
    place.appendChild(p)
  })
  .catch(function(error) {
    alert("Unauthorized Access");
    const place = document.getElementById("place")
    let p = document.createElement("p")
    p.innerHTML = `${error.message}`
    place.appendChild(p)
  })
  return ftc
}
