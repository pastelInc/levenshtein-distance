import assert from 'power-assert';
import _ from 'lodash';
import ld from '../src/levenshtein-simple';

const a = [
  {
    id: 1,
    name: 'foo'
  },
  {
    id: 2,
    name: 'bar'
  }
];
const b = [
  {
    id: 1,
    name: 'foo'
  }
];
const c = [
  {
    id: 1,
    name: 'foo'
  },
  {
    id: 3,
    name: 'bar'
  }
];

describe('levenshteinSimple', () => {
  describe('object', () => {
    function isObjEqual(x, y) {
      return _.isEqual(x, y);
    }
    context('difference length', () => {
      it('ld(a, b) === 1', () => {
        assert(ld(a, b, isObjEqual) === 1);
      });
    });
    context('difference property', () => {
      it('ld(a, c) === 1', () => {
        assert(ld(a, c, isObjEqual) === 1);
      });
    });
    context('zero array', () => {
      it('ld([], []) === 0', () => {
        assert(ld([], [], isObjEqual) === 0);
      });
    });
  });
  describe('string', () => {
    function isStrEqual(x, y) {
      return x === y;
    }
    context('difference length', () => {
      it('ld("abc", "ab") === 1', () => {
        assert(ld('abc', 'ab', isStrEqual) === 1);
      });
    });
    context('difference string', () => {
      it('ld("abc", "xyz") === 3', () => {
        assert(ld('abc', 'xyz', isStrEqual) === 3);
      });
    });
    context('zero string', () => {
      it('ld("", "") === 0', () => {
        assert(ld('', '', isStrEqual) === 0);
      });
    });
  });
});
