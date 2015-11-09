# Levenshtein Simple

You can find the levenshtein distance with respect to String and associative array.

## DEPENDENCIES

+ lodash

## EXAMPLE

See `test/levenshtein-simple.test.js`

```javascript
import assert from 'power-assert';

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

describe('levenshteinSimple', () => {
  describe('object', () => {
    function isObjEqual(x, y) {
      return _.isEqual(x, y);
    }
    it('ld(a, b) === 1', () => {
      assert(ld(a, b, isObjEqual) === 1);
    });
  });
  describe('string', () => {
    function isStrEqual(x, y) {
      return x === y;
    }
    it('ld("abc", "xyz") === 3', () => {
      assert(ld('abc', 'xyz', isStrEqual) === 3);
    });
  });
});
