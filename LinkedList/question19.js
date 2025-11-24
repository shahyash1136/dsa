/* *
20. Reverse Cars\
    Reverse: Car1 → Car4.
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        let newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }


    reverse() {
        if (!this.head || this.length === 1) return this;

        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let prev = null;
        let next = null;

        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return this;


    }

}