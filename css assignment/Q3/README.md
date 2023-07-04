
# Execution context

## About 
  Code Snippet 1 console.log('First'); setTimeout(() => console.log('Second'), 0); console.log('Third');

 Code Snippet 2 console.log('First'); function secondCall() { console.log('Second'); } setTimeout(secondCall, 2000); setTimeout(() => console.log('Third'), 0); console.log('Third');

Answer 6 javascript

The line console.log('First'); is executed synchronously, it is executed immediately. 

setTimeout will be placed in the event queue to be executed later, allowing the remaining synchronous code to continue execution.

After the delay (which is effectively 0 milliseconds), the callback function () => console.log('Second') is moved from the event queue to the call stack for execution. 

Therefore the output is :
First , third second

The first console.log('First'); statement is executed immediately and logs 'First' to the console. 

The setTimeout(() => console.log('Third'), 0); statement schedules the anonymous arrow function to be executed after a delay of 0 milliseconds, but it is placed in the event loop and will be executed later. 

The next console.log('Third'); statement is executed immediately and logs 'Third' to the console. 

After that, the setTimeout(secondCall, 2000); statement schedules the secondCall function to be executed after a delay of 2000 milliseconds (2 seconds).

 Finally, the anonymous arrow function scheduled by setTimeout(() => console.log('Third'), 0); is executed and logs 'Third' to the console. After a delay of 2 seconds, the secondCall function is executed and logs 'Second' to the console.

Output 
First third third second




## 🚀 About Me
I'm a full stack Javascript developer...


## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/roshan-guragain-guragain-747aa4245/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/RoshanGuragain3)




