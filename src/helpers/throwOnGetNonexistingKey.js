/**
 * Throw exception when trying to access a key that does not exist!
 */
const handler = {
  get(target, key) {
    if (key in target) {
      return target[key];
    }
    throw `Exception: '${key}' does not exist on the object:${'\n'}${JSON.stringify(target, null, 2)}`;
  },
};

export const throwOnGetNonexistingKey = (obj) => new Proxy(obj, handler);
