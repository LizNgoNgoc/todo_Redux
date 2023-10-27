import api from "./api"

function addTodoFunc(body, setToggle){
    api.apiTodoCreate(body)
            .then(({todo}) => setToggle(false))
}


export {
    addTodoFunc
}