function Node(data, next) {
  this.data = data;
  this.next = next || null;
}

function LinkedList(head) {
  this.head = head;
}

// 1. way to do it using iteration
LinkedList.prototype.length = function() {
  var node = this.head,
      count = 0;
  while (node) {
    count++;
    node = node.next;
  }

  return count;
};

// 2. way to do it using recursion

// BASE CASE: if node is null, then return 0
LinkedList.prototype.length = function() {
  function go(node) {
    if (!node) return 0;

    return 1 + go(node.next);
  }

  return go(this.head);
};


var head = new Node('I am first');
var second = new Node('I am second');
var third = new Node('I am third');

var linkedList = new LinkedList(head);
head.next = second;
second.next = third;


// Problems with LinkedList:

// 1. Reverse a LinkedList
LinkedList.prototype.reverseList = function(linkedList) {

};

// 2. Insert at kth index, linkedList.insertAtIndex(node, index);
LinkedList.prototype.insertAtIndex = function (node, index) {

};

// 3. [Challenge] Re-implement LinkedList so that it has encapsulation, setHead method.
// 4. [Challenge] Re-implement Node so that it has encapsulation, setNext, removeNext method.
function List(head){
  this.head = head || null;
  this.start = null;
  this.end = null;

  var that = this;

  return {
    setHead: function(node, index){

    },

    setNext: function(){

    },

    removeNext: function(){

    },

    makeNode: function(){
      return { data : null, next : null };
    },

    add: function(data){
      if(this.start === null){
        this.start = List.makeNode();
        this.end = this.end.next;
      } else {
        this.end.next = List.makeNode();
        this.end = this.end.next;
      }
      this.end.data = data;
    }
  }

}

var list = new List();
console.log(list.head);
