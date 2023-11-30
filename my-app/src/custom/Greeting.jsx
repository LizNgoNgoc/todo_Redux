import styles from './custom.module.css'

function Greeting() {
    return <div className={styles.date_container}>
        <p className={styles.txt}>Good Afternoon</p>
        <p className={styles.date_num}>{}</p>
    </div>
}

export default Greeting