function add(a,b) {
  a = parseFloat(a)
  b = parseFloat(b)
  c = a + b
  if (isNaN(c)) {  
    throw new Error('Input is not a number')
  }
  return c
}

exports.add = add
