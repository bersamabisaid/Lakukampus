import { SetupContext, watch } from '@vue/composition-api';
import { signedInUser, authState } from 'composition/useAuth';
import { Notify } from 'quasar';

export default (props: unknown, ctx: SetupContext) => {
  watch(
    [() => authState.isWaitingAuthentication, signedInUser],
    async (val) => {
      const [
        waitAuthState, user,
      ] = val as [typeof authState.isWaitingAuthentication, typeof signedInUser.value];

      if (!waitAuthState && user) {
        Notify.create('You\'re already logged in!');
        await ctx.root.$router.push({ name: 'Dashboard' });
      }
    },
    { immediate: true },
  );
};
