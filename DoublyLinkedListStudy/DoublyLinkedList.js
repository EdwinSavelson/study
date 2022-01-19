class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let popped = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newTail = popped.prev;
      newTail.next = null;
    }
    this.length--;
    return popped;
  }

  toString() {
    let node = this.head;
    while (this.length >= 0) {
      if (node !== null) {
        console.log(node.val);
        node = node.next;
        this.length--;
      }else{
          console.log("List empty")
          return undefined
      }
    }
  }
}

let list = new DoublyLinkedList();
list.push(2);
// list.push(3);
// list.push(4);

console.log(list.pop());
list.toString();
