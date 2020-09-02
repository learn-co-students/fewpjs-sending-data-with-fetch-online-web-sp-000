function submitData(name, email) {   
    let formData = {
        name: name,
        email: email
      };
       
      // method: "POST" is missing from the object below
      let configObj = {
        method: "POST",          
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };
       
      return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
          const body = document.getElementsByTagName('body');  
          var h1 = document.createElement('H1');
          h1.innerHTML = object.id;
          body[0].appendChild(h1);          
          console.log(object.id);
        })
        .catch(function(error) {
          alert("Bad things! Ragnarők!");
          const body = document.getElementsByTagName('body');  
          var h2 = document.createElement('H2');
          h2.innerHTML = error.message;
          body[0].appendChild(h2);                    
          console.log(error.message);
        });
}  

submitData("Elliot","public@elliotblanchard.com");
/* 

let formData = {
  dogName: "Byron",
  dogBreed: "Poodle"
};
 
// method: "POST" is missing from the object below
let configObj = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};
 
return fetch("http://localhost:3000/dogs", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  })
  .catch(function(error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  });


    function fetchBooks() {
    return fetch('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(json => renderBooks(json));

    }

*/