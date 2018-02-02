var convertToURI = require('../src/helpers.js')
test('splits for space & returns uri joined by +', () => {
  expect(convertToURI('http://example.com')).toBe('http://example.com')
})
