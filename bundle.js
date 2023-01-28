(function(){function p(o,i,f){var a="function"==typeof require&&require;function c(n,r){if(!i[n]){if(!o[n]){var u="function"==typeof require&&require,u;if(!r&&u)return u(n,!0);if(a)return a(n,!0);throw(u=new Error("Cannot find module '"+n+"'")).code="MODULE_NOT_FOUND",u}var u=i[n]={exports:{}};o[n][0].call(u.exports,function(r){var e;return c(o[n][1][r]||r)},u,u.exports,p,o,i,f)}return i[n].exports}for(var r=0;r<f.length;r++)c(f[r]);return c}return p})()({1:[function(require,module,exports){
let Phrase = require("mhartl-palindrome");

alert(new Phrase("Madam, I'm Adam.").palindrome());
},{"mhartl-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

function Phrase(content) {
  this.content = content;

  // Return content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return (this.content.match(/[a-z]/gi) || []).join("").toLowerCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    if (this.processedContent()) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }
  }
}


},{}]},{},[1]);
