class Api {
    constructor() {
        this.url = 'https://testapiservisefortesting.onrender.com/'
    }

    apiUpdateTodo(body) {

    }

    apiLogin(body){
        return fetch(this.url + 'user/signIn', {
            headers : {
                'Content-Type' : 'application/json'
            },
            method : 'POST',
            body : JSON.stringify(body)
        }).then(responce => responce.json())
    }
    apiTodoCreate(body) {
        return fetch(this.url + 'todo/create', {
            headers : {
                'Content-Type' : 'application/json',
                authorization : localStorage.getItem('token')
            },
            method : 'POST',
            body : JSON.stringify(body)
        }).then(responce => responce.json())

    }

    apiChecked(body) {
        return fetch(this.url + `todo/patch?id=${body._id}`, {
            headers : {
                'Content-Type' : 'application/json',
                authorization : localStorage.getItem('token')
            },
            method : 'PATCH',
            body : JSON.stringify({...body, completed : !body.completed})
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
    apiForm() {
        return fetch(this.url + 'user/me', {
            headers : {
                'Content-Type' : 'application/json',
                authorization : localStorage.getItem('token')
            },
            method : 'GET',
        }).then(responce => responce.json())
    }

    apiLogout(){
        return fetch(this.url + 'user/signout', {
            headers : {
                'Content-Type' : 'application/json',
                authorization : localStorage.getItem('token')
            },
            method : 'POST',
        })
    }
}

const api = new Api()
export default api