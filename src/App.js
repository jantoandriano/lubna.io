import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Exchange from "./pages/Exchange";
import SignInScreen from "./components/Signin"
import { AuthProvider } from "./Auth";

function App() {
  return (
    <AuthProvider>
    <Router>
      <div>
        <PrivateRoute exact path="/" component={Exchange} />
        <PrivateRoute path="/exchange" component={Exchange} />
        <Route path="/signin" component={SignInScreen} />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
