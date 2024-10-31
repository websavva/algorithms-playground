export class Stack {
  private storage: any[] = [];

  push(data: any) {
    this.storage.push(data);
  }

  pop() {
    return this.storage.pop();
  }

  get size() {
    return this.storage.length;
  }
}

export class Queue {
  private stack1 = new Stack();
  private stack2 = new Stack();

  private get activeStack() {
    const { stack1, stack2 } = this;

    return stack1.size ? stack1 : stack2;
  }

  enqueue(data: any) {
    this.activeStack.push(data);
  }

  dequeue() {
    const nextActiveStack =
      this.activeStack === this.stack1 ? this.stack2 : this.stack1;

    let lastValue: any;

    while (this.activeStack.size) {
      let lastValue = this.activeStack.pop();

      nextActiveStack.push(lastValue);
    }

    return lastValue;
  }

  get size() {
    return this.activeStack.size;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);

console.log(queue.dequeue());
