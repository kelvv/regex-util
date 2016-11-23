const test    = require('ava');
const checker = require('../../libs/checker');
const assert  = require('assert');

test('身份证验证', t => {
    assert(checker.isIDCard('542337198304275090')===true); 
    assert(checker.isIDCard('62040219830110189X')===true); 
});