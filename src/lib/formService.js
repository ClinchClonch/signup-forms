const baseUrl = "http://localhost:8080/users"

export const createUser = (user) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
}

export const loadUser = (id) => {
    return fetch(baseUrl)
        .then(res => res.json())
}
