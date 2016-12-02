'use strict'

const checker = require('./libs/checker')
const matcher = require('./libs/matcher')
/**
 * Export the root object
 */

module.exports = _regex

function _regex () {}

for (let method of Object.keys(checker)) {
  _regex[method] = checker[method]
}

for (let method of Object.keys(matcher)) {
  _regex[method] = matcher[method]
}
