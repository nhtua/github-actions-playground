const {add,minus} = require('./functions')


describe('Add two numbers', () => {

  test('Numeric inputs should give the answer', ()=>{
    expect(add('12','18')).toEqual(12+18)
  })
  test('Mixing numeric inputs should give the answer', ()=>{
    expect(add('12',18)).toEqual(12+18)
  })

  test('One non-numeric input should throw error', ()=> {
    expect(()=> {
      add('abc',18)
    }).toThrow('Input is not a number')
  })
  test('Two non-numeric input should throw error', ()=> {
    expect(()=> {
      add('abc', 'xyz')
    }).toThrow('Input is not a number')
  })
})


describe('Minus two numbers', () => {

  test('Numeric inputs should give the answer', ()=>{
    expect(minus(8,7)).toEqual(8-7)
  })
  test('Mixing numeric inputs should give the answer', ()=>{
    expect(minus(9,7)).toEqual(9-7)
  })
})
