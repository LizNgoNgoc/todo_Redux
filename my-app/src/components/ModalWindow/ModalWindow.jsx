import styles from './modalwindow.module.css'
import { useDispatch } from 'react-redux'
import { patchName } from '../../redux/slices/User'


function ModalWindow({setActive, setting, attr}) {
  
    const dispatch = useDispatch()
    function getDataChanges(e){
        e.preventDefault()
        const form = e.target
        const data = form.elements[0]
        
        setting.function({[data.name] : data.value})
            .then((user) => {
                dispatch(patchName(user))
                setActive(false)
            })
            .catch((err) => console.log(err))
    } 
    return <div className={styles.modal} onClick={() => {setActive(false)}}>
        <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
            <h3 className={styles.title}>{setting.str}</h3>
            <form className={styles.form} onSubmit={getDataChanges}>
                <input placeholder={`New ${setting.attr} your account`} className={styles.input} type="text" name={setting.attr} />
                <button>Save</button>
            </form>
        </div>

    </div>
}

export default ModalWindow