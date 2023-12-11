import { setDarkTheme } from '../../redux/slices/Func';
import styles from './togglebutton.module.css';
import { useDispatch } from 'react-redux';

function ToggleButton() {
    const dispatch = useDispatch()

    return <div className={styles.section}>
        <label className={styles.label}>
            <input onChange={() => dispatch(setDarkTheme())} className={styles.inp} type = 'checkbox'/>
            <span className = {styles.slider}></span>
        </label>
    </div>
}

export default ToggleButton;