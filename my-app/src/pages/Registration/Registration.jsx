import styles from './registration.module.css';
import { useState } from 'react';
import { passwordValidation, mailValidation } from '../../components/validation/validation';

function Regstration() {

    const[inputs, setInputs] = useState({
        name : '',
        email : '',
        password : '',
        confirm : ''
    })

    const[errMessage, setErrMessage] = useState({
        email : false,
        password : false
    })

    const [confirmPassword, setConfirmPassword] = useState("")
    const validateForm = () => inputs.password === confirmPassword


    function handleErrMessage(e, Validation) {
        const valid = !Validation(e)
        setErrMessage({...errMessage, [e.target.name] : valid})
    }

    function handleChange({target}) {
        const {name, value} = target
        setInputs({...inputs, [name] : value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputs)
    }

    return <form className={styles.registration} onSubmit={handleSubmit}>
        <div className={styles.container}>
            <h3 className={styles.header}>Welcome Dolphin!</h3>
            <p className={styles.txt}>Let’s help you meet up your tasks</p>
        </div>
        <div className={styles.inp_container}>
            <input type="text" className={styles.inp} name='name' onChange={handleChange} placeholder='Enter your full name'/>
            <input type="text" className={styles.inp} name='email' onChange={handleChange} onInput={(e) => handleErrMessage(e, mailValidation)} placeholder='Enter your email'/>
            <p className={`${styles.error} ${errMessage.email ? styles.show : ''}`}>Error: your email is incorrect</p>
            <input type="text" className={styles.inp} name='password' onChange={handleChange} onInput={(e) => handleErrMessage(e, passwordValidation)} placeholder='Enter password' />
            <p className={`${styles.error} ${errMessage.password ? styles.show : ''}`}>Error: your password is incorrect</p>
            <input type="text" className={styles.inp} name='confirm' onChange={handleChange} onInput={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' />
            {!validateForm() && <p className={`${styles.error} ${errMessage.password ? styles.show : ''}`} >Passwords do not match</p>}
        </div>
        <div className={styles.reg}>
            <button className={styles.btn}>Registration</button>
            <p className={styles.txt_link}>Already have an account ? <a className={styles.link}>Sign In</a></p>
        </div>
    </form>
}

export default Regstration