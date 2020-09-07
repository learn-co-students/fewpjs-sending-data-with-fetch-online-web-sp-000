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
		const h1 = document.createElement("h1")
		h1.appendChild(document.createTextNode(object.id))
		document.body.appendChild(h1)
	})
	.catch(function(error) {
		const div = document.createElement("div")
		div.appendChild(document.createTextNode(error.message))
		div.style.color = "red";
		document.body.appendChild(div)
	})
}
