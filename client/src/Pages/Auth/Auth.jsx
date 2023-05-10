import React,{useState} from "react";
import './Auth.css' ;
import icon from '../../assets/icon.png'


const Auth = ()=>{
    const [isSignup , SetIsSignup] = useState(false) ;
    const handerSwitch =()=>{
        SetIsSignup(!isSignup) ;
    }
    return (
        <section className="auth-section"> 
           <div className="auth-container">
              { !isSignup && <img src={icon}  alt="slackOverFlow" className="login-logo"/>}
              <form>
                <label htmlFor="email">
                    <h4>Email</h4>
                    <input name="email" type="email" id="email" required placeholder="Enter your email"/>
                </label>
                <label htmlFor="password">
                    <div>
                        <h4>Password</h4>
                        <h4>Forgot Password?</h4>
                    </div> 
                    <input name="password" type="password" required id="password"/>
                </label>
                <button type="submit" className="auth-btn">{isSignup ? 'Sign up' : 'Log in' }</button>
              </form>
              <p>
                {isSignup ? 'Already have an account?' : "Don't have an account?"}
                <button type="button" onClick={handerSwitch}  className="handler-switch-btn">{isSignup?'Log in' : 'Sign up'}</button>
              </p>
           </div>
        </section>
    )
}
export default Auth ;