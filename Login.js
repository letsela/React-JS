import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
    const [{ }, dispacth] = useStateValue();

    const signIn = () => {
      auth
      .signInWithPopup(provider)
      .then((result) => {
          dispacth({
              type: actionTypes.SET_USER,
              user: result.user,
          })
      })
      .catch((error) => alert(error.message)); 
    };

    return (
        <div className="login">
            <div className="login_container">
            <img 
                alt=""
                src="https://www.freepnglogos.com/uploads/whatsapp-logo-png-transparent-33.png"
                
            />
            <div className="login_text">
                <h1>Sign in to WhasApp</h1>
            </div>

            <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    );  
}

export default Login;

