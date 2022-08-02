const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
        .then(response => {
            apiResult.textContent = JSON.stringify(response.data)
        })//se funcionar then(então)
        .catch(error => console.log(error))//se não funcionar catch(captura)
}

function addNewUser(newUser) {
    axios.post(url, newUser)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.log(error))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
        .then(response => {
            const data = response.data

            userId.textContent = data.id
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })
        .catch(error => console.log(error))

}

function updateUser(id, userUpdated) {
    axios.put(`${url}/${id}`, userUpdated)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.log(error))
}

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
        .then(response => console.log(response))
        .catch(error => console.log(error))

}

const userUpdated = {
    name: "Emma Watson",
    avatar: "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2021/05/18/114784118-emma-watson-bafta-la.jpg",
    city: "Paris"
}

const newUser = {
    name: "Samuel Oliveira",
    avatar: "https://picsum.photos/200/300",
    city: "Camaçari"
}

getUsers()
// addNewUser(newUser)
getUser(2)
updateUser(2, userUpdated)
deleteUser(3)