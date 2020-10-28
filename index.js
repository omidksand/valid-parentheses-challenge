const CharNode = require('./node');
const Stack = require('./stack');

const expectedChars = [
   new CharNode('(', ')'),
   new CharNode('[', ']'),
   new CharNode('{', '}'),
]

/**
 * @description
 * Process and determine if opening and closing parentheses are balanced.
 * @param {String} str String value that is going to measures
 * @returns {Boolean}
 */
function isValidParentheses(str) {
   if (!str) return true;
   matchConidition = (char) => {
      let result = null;
      for (let i in expectedChars) {
         if (expectedChars[i].openingChar === char) return expectedChars[i];
      }
      return result;
   },
      queueList = new Stack(),
      strLen = str && str.length,
      currChar = null,
      isMatch = null,
      i = 0;

   for (i; i < strLen; i++) {
      currChar = str[i];
      isMatch = matchConidition(currChar);

      if (isMatch) {
         queueList.queue(isMatch);
      }
      if (!isMatch && queueList.activeQueue !== null && queueList.activeQueue.closingChar === currChar) {
         queueList.dequeue();
      }
   }

   return (queueList.length === 0);
}


const testCases = [
   '',
   '()',
   ')(',
   '{}',
   '[]',
   '()(()',
   '(()())',
   '(())()',
   '()[]{}',
   '([)]',
   '({[])}',
   '({[]})',
   '))()((',
   '(){[{}]}',
   '(((((())))))',
   '((((((()))))))',
];

for (let i in testCases) {
   console.log(testCases[i], isValidParentheses(testCases[i]));
}