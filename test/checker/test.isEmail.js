const test = require('ava')
const checker = require('../../libs/checker')
const assert = require('assert')

test('邮箱验证', t => {
  assert(checker.isEmail('511363759@qq.com') === true)
  assert(checker.isEmail('kelvv@outlook.com') === true)
  assert(checker.isEmail('xxxxÄxx@xxx-xxx.com.hk') === false)
  assert(checker.isEmail('xxx-xxx@xxx-xxx.com.hk') === true)
  assert(checker.isEmail('xxx#!Äxx@xxx-xxx.com.hk') === false)
  assert(checker.isEmail('kelvv@outl)(1ook.com') === false)
})
