import { onBeforeMount, ref } from '@vue/composition-api';
import firebase from 'src/firebase';
import { auth } from 'src/firebaseServices';
import UserModel from 'models/UserModel';
import { SessionStorage } from 'quasar';

const providers = {
  Google: new firebase.auth.GoogleAuthProvider(),
};

const signedInUser = ref<UserModel | null>(null);
const state = ref({
  get isWaitingRedirectResult() {
    return Boolean(SessionStorage.getItem('state.isWaitingRedirectResult'));
  },
  set isWaitingRedirectResult(v) {
    SessionStorage.set('state.isWaitingRedirectResult', v);
  },
});

auth.onAuthStateChanged(async (user) => {
  signedInUser.value = user ? await UserModel.fromUserCredential(user) : null;
});

export default function useAuth() {
  const login = async () => {
    state.value.isWaitingRedirectResult = true;
    await auth.signInWithRedirect(providers.Google);
  };
  const logout = async () => auth.signOut();

  onBeforeMount(async () => {
    if (state.value.isWaitingRedirectResult) {
      try {
        await auth.getRedirectResult();
        state.value.isWaitingRedirectResult = false;
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error({ ...err });
      }
    }
  });

  return {
    signedInUser,
    login,
    logout,
  };
}
