import { useState } from 'react'
import styles from './modalwindow.module.css'
import api from '../../service/api'
import { useDispatch } from 'react-redux'
import { patchName } from '../../redux/slices/User'

function ModalWindow({setActive}) {
  
    const dispatch = useDispatch()

    function getDataChanges(e){
        e.preventDefault()
        const form = e.target
        const {name} = form.elements
        api.apiUpdateName({name : name.value})
            .then((user) => {
             
                dispatch(patchName(user.name))
                setActive(false)
            })
            .catch((err) => console.log(err))
    } 

    return <div className={styles.modal} onClick={() => {setActive(false)}}>
        <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
            <h3 className={styles.title}>Edit Profile</h3>
            <form className={styles.form} onSubmit={getDataChanges}>
                <input placeholder='New name your account' className={styles.input} type="text" name='name' />
                <button>Save</button>
            </form>
        </div>

    </div>
}

export default ModalWindow