# DSA Linked List 2st Assignment

## Q1

Given two linked list of the same size, the task is to create a new linked list using those linked lists. The condition is that the greater node among both linked list will be added to the new linked list.

**Examples:**
Input: list1 = 5->2->3->8
list2 = 1->7->4->5
Output: New list = 5->7->4->8

Input:list1 = 2->8->9->3
list2 = 5->3->6->4
Output: New list = 5->8->9->4

### Answer -


```javascript

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  append(data) {
    const newNode = new Node(data);
    
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  
  printList() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + ' ';
      current = current.next;
    }
    console.log(result.trim());
  }
}

function createNewList(list1, list2) {
  const newList = new LinkedList();
  
  let current1 = list1.head;
  let current2 = list2.head;
  
  while (current1 && current2) {
    if (current1.data >= current2.data) {
      newList.append(current1.data);
    } else {
      newList.append(current2.data);
    }
    current1 = current1.next;
    current2 = current2.next;
  }
  
  return newList;
}

const list1 = new LinkedList();
list1.append(2);
list1.append(8);
list1.append(9);
list1.append(3);

const list2 = new LinkedList();
list2.append(5);
list2.append(3);
list2.append(6);
list2.append(4);

const newList = createNewList(list1, list2);
newList.printList();
```


## Q2

Write a function that takes a list sorted in non-decreasing order and deletes any duplicate nodes from the list. The list should only be traversed once.

For example if the linked list is 11->11->11->21->43->43->60 then removeDuplicates() should convert the list to 11->21->43->60.

**Example 1:**
Input:
LinkedList:
11->11->11->21->43->43->60
Output:
11->21->43->60

** Example 2:**
Input:
LinkedList:
10->12->12->25->25->25->34
Output:
10->12->25->34

### Answer -


```javascript
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
    
    append(data) {
      const newNode = new Node(data);
      
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
    
    printList() {
      let current = this.head;
      let result = '';
      while (current) {
        result += current.data + ' ';
        current = current.next;
      }
      console.log(result.trim());
    }
    
    removeDuplicates() {
      let current = this.head;
      
      while (current && current.next) {
        if (current.data === current.next.data) {
          current.next = current.next.next;
        } else {
          current = current.next;
        }
      }
    }
  }
  
  const list1 = new LinkedList();
  list1.append(11);
  list1.append(11);
  list1.append(11);
  list1.append(21);
  list1.append(43);
  list1.append(43);
  list1.append(60);
  
  list1.removeDuplicates();
  list1.printList();
```


## Q3

Given a linked list of size **N**. The task is to reverse every **k** nodes (where k is an input to the function) in the linked list. If the number of nodes is not a multiple of *k* then left-out nodes, in the end, should be considered as a group and must be reversed (See Example 2 for clarification).

**Example 1:**
Input:
LinkedList: 1->2->2->4->5->6->7->8
K = 4
Output:4 2 2 1 8 7 6 5
Explanation:
The first 4 elements 1,2,2,4 are reversed first
and then the next 4 elements 5,6,7,8. Hence, the
resultant linked list is 4->2->2->1->8->7->6->5.

**Example 2:**
Input:
LinkedList: 1->2->3->4->5
K = 3
Output:3 2 1 5 4
Explanation:
The first 3 elements are 1,2,3 are reversed
first and then elements 4,5 are reversed.Hence,
the resultant linked list is 3->2->1->5->4.


### Answer -


```javascript
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
    
    append(data) {
      const newNode = new Node(data);
      
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
    
    printList() {
      let current = this.head;
      let result = '';
      while (current) {
        result += current.data + ' ';
        current = current.next;
      }
      console.log(result.trim());
    }
    
    reverseKNodes(k) {
      if (k <= 1 || !this.head || !this.head.next) {
        return;
      }
      
      let current = this.head;
      let prev = null;
      let count = 1; 
      
      while (current) {
        let groupStart = current;
        let groupPrev = prev;
        
        while (current && count <= k) { 
          const next = current.next;
          current.next = prev;
          prev = current;
          current = next;
          count++;
        }
        
        if (groupPrev) {
          groupPrev.next = prev;
        } else {
          this.head = prev;
        }
        
        groupStart.next = current;
        
        count = 1; 
        prev = groupStart;
      }
    }
  }
  
  const list1 = new LinkedList();
  list1.append(1);
  list1.append(2);
  list1.append(2);
  list1.append(4);
  list1.append(5);
  list1.append(6);
  list1.append(7);
  list1.append(8);
  
  list1.reverseKNodes(4);
  list1.printList();
```


## Q4
Given a linked list, write a function to reverse every alternate k nodes (where k is an input to the function) in an efficient way. Give the complexity of your algorithm.

**Example:**
Inputs:   1->2->3->4->5->6->7->8->9->NULL and k = 3
Output:   3->2->1->4->5->6->9->8->7->NULL.

### Answer -


```javascript
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
    
    append(data) {
      const newNode = new Node(data);
      
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
    
    printList() {
      let current = this.head;
      let result = '';
      while (current) {
        result += current.data + ' ';
        current = current.next;
      }
      console.log(result.trim());
    }
    
    reverseAlternateKNodes(head, k, reverse) {
      if (!head || k <= 1) {
        return head;
      }
      
      let current = head;
      let prev = null;
      let count = 0;
      
      if (reverse) {
        while (current && count < k) {
          const next = current.next;
          current.next = prev;
          prev = current;
          current = next;
          count++;
        }
        
        head.next = this.reverseAlternateKNodes(current, k, !reverse);
        
        return prev; 
      } else {
        while (current && count < k) {
          prev = current;
          current = current.next;
          count++;
        }
        
        if (prev) {
          prev.next = this.reverseAlternateKNodes(current, k, !reverse);
        }
        
        return head; 
      }
    }
    
    reverseAlternateKNodesWrapper(k) {
      this.head = this.reverseAlternateKNodes(this.head, k, true);
    }
  }
  
  const list1 = new LinkedList();
  list1.append(1);
  list1.append(2);
  list1.append(3);
  list1.append(4);
  list1.append(5);
  list1.append(6);
  list1.append(7);
  list1.append(8);
  list1.append(9);
  
  list1.reverseAlternateKNodesWrapper(3);
  list1.printList();
```


## Q5

Given a linked list and a key to be deleted. Delete last occurrence of key from linked. The list may have duplicates.

**Examples**:
Input:   1->2->3->5->2->10, key = 2
Output:  1->2->3->5->10


### Answer -


```javascript
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
    
    append(data) {
      const newNode = new Node(data);
      
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
    
    printList() {
      let current = this.head;
      let result = '';
      while (current) {
        result += current.data + ' ';
        current = current.next;
      }
      console.log(result.trim());
    }
    
    deleteLastOccurrence(key) {
      if (!this.head) {
        return this.head;
      }
      
      let prev = null;
      let last = null;
      let current = this.head;
      
      while (current) {
        if (current.data === key) {
          prev = last;
        }
        if (current.next && current.next.data === key) {
          prev = current;
        }
        last = current;
        current = current.next;
      }
      
      if (prev) {
        prev.next = prev.next.next;
      } else if (last && last.data === key) {
        this.head = last.next;
      }
      
      return this.head;
    }
  }
  
  const list1 = new LinkedList();
  list1.append(1);
  list1.append(2);
  list1.append(3);
  list1.append(5);
  list1.append(2);
  list1.append(10);
  
  list1.deleteLastOccurrence(2);
  list1.printList();
```


## Q6
Given two sorted linked lists consisting of **N** and **M** nodes respectively. The task is to merge both of the lists (in place) and return the head of the merged list.

**Examples:**

Input: a: 5->10->15, b: 2->3->20

Output: 2->3->5->10->15->20

Input: a: 1->1, b: 2->4

Output: 1->1->2->4

### Answer -


```javascript
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function mergeSortedLists(a, b) {
    if (!a) {
      return b;
    }
    if (!b) {
      return a;
    }
  
    let result;
  
    if (a.data <= b.data) {
      result = a;
      a = a.next;
    } else {
      result = b;
      b = b.next;
    }
  
    let current = result;
  
    while (a && b) {
      if (a.data <= b.data) {
        current.next = a;
        a = a.next;
      } else {
        current.next = b;
        b = b.next;
      }
      current = current.next;
    }
  
    if (a) {
      current.next = a;
    }
  
    if (b) {
      current.next = b;
    }
  
    return result;
  }
  
  const list1 = new Node(5);
  list1.next = new Node(10);
  list1.next.next = new Node(15);
  
  const list2 = new Node(2);
  list2.next = new Node(3);
  list2.next.next = new Node(20);
  
  const mergedList = mergeSortedLists(list1, list2);
  
  let current = mergedList;
  let result = "";
  while (current) {
    result += current.data + " ";
    current = current.next;
  }
  console.log(result.trim());
```


## Q7
Given a **Doubly Linked List**, the task is to reverse the given Doubly Linked List.

**Example:**
Original Linked list 10 8 4 2
Reversed Linked list 2 4 8 10

### Answer -


```javascript
class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  function reverseDoublyLinkedList(head) {
    if (!head || !head.next) {
      return head;
    }
  
    let current = head;
    let prev = null;
  
    while (current) {
      let next = current.next;
      current.next = prev;
      current.prev = next;
  
      prev = current;
      current = next;
    }
  
    head = prev;
  
    return head;
  }
  
  const list = new Node(10);
  list.next = new Node(8);
  list.next.prev = list;
  list.next.next = new Node(4);
  list.next.next.prev = list.next;
  list.next.next.next = new Node(2);
  list.next.next.next.prev = list.next.next;
  
  const reversedList = reverseDoublyLinkedList(list);
  
  let current = reversedList;
  let result = '';
  while (current) {
    result += current.data + ' ';
    current = current.next;
  }
  console.log(result.trim());
```

## Q8

Given a doubly linked list and a position. The task is to delete a node from given position in a doubly linked list.

**Example 1:**
Input:
LinkedList = 1 <--> 3 <--> 4
x = 3
Output:1 3
Explanation:After deleting the node at
position 3 (position starts from 1),
the linked list will be now as 1->3.

**Example 2:**
Input:
LinkedList = 1 <--> 5 <--> 2 <--> 9
x = 1
Output:5 2 9

## Answer

```Javascript
class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  function deleteNodeAtPosition(head, position) {
    if (!head) {
      return null;
    }
  
    if (position === 1) {
      head = head.next;
      if (head) {
        head.prev = null;
      }
      return head;
    }
  
    let current = head;
    let count = 1;
  
    while (current && count < position) {
      current = current.next;
      count++;
    }
  
    if (!current) {
      return head;
    }
  
    current.prev.next = current.next;
    if (current.next) {
      current.next.prev = current.prev;
    }
  
    return head;
  }
  
  const list = new Node(1);
  list.next = new Node(5);
  list.next.prev = list;
  list.next.next = new Node(2);
  list.next.next.prev = list.next;
  list.next.next.next = new Node(9);
  list.next.next.next.prev = list.next.next;
  
  const position = 1;
  const updatedList = deleteNodeAtPosition(list, position);
  
  let current = updatedList;
  let result = '';
  while (current) {
    result += current.data + ' ';
    current = current.next;
  }
  console.log(result.trim());  
  ```