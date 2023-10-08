import styles from './form.module.css'


function Form() {

    return <div className={styles.container}> 
        <form>
        <input type="text" className={styles.inp}/>
        <input type="text" className={styles.inp}/>
        <input type="text" className={styles.inp}/>
        <input type="text" className={styles.inp}/>
        <input type="text" className={styles.inp}/>
        </form>
    </div>
}

export default Form;