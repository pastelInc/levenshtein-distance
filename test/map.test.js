import assert from 'power-assert';
import _ from 'lodash';
import map from '../src/map';

describe('map', () => {
  it('expect to be created zero fill map', () => {
    const zero = [
      [0, 0],
      [0, 0],
      [0, 0]
    ];
    assert(_.isEqual(map(2, 1), zero));
  });
});
