import styles from './togglebutton.css';


function ToggleButton() {
    return <div className = 'toggle-switch'>
            <label>
                <input type = 'checkbox'/>
                <span className = 'slider'></span>
            </label>
            <a href = 'https://dribbble.com/shots/14199649-Dark-Light-Mode-Toggle-Switch-Pattern-A11y'></a>
    </div>
}

export default ToggleButton;