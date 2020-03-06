QUnit.module('MAIN MODULE', {})

QUnit.test('TEST calcArea', assert => {
  assert.equal(calcAreaTest(1), 154, 'Test radius = 7')
  assert.equal(calcAreaTest(3), 616, 'Test radius = 14')
  assert.equal(calcAreaTest(5), 1386, 'Test radius = 21')
  assert.equal(calcAreaTest(7), 2464, 'Test radius = 28')
  assert.equal(calcAreaTest(10), 0, 'Test radius = 0')
})