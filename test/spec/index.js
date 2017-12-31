const assert = require('assert')
const context = require('../context/')
const testPckage = require('../../src/')

const testPckageTestSuite = {
    context,
    'should be a function': () => {
        assert.equal(typeof testPckage, 'function')
    },
    'should call package without error': () => {
        assert.doesNotThrow(() => {
            testPckage()
        })
    },
}

module.exports = testPckageTestSuite
