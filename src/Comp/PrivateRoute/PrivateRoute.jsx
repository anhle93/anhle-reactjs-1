import React from 'react';
import firebase from 'firebase';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({
    children, 
    ...restProps
}) {

    // C1:
    // const [isLogged, setIsLogged] = useState(false);
    // firebase.auth().onAuthStateChanged(function (user) {
    //     if (user) {
    //         // User is signed in.
    //         setIsLogged(true);
    //     } else {
    //         setIsLogged(false);
    //     }
    // });
    // const renChildren = isLogged ? children : <Redirect to='/login' />

    // C2:
    const renChildren = firebase.auth().currentUser ? children : <Redirect to='/login' />;

    return (
        <Route {...restProps}>
            {renChildren}
            {/* {children} */}
        </Route>
    );
}
