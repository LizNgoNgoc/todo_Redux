import styles from './registration.module.css';
import { useState } from 'react';

function Regstration() {

    const[inputs, setInputs] = useState({
        name : '',
        email : '',
        password : '',
        confirm : ''
    })

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
            <input type="text" className={styles.inp} name='email' onChange={handleChange} placeholder='Enter your email'/>
            <input type="text" className={styles.inp} name='password' onChange={handleChange} placeholder='Enter password' />
            <input type="text" className={styles.inp} name='confirm' onChange={handleChange} placeholder='Confirm Password' />
        </div>
        <div className={styles.reg}>
            <button className={styles.btn}>Registration</button>
            <p className={styles.txt_link}>Already have an account ? <a className={styles.link}>Sign In</a></p>
        </div>
    </form>
}

export default Regstration