export default class Unauthenticated extends Error {
  constructor() {
    super('Unauthenticated!');
  }
}
