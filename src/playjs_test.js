import UnitTest from './playjs.js'

function testAssertTrue(u = UnitTest()) {
  u.assertTrue(true)
}

function testAssertNotTrue(u = UnitTest()) {
  u.assertNotTrue(false)
}

testAssertTrue(UnitTest('testAssertTrue'))
testAssertNotTrue(UnitTest('testAssertNotTrue'))
