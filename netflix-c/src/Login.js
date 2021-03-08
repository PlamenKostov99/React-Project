import React from 'react';
import './Login.css'

const Login = (props) => {

    const { email,
            setEmail,
            password,
            setPassword,
            handleLogin,
            handleSignUp,
            hasAccount,
            setHasAccount,
            emailError,
            passwordError} = props;
    return(
        <section className="login">
            <div className="loginContainer">

                <label>Username</label>
                <input type="text" 
                autoFocus 
                required 
                value={email} 
                onChange={e => setEmail(e.target.value)}>

                </input>

                <p className="errorMsg">{emailError}</p>

                <label>Password</label>

                <input type="text" 
                autoFocus 
                required 
                value={password} 
                onChange={e => setPassword(e.target.value)}>

                </input>
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button className= "login__btn"onClick={handleLogin}>Sign In</button>
                        <p>
                            Don't have an account ?
                             <span onClick= {() => setHasAccount(!hasAccount)}>Sign Up</span>
                             </p>
                        </>
                       ) : (
                        <>
                        <button className= "login__btn"onClick={handleSignUp}>Sign Up</button>
                        <p>
                            Have an account ? 
                            <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span>
                            </p>
                        </>
    
                    )}
                </div>

            </div>
        </section>
    )
}

export default Login;