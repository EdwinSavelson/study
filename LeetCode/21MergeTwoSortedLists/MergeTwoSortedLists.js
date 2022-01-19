//Jan 18th, 2022


// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.
//Ex.
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const makeList = (list) => {
  let head = null;
  let tail = null;
  let node;

  for (let i = 0; i < list.length; i++) {
    node = new ListNode(list[i]);

    if (i === 0) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      tail = node;
    }
  }
  return head;
};

const toString = (list) => {
  while (list) {
    console.log(list.val);
    list = list.next;
  }
};

var mergeTwoLists = function (list1, list2) {
  // console.log(list1, list2);
  let dummyHead = new ListNode(0);
  let currentNode = dummyHead;

  // while (list1 || list2) {
  //   if (!list2 || list1.val < list2.val) {
  //     currentNode.next = list1;
  //     list1 = list1.next;
  //   }else if(list1.val > list2.val){
  //     currentNode.next = list2;
  //     list2 = list2.next;
  //   }else if(!list1 || list1.val === list2.val){
  //     currentNode.next = list1;
  //     list1 = list1.next;
  //     currentNode = currentNode.next;
  //     currentNode.next = list2;
  //     list2 = list2.next;
  //   }
  //   currentNode = currentNode.next;
  // }

  while (list1 && list2) {
    if (list1.val < list2.val) {
      currentNode.next = list1;
      list1 = list1.next;
    } else if (list1 === list2) {
      currentNode.next = list1;
      list1 = list1.next;
      currentNode = currentNode.next;
      currentNode.next = list2;
      list2 = list2.next;
    } else {
      currentNode.next = list2;
      list2 = list2.next;
    }
    currentNode = currentNode.next;
  }

  while (!list2 && list1) {
    if (list1 !== null) {
      currentNode.next = list1;
      list1 = list1.next;
      currentNode = currentNode.next;
    }
  }
  while (!list1 && list2) {
    if (list2 !== null) {
      currentNode.next = list2;
      list2 = list2.next;
      currentNode = currentNode.next;
    }
  }

  return dummyHead.next;
};

(list1 = [1, 2, 4, 5]), (list2 = [1, 3, 4]);
(list3 = []), (list4 = [0]);
let l1 = makeList(list1);
let l2 = makeList(list2);

let merged = mergeTwoLists(l1, l2);
console.log(merged);
toString(merged);
