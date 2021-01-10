// const { default: fetch } = require("node-fetch");

// // Add your code here
// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   })
// });


function submitData (name, email) {
return fetch("http://localhost:3000/users", {
method: "POST",
headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
},
body: JSON.stringify({
name: name,
email: email

})

})
.then(response => response.json())
.then(object => {
   let textNode =document.createTextNode(object.id);
    // document.body.innerHTML = `<h1>${object.id}<h1/>`;
    // let page = document.getElementsByTagName('body');
   let h1 = document.createElement('h1');
   h1.appendChild(textNode);
document.getElementsByTagName('body')[0].appendChild(h1);
    // let h1 = document.createElement('h1');
    // h1.innerText = object.id;
    // page.append(h1);
})
.catch( errorObj => {

    let textNode = document.createTextNode(errorObj.message);
   
   let h1 = document.createElement('h1');
   h1.appendChild(textNode);
document.getElementsByTagName('body')[0].appendChild(h1);


}



)
}

// submitData('seth', 'seth.j.near@gmail.com');