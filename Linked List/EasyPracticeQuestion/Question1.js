/* 
1. **Insert a Node at the Beginning**  
   Write a function to insert a node at the beginning of a LinkedList.

   - **Input:**  
     Initial list: `1 -> 2 -> 3`  
     Insert: `0` at the beginning

   - **Expected Output:**  
     `0 -> 1 -> 2 -> 3`
*/
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    unshift(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }
}
