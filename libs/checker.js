'use strict'
module.exports = checker;

function checker() {
	return checker;
}

/**
 * Check whether the password meets the requirements
 * @param {string} content
 * @param {boolean} isGroup
 * @param {boolean} acceptSpecial
 * @param {int} starLength
 * @param {int} endLength
 */
checker.isPassword = function( content , isGroup , acceptSpecial , starLength , endLength){
    isGroup = isGroup==undefined?true:isGroup
    acceptSpecial = acceptSpecial==undefined?false:acceptSpecial
    starLength = starLength==undefined?8:starLength
    endLength = endLength==undefined?10:endLength

    var regex_str = '';
    if(isGroup){
        regex_str += '(?=[\\s\\S]*[a-z])(?=[\\s\\S]*[A-Z])(?=[\\s\\S]\\d)';
    }
    if(!acceptSpecial){
        regex_str += '(?=^\\w+$)';
    }
    regex_str += `[\\s\\S]{${starLength},${endLength}}$`;
    var regex = new RegExp(regex_str);
    return regex.test(content);
}

/**
 * Check whether the content is Chinese
 * @param {string} content
 */
checker.isChinese = function( content ){
    return /^[\u4e00-\u9fa5]+$/.test(content);
}

/**
 * Check whether the content is Email 
 * @param {string} content
 */
checker.isEmail = function( content ){
    return /^[\w-_]+@[\w-_]+(?:\.\w+)+$/.test(content);
}

/**
 * Check whether the content is IDCard
 * @param {string} content
 */
checker.isIDCard = function( content ){
    return /(?:^\d{15}$)|(?:^\d{17}(?:[0-9]|X)$)/.test(content);
}

/**
 * Check whether the content is Money
 * @param {string} content
 */
checker.isMoney = function( content ){
    return /^(?:(?!0)[1-9])+(?:\.\d+)?$/.test(content);
}

/**
 * Check whether the content is Phone
 * @param {string} content
 */
checker.isPhone = function( content ){
    return /^1[3|4|5|7|8][0-9]\d{8}$/.test(content);
}