export const assignObjectProperties = (from: unknown, to = {}) => Object.defineProperties(
  to,
  Object.getOwnPropertyDescriptors(from),
) as typeof from & typeof to;

// eslint-disable-next-line prefer-object-spread
export const cloneObject = (source: unknown) => Object.assign({}, source);
