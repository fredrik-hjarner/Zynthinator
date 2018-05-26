import { describe, it } from 'mocha';
import { assert } from 'chai'; // eslint-disable-line
import * as R from 'ramda';
// import {
//   ramdaHelpers, // eslint-disable-line
// } from '../src/helpers';

describe('Stack Overflow.', function() { // eslint-disable-line
  it('Stack Overflow 1', function() { // eslint-disable-line

    const source = [
      { name: 'Aaa', cost: 1 },
      { name: 'Bee', cost: 2 },
      { name: 'Cee', cost: 3 },
    ];
    
    const target = { shortName: 'A', name: 'Aaa' };
    
    const func =
      R.chain(
        R.assoc('cost'),        // ('cost', 1, target)  ->  :)
        R.compose(
          R.prop('cost'),       // ('cost', {name: 'Aaa', cost: 1})  ->  1
          R.find(R.__, source), // (predicate, source)  ->  {name: 'Aaa', cost: 1}
          R.propEq('name'),     // ('name', 'Aaa' )  ->  predicate
          R.prop('name'),       // ('name', target)  ->  'Aaa'
        ),
      );

    const targetWithCost = func(target); // eslint-disable-line
    
    /* console.log('\n\ntargetWithCost:\n');
    console.log(JSON.stringify(targetWithCost, null, 2));
    console.log('\n\n'); */
  });

  it('Stack Overflow 2', function() { // eslint-disable-line

    const source = [
      { name: 'Aaa', cost: 1 },
      { name: 'Bee', cost: 2 },
      { name: 'Cee', cost: 3 },
    ];
    
    const target = { shortName: 'A', name: 'Aaa' };
    
    const func =
      R.converge(
        R.assoc('cost'),      // ('cost', 1, target)  -> {shortName: 'A', name: 'Aaa', cost: 1}
        [
          R.useWith(          // (target, source)  ->  1
            R.compose(        // (predicate, source)  ->  1
              R.prop('cost'), // ('cost', {name: 'Aaa', cost: 1})  ->  1
              R.find,         // (predicate, source)  ->  {name: 'Aaa', cost: 1}
            ),
            [
              R.compose(          // target  ->  predicate
                R.propEq('name'), // ('name', 'Aaa' )  ->  predicate
                R.prop('name'),   // ('name', target)  ->  'Aaa'),
              ),
              R.identity,     // source  ->  source
            ],
          ),
          R.identity,         // (target, source)  ->  target
        ],
      );

    const targetWithCost = func(target, source); // eslint-disable-line
    
    /* console.log('\n\ntargetWithCost:\n');
    console.log(JSON.stringify(targetWithCost));
    console.log('\n\n'); */
  });

  it('Stack Overflow 2.1', function() { // eslint-disable-line

    const example = // eslint-disable-line
      // getChapter =>
      //  ownProps =>

          R.compose(
            R.filter(R.where({
              sectionId: R.equals(R.prop('section', ownProps)), // eslint-disable-line
              subsectionId: R.isNil,
              sub2sectionId: R.isNil,
              sub3sectionId: R.isNil,
            })),
            R.prop('getContents'),
          );
  });
});

