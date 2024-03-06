import PlayJs from '../src/playjs.js'

((u)=> {
  u.assertTrue(true)
})(PlayJs('testAssertTrue'));

((u)=> {
  u.assertNotTrue(false)
})(PlayJs('testAssertNotTrue'));
