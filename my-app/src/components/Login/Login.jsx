import styles from './login.module.css';

function Login () {
    return <section>
        <div>
            <h3>Welcome Back!</h3>
            <img src="./images/Slice 2.png" alt='img'/>
        </div>
        <div>
            <input type="text" placeholder='Enter your email'/>
            <input type="text" placeholder='Enter password'/>
        </div>
        <div>
            <a>Forgot Password</a>
            <button>Sign In</button>
            <p>Don’t have an account ?<a>Sign Up</a></p>
        </div>
    </section>
}

export default Login;