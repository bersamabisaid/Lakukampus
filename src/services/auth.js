// import api from 'helpers/api';
import firebase from 'src/firebase';
import 'firebase/auth';

// Google provider
const provider = new firebase.auth.GoogleAuthProvider();

export default {
    googleLogin() {
        try {
            const result = firebase.auth().signInWithRedirect(provider);
            const token = result.credential.accessToken;
            const { user } = result;

            return { token, user };
        } catch (err) {
            return err;
        }
    },
};
