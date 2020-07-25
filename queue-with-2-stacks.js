// https://www.interviewcake.com/question/javascript/queue-two-stacks?course=fc1&section=queues-stacks

//  Implement the enqueue and dequeue methods

class QueueTwoStacks {
  constructor() {
    this.inStack = []
    this.outStack = []
  }
  enqueue(item) {
    this.currentStack === 1 ? this.stack1.push(item) : this.stack2.push(item)

    console.log(this.stack1)
    console.log(this.stack2)
  }

  dequeue() {
    for (let items in this.stack1) {
      console.log(items)
    }

    return 0;
  }
}


// Tests
const q = new QueueTwoStacks();

q.stack1 = []
q.stack2 = []
q.currentStack = 1

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

let desc = 'dequeue #1';
let actual = q.dequeue();
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'dequeue #2';
actual = q.dequeue();
expected = 2;
assertEquals(actual, expected, desc);

q.enqueue(4);

desc = 'dequeue #3';
actual = q.dequeue();
expected = 3;
assertEquals(actual, expected, desc);

desc = 'dequeue #4';
actual = q.dequeue();
expected = 4;
assertEquals(actual, expected, desc);

desc = 'dequeue from empty queue';
const emptyDequeue = () => q.dequeue();
assertThrowsError(emptyDequeue, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}