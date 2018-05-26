import * as R from 'ramda';
import { allDeepEqual } from './ramdaHelpers';

class DebugHelpers {
  /**
   *  Run two versions of the same function and
   * check if the result is the same.
   * if not then alert/debugger/throw.
   * 
   * 'Preload' it with an array of
   * 'alternative implementations'.
   */
  functionsProduceDeepEqualOutput = 
    funcArray =>          // the 'preload' part
      (...args) => {      // returns a function that masquerades as the original function.
        const outputsArray =
          funcArray.map(func => func(...args));
        if (allDeepEqual(outputsArray)) {
          alert('Error: All the outputs are not equal.');
          debugger;
          throw 'error';
        }
        return outputsArray[0]; // just return any one of them. all equal yo.
      };
    
  /**
   * wraps a function.
   * executed the function but
   * records input and output (return)
   * values,
   * and stores it (somewhere? localStorage? window.stuff?)
   */
  collectIoForUnitTests =
    (funcName, wrappedFunc) =>
      (...args) => {
        const ret = wrappedFunc(...args);

        if (R.isNil(window.debugHelpers)) {
          window.debugHelpers = {};
        }

        if (R.isNil(window.debugHelpers[funcName])) {
          window.debugHelpers[funcName] = [];
        }

        window.debugHelpers[funcName].push({
          args,
          ret,
        });

        return ret;
      }
}

export const debugHelpers = new DebugHelpers();
