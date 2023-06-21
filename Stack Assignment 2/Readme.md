# DSA Stack 2nd Assignment

## Q1
Given an array, for each element find the value of the nearest element to the right which is having a frequency greater than that of the current element. If there does not exist an answer for a position, then make the value ‘-1’.

**Examples:**
Input: a[] = [1, 1, 2, 3, 4, 2, 1]
Output : [-1, -1, 1, 2, 2, 1, -1]

Explanation:
Given array a[] = [1, 1, 2, 3, 4, 2, 1]
Frequency of each element is: 3, 3, 2, 1, 1, 2, 3

Lets calls Next Greater Frequency element as NGF
1. For element a[0] = 1 which has a frequency = 3,
   As it has frequency of 3 and no other next element
   has frequency more than 3 so  '-1'
2. For element a[1] = 1 it will be -1 same logic
   like a[0]
3. For element a[2] = 2 which has frequency = 2,
   NGF element is 1 at position = 6  with frequency
   of 3 > 2
4. For element a[3] = 3 which has frequency = 1,
   NGF element is 2 at position = 5 with frequency
   of 2 > 1
5. For element a[4] = 4 which has frequency = 1,
   NGF element is 2 at position = 5 with frequency
   of 2 > 1
6. For element a[5] = 2 which has frequency = 2,
   NGF element is 1 at position = 6 with frequency
   of 3 > 2
7. For element a[6] = 1 there is no element to its
   right, hence -1
### Answer -


```javascript
const findNGF = (array) => {
  let max = Math.max(...array);
  let freq = new Array(max + 1).fill(0);
  let result = [];

  for (let i = 0; i < array.length; i++) {
    freq[array[i]]++;
  }

  let stack = [];
  stack.push(0);

  for (let i = 1; i < array.length; i++) {
    while (
      stack.length > 0 &&
      freq[array[stack[stack.length - 1]]] < freq[array[i]]
    ) {
      result[stack.pop()] = array[i];
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    result[stack.pop()] = -1;
  }

  return result;
};

const array = [1, 1, 2, 3, 4, 2, 1];
console.log(findNGF(array));
// Output: [-1, -1, 1, 2, 2, 1, -1]
```

## Q2

Given a stack of integers, sort it in ascending order using another temporary stack.

**Examples:**
Input : [34, 3, 31, 98, 92, 23]
Output : [3, 23, 31, 34, 92, 98]

Input : [3, 5, 1, 4, 2, 8]
Output : [1, 2, 3, 4, 5, 8]

### Answer -


```javascript
const sortStack = (stack) => {
    const tempStack = [];
  
    while (stack.length > 0) {
      const temp = stack.pop();
  
      while (tempStack.length > 0 && tempStack[tempStack.length - 1] < temp) {
        stack.push(tempStack.pop());
      }
  
      tempStack.push(temp);
    }
  
    while (tempStack.length > 0) {
      stack.push(tempStack.pop());
    }
  };
  
  const stack = [34, 3, 31, 98, 92, 23];
  sortStack(stack);
  console.log(stack);
  // Output: [3, 23, 31, 34, 92, 98]
  
  const stack2 = [3, 5, 1, 4, 2, 8];
  sortStack(stack2);
  console.log(stack2);
  // Output: [1, 2, 3, 4, 5, 8]
```

## Q3

Given a stack with **push()**, **pop()**, and **empty()** operations, The task is to delete the **middle** element ****of it without using any additional data structure.

Input  : Stack[] = [1, 2, 3, 4, 5]

Output : Stack[] = [1, 2, 4, 5]

Input  : Stack[] = [1, 2, 3, 4, 5, 6]

Output : Stack[] = [1, 2, 4, 5, 6]

### Answer -


```javascript
const deleteMiddle = (stack) => {
    const size = stack.length;
    const middleIndex = Math.floor(size / 2);
  
    for (let i = middleIndex; i < size - 1; i++) {
      stack[i] = stack[i + 1];
    }
  
    stack.pop();
  
    return stack;
  };
  
  // Example 1
  const stack1 = [1, 2, 3, 4, 5];
  const modifiedStack1 = deleteMiddle(stack1);
  console.log(modifiedStack1);
  // Output: [1, 2, 4, 5]
  
  // Example 2
  const stack2 = [1, 2, 3, 4, 5, 6];
  const modifiedStack2 = deleteMiddle(stack2);
  console.log(modifiedStack2);
  // Output: [1, 2, 4, 5, 6]
```

## Q4

Given a Queue consisting of first **n** natural numbers (in random order). The task is to check whether the given Queue elements can be arranged in increasing order in another Queue using a stack. The operation allowed are:

1. Push and pop elements from the stack
2. Pop (Or Dequeue) from the given Queue.
3. Push (Or Enqueue) in the another Queue.

**Examples :**

Input : Queue[] = { 5, 1, 2, 3, 4 }

Output : Yes

Pop the first element of the given Queue

i.e 5. Push 5 into the stack.

Now, pop all the elements of the given Queue and push them to second Queue.

Now, pop element 5 in the stack and push it to the second Queue.

Input : Queue[] = { 5, 1, 2, 6, 3, 4 }

Output : No

Push 5 to stack.

Pop 1, 2 from given Queue and push it to another Queue.

Pop 6 from given Queue and push to stack.

Pop 3, 4 from given Queue and push to second Queue.

Now, from using any of above operation, we cannot push 5 into the second Queue because it is below the 6 in the stack.


### Answer -


```javascript
let q1 = [];

function checkSorted(n) {
  let st = [];
  let expected = 1;
  let fnt;

  while (q1.length != 0) {
    fnt = q1[0];
    q1.shift();

    if (fnt == expected) expected++;
    else {
      if (st.length == 0) {
        st.push(fnt);
      }

      else if (st.length != 0 && st[st.length - 1] < fnt) {
        return false;
      }

      else st.push(fnt);
    }

    while (st.length != 0 && st[st.length - 1] == expected) {
      st.pop();
      expected++;
    }
  }

  if (expected - 1 == n && st.length == 0) return true;

  return false;
}

q1.push(5);
q1.push(1);
q1.push(2);
q1.push(3);
q1.push(4);

let n = q1.length;

if (checkSorted(n)) console.log("Yes");
else console.log("No");

```

## Q5

Given a number , write a program to reverse this number using stack.

**Examples:**
Input : 365
Output : 563

Input : 6899
Output : 9986

### Answer -


```javascript
const reverseNumber = (num) => {
    const stack = [];
    const numString = String(num);
  
    for (let i = 0; i < numString.length; i++) {
      stack.push(numString[i]);
    }
  
    let reversedString = "";
  
    while (stack.length > 0) {
      reversedString += stack.pop();
    }
  
    const reversedNumber = parseInt(reversedString);
  
    return reversedNumber;
  };
  
  console.log(reverseNumber(365));
  // Output: 563
  console.log(reverseNumber(6899));
  // Output: 9986
```

## Q6

Given an integer k and a queue

Only following standard operations are allowed on queue.

- **enqueue(x) :** Add an item x to rear of queue
- **dequeue() :** Remove an item from front of queue
- **size() :** Returns number of elements in queue.
- **front() :** Finds front item.


### Answer -


```javascript
class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift();
    }
  
    size() {
      return this.items.length;
    }
  
    front() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.front());
  // Output: 1
  console.log(queue.size());
  // Output: 3
  queue.dequeue();
  console.log(queue.size());
  // Output: 2
  console.log(queue.front());
  // Output: 2
```

## Q7

Given a sequence of n strings, the task is to check if any two similar words come together and then destroy each other then print the number of words left in the sequence after this pairwise destruction.

**Examples:**

Input : ab aa aa bcd ab

Output : 3

*As aa, aa destroys each other so,*

*ab bcd ab is the new sequence.*

Input :  tom jerry jerry tom

Output : 0

*As first both jerry will destroy each other.*

*Then sequence will be tom, tom they will also destroy*

*each other. So, the final sequence doesn’t contain any*

*word.*


### Answer -


```javascript
const countWordsLeft = (sequence) => {
    const stack = [];
  
    for (let i = 0; i < sequence.length; i++) {
      const word = sequence[i];
  
      if (stack.length > 0 && stack[stack.length - 1] === word) {
        stack.pop();
      } else {
        stack.push(word);
      }
    }
  
    return stack.length;
  };
  
  const sequence1 = ["ab", "aa", "aa", "bcd", "ab"];
  console.log(countWordsLeft(sequence1));
  // Output: 3
  
  const sequence2 = ["tom", "jerry", "jerry", "tom"];
  console.log(countWordsLeft(sequence2));
  // Output: 0
```

## Q8

Given an array of integers, the task is to find the maximum absolute difference between the nearest left and the right smaller element of every element in the array.

**Note:** If there is no smaller element on right side or left side of any element then we take zero as the smaller element. For example for the leftmost element, the nearest smaller element on the left side is considered as 0. Similarly, for rightmost elements, the smaller element on the right side is considered as 0.

**Examples:**
Input : arr[] = {2, 1, 8}
Output : 1
Left smaller  LS[] {0, 0, 1}
Right smaller RS[] {1, 0, 0}
Maximum Diff of abs(LS[i] - RS[i]) = 1

Input  : arr[] = {2, 4, 8, 7, 7, 9, 3}
Output : 4
Left smaller   LS[] = {0, 2, 4, 4, 4, 7, 2}
Right smaller  RS[] = {0, 3, 7, 3, 3, 3, 0}
Maximum Diff of abs(LS[i] - RS[i]) = 7 - 3 = 4

Input : arr[] = {5, 1, 9, 2, 5, 1, 7}
Output : 1

### Answer -


```javascript
const maxAbsoluteDifference = (arr) => {
    const n = arr.length;
    const leftSmaller = [];
    const rightSmaller = [];
  
    const leftStack = [];
    for (let i = 0; i < n; i++) {
      while (leftStack.length > 0 && leftStack[leftStack.length - 1] >= arr[i]) {
        leftStack.pop();
      }
  
      if (leftStack.length === 0) {
        leftSmaller.push(0);
      } else {
        leftSmaller.push(leftStack[leftStack.length - 1]);
      }
  
      leftStack.push(arr[i]);
    }
  
    const rightStack = [];
    for (let i = n - 1; i >= 0; i--) {
      while (
        rightStack.length > 0 &&
        rightStack[rightStack.length - 1] >= arr[i]
      ) {
        rightStack.pop();
      }
  
      if (rightStack.length === 0) {
        rightSmaller[i] = 0;
      } else {
        rightSmaller[i] = rightStack[rightStack.length - 1];
      }
  
      rightStack.push(arr[i]);
    }
  
    let maxDiff = 0;
    for (let i = 0; i < n; i++) {
      const diff = Math.abs(leftSmaller[i] - rightSmaller[i]);
      maxDiff = Math.max(maxDiff, diff);
    }
  
    return maxDiff;
  };
  
  const arr1 = [2, 1, 8];
  console.log(maxAbsoluteDifference(arr1));
  // Output: 1
  
  const arr2 = [2, 4, 8, 7, 7, 9, 3];
  console.log(maxAbsoluteDifference(arr2));
  // Output: 4
  
  const arr3 = [5, 1, 9, 2, 5, 1, 7];
  console.log(maxAbsoluteDifference(arr3));
  // Output: 1  
```
