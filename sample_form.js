// Add your code here
function postDog() {
    fetch("http://localhost:3000/dogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        dogName: "Byron",
        dogBreed: "Poodle"
      })
    });
}

document.querySelector('h1').addEventListener('click', postDog());