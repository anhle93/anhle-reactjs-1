import Firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB1J3YEj-NFCBMVD73KMHo6Od7YmByeXBo",
    authDomain: "anhle-reactjs.firebaseapp.com",
    databaseURL: "https://anhle-reactjs.firebaseio.com",
    projectId: "anhle-reactjs",
    storageBucket: "anhle-reactjs.appspot.com",
    messagingSenderId: "54609876260",
    appId: "1:54609876260:web:983225021e5a1335ed8fb1",
    measurementId: "G-KFVBPGW7DE"
};

function firebaseInit() {
    // Initialize Firebase

    Firebase.initializeApp(firebaseConfig);
}

export default firebaseInit;