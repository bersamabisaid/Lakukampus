import { onBeforeMount, ref } from '@vue/composition-api';
import firebase, { auth } from 'src/firebase';
import { Loading, SessionStorage } from 'quasar';
import type fb from 'firebase';

const providers = {
  Google: new firebase.auth.GoogleAuthProvider(),
};

export const signedInUser = ref<fb.User | null>(null);
export const authState = ref({
  isWaitingAuthentication: true,

  get isWaitingRedirectResult() {
    return Boolean(SessionStorage.getItem('state.isWaitingRedirectResult'));
  },

  set isWaitingRedirectResult(v) {
    SessionStorage.set('state.isWaitingRedirectResult', v);
  },
});

auth.onAuthStateChanged((user) => {
  if (authState.value.isWaitingAuthentication) {
    authState.value.isWaitingAuthentication = false;
  }

  signedInUser.value = user;
});

export default () => {
  const login = async () => {
    authState.value.isWaitingRedirectResult = true;
    await auth.signInWithRedirect(providers.Google);
  };
  const logout = () => {
    Loading.show({ message: 'Logging out' });

    auth.signOut()
      .finally(() => Loading.hide());
  };

  onBeforeMount(async () => {
    if (authState.value.isWaitingRedirectResult) {
      try {
        await auth.getRedirectResult();
        authState.value.isWaitingRedirectResult = false;
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error({ ...err });
      }
    }
  });

  return {
    signedInUser,
    authState,
    login,
    logout,
  };
};
