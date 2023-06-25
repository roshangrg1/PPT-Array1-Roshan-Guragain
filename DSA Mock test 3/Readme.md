# DSA Mock Test

## Q1

Implement a stack using an array in JavaScript. Include the necessary methods such as push, pop, and isEmpty

## Answer 

```javascript
class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  display() {
    console.log(this.stack);
  }
}

const stack = new Stack()

console.log(stack.isEmpty());
console.log(stack.pop());
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()
stack.push(5)

stack.display()
console.log(stack.isEmpty());
console.log(stack.size());
```

## Q2
   Implement a queue using an array in JavaScript. Include the necessary methods such as enqueue, dequeue, and isEmpty
 

### Answer -

```javascript
class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }

  display() {
    console.log(this.queue);
  }
}

const queue = new Queue();

console.log(queue.isEmpty());
console.log(queue.dequeue());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();
queue.enqueue(5);

queue.display();

console.log(queue.size());
```

