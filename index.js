// Add your code here
function submitData(name, email) {
	let formData = {
		name: name,
		email: email
	}

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
		document.body.innerHTML += `<h1>${object.id}</h1>`
	})
	.catch(function(error) {
		document.body.innerHTML += `<div style="color:red;">${error.message}</div>`
	})
}
