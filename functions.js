function add(a,b) {
  a = parseFloat(a)
  b = parseFloat(b)
  c = a + b
  if (isNaN(c)) {
    throw new Error('Input is not a number')
  }
  return c
}

function minus(a,b) {
  return a - b
}

exports.add = add
exports.minus = minus
