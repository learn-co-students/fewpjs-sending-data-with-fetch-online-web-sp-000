let formData = {
  name: "Steve",
  email: "steve@steve.com",
}

let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};

function submitData() {
  const gimme = fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    // console.log(object["id"]);
    const objID = object["id"];
    const scrpt = document.querySelector('script');
    scrpt.append(objID);
  })
  .catch(function(error) {
    // alert("Unauthorized Access");
    // console.log(error.message);
    const scrpt = document.querySelector('script');
    scrpt.append(error.message);
  });

  return gimme;
}
