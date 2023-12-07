import styles from './togglebutton.module.css';


function ToggleButton() {
    return   <div className={styles.section}>
    <div className = {styles.toggle_switch}>
        <label>
            <input type = 'checkbox'/>
            <span className = {styles.slider}></span>
        </label>
    </div>
</div>
}

export default ToggleButton;