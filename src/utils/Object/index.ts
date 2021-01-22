export const assignObjectProperties = (from: unknown, to = {}) => Object.defineProperties(
  to,
  Object.getOwnPropertyDescriptors(from),
) as typeof from & typeof to;

// eslint-disable-next-line prefer-object-spread
export const cloneObject = <T = unknown>(source: T) => Object.assign({}, source) as typeof source;
