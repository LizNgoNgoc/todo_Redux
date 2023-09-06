import styles from './registration.module.css';

function Regstration() {
    return <form className={styles.registration}>
        <div className={styles.container}>
            <h3 className={styles.header}>Welcome Dolphin!</h3>
            <p className={styles.txt}>Let’s help you meet up your tasks</p>
        </div>
        <div className={styles.inp_container}>
            <input type="text" className={styles.inp} placeholder='Enter your full name'/>
            <input type="text" className={styles.inp} placeholder='Enter your email'/>
            <input type="text" className={styles.inp} placeholder='Enter password' />
            <input type="text" className={styles.inp} placeholder='Confirm Password' />
        </div>
        <div className={styles.reg}>
            <button className={styles.btn}>Registration</button>
            <p className={styles.txt_link}>Already have an account ? <a className={styles.link}>Sign In</a></p>
        </div>
    </form>
}

export default Regstration