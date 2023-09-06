import styles from './login.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';



function Login () {

    const[inputs, setInputs] = useState({
        email : '',
        password : ''
    })

    function handleChange({target}) {
        const {name, value} = target
        setInputs({...inputs, [name] : value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputs)
    }

    return <section className={styles.login}>
        <form onSubmit={handleSubmit}>
            <div className={styles.container}>
                <h3 className={styles.header}>Welcome Back!</h3>
                <img src="./images/Slice 2.png" alt='img'/>
            </div>
            <div className={styles.inp_container}>
                <input type="text" className={styles.inp} onChange={handleChange} name='email' placeholder='Enter your email'/>
                <input type="text" className={styles.inp} onChange={handleChange} name='password' placeholder='Enter password'/>
            </div>
            <div className={styles.pass_container}>
                <a className={styles.link}>Forgot Password</a>
                <button className={styles.btn}>Sign In</button>
                <p className={styles.txt}>Don’t have an account ? <Link to={'/signUp'}className={styles.link}>Sign Up</Link></p>
            </div>
        </form>
    </section>
}

export default Login;