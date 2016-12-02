const test = require('ava')
const checker = require('../../libs/checker')
const assert = require('assert')

test('包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间', t => {
  assert(checker.isPassword('123asdÄfAD') === false)
  assert(checker.isPassword('123asdfASD') === true)
  assert(checker.isPassword('123asdfASD123') === false)
  assert(checker.isPassword('12SD123') === false)
  assert(checker.isPassword('12323424') === false)
  assert(checker.isPassword('sadfsass') === false)
  assert(checker.isPassword('asdfASD') === false)
})

test('不能使用特殊字符,长度在3-8之间', t => {
  assert(checker.isPassword('123asdÄfAD', false, false, 3, 8) === false)
  assert(checker.isPassword('123', false, false, 3, 8) === true)
  assert(checker.isPassword('Ä123', false, false, 3, 8) === false)
  assert(checker.isPassword('123123sdd', false, false, 3, 8) === false)
  assert(checker.isPassword('d3', false, false, 3, 8) === false)
})

test('长度在8-10之间', t => {
  assert(checker.isPassword('123asdÄfAD', false, true) === true)
  assert(checker.isPassword('123', false, true) === false)
  assert(checker.isPassword('1asd1223', false, true) === true)
})
