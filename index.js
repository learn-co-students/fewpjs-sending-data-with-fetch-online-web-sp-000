function submitData(userName, userEmail);{
return fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    userName,
    userEmail
  })
})
    .then(function (response) {
        return response.json()
    })
    .then(function (object) {
        document.body.innerHTML = object["id"]
    })
    .catch(function (error) {
        document.body.innerHTML = error.message
    })
}
/*
Challenge
It's time to practice writing your own POST request using fetch(). In index.js, write a method, submitData, that takes two strings arguments, one representing a user's name and the other representing a user's email.

The first two tests mirror the behavior of the JSON server. As you write your solution, keep the server running to test your code. Open index.html in a browser to gain access to your submitData function in console.

Note: The tests in this lab need access to the fetch() request inside submitData. In order to give them access, write you solution so that submitData returns the fetch(). This will not change the behavior of your fetch().

Test 1 - Send Data
In submitData, write a valid POST request to http://localhost:3000/users using fetch(). This request should include:

The destination URL
Headers for 'Content-Type' and 'Accept' set to 'application/json'
A body with the name and email passed in as arguments to submitData. These should be assigned to name and email keys within an object. This object should then be stringified.
*/
