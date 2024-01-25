import styles from './custom.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useCheckedTodoMutation } from '../redux/query/task'
import { editTask, completedTask } from '../redux/slices/Todo'
import { checkboxChecked } from '../redux/slices/Func'

export default function Checkbox({todo}) {
    const [apiChecked] = useCheckedTodoMutation()
    const dispatch = useDispatch()
    const check = useSelector(state => state.funcSlice.checked)

    const onCheckClick = (e) => {
        const checked = e.target.checked
        dispatch(completedTask({_id : todo._id, checked}))
        apiChecked(todo).then((data) => dispatch(editTask(data.data)))
        dispatch(checkboxChecked({_id : todo._id, checked}))
    }


    return <>
        <input type="checkbox" checked={todo.completed} id='check' className={styles.input} onChange={onCheckClick}/>
        <label for='check' className={`${styles.label} ${check && styles.label_check}`}></label>
    </>
}