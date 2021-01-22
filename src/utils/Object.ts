export const copyObjectProperties = (from: unknown, to = {}) => Object.defineProperties(
  to,
  Object.getOwnPropertyDescriptors(from),
) as typeof from & typeof to;

// eslint-disable-next-line prefer-object-spread
export const cloneObject = <T = unknown>(source: T) => Object.assign({}, source) as typeof source;

export function templateApplier<TData>(defaults: Partial<TData>) {
  return (payload: TData) => copyObjectProperties(
    payload,
    copyObjectProperties(defaults),
  ) as TData;
}
