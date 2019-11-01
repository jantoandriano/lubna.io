import * as firebase from "firebase/app"
import "firebase/auth"


const config = {
    apiKey: "AIzaSyA5O8ROBUxp_9xjOBoFcm5ftnADw0EMyqM",
    authDomain: "lubna-bb85e.firebaseapp.com",
    databaseURL: "https://lubna-bb85e.firebaseio.com",
    projectId: "lubna-bb85e",
    storageBucket: "lubna-bb85e.appspot.com",
    messagingSenderId: "200058227700",
    appId: "1:200058227700:web:05e213db5b0f34a6a987a1",
    measurementId: "G-VYVG8R31SB"
}


const fire = firebase.initializeApp(config)

export default fire