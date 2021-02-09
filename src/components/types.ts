export type MutationFns<
  TMutations extends {[fnName: string]: unknown}
> = {
  [k in keyof TMutations]: TMutations[k] extends undefined ?
    (() => void)
    : ((payload: TMutations[k]) => void);
};
