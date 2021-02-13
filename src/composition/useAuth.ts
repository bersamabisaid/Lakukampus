import { onBeforeMount, reactive } from '@vue/composition-api';
import firebase, { auth } from 'src/firebase';
import { Loading } from 'quasar';
import { useNamespacedMutations, useNamespacedState } from 'vuex-composition-helpers';
import type { AuthStateInterface, IUser } from 'src/store/Auth/state';
import type { AuthMutationInterface } from 'src/store/Auth/mutations';

const providers = {
  Google: new firebase.auth.GoogleAuthProvider(),
};

export default function useAuth() {
  const {
    user: signedInUser, isWaitingRedirectResult, firebaseAuthStateListener, ...authState
  } = useNamespacedState<AuthStateInterface>('authModule', [
    'user', 'isWaitingAuthentication', 'isWaitingRedirectResult', 'firebaseAuthStateListener',
  ]);

  const {
    setUser,
    setWaitingRedirectResult,
    setFirebaseAuthStateListener,
    stopWaitingAuthentication,
    unsubscribeFirebaseAuthStateListener,
  } = useNamespacedMutations('authModule', [
    'setUser',
    'setWaitingRedirectResult',
    'setFirebaseAuthStateListener',
    'stopWaitingAuthentication',
    'unsubscribeFirebaseAuthStateListener',
  ]) as AuthMutationInterface;

  const login = async () => {
    setWaitingRedirectResult(true);
    await auth.signInWithRedirect(providers.Google);
  };

  const logout = () => {
    Loading.show({ message: 'Logging out' });

    auth.signOut()
      .finally(() => Loading.hide());
  };

  onBeforeMount(async () => {
    if (!firebaseAuthStateListener.value) {
      const listener = auth.onAuthStateChanged((user) => {
        stopWaitingAuthentication();
        setUser(user?.toJSON() as IUser);
      });

      setFirebaseAuthStateListener(listener);
    }

    if (isWaitingRedirectResult.value) {
      try {
        await auth.getRedirectResult();
        setWaitingRedirectResult(false);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error({ ...err });
      }
    }
  });

  return {
    signedInUser,
    authState: reactive({
      ...authState,
      isWaitingRedirectResult,
      firebaseAuthStateListener,
    }),
    login,
    logout,
    unsubscribeFirebaseAuthStateListener,
  };
}
