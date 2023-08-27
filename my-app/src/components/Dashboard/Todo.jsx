import styles from './dashboard.module.css'

function Todo() {
    return <section>
        <div>
            <p className={styles.tasks_txt}>Tasks List</p>
            <button></button>
        </div>
        <div>
            <input type="checkbox" />
        </div>
    </section>
}

export default Todo;