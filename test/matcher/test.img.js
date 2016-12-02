const test = require('ava')
const matcher = require('../../libs/matcher')
const assert = require('assert')

test('提取图片链接', t => {
  assert(matcher.getPictures('<p><span style="font-size: 15px; color: rgb(73, 73, 73);"><img data-s="300,640" data-type="png" data-src="http://mmbiz.qpic.cn/mmbiz_png/Ng7bJHbt4kHPVD5HFweSujj7ibYC0PibRibDVnIricfKGYpqMfgwIEichicbAIw9r3WN646jXiabcO8psicUNApjXtibp3Q/0?wx_fmt=png" data-ratio="0.5245283018867924" data-w="530"  /><br  /></span></p><p><span style="font-size: 15px; color: rgb(73, 73, 73);">').length === 1)
})
