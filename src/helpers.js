// @flow
import type { Element } from 'react';

export const isElementAnSFC = (element: Element<*>): boolean => {
  const isNativeDOMElement = typeof element.type === 'string';

  if (isNativeDOMElement) {
    return false;
  }

  return !element.type.prototype.isReactComponent;
};

// eslint-disable-next-line flowtype/no-weak-types
export function omit<R: Object, T: R>(obj: T, attrs: $Keys<T>[] = []): R {
  const result: $Shape<T> = {};
  Object.keys(obj).forEach((key) => {
    if (attrs.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}

export function arraysEqual<T>(a: T[], b: T[]) {
  const sameObject = a === b;
  if (sameObject) {
    return true;
  }

  const notBothArrays = !Array.isArray(a) || !Array.isArray(b);
  const differentLengths = a.length !== b.length;

  if (notBothArrays || differentLengths) {
    return false;
  }

  return a.every((element, index) => element === b[index]);
}
