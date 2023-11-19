import styles from './modalwindow.module.css'


function ModalWindow({active, setActive}) {
    return <div className={styles.modal} onClick={() => {setActive(false)}}>
        <div className={active ? "modal active" : "modal"} onClick={e => e.stopPropagation()}>

        </div>

    </div>
}

export default ModalWindow