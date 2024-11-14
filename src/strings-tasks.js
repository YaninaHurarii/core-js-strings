/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */

function getStringLength(value) {
  if (typeof value !== 'string') {
    return 0;
  }
  return value.length;
}
getStringLength('aaaaa');
getStringLength('b');
getStringLength('');
getStringLength();
getStringLength(null);
getStringLength(undefined);

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}
isString();
isString(null);
isString([]);
isString({});
isString('test');
isString(String('test'));

function concatenateStrings(value1, value2) {
  return value1.concat(value2);
}
concatenateStrings('aa', 'bb');
concatenateStrings('aa', '');
concatenateStrings('', 'bb');

function getFirstChar(value) {
  return value ? value.charAt(0) : '';
}
getFirstChar('John Doe');
getFirstChar('cat');
getFirstChar('');

function removeLeadingAndTrailingWhitespaces(value) {
  return value ? value.trim() : '';
}
removeLeadingAndTrailingWhitespaces('  Abracadabra');
removeLeadingAndTrailingWhitespaces('cat ');
removeLeadingAndTrailingWhitespaces('\t\t\tHello, World! ');

function removeLeadingWhitespaces(value) {
  return value ? value.trimStart() : '';
}
removeLeadingWhitespaces('  Abracadabra');
removeLeadingWhitespaces('cat ');
removeLeadingWhitespaces('\t\t\tHello, World! ');

function removeTrailingWhitespaces(value) {
  return value ? value.trimEnd() : '';
}
removeTrailingWhitespaces('  Abracadabra');
removeTrailingWhitespaces('cat ');
removeTrailingWhitespaces('\t\t\tHello, World! ');

function repeatString(str, times) {
  if (times < 0) {
    return '';
  }
  return str.repeat(times);
}
repeatString('A', 5);
repeatString('cat', 3);
repeatString('', 3);
repeatString('abc', -2);

function removeFirstOccurrences(str, value) {
  const index = str.indexOf(value);
  if (index === -1) {
    return str;
  }
  return str.slice(0, index) + str.slice(index + value.length);
}
removeFirstOccurrences('To be or not to be', 'be');
removeFirstOccurrences('I like legends', 'end');
removeFirstOccurrences('ABABAB', 'BA');

function removeLastOccurrences(str, value) {
  const index = str.lastIndexOf(value);
  if (index === -1) {
    return str;
  }
  return str.slice(0, index) + str.slice(index + value.length);
}
removeLastOccurrences('To be or not to be', 'be');
removeLastOccurrences('I like legends', 'end');
removeLastOccurrences('ABABAB', 'BA');

function sumOfCodes(str = '') {
  if (typeof str !== 'string') {
    return 0;
  }
  return [...str].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}
sumOfCodes('My String');
sumOfCodes('12345');
sumOfCodes('');
sumOfCodes();

function startsWith(str = '', substr = '') {
  return str.startsWith(substr);
}
startsWith('Hello World', 'World');
startsWith('Hello World', 'Hello');

function endsWith(str = '', substr = '') {
  return str.endsWith(substr);
}
endsWith('Hello World', 'World');
endsWith('Hello World', 'Hello');

function formatTime(minutes, seconds) {
  const formatMin = String(minutes).padStart(2, '0');
  const formatSec = String(seconds).padStart(2, '0');
  return `${formatMin}:${formatSec}`;
}
formatTime(5, 30);
formatTime(1, 15);
formatTime(0, 45);
formatTime(0, 0);

function reverseString(str) {
  return str.split('').reverse().join('');
}
reverseString('abcdef');
reverseString('12345');

function orderAlphabetically(str) {
  return str.split('').sort().join('');
}
orderAlphabetically('webmaster');
orderAlphabetically('textbook');
orderAlphabetically('abc123xyz');

function containsSubstring(str, substring) {
  return str.includes(substring);
}
containsSubstring('Hello, World!', 'World');
containsSubstring('JavaScript is Fun', 'Python');
containsSubstring('12345', '34');

function countVowels(str) {
  if (!str) return 0;
  const matches = str.match(/[aeiouyAEIOUY]/g);
  return matches ? matches.length : 0;
}
countVowels('apple');
countVowels('banana');
countVowels('cherry');
countVowels('aEiOu');
countVowels('XYZ');

function isPalindrome(str) {
  if (!str) return false;
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanedStr === cleanedStr.split('').reverse().join('');
}
isPalindrome('madam');
isPalindrome('racecar');
isPalindrome('apple');
isPalindrome('No lemon, no melon');

function findLongestWord(sentence) {
  return sentence
    .split(' ')
    .reduce(
      (longest, current) =>
        current.length > longest.length ? current : longest,
      ''
    );
}
findLongestWord('The quick brown fox');
findLongestWord('A long and winding road');
findLongestWord('No words here');

function reverseWords(str) {
  return str.replace(/\S+/g, (word) => [...word].reverse().join(''));
}
reverseWords('Hello World');
reverseWords('The Quick Brown Fox');

function invertCase(str) {
  return str.replace(/./g, (char) =>
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
  );
}
invertCase('Hello, World!');
invertCase('JavaScript is Fun');
invertCase('12345');

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}
getStringFromTemplate('John', 'Doe');
getStringFromTemplate('Chuck', 'Norris');

function extractNameFromTemplate(value) {
  return value.slice(7, -1);
}
extractNameFromTemplate('Hello, John Doe!');
extractNameFromTemplate('Hello, Chuck Norris!');

function unbracketTag(str) {
  return str.slice(1, -1);
}
unbracketTag('<div>');
unbracketTag('<span>');
unbracketTag('<a>');

function extractEmails(str) {
  return str.split(';');
}
extractEmails(
  'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
);
extractEmails('info@gmail.com');

function encodeToRot13(str) {
  return str.replace(/[a-zA-Z]/g, (char) => {
    const base = char <= 'Z' ? 65 : 97; // ASCII 'A' or 'a'
    return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
  });
}
encodeToRot13('hello');
encodeToRot13('Why did the chicken cross the road?');
encodeToRot13('Gb trg gb gur bgure fvqr!');
encodeToRot13('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');

function getCardId(value) {
  const suits = ['♣', '♦', '♥', '♠'];
  const ranks = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ];

  const suit = value.slice(-1);
  const rank = value.slice(0, -1);
  const suitIndex = suits.indexOf(suit);
  const rankIndex = ranks.indexOf(rank);

  return suitIndex * 13 + rankIndex;
}
getCardId('A♣');
getCardId('2♣');
getCardId('3♣');
getCardId('Q♠');
getCardId('K♠');

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
