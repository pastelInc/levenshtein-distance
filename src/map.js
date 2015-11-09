import _ from 'lodash';

function map(rlen, clen) {
  const result = new Array(rlen + 1);

  for (let i = 0; i <= rlen; i += 1) {
    result[i] = _.fill(new Array(clen + 1), 0);
  }
  return result;
}

export default map;
