import styles from './splush.module.css';
import { Link } from 'react-router-dom';

function Splush() {
    return <section className={styles.splash}>
        <div className={styles.container}>
            <img src="./images/undraw_mobile_ux_o0e1 1.png" className={styles.img} alt='img'/>
            <h3 className={styles.header}>Gets things done with TODO</h3>
            <p className={styles.txt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Interdum dictum tempus, interdum at dignissim metus. Ultricies sed nunc.</p>
        </div>
        <Link to={'/signIn'} className={styles.btn}>Get Started</Link>
    </section>
}

export default Splush