# regex-util

[![Build Status](https://travis-ci.org/kelvv/regex-util.svg?branch=master)](https://travis-ci.org/kelvv/regex-util)

正则表达式可以用于匹配和替换，该项目搜集开发者日常开发任务需要用到的一些匹配、验证的需求。

该项目会不断收集，不断优化，欢迎issues！

# 安装

```
$ npm install regex-util --save
```

# 使用

```
const regex-util = require('regex-util');

regex-util.isIDCard('440682199011133238')
```

# API

###Checker

* isIDCard  身份证检查
    
    ```
    isIDCard = function( content )
    ```
* isPassword  检查是否符合密码强度 (密码的强度必须是包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间) ,
  参数可以调整
    
    ```
   /**
   * Check whether the password meets the requirements
   * @param {string} content
   * @param {boolean} isGroup  是否开启包含大小写字母和数字的组合
   * @param {boolean} acceptSpecial  能否使用特殊字符
   * @param {int} starLength   最低长度
   * @param {int} endLength   最高长度
   */
   isPassword = function( content , isGroup , acceptSpecial , starLength , endLength)
    ```
* isChinese  中文检查
   
   ```
   /**
   * Check whether the content is Chinese
   * @param {string} content
   */
   isChinese = function( content )
    ```
 
* isEmail  邮箱检查
    
    ```
   /**
   * Check whether the content is Email
   * @param {string} content
   */
   isEmail = function( content )
    ```
* isMoney  金额检查
    
    ```
   /**
   * 检查文本是否是金额，支持小数点
   * @param {string} content
   */
   isMoney = function( content )
    ```
* isPhone  手机号检查
   
   ```
   /**
   * Check whether the content is Phone
   * @param {string} content
   */
   isPhone = function( content )
    ```

###Matcher

* getPictures  获取html中的所有图片链接
    ```
   /**
   * @param {string} html
   */
   getPictures = function( html )
    ```

# License

MIT
