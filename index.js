function submitData(userName, userEmail) {
    const userData = { 
        name: userName,
        email: userEmail
    };

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    };

    return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            const newId = object.id;
            document.body.innerHTML += `<p>New ID: ${newId}</p>`;
        })
        .catch(function (error) {
            document.body.innerHTML += `<p>${error.message}</p>`;
        });
}
