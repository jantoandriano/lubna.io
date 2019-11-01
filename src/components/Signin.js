import React, {useContext} from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import Footer from "./Footer"
import { withRouter, Redirect } from "react-router-dom";
import { AuthContext } from "../Auth";

import "./styles.css"


const Signin = () => {
  // Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/exchange',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      provider : firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      recaptchaParameters: {
        type: 'image', // another option is 'audio'
        size: 'invisible', // other options are 'normal' or 'compact'
      }
    }
  ]
};
const { currentUser } = useContext(AuthContext);
if (currentUser) {
  return <Redirect to="/" />
}
  return (
    <div>
       <div className="box">
          <div className="logo">
            <img src="/assets/images/LOGO_LUBNA.png" alt=""/>
           </div>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
        </div>

        <Footer/>
    </div>
  )
}

export default (withRouter)(Signin)


