import { describe, it } from 'mocha';
import { assert } from 'chai'; // eslint-disable-line
import * as R from 'ramda';

describe('Ramda Bugs.', function() { // eslint-disable-line

  it('R.converge 1 succeeds', function() { // eslint-disable-line
  
    const func =
      R.converge(
        (x, y) => x + y,
        [
          R.identity,
          R.identity,
        ],
      );

    /**
     * returns:
     *  the number 2
     */
    console.log(func(1));
  });

  it('R.converge 2 fails', function() { // eslint-disable-line
  
    const func =
      R.converge(
        x => y => x + y,
        [
          R.identity,
          R.identity,
        ],
      );

    /**
     * returns:
     *  the function y => 2 + y
     */
    console.log(func(1));
  });

  it('R.chain 1 succeeds', function() { // eslint-disable-line
    
    const func =
      R.chain(
        x => y => x + y,
        R.identity,
      );

    /**
     * returns:
     *  the number 2
     */
    console.log(func(1));
  });

  it('R.chain 1 fails', function() { // eslint-disable-line
    
    const func =
      R.chain(
        (x, y) => x + y,
        R.identity,
      );

    /**
     * returns:
     *  the function y => 2 + y
     */
    console.log(func(1));
  });

  it('R.converge 3 succeeds', function() { // eslint-disable-line
  
    const func =
      R.converge(
        (x, y) => x + y,
        [
          R.add,
          R.add,
        ],
      );

    /**
     * returns:
     *  the number 4
     *  which is correct (1+1) + (1+1) = 4
     */
    console.log(func(1, 1));
  });

  it('R.converge 3 fails', function() { // eslint-disable-line
  
    const func =
      R.chain(
        x => y => x + y,
        R.add,
      );

    /**
     * returns:
     *  a function
     *  R.add only receives the first
     *  argument, so x becomes R.add(1)... 
     */
    console.log(func(1, 1));
  });
});

