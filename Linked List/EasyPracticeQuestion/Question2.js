/* 
2. ** Insert a Node at the End **
    Implement a function to insert a node at the end of a LinkedList.

   - ** Input:**
    Initial list: `1 -> 2 -> 3`
Insert: `4` at the end

    - ** Expected Output:**
        `1 -> 2 -> 3 -> 4` 
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;

    }
}