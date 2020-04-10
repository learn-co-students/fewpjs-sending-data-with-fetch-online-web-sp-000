// Add your code here

function submitData(name,email){

 return fetch("http://localhost:3000/users",configObj)
 // return needs to be on line 5 to explicately tell js to run fetch
  .then(function(response) {
    // console.log(response)
    return response.json();
    })
    .then(function(object)  {
      // take objects
      // assign objects
      // append the new element from the json obj to the dom
      // then.()
      // let div = document.createElement("div")
      // div = return response.json()
      // document.appendChild("ul")
      document.body.innerHTML = object["id"]
      console.log(object);
    })
    .catch(function(error) {
      document.body.innerHTML = error.message
      console.log(error.message);
    });

}

let formData = {
  name :"Steve",
  email:"steve@steve.com"
};

let configObj = {
  method: "POST",
  headers:{
    "Content-Type": "application/json",
    "Accept": "application/json"
  },

  body: JSON.stringify(formData)
};
