// Add your code here
function submitData(name, email) {
	let formData = {
		name: name,
		email: email
	};

	let configurationObj = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		},
		body: JSON.stringify(formData)
	};

	return fetch("http://localhost:3000/users", configurationObj)
	.then( (response) => {
		return response.json()
	})
	.then( (object) => {
		let h2 = document.createElement('h2');
		h2.innerHTML = object.id;
		document.body.appendChild(h2);
		console.log(object);
	})
	.catch( (error) => {
		let h3 = document.createElement('h3');
		h3.innerHTML = error.message;
		document.body.appendChild(h3);
		console.log(error.message);
	});
}