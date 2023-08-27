import styles from './login.module.css';
import { Link } from 'react-router-dom';

function Login () {
    return <section className={styles.login}>
        <div className={styles.container}>
            <h3 className={styles.header}>Welcome Back!</h3>
            <img src="./images/Slice 2.png" alt='img'/>
        </div>
        <div className={styles.inp_container}>
            <input type="text" className={styles.inp} placeholder='Enter your email'/>
            <input type="text" className={styles.inp} placeholder='Enter password'/>
        </div>
        <div className={styles.pass_container}>
            <a className={styles.link}>Forgot Password</a>
            <button className={styles.btn}>Sign In</button>
            <p className={styles.txt}>Don’t have an account ? <Link to={'/signUp'}className={styles.link}>Sign Up</Link></p>
        </div>
    </section>
}

export default Login;