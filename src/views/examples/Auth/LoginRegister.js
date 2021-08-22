import React, { useEffect,useState } from 'react'
import "./LoginRegisterStyle.scss"

function LoginRegister(props) {
const [userIsRegistered,setuserIsRegistered] =useState(true);
    // var userIsRegistered = true;
    const RegisterForm = () => {
        return (
            <form class="login-form1">
                <input type="text" placeholder="name" />
                <input type="password" placeholder="password" />
                <input type="text" placeholder="email address" />
                <button>create</button>
                <p class="message1">Already registered? <a href="#"
                    onClick={Toggle}
                >Sign In</a></p>
            </form>
        );
    }
    const LoginForm = () => {
        return <form class="login-form1">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>login</button>
            <p class="message1">Not registered? <a href="#"

                onClick={Toggle}

            >Create an account</a></p>
        </form>
    }
    function Toggle() {
        console.log(userIsRegistered);
        setuserIsRegistered(!userIsRegistered);
        console.log(userIsRegistered);
    }

    return (
        <div>
            <div class="login-page1">
                <div class="form1">

                    {userIsRegistered ? <RegisterForm /> :<LoginForm /> }
                    {/* {userIsRegistered ? <LoginForm /> : <RegisterForm />} */}



                </div>
            </div>
        </div>
    )


}

export default LoginRegister
