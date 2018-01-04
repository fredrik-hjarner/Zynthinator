import { describe, it } from 'mocha';
import { assert } from 'chai';
import * as R from 'ramda';
import {
  ramdaHelpers,
} from '../src/helpers';

describe('Ramda tests.', function() { // eslint-disable-line
  it('rejectPath pipeline', function() { // eslint-disable-line

    const state33 = {
      a: {
        b: {
          c: [1, 2, 3, 4],
        },
      },
    };

    const _transformPath =
      (transformer, path, state) =>
        R.compose(
          R.assocPath(path, R.__, state),
          transformer,
          R.path(path),
        )(state);
  
    const transformPath = // eslint-disable-line
      R.curry(_transformPath);

    const rejectPath = // eslint-disable-line
      (predicate, path, state) =>
        transformPath(
          R.reject(predicate),
          path,
          state,
        );

    const returnValue =
      rejectPath(R.equals(4), ['a', 'b', 'c'], state33);

    assert.deepEqual(
      returnValue, 
      { a: { b: { c: [1, 2, 3] } } },
    );
  });

  /**
   * 
   */
  it('evolve', function() { // eslint-disable-line
    const state = {
      a: {
        b: {
          c: [1, 2, 3, 4],
        },
      },
    };

    const returnValue =
      R.evolve(
        R.assocPath(
          ['a', 'b', 'c'],
          R.reject(R.equals(4)),
          {},
        ),
        state,
      );

    assert.deepEqual(
      returnValue, 
      { a: { b: { c: [1, 2, 3] } } },
    );
  });

  /**
   * 
   */
  it('evolve2', function() { // eslint-disable-line
    const state = {
      a: {
        b: {
          c: [1, 2, 3, 4],
        },
      },
    };

    const returnValue =
      R.evolve(
        { a: { b: { c: R.reject(R.equals(4)) } } },
        state,
      );

    assert.deepEqual(
      returnValue, 
      { a: { b: { c: [1, 2, 3] } } },
    );
  });

  /**
   * 
   */
  it('evolve3', function() { // eslint-disable-line
    const state = {
      a: {
        b: {
          c: [1, 2, 3, 4],
          d: [10, 11, 12],
        },
      },
    };

    const constructEvolveObject =
      R.compose(
        R.reduce(
          (accum, [key, value]) =>
            R.assocPath(R.split('.', key), value, accum),
          {},
        ),        
        R.toPairs,
      );

    const evolvePaths =
      (obj, _state) =>
        R.evolve(
          constructEvolveObject(obj),
          _state,
        );

    const returnValue =
      evolvePaths(
        {
          'a.b.c': R.reject(R.equals(4)),
          'a.b.d': R.append(13),
        },
        state,
      );

    assert.deepEqual(
      returnValue, 
      { a: { b: { c: [1, 2, 3], d: [10, 11, 12, 13] } } },
    );
  });

  /**
   * 
   */
  it('converge. too few arguments', function() { // eslint-disable-line

    const convergeFunction =
      R.curry((a, b) => a + b);

    const branchingFunction =
      x => 2 * x;

    // supplying one argument (branching function) too few.
    const convergeFunctionThatIsAwaitingB =
      R.converge(convergeFunction, [branchingFunction])(1);

    const returnValue =
      convergeFunctionThatIsAwaitingB(10);

    assert.equal(
      returnValue, 
      (1 * 2) + 10,
    );
  });

  /**
   * 
   */
  it('compose. too few arguments', function() { // eslint-disable-line
    const comp =
      R.compose(
        R.add,
        R.multiply(10),
        R.add(1),
      )(1);

    assert.isFunction(comp);

    const returnValue =
      comp(4);

    assert.equal(
      returnValue, 
      24,
    );
  });

  /**
   * 
   */
  it('valEqArrayReturnsEqArray 1', function() { // eslint-disable-line
    const func1 = ramdaHelpers.valEqArrayReturnsEqArray(R.identity);
    const arr1 = [1, 2, 3];

    assert.strictEqual(
      arr1,
      func1(arr1),
    );
  });

  it('valEqArrayReturnsEqArray 2', function() { // eslint-disable-line
    const func1 = ramdaHelpers.valEqArrayReturnsEqArray(R.identity);

    assert.strictEqual(
      func1([1, 2, 3]),
      func1([1, 2, 3]),
    );
  });

  it('valEqArrayReturnsEqArray 3', function() { // eslint-disable-line
    const func1 = ramdaHelpers.valEqArrayReturnsEqArray(R.identity);

    assert.notStrictEqual(
      func1([1, 2, 3]),
      func1([1, 3, 2]),
    );
  });
});

