// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4] Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:

// Input: l1 = [0], l2 = [0] Output: [0]

// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] Output: [8,9,9,9,0,0,0,1]

class ListNode {
    constructor(value = 0, next = null) {
      this.val = value;
      this.next = next;
    }
  }
  
  const addTwoNumbers = (l1, l2) => {
    const dummy = new ListNode(0); // Dummy node to hold the result
    let current = dummy;
    let carry = 0;
  
    while (l1 || l2) {
      // Retrieve the values of the current nodes (or 0 if the list is shorter)
      const x = l1 ? l1.val : 0;
      const y = l2 ? l2.val : 0;
  
      // Calculate the sum and carry
      const total = carry + x + y;
      carry = Math.floor(total / 10);
      current.next = new ListNode(total % 10);
  
      // Move to the next nodes
      if (l1) {
        l1 = l1.next;
      }
      if (l2) {
        l2 = l2.next;
      }
      current = current.next;
    }
  
    if (carry > 0) {
      current.next = new ListNode(carry);
    }
  
    return dummy.next;
  };

  // Create two linked lists: 2 -> 4 -> 3 and 5 -> 6 -> 4
const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

const result = addTwoNumbers(l1, l2);

// Print the result: 7 -> 0 -> 8
let node = result;
while (node) {
  console.log(node.val);
  node = node.next;
}