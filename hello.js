var cowsay = require("cowsay");



var Quote = require('inspirational-quotes');

console.log(Quote.getQuote()); // returns quote (text and author)
console.log(Quote.getQuote({ author: false })); // return quote without author
console.log(Quote.getRandomQuote());
var cowText = Quote.getQuote()
console.log(cowsay.say({
    text : cowText.text,
    e : "oO",
    T : "U "
}));





