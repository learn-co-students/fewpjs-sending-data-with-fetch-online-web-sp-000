// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// };

// let configObj = 

// fetch("https://localhost:3000/dogs", configObj)
//     .then((response) => {
//         return response.json();
//     })
//     .then((object) => {
    //         console.log(object);
    //     })
    //     .catch((error) => {
        //         alert("Bad Things!");
        //         console.log(error);
        //     });
        
function createAndAppend(content) {
    let newElement = document.createElement("p");
    newElement.textContent = content;
    document.querySelector("body").appendChild(newElement);

}        
        
function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({name: userName, email: userEmail})
    })
        .then(response => response.json())
        .then((data) => {createAndAppend(data.id)})
        .catch((error) => {createAndAppend(error.message)})
}