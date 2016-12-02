'use strict'
module.exports = matcher

function matcher () {
  return matcher
}

/**
 * get picture url from html
 * @param {string} html
 */
matcher.getPictures = function (html) {
  return html.match(/<(?:img|link)[^\n]+?(?:src|href)="([^"]+(?:png|jpg))"/g)
}
