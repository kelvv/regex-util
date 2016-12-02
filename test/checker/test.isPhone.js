const test = require('ava')
const checker = require('../../libs/checker')
const assert = require('assert')

test('手机号码验证', t => {
  assert(checker.isPhone('13750508922') === true)
  assert(checker.isPhone('13550508922') === true)
  assert(checker.isPhone('17650508922') === true)
  assert(checker.isPhone('18050508922') === true)
  assert(checker.isPhone('16400029393') === false)
  assert(checker.isPhone('123123') === false)
})
