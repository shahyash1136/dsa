/* 4. ** Find the Length of the LinkedList **
    Write a function to return the number of nodes in the LinkedList.

   - ** Input:**
    LinkedList: `1 -> 2 -> 3 -> 4`

        - ** Expected Output:**
            Length: `4` */

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
    }

    length() {
        if (!this.head) return 0
        let temp = this.head;
        let length = 0
        while (temp !== null) {
            length++;
            temp = temp.next;
        }
        return length;
    }

}