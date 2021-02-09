import { SetupContext, watch } from '@vue/composition-api';
import { Loading } from 'quasar';
import useAuth from 'composition/useAuth';

export default function useAuthGuard(props: unknown, ctx: SetupContext) {
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
          await ctx.root.$router.push({ name: 'MyCart' });
        }
      }
    },
    { immediate: true },
  );
}
