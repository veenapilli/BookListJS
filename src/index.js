var uniqueRandomArray = require('unique-random-array');
var bookNames = require('./book_names.json');
module.exports ={
	all: bookNames,
	random: uniqueRandomArray(bookNames)
};