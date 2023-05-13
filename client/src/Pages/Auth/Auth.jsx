import React,{useState} from "react";
import './Auth.css' ;
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth' 


const Auth = ()=>{
    const [isSignup , SetIsSignup] = useState(false) ;
    const handerSwitch =()=>{
        SetIsSignup(!isSignup) ;
    }
    return (
        <section className="auth-section"> 
           {isSignup && <AboutAuth/>}
           <div className="auth-container-2">
              { !isSignup && <img src={icon}  alt="slackOverFlow" className="login-logo"/>}
              <form>
                {
                    isSignup && (
                        <label htmlFor="name">
                            <h4>Display Name</h4>
                            <input required type="text" id="name" placeholder="Enter Your Name.."/>
                        </label>
                    )
                }
                <label htmlFor="email">
                    <h4>Email</h4>
                    <input name="email" type="email" id="email" required placeholder="Enter your email"/>
                </label>
                <label htmlFor="password">
                    <div style={{display:'flex' , justifyContent : 'space-between'}}>
                        <h4>Password</h4>
                        {!isSignup && <p style={{color : '#007ac6' , fontSize: '13px'}}>Forgot Password?</p> }
                    </div> 
                    <input name="password" type="password" placeholder="Enter Password..." required id="password"/>
                    { isSignup && (<p style={{color : '#666767' , fontSize: '13px'}}>Password must contain at least 8<br/>
                           Characters,including at least 1 number<br/>
                           and 1 letter.
                        </p>)
                    } 
                </label>
                { isSignup && (
                        <label htmlFor="check">
                            <input type="checkbox" id="check"/>
                           <p style={{fontSize: '13px'}}>Opt-in to receive occasional<br/>
                                product updates,user research invitations,<br/>
                                company announcements,and digests.
                           </p>
                        </label>
                        )
                    }
                 
                <button type="submit" className="auth-btn">{isSignup ? 'Sign up' : 'Log in' }</button>
                { isSignup && (
                    <p style={{color : '#666767' , fontSize: '13px'}}>By clicking "Sign up" you agree to our 
                     <span style={{color : '#007ac6'}}> terms of<br/>services</span>,
                     <span style={{color : '#007ac6'}}> privacy policy</span> and 
                     <span style={{color : '#007ac6'}}> cookies policy</span>.</p>
                )}
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