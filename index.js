//1)
//In submitData, write a valid POST request to http://localhost:3000/users using fetch(). This request should include:
//The destination URL
//Headers for 'Content-Type' and 'Accept' set to 'application/json'
//A body with the name and email passed in as arguments to submitData. These should be assigned to name and email keys within an obje//Thi//object should then be stringified.




function submitData(name, email){
 return fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name, 
    email
  })
 })
.then(function(response) {
  return response.json();
})
  .then(function(object){
    document.body.innerHTML = object.id
  console.log(object);
})
.catch(function(error){
  document.body.innerHTML = error.message
}); 
}
  


//On a successful POST request, expect the server to respond with a [Response][response] object. Just like we saw earlier in the dog //, the body property of this response will contain the data from the POST request along with a newly assigned id.

//Use a then() call to access the Response object and use its built in json() method to parse the contents of the body property. Use a second then() to access this newly converted object. From this object, find the new id and append this value to the DOM.

//Using index.html and the JSON server, if your code is successful, calling submitData in the console should cause an id number to appear on the page.






