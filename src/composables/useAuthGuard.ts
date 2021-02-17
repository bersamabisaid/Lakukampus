import { getCurrentInstance, watch } from '@vue/composition-api';
import { Loading } from 'quasar';
import useAuth from 'composables/useAuth';

export default function useAuthGuard() {
  const { signedInUser, authState } = useAuth();
  const vueInstance = getCurrentInstance();

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
          await vueInstance?.$router.push({ name: 'Home' });
        }
      }
    },
    { immediate: true },
  );
}
