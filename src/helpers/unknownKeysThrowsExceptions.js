/**
 * Used as:
 * 
 * @unknownKeysThrowsExceptions
 * class X {
 *   ...
 * }
 * 
 * Throw exception when trying to access a key that does not exist!
 */
const handler = {
  get(target, key) {
    if (key in target || key === 'toJSON') {
      return target[key];
    }
    throw `Exception: '${key}' is not a key on on class.`;
  }
};

export const unknownKeysThrowsExceptions = (Class) => new Proxy(Class, handler);
