import { SetupContext, watch } from '@vue/composition-api';
import { Notify } from 'quasar';
import useAuth from 'composables/useAuth';

export default (props: unknown, ctx: SetupContext) => {
  const { signedInUser, authState } = useAuth();

  watch(
    [signedInUser, () => authState.isWaitingAuthentication],
    async () => {
      if (!authState.isWaitingAuthentication && signedInUser.value) {
        Notify.create('You\'re already logged in!');
        await ctx.root.$router.push({ name: 'Dashboard' });
      }
    },
    { immediate: true },
  );
};
