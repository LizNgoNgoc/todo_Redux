class Api {
    constructor() {
        this.url = 'https://testapiservisefortesting.onrender.com/'
    }

    apiLogin(body){
        return  fetch(this.url + 'user/signIn', {
            headers : {
                'Content-Type' : 'application/json'
            },
            method : 'POST',
            body : JSON.stringify(body)
        }).then(responce => responce.json())
    }
    apiTodos(){
        return  fetch(this.url + 'todo/todos', {
            headers : {
                'Content-Type' : 'application/json',
                authorization : localStorage.getItem('token')
            },
            method : 'GET',
        }).then(responce => responce.json())
    }
}

const api = new Api()
export default api