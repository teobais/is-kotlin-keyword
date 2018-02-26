'use strict';

// List extracted from the Hard Keywords section of http://kotlinlang.org/docs/reference/keyword-reference.html
const reservedKeywords = [
    'AS', 'BREAK', 'CLASS', 'CONTINUE', 'DO', 'ELSE', 'FALSE', 'FOR', 'FUN', 'IF', 'IN', 'INTERFACE', 'IS', 'NULL',
    'OBJECT', 'PACKAGE', 'RETURN', 'SUPER', 'THIS', 'THROW', 'TRUE', 'TRY', 'TYPEALIAS', 'VAL', 'VAR', 'WHEN', 'WHILE'
];

module.exports = function(str) {
    return reservedKeywords.includes(str.toUpperCase());
};