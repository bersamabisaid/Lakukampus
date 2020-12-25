import { onBeforeMount, ref } from '@vue/composition-api';
import firebase from 'src/firebase';
import { auth } from 'src/firebaseServices';
import UserModel from 'models/UserModel';
import { Loading, SessionStorage } from 'quasar';

const providers = {
  Google: new firebase.auth.GoogleAuthProvider(),
};

export const signedInUser = ref<UserModel | null>(null);
export const state = ref({
  isWaitingAuthentication: true,

  get isWaitingRedirectResult() {
    return Boolean(SessionStorage.getItem('state.isWaitingRedirectResult'));
  },

  set isWaitingRedirectResult(v) {
    SessionStorage.set('state.isWaitingRedirectResult', v);
  },
});

auth.onAuthStateChanged(async (user) => {
  if (state.value.isWaitingAuthentication) {
    state.value.isWaitingAuthentication = false;
  }

  signedInUser.value = user && await UserModel.fromUserCredential(user);
});

export default () => {
  const login = async () => {
    state.value.isWaitingRedirectResult = true;
    await auth.signInWithRedirect(providers.Google);
  };
  const logout = () => {
    Loading.show({ message: 'Logging out' });

    auth.signOut()
      .finally(() => Loading.hide());
  };

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
    state,
    login,
    logout,
  };
};
