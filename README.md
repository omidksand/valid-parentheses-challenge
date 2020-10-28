# Valid Parentheses
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', write a function `isValidParentheses` to determine if the input string is balanced and therefore valid.


## An input string is valid if:

1. Open brackets must be closed by the same type of brackets
2. Open brackets must be closed in the correct order
3. An empty string is also considered valid


#### Examples:
| Input  | Output |
|--------|--------|
| ()     | true   |
| )(     | false  |
| ()[]{} | true   |
| (()()) | true   |
| ([)]   | false  |
