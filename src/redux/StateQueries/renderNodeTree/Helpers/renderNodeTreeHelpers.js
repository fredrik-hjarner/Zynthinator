import _ from 'lodash';
import * as R from 'ramda';
import {
  createSelector,
} from 'reselect';
import {
  // stateQueries,
  memoizedStateQueries,
} from '../../memoizedStateQueries';
import {
  debugHelpers,
} from '../../../../helpers';

class RenderNodeTreeHelpers {
    fulfillsCriteria =
      (chains, allIds) => {
        const { length } = chains[0];
        const equalLengths =
          chains.every(ch => ch.length === length);
        if (equalLengths === false) {
          return false;
        }
        // a specific 'id' must be in the same index
        // in all chains.
        // so loop though each id and see if they are at the same index
        return allIds.every((id) => {
          // find a chain that includes 'id'
          // and then check if any other chain has it as antoher index
          // then return false.
          const chain =
            chains.find(ch => ch.includes(id));
          const index =
            chain.findIndex(el => el === id);

          const aligned =
            chains.every((ch) => {
              const i = ch.findIndex(el => el === id);
              return (i === index || i === -1);
            });
          return aligned;
        });
      };

    /**
     * @param chainsArray an array of arrays. i.e. an array of chains.
     */
    getAllIdsInChains =
      R.compose(
        R.uniq,
        R.reject(R.isNil),
        R.flatten,
      );

    removeNullColumns =
      (chains) => {
        // I assume all are of equal length.
        let i = 0;
        while (i < chains[0].length) {
          if (chains.every(ch => ch[i] === null)) {
            chains.forEach((ch) => {
              ch.splice(i, 1);
            });
          } else {
            i++;
          }
        }
      };

    isAlignedWithRegardToOneId =
      (chains, id) => {
        // find a chain that includes 'id'
        // and then check if any other chain has it as another index
        const chain =
          chains.find(ch => ch.includes(id));
        const index =
          chain.findIndex(el => el === id);

        const aligned =
          chains.every((ch) => {
            const i = ch.findIndex(el => el === id);
            return (i === index || i === -1);
          });
        return aligned;
      }

    // Like isAlignedWithRegardToOneId
    // but checks N id:s.
    isAlignedWithRegardToN =
      (chains, allIds, n) => {
        const nIds =
          _.take(allIds, n);
        return nIds.every(id =>
          this.isAlignedWithRegardToOneId(chains, id));
      }

    maxLengthOfChains =
      (chains) => {
        const lengths =
          chains.map(ch => ch.length);
        return Math.max(...lengths);
      }

    makeAllChainsEqualLength =
      (chains) => {
        const max =
          this.maxLengthOfChains(chains);
        chains.forEach((ch) => {
          const len = ch.length;
          const nullsToAdd =
            _.times(max - len, () => null);
          ch.push(...nullsToAdd);
        });
      }

    // assumes that all 'id' have the same index in all chains.
    // i.e. that they are already aligned.
    canMoveAllOfIdToTheLeft =
      (chains, id) => {
        this.makeAllChainsEqualLength(chains);
        // get index of 'id'
        // if id'sindex != 0
        // are all the places at id's index-1 nulls?
        let index;
        chains.find((ch) => {
          if (ch.includes(id)) {
            index = ch.findIndex(val => val === id);
            return true;
          }
          return false;
        });
        if (index === undefined || index === -1) {
          alert('Error');
          debugger;
        }
        if (index === 0) {
          return false;
        }
        return chains.every((ch) => {
          // if 'id' exists in
          // this chain then
          // check if the preceding value is
          if (!ch.includes(id)) {
            return true;
          }
          return ch[index - 1] === null;
        });
      }

    // assumes a null is to the left, so switch the
    // place of that null and 'id'.
    // [null, 5]
    // =>
    // [5, null]
    moveAllOfIdToTheLeft =
      (chains, id) => {
        let index;
        chains.find((ch) => {
          if (ch.includes(id)) {
            index = ch.findIndex(val => val === id);
            return true;
          }
          return false;
        });
        if (index === undefined || index === -1) {
          alert('Error');
          debugger;
        }
        if (index === 0) {
          alert('Error');
          debugger;
          return;
        }
        chains.forEach((ch) => {
          // if 'id' exists in 'ch' then
          // move it left
          if (ch.includes(id)) {
            ch[index] = null; // eslint-disable-line
            ch[index - 1] = id; // eslint-disable-line
          }
        });
      }

    applyGravity =
      (chains, allIds) => {
        allIds.forEach((id) => {
          if (this.canMoveAllOfIdToTheLeft(chains, id)) {
            this.moveAllOfIdToTheLeft(chains, id);
          }
        });
        this.removeNullColumns(chains);
      }

  /**
   * THIRD TRY FUNCTIONS
   */
  /**
   * Calculates the highest index for all ids.
   * Sorted with highest 'lastIndex' first.
   *  [
   *    {
   *      id: 1,
   *      lastIndex: 7,
   *    },
   *    {
   *      id: 2,
   *      lastIndex: 3,
   *    },
   *  ]
   */
  calcIdAndLastIndexArray =
    (chains, allIds) => {
      if (allIds === undefined) {
        debugger;
      }
      /* const allIds =
        this.getAllIdsInChains(chains); */
      const res =
        allIds.map((id) => {
          const indices =
            chains.map(ch => ch.findIndex(val => val === id));
          return {
            id,
            lastIndex:
              Math.max(...indices),
          };
        });
      return _.sortBy(res, obj => -obj.lastIndex);
    }

  /**
   * 
   * @param index the index in idAndLastIndexArray
   *              that we are looking at.
   */
  alignId =
    (chains, idAndLastIndexArray, index /* , allIds */) => {
      // move them to the right until they line up.
      // for every insertion of a null move all the previously
      // lined up nodes (i.e. with index less than this index)
      // one step to the right.
      if (idAndLastIndexArray[index] === undefined) {
        debugger;
      }
      const {
        id,
        lastIndex,
      } = idAndLastIndexArray[index];
      // go through all 'chains'
      // if find id
      // then move it 'lastIndex - itsIndex' to the right.
      chains.forEach((ch) => {
        if (ch.includes(id)) {
          const i =
            ch.findIndex(val => val === id);
          const indexDiff =
            lastIndex - i;
          this.moveCellRight(ch, i, indexDiff);
          // move previously aligned lines
          // on the OTHER chains.
          /* for (let prevIndex = index - 1; prevIndex > -1; prevIndex--) {
            const _idAndLastIndexArray =
              this.calcIdAndLastIndexArray(chains, allIds);
            // TODO this recursion takes EXTREME time.
            this.alignId(chains, _idAndLastIndexArray, prevIndex, allIds);
          } */
        }
      });
    }

  moveCellRight =
    (array, index, steps) => {
      // insert steps number of nulls before index.
      const nulls =
        _.times(steps, () => null);
      array.splice(index, 0, ...nulls);
    }

  /**
   * MAIN
   */
  alignChainsBySkill =
    createSelector(
      [memoizedStateQueries.getAllChains],
      /**
       * todo why doesn't it work to just do 'this._alignChainsBySkill' here.
       * I get it! is because '_alignChainsBySkill'
       * is defined later.
       * wrapping it in a lambda postpones execution of the func.
       */
      allChains =>
        this._alignChainsBySkill(allChains),
    )

  _alignChainsBySkill = // todo. finish this awesome functionality :)
    debugHelpers.collectIoForUnitTests(
      '_alignChainsBySkill',
      (...args) => this.__alignChainsBySkill(...args),
    )

  __alignChainsBySkill =
    (_allChains) => {
      const allChains =
        R.clone(_allChains);
      if (allChains.length === 0) {
        return [];
      }

      // console.log('\n\nallChains:');
      // console.log(JSON.stringify(allChains, null, 2));

      // Order ids after which exists the
      // MOST NUMBER OF TIMES
      // in all the chains.

      // Collect all the ids of all chains.

      const allIds =
        this.getAllIdsInChains(allChains);

      /* const numberOfIds =
        allIds.length; */
      allIds.forEach((id, index) => {
        const idAndLastIndexArray =
          this.calcIdAndLastIndexArray(allChains, allIds);

        // console.log('\n\nidAndLastIndexArray:');
        // console.log(JSON.stringify(idAndLastIndexArray, null, 2));

        this.alignId(allChains, idAndLastIndexArray, index, allIds);

        // console.log('\n\nchains aligned by first id:');
        // console.log(JSON.stringify(allChains, null, 2));
      });

      const alignedChains = allChains;

      this.makeAllChainsEqualLength(alignedChains);

      if (!this.fulfillsCriteria(alignedChains, allIds)) {
        alert('Error! !this.fulfillsCriteria(alignedChains, allIds).');
        debugger;
      }

      this.removeNullColumns(alignedChains);

      this.applyGravity(alignedChains, allIds);
      this.applyGravity(alignedChains, allIds);
      this.applyGravity(alignedChains, allIds);

      return _.sortBy(alignedChains, [chain => _.last(chain)]);
    }
}

export const renderNodeTreeHelpers = new RenderNodeTreeHelpers();
