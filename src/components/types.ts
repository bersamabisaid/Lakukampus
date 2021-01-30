export type MutationFns<
  TMutations extends {[fnName: string]: unknown}
> = {
  [k in keyof TMutations]: (payload: TMutations[k]) => void;
};
