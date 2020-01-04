import React from 'react';
import firebase from 'firebase';
import { Route, useHistory } from 'react-router-dom';

export default function LoginRoute({
    children,
    ...restProps
}) {
    const history = useHistory();
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            history.push("/");
        }
    });

    return (
        <Route {...restProps}>
            {children}
        </Route>
    );
}
