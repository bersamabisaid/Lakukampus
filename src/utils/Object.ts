export const copyObjectProperties = <T = unknown>(from: T, to = {}) => Object.defineProperties(
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

export const compactObject = (val: unknown) => {
  const data = (Array.isArray(val) ? val.filter(Boolean) : val) as Record<string, unknown>;
  return Object.keys(data).reduce(
    (acc, key) => {
      const value = data[key];
      if (value) {
        acc[key] = typeof value === 'object'
          ? compactObject(value) : value;
      }
      return acc;
    },
    (Array.isArray(val) ? [] : {}) as Record<string, unknown>,
  );
};
