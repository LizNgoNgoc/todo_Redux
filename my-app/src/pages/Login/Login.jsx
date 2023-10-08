import styles from './login.module.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { passwordValidation, mailValidation } from '../../components/validation/validation';
import api from '../../service/api';

function Login () {
    const navigate = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem('token')) navigate('/todos') 
    }, [])

    const[inputs, setInputs] = useState({
        email : '',
        password : ''
    })

    const[errMessage, setErrMessage] = useState({
        email : false,
        password : false
    })

    function handleChange({target}) {
        const {name, value} = target
        setInputs({...inputs, [name] : value})
        
    }

    function handleErrMessage(e, Validation) {
        const valid = !Validation(e)
        setErrMessage({...errMessage, [e.target.name] : valid})
    }

    function handleSubmit(e) {
        e.preventDefault()
        api.apiLogin(inputs)
            .then(({token}) => {
                localStorage.setItem('token', token)
                if(token){
                    return navigate('/todos')
                  }
            })
    }

    return <section className={styles.login}>
        <form onSubmit={handleSubmit}>
            <div className={styles.container}>
                <h3 className={styles.header}>Welcome Back!</h3>
                <img src="./images/Slice 2.png" alt='img'/>
            </div>
            <div className={styles.inp_container}>
                <input type="text" className={styles.inp} onChange={handleChange} onInput={(e) => handleErrMessage(e, mailValidation)} name='email' placeholder='Enter your email'/>
                <p className={`${styles.error} ${errMessage.email ? styles.show : ''}`}>Error: your email is incorrect</p>
                <input type="text" className={styles.inp} onChange={handleChange} onInput={(e) => handleErrMessage(e, passwordValidation)} name='password' placeholder='Enter password'/>
                <p className={`${styles.error} ${errMessage.password ? styles.show : ''}`}>Error: your password is incorrect</p>
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