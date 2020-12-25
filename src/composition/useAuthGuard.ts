import { SetupContext, watch } from '@vue/composition-api';
import { signedInUser, state } from 'composition/useAuth';
import { Loading } from 'quasar';

export default (props: unknown, ctx: SetupContext) => {
  watch(
    signedInUser,
    async (val) => {
      if (state.value.isWaitingAuthentication) {
        Loading.show({
          message: 'authenticating...',
        });
      } else {
        Loading.hide();

        if (!val) {
          await ctx.root.$router.push({ name: 'Auth' });
        }
      }
    },
    { immediate: true },
  );
};
