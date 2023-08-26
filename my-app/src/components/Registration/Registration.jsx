import styles from './regidtration.module.css';

function Regstration() {
    return <form>
        <div>
            <h3>Welcome Dolphin!</h3>
            <p>Let’s help you meet up your tasks</p>
        </div>
        <div>
            <input type="text" placeholder='Enter your full name'/>
            <input type="text" placeholder='Enter your email'/>
            <input type="text" placeholder='Enter password' />
            <input type="text" placeholder='Confirm Password' />
        </div>
        <div>
            <button>Regidtration</button>
            <p>Already have an account ?<a>Sign In</a></p>
        </div>
    </form>
}

export default Regstration