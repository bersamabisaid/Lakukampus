import { getCurrentInstance, watch } from '@vue/composition-api';
import { Notify } from 'quasar';
import useAuth from 'composables/useAuth';

export default () => {
  const { signedInUser, authState } = useAuth();
  const vueInstance = getCurrentInstance();

  watch(
    [signedInUser, () => authState.isWaitingAuthentication],
    async () => {
      if (!authState.isWaitingAuthentication && signedInUser.value) {
        Notify.create('You\'re already logged in!');
        await vueInstance?.$router.push({ name: 'Dashboard' });
      }
    },
    { immediate: true },
  );
};
