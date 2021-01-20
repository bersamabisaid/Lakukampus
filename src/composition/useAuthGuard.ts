import { SetupContext, watch } from '@vue/composition-api';
import { signedInUser, authState } from 'composition/useAuth';
import { Loading } from 'quasar';

export default (props: unknown, ctx: SetupContext) => {
  watch(
    [() => authState.isWaitingAuthentication, signedInUser],
    async (val) => {
      const [
        waitAuthState, user,
      ] = val as [typeof authState.isWaitingAuthentication, typeof signedInUser.value];

      if (waitAuthState) {
        Loading.show({
          message: 'authenticating...',
        });
      } else {
        Loading.hide();

        if (!user) {
          await ctx.root.$router.push({ name: 'Auth' });
        }
      }
    },
    { immediate: true },
  );
};
