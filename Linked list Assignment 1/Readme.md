# DSA Linked List 1st Assignment

## Q1

Given a singly linked list, delete middle of the linked list. For example, if given linked list is 1->2->3->4->5 then linked list should be modified to 1->2->4->5.If there are even nodes, then there would be two middle nodes, we need to delete the second middle element. For example, if given linked list is 1->2->3->4->5->6 then it should be modified to 1->2->3->5->6.If the input linked list is NULL or has 1 node, then it should return NULL

**Example 1:**
Input:
LinkedList: 1->2->3->4->5
Output:1 2 4 5

**Example 2:**
Input:
LinkedList: 2->4->6->7->5->1
Output:2 4 6 5 1


### Answer -


```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const deleteMiddleNode = (head) => {
  if (!head || !head.next) {
    return null;
  }

  let slow = head;
  let fast = head;
  let previous = null;

  while (fast && fast.next) {
    fast = fast.next.next;
    previous = slow;
    slow = slow.next;
  }

  previous.next = slow.next;

  return head;
};

const printLinkedList = (head) => {
  let curr = head;
  while (curr) {
    console.log(curr.data);
    curr = curr.next;
  }
};

// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("Original linked list:");
printLinkedList(head);

// Delete the middle node(s)
const newHead = deleteMiddleNode(head);

console.log("updated linked list:");
printLinkedList(newHead);
```

## Q2

Given a linked list of **N** nodes. The task is to check if the linked list has a loop. Linked list can contain self loop.

**Example 1:**
Input:
N = 3
value[] = {1,3,4}
x(position at which tail is connected) = 2
Output:True
Explanation:In above test case N = 3.
The linked list with nodes N = 3 is
given. Then value of x=2 is given which
means last node is connected with xth
node of linked list. Therefore, there
exists a loop.

**Example 2:**
Input:
N = 4
value[] = {1,8,3,4}
x = 0
Output:False
Explanation:For N = 4 ,x = 0 means
then lastNode->next = NULL, then
the Linked list does not contains
any loop.


### Answer -


```javascript
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  const hasLoop = (head) => {
    let slow = head;
    let fast = head;
  
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  
      if (slow === fast) {
        return true; 
      }
    }
  
    return false; 
  };
  
  // Example 1
  const head1 = new Node(1);
  head1.next = new Node(3);
  head1.next.next = new Node(4);
  head1.next.next.next = head1.next; // Connect the last node to the second node
  
  const hasLoopResult1 = hasLoop(head1);
  console.log(hasLoopResult1);
  // Output: true
  
  // Example 2
  const head2 = new Node(1);
  head2.next = new Node(8);
  head2.next.next = new Node(3);
  head2.next.next.next = new Node(4);
  
  const hasLoopResult2 = hasLoop(head2);
  console.log(hasLoopResult2);
  // Output: false
```
## Q3

Given a linked list consisting of **L** nodes and given a number **N**. The task is to find the **N**th node from the end of the linked list.

**Example 1:**
Input:
N = 2
LinkedList: 1->2->3->4->5->6->7->8->9
Output:8
Explanation:In the first example, there
are 9 nodes in linked list and we need
to find 2nd node from end. 2nd node
from end is 8.

**Example 2:**
Input:
N = 5
LinkedList: 10->5->100->5
Output:-1
Explanation:In the second example, there
are 4 nodes in the linked list and we
need to find 5th from the end. Since 'n'
is more than the number of nodes in the
linked list, the output is -1.



### Answer -


```javascript

```

## Q4

Given a singly linked list of characters, write a function that returns true if the given list is a palindrome, else false.

**Examples:**

Input: R->A->D->A->R->NULL

**Output:** Yes

**Input:** C->O->D->E->NULL

**Output:** No



### Answer -


```javascript
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  const isPalindrome = (head) => {
    if (!head || !head.next) {
      return true;
    }
  
    let stack = [];
    let curr = head;
    let length = 0;
  
    while (curr) {
      stack.push(curr.data);
      curr = curr.next;
      length++;
    }
  
    let start = 0;
    let end = length - 1;
  
    while (start < end) {
      if (stack[start] !== stack[end]) {
        return false;
      }
      start++;
      end--;
    }
  
    return true; // All characters match, palindrome
  };
  
  // Example 1
  const head1 = new Node("R");
  head1.next = new Node("A");
  head1.next.next = new Node("D");
  head1.next.next.next = new Node("A");
  head1.next.next.next.next = new Node("R");
  
  const isPalindrome1 = isPalindrome(head1);
  console.log(isPalindrome1);
  // Output: true
  
  // Example 2
  const head2 = new Node("C");
  head2.next = new Node("O");
  head2.next.next = new Node("D");
  head2.next.next.next = new Node("E");
  
  const isPalindrome2 = isPalindrome(head2);
  console.log(isPalindrome2);
  // Output: false
```

## Q5




### Answer -


```javascript

```

## Q6




### Answer -


```javascript

```

## Q7

Given two linked lists, insert nodes of second list into first list at alternate positions of first list.
For example, if first list is 5->7->17->13->11 and second is 12->10->2->4->6, the first list should become 5->12->7->10->17->2->13->4->11->6 and second list should become empty. The nodes of second list should only be inserted when there are positions available. For example, if the first list is 1->2->3 and second list is 4->5->6->7->8, then first list should become 1->4->2->5->3->6 and second list to 7->8.

Use of extra space is not allowed (Not allowed to create additional nodes), i.e., insertion must be done in-place. Expected time complexity is O(n) where n is number of nodes in first list.



### Answer -


```javascript
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function mergeAlternate(head1, head2) {
    if (!head1) {
      return head2;
    }
    if (!head2) {
      return head1;
    }
  
    let curr1 = head1;
    let curr2 = head2;
  
    while (curr1 && curr2) {
      let temp1 = curr1.next;
      let temp2 = curr2.next;
  
      curr1.next = curr2;
      curr2.next = temp1;
  
      curr1 = temp1;
      curr2 = temp2;
    }
  
    return head1;
  }
  
  // Example
  let head1 = new Node(5);
  head1.next = new Node(7);
  head1.next.next = new Node(17);
  head1.next.next.next = new Node(13);
  head1.next.next.next.next = new Node(11);
  
  let head2 = new Node(12);
  head2.next = new Node(10);
  head2.next.next = new Node(2);
  head2.next.next.next = new Node(4);
  head2.next.next.next.next = new Node(6);
  
  let curr1 = head1;
  
  while (curr1 && head2) {
    let temp1 = curr1.next;
    let temp2 = head2.next;
  
    curr1.next = head2;
    head2.next = temp1;
  
    curr1 = temp1;
    head2 = temp2;
  }
  
  // Verify the modified first list
  let curr = head1;
  while (curr) {
    console.log(curr.data);
    curr = curr.next;
  }
  // Output: 5 12 7 10 17 2 13 4 11 6
  
  // Verify the modified second list
  let curr2 = head2;
  while (curr2) {
    console.log(curr2.data);
    curr2 = curr2.next;
  }
  // Output: (Empty)
```

## Q8

Given a singly linked list, find if the linked list is circular or not.

A linked list is called circular if it is not NULL-terminated and all nodes are connected in the form of a cycle. Below is an example of a circular linked list.



### Answer -


```javascript
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  const isCircular = (head) => {
    if (!head) {
      return false;
    }
  
    let slow = head;
    let fast = head.next;
  
    while (fast && fast.next) {
      if (slow === fast) {
        return true;
      }
      slow = slow.next;
      fast = fast.next.next;
    }
  
    return false;
  };
  
  const head1 = new Node(1);
  head1.next = new Node(2);
  head1.next.next = new Node(3);
  head1.next.next.next = head1;
  
  console.log(isCircular(head1));
  // Output: true
  
  const head2 = new Node(1);
  head2.next = new Node(2);
  head2.next.next = new Node(3);
  
  console.log(isCircular(head2));
  // Output: false
```
