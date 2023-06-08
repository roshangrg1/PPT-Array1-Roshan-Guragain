/*
  Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.

The following rules define a **valid** string:

- Any left parenthesis '(' must have a corresponding right parenthesis ')'.
- Any right parenthesis ')' must have a corresponding left parenthesis '('.
- Left parenthesis '(' must go before the corresponding right parenthesis ')'.
- '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

**Example 1:**

**Input:** s = "()"

**Output:**

true
*/


var checkValidString = function(s) {
  // Create two arrays to keep track of indices of open parentheses and stars respectively.
  let open=[]
  let star=[]

  // Get the length of the input string.
  let len = s.length

  // Iterate over each character in the input string.
  for(let i=0; i<len; i++){
      // If the current character is an open parenthesis, push its index onto the open array.
      if(s[i]=='(') open.push(i)

      // If the current character is a star, push its index onto the star array.
      else if(s[i]=='*') star.push(i)

      // If the current character is a closing parenthesis, try to match it with an open parenthesis or a star.
      else{
          // If there is an open parenthesis, use it to balance the closing parenthesis.
          if(open.length != 0) open.pop()

          // If there is a star, use it to balance the closing parenthesis.
          else if(star.length != 0) star.pop()

          // If there are no open parentheses or stars left, the string is invalid.
          else return false
      }
  }

  // Check if there are any open parentheses left that have not been closed.
  while(open.length !=0){

      // Try to use a star to balance the open parenthesis.
      if(star.length ==0) return false
      
      // If there is a star after the open parenthesis, use it to balance the parenthesis.
      else if(open[open.length-1] < star[star.length-1]){
          open.pop()
          star.pop()
      }

      // If there is no star to balance the open parenthesis, the string is invalid.
      else return false
  }
  // If all parentheses are balanced, the string is valid.
  return true
};

console.log(checkValidString('()'))