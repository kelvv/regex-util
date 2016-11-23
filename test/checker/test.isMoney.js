const test    = require('ava');
const checker = require('../../libs/checker');
const assert  = require('assert');

test('金额验证', t => {
    assert(checker.isMoney('01')===false); 
    assert(checker.isMoney('12')===true); 
    assert(checker.isMoney('12.12')===true); 
    assert(checker.isMoney('12.')===false); 
});