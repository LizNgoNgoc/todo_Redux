import { useSelector, useDispatch } from 'react-redux';
import styles from './custom.module.css';


function Point() {
    const theme = useSelector(state => state.funcSlice.darkTheme)
    const dispatch = useDispatch()
    console.log(theme);
    return <button className={styles.btn}>
           {theme
                ? <img src="/images/point_white.png" alt="" />
                : <img src="/images/point_black.png" alt="" />}

        </button>
}

export default Point;

