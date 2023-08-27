import styles from './splush.module.css';

function Splush() {
    return <section className={styles.splash}>
        <div className={styles.container}>
            <img src="./images/undraw_mobile_ux_o0e1 1.png" className={styles.img} alt='img'/>
            <h3 className={styles.header}>Gets things done with TODO</h3>
            <p className={styles.txt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Interdum dictum tempus, interdum at dignissim metus. Ultricies sed nunc.</p>
        </div>
        <button className={styles.btn}>Get Started</button>
    </section>
}

export default Splush