const checker = require('./libs/checker');
/**
 * Export the root object
 */

module.exports = _regex;

function _regex() {}

for(var method of Object.keys(checker)){
    _regex[method] = checker[method]
}
