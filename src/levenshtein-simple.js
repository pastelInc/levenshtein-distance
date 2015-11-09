import _ from 'lodash';
import map from './map';

function levenshteinDistance(a, b, callback) {
  const m = map(a.length, b.length);

  for (const i of _.range(0, a.length + 1)) {
    m[i][0] = i;
  }
  for (const j of _.range(0, b.length + 1)) {
    m[0][j] = j;
  }
  for (const i of _.range(1, a.length + 1)) {
    for (const j of _.range(1, b.length + 1)) {
      let x;

      if (callback(a[i - 1], b[j - 1])) {
        x = 0;
      } else {
        x = 1;
      }
      m[i][j] = Math.min(m[i - 1][j] + 1, m[i][j - 1] + 1, m[i - 1][j - 1] + x);
    }
  }
  return m[a.length][b.length];
}

export default levenshteinDistance;
