# DSA Linked List 2st Assignment

## Q1
Given a linked list of **N** nodes such that it may contain a loop.

A loop here means that the last node of the link list is connected to the node at position X(1-based index). If the link list does not have any loop, X=0.

Remove the loop from the linked list, if it is present, i.e. unlink the last node which is forming the loop.

**Example 1:**
Input:
N = 3
value[] = {1,3,4}
X = 2
Output:1
Explanation:The link list looks like
1 -> 3 -> 4
     ^    |
     |____|
A loop is present. If you remove it
successfully, the answer will be 1.

**Example 2:**
Input:
N = 4
value[] = {1,8,3,4}
X = 0
Output:1
Explanation:The Linked list does not
contains any loop.

**Example 3:**
Input:
N = 4
value[] = {1,2,3,4}
X = 1
Output:1
Explanation:The link list looks like
1 -> 2 -> 3 -> 4
^              |
|______________|
A loop is present.
If you remove it successfully,
the answer will be 1.

### Answer -


```javascript

```


## Q2
A number **N** is represented in Linked List such that each digit corresponds to a node in linked list. You need to add 1 to it.

**Example 1:**
Input:
LinkedList: 4->5->6
Output:457

**Example 2:**
Input:
LinkedList: 1->2->3
Output:124

### Answer -


```javascript
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;
  
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  
    return prev;
  }
  
  const addOneToList = (head) => {
    let reversed = reverseLinkedList(head);
  
    let current = reversed;
    let carry = 1;
  
    while (current) {
      let sum = current.data + carry;
      if (sum < 10) {
        current.data = sum;
        carry = 0;
        break;
      } else {
        current.data = 0;
        carry = 1;
        current = current.next;
      }
    }
  
    if (carry === 1) {
      let newNode = new Node(1);
      current = reversed;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    let result = reverseLinkedList(reversed);
  
    return result;
  };
  
  // Example 1
  const list1 = new Node(4);
  list1.next = new Node(5);
  list1.next.next = new Node(6);
  
  let result1 = "";
  let current1 = addOneToList(list1);
  while (current1) {
    result1 += current1.data;
    current1 = current1.next;
  }
  console.log(result1);
  // Output: 457
  
  // Example 2
  const list2 = new Node(1);
  list2.next = new Node(2);
  list2.next.next = new Node(3);
  
  let result2 = "";
  let current2 = addOneToList(list2);
  while (current2) {
    result2 += current2.data;
    current2 = current2.next;
  }
  console.log(result2);
  // Output: 124
  
```

## Q3
Given a Linked List of size N, where every node represents a sub-linked-list and contains two pointers:(i) a **next** pointer to the next node,(ii) a **bottom** pointer to a linked list where this node is head.Each of the sub-linked-list is in sorted order.Flatten the Link List such that all the nodes appear in a single level while maintaining the sorted order. **Note:** The flattened list will be printed using the bottom pointer instead of next pointer.

**Example 1:**
Input:
5 -> 10 -> 19 -> 28
|     |     |     |
7     20    22   35
|           |     |
8          50    40
|                 |
30               45
Output: 5-> 7-> 8- > 10 -> 19-> 20->
22-> 28-> 30-> 35-> 40-> 45-> 50.
Explanation:
The resultant linked lists has every
node in a single level.(Note:| represents the bottom pointer.)

**Example 2:**
Input:
5 -> 10 -> 19 -> 28
|          |
7          22
|          |
8          50
|
30
Output: 5->7->8->10->19->22->28->30->50
Explanation:
The resultant linked lists has every
node in a single level.

### Answer -


```javascript
let head;

class Node {
  constructor(val) {
    this.data = val;
    this.down = null;
    this.next = null;
  }
}

function merge(a, b) {
  if (a == null) return b;

  if (b == null) return a;

  let result;

  if (a.data < b.data) {
    result = a;
    result.down = merge(a.down, b);
  } else {
    result = b;
    result.down = merge(a, b.down);
  }

  result.right = null;
  return result;
}

const flatten = (root) => {
  if (root == null || root.right == null) return root;

  root.right = flatten(root.right);

  root = merge(root, root.right);

  return root;
};

const push = (head, data) => {
  let newNode = new Node(data);

  newNode.down = head;

  head = newNode;

  return head;
};

function printList() {
  let temp = head;
  while (temp != null) {
    console.log(temp.data + " ");
    temp = temp.down;
  }
  console.log();
}

head = push(head, 30);
head = push(head, 8);
head = push(head, 7);
head = push(head, 5);

head.right = push(head.right, 20);
head.right = push(head.right, 10);

head.right.right = push(head.right.right, 50);
head.right.right = push(head.right.right, 22);
head.right.right = push(head.right.right, 19);

head.right.right.right = push(head.right.right.right, 45);
head.right.right.right = push(head.right.right.right, 40);
head.right.right.right = push(head.right.right.right, 35);
head.right.right.right = push(head.right.right.right, 20);

head = flatten(head);

printList();
```

## Q4

### Answer -


```javascript

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

### Answer -


```javascript

```

## Q8

### Answer -


```javascript

```