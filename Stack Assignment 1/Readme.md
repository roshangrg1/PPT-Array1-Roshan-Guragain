# DSA Stack 1st Assignment

## Q1

Given an array **arr[ ]** of size **N** having elements, the task is to find the next greater element for each element of the array in order of their appearance in the array.Next greater element of an element in the array is the nearest element on the right which is greater than the current element.If there does not exist next greater of current element, then next greater element for current element is -1. For example, next greater of the last element is always -1.

**Example 1:**
Input:
N = 4, arr[] = [1 3 2 4]
Output:
3 4 4 -1
Explanation:
In the array, the next larger element
to 1 is 3 , 3 is 4 , 2 is 4 and for 4 ?
since it doesn't exist, it is -1.

**Example 2:**
Input:
N = 5, arr[] [6 8 0 1 3]
Output:
8 -1 1 3 -1
Explanation:
In the array, the next larger element to
6 is 8, for 8 there is no larger elements
hence it is -1, for 0 it is 1 , for 1 it
is 3 and then for 3 there is no larger
element on right and hence -1.

### Answer -


```javascript
const nextGreaterElement = (arr) => {
  const result = [];
  const stack = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      result.unshift(-1);
    } else {
      result.unshift(stack[stack.length - 1]);
    }

    stack.push(arr[i]);
  }

  return result;
};

const arr1 = [1, 3, 2, 4];
const arr2 = [6, 8, 0, 1, 3];

console.log(nextGreaterElement(arr1));
// Output: [3, 4, 4, -1]
console.log(nextGreaterElement(arr2));
// Output: [8, -1, 1, 3, -1]

```

## Q2

Given an array **a** of integers of length **n**, find the nearest smaller number for every element such that the smaller element is on left side.If no small element present on the left print -1.

**Example 1:**
Input: n = 3
a = {1, 6, 2}
Output: -1 1 1
Explanation: There is no number at the
left of 1. Smaller number than 6 and 2 is 1.

**Example 2:**
Input: n = 6
a = {1, 5, 0, 3, 4, 5}
Output: -1 1 -1 0 3 4
Explanation: Upto 3 it is easy to see
the smaller numbers. But for 4 the smaller
numbers are 1, 0 and 3. But among them 3
is closest. Similarly for 5 it is 4.

### Answer -


```javascript
const nearestSmallerLeft = (a) => {
    const result = [];
    const stack = [];
  
    for (let i = 0; i < a.length; i++) {
      while (stack.length > 0 && stack[stack.length - 1] >= a[i]) {
        stack.pop();
      }
  
      if (stack.length === 0) {
        result.push(-1);
      } else {
        result.push(stack[stack.length - 1]);
      }
  
      stack.push(a[i]);
    }
  
    return result;
  };
  
  const arr1 = [1, 6, 2];
  const arr2 = [1, 5, 0, 3, 4, 5];
  
  console.log(nearestSmallerLeft(arr1));
  // Output: [-1, 1, 1]
  console.log(nearestSmallerLeft(arr2));
  // Output: [-1, 1, -1, 0, 3, 4]

```

## Q3

Implement a Stack using two queues **q1** and **q2**.

**Example 1:**
Input:
push(2)
push(3)
pop()
push(4)
pop()
Output:3 4
Explanation:
push(2) the stack will be {2}
push(3) the stack will be {2 3}
pop()   poped element will be 3 the
        stack will be {2}
push(4) the stack will be {2 4}
pop()   poped element will be 4

**Example 2:**
Input:
push(2)
pop()
pop()
push(3)
Output:2 -1

### Answer -


```javascript
class Stack {
    constructor() {
      this.q1 = [];
      this.q2 = [];
    }
    
    push(element) {
      this.q1.push(element);
    }
    
    pop() {
      if (this.q1.length === 0) {
        return -1; 
      }
      
      while (this.q1.length > 1) {
        this.q2.push(this.q1.shift());
      }
      
      const poppedElement = this.q1.shift();
      
      [this.q1, this.q2] = [this.q2, this.q1];
      
      return poppedElement;
    }
  }
  
  const stack = new Stack();
  
  stack.push(2);
  stack.push(3);
  console.log(stack.pop());
  // Output: 3
  
  stack.push(4);
  console.log(stack.pop());
  // Output: 4
  
  const stack2 = new Stack();
  
  stack2.push(2);
  console.log(stack2.pop());
  // Output: 2
  console.log(stack2.pop());
  // Output: -1
```

## Q4

You are given a stack **St**. You have to reverse the stack using recursion.

**Example 1:**
Input:St = {3,2,1,7,6}
Output:{6,7,1,2,3}

**Example 2:**
Input:St = {4,3,9,6}
Output:{6,9,3,4}

### Answer -


```javascript
let st = [];

const insert_at_bottom = (x) => {
  if (st.length === 0) {
    st.push(x);
  } else {
    let a = st.pop();
    insert_at_bottom(x);
    st.push(a);
  }
};

const reverse = () => {
  if (st.length > 0) {
    let x = st.pop();
    reverse();
    insert_at_bottom(x);
  }
};

// Example 1
st = [3, 2, 1, 7, 6];
console.log("Original Stack ex-1:");
console.log(st.join(" "));

reverse();

console.log("Reversed Stack ex-1:");
console.log(st.join(" "));

// Example 2
st = [4, 3, 9, 6];
console.log("Original Stack ex-2:");
console.log(st.join(" "));

reverse();

console.log("Reversed Stack ex-2:");
console.log(st.join(" "));
```

## Q5

You are given a string **S**, the task is to reverse the string using stack.

**Example 1:**
Input: S="GeeksforGeeks"
Output: skeeGrofskeeG

### Answer -


```javascript
const reverseString = (S) => {
    const stack = [];
  
    for (var i = 0; i < S.length; i++) {
      stack.push(S[i]);
    }
  
    let reversedString = "";
  
    while (stack.length > 0) {
      reversedString += stack.pop();
    }
  
    return reversedString;
  };
  
  const S = "GeeksforGeeks";
  const reversed = reverseString(S);
  console.log(reversed);
  // Output: skeeGrofskeeG
```

## Q6

Given string **S** representing a postfix expression, the task is to evaluate the expression and find the final value. Operators will only include the basic arithmetic operators like ***, /, + and -**.

**Example 1:**
Input: S = "231*+9-"
Output: -4
Explanation:
After solving the given expression,
we have -4 as result.

**Example 2:**
Input: S = "123+*8-"
Output: -3
Explanation:
After solving the given postfix
expression, we have -3 as result.

### Answer -


```javascript
const evaluatePostfix = (S) => {
    const stack = [];
  
    for (var i = 0; i < S.length; i++) {
      let char = S[i];
  
      if (isNumeric(char)) {
        stack.push(parseInt(char));
      } else {
        let operand2 = stack.pop();
        let operand1 = stack.pop();
  
        switch (char) {
          case "+":
            stack.push(operand1 + operand2);
            break;
          case "-":
            stack.push(operand1 - operand2);
            break;
          case "*":
            stack.push(operand1 * operand2);
            break;
          case "/":
            stack.push(operand1 / operand2);
            break;
        }
      }
    }
  
    return stack.pop();
  };
  
  const isNumeric = (char) => {
    return !isNaN(char);
  };
  
  let S = "231*+9-";
  let result = evaluatePostfix(S);
  console.log(result);
  // Output: -4
  
  S = "123+*8-";
  result = evaluatePostfix(S);
  console.log(result);
  // Output: -3
```

## Q7

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the `MinStack` class:

- `MinStack()` initializes the stack object.
- `void push(int val)` pushes the element `val` onto the stack.
- `void pop()` removes the element on the top of the stack.
- `int top()` gets the top element of the stack.
- `int getMin()` retrieves the minimum element in the stack.

You must implement a solution with `O(1)` time complexity for each function.

**Example 1:**
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2

### Answer -


```javascript
class MinStack {
    constructor() {
      this.stack = [];
      this.minStack = [];
    }
  
    push(val) {
      this.stack.push(val);
  
      if (this.minStack.length === 0 || val <= this.getMin()) {
        this.minStack.push(val);
      }
    }
  
    pop() {
      if (this.stack.pop() === this.getMin()) {
        this.minStack.pop();
      }
    }
  
    top() {
      return this.stack[this.stack.length - 1];
    }
  
    getMin() {
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  let minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  console.log(minStack.getMin()); // Output: -3
  minStack.pop();
  console.log(minStack.top()); // Output: 0
  console.log(minStack.getMin()); // Output: -2
```

## Q8

Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

**Example 1:**
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

**Example 2:**
Input: height = [4,2,0,3,2,5]
Output: 9

### Answer -


```javascript
const trap = (height) => {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let waterTrapped = 0;
  
    while (left < right) {
      if (height[left] < height[right]) {
        if (height[left] >= leftMax) {
          leftMax = height[left];
        } else {
          waterTrapped += leftMax - height[left];
        }
        left++;
      } else {
        if (height[right] >= rightMax) {
          rightMax = height[right];
        } else {
          waterTrapped += rightMax - height[right];
        }
        right--;
      }
    }
  
    return waterTrapped;
  };
  
  let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  console.log(trap(height));
  // Output: 6
  
  height = [4, 2, 0, 3, 2, 5];
  console.log(trap(height));
  // Output: 9
```
