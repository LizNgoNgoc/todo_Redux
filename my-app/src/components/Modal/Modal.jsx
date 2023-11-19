import styles from './modal.module.css';
import api from '../../service/api';

function Modal() {
    return <>
        <button className={styles.modal} >Modal</button>
    </>
}

export default Modal