import { SetupContext, watch } from '@vue/composition-api';
import { signedInUser, authState } from 'composition/useAuth';
import { Notify } from 'quasar';

export default (props: unknown, ctx: SetupContext) => {
  watch(
    signedInUser,
    async (val) => {
      if (!authState.isWaitingAuthentication && val) {
        Notify.create('You\'re already logged in!');
        await ctx.root.$router.push({ name: 'Dashboard' });
      }
    },
    { immediate: true },
  );
};
