import styles from './custom.module.css'
import { useDispatch } from 'react-redux'
import { useCheckedTodoMutation } from '../redux/query/task'
import { editTask, completedTask } from '../redux/slices/Todo'

export default function Checkbox({todo}) {
    const [apiChecked] = useCheckedTodoMutation()
    const dispatch = useDispatch()

    const onCheckClick = (e) => {
        const checked = e.target.checked
        dispatch(completedTask({_id : todo._id, checked}))
        apiChecked(todo).then((data) => dispatch(editTask(data.data)))
    }


    return <>
        <input type="checkbox" checked={todo.completed} className={styles.input} onChange={onCheckClick}/>
    </>
}