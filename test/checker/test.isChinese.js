const test = require('ava')
const checker = require('../../libs/checker')
const assert = require('assert')

test('中文验证', t => {
  assert(checker.isChinese('中文') === true)
  assert(checker.isChinese('123asdÄfAD') === false)
})
