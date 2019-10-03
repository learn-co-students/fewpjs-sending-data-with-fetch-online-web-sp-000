// Add your code here
function submitData(username, userEmail){
  const userData = {
    name: username,
    email: userEmail
  };

  const configObject = {
    method: "POST",
    headers: {
      "Content-Type": 'applicaton/json',
      "Accept": "application/json"
    },
    body: JSON.stringify(submitData)
  };

  return fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(json => console.log(json));
}