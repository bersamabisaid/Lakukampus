// Mocks all files ending in `.vue` showing them as plain Vue instances
declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}

declare module '*.jpg' {
  export default String;
}

declare module '*.png' {
  export default String;
}

declare module '*.svg' {
  export default String;
}
