import { getCurrentInstance, watch } from '@vue/composition-api';
import { Loading } from 'quasar';
import useAuth from 'composition/useAuth';

export default function useAuthGuard() {
  const { signedInUser, authState } = useAuth();

  watch(
    [signedInUser, () => authState.isWaitingAuthentication],
    async () => {
      if (authState.isWaitingAuthentication) {
        Loading.show({
          message: 'authenticating...',
        });
      } else {
        Loading.hide();

        if (!signedInUser.value) {
          await getCurrentInstance()?.$router.push({ name: 'Home' });
        }
      }
    },
    { immediate: true },
  );
}
