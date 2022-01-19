// Jan 17th, 2022
//Learning how to reverse a linked list

//length is not zero indexed

//create linked list
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    //add node to end
    push(val) {
      let newNode = new Node(val);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
  
    //remove last node
    pop() {
      if (!this.head) return undefined;
      let pre = this.head;
      let current = pre;
      while (current.next) {
        pre = current;
        current = pre.next;
      }
      this.tail = pre;
      pre.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
  
    //remove head
    shift() {
      if (!this.head) return undefined;
      let prev = this.head;
      let newHead = prev.next;
      this.head = newHead;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return prev;
    }
  
    //add new head to front
    unshift(val) {
      let newNode = new Node(val);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        let oldHead = this.head;
        this.head = newNode;
        this.head.next = oldHead;
      }
      this.length++;
      return newNode;
    }
  
    //get node at specified index
    get(index) {
      let checked = 1;
      let current = this.head;
  
      if (index <= 0 || index > this.length) return null;
  
      while (checked !== index) {
        current = current.next;
        checked++;
      }
  
      return current;
    }
  
    //replace the value of one node
    set(index, val) {
      if (index < 0 || index >= this.length) return null;
      let current = this.get(index);
      if (current === null) {
        return false;
      } else {
        current.val = val;
        return true;
      }
    }
  
    //add node at a given index
    insert(index, val) {
      if (index < 0 || index > this.length) return false;
  
      if (index === 0) {
        this.unshift(val);
      } else if (index === this.length) {
        this.push(val);
      } else {
        let before = this.get(index);
        let after = before.next;
        let newNode = new Node(val);
        before.next = newNode;
        newNode.next = after;
        this.length++;
      }
      return true;
    }
  
    remove(index) {
      if (index <= 0 || index > this.length) return false;
  
      if (index === 1) {
        return this.shift();
      } else if (index === this.length + 1) {
        return this.pop();
      } else {
        //get item before one to be removed
        let beforeRemove = this.get(index - 1);
        let toRemove = beforeRemove.next;
        beforeRemove.next = toRemove.next;
        this.length--;
        return toRemove;
      }
    }
  
    reverse() {
      let node = this.head;
      this.head = this.tail
      this.tail = node;
      let next;
      let prev = null

      for(let i = 0; i < this.length; i++){
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
        }
        return this;
    }
  }
  
  //create a node
  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  //TESTING STUFF
  // console.log(first);
  
  let list = new LinkedList();
  list.push("fuck");
  list.push("you");
  list.push("too");
  list.push("guy");
  
  console.log(list);
  
  console.log(list.reverse());
  