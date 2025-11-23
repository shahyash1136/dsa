/* 
*  Remove middle item (index 2).
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

    unshfit(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    removeMiddleItem() {
        if (!this.head || !this.head.next) return this.shift();
        let fast = this.head;
        let slow = this.head;
        let prev = null
        while (fast !== null && fast.next !== null) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        prev.next = slow.next;
        slow.next = null;
        this.length--;
        if (this.length === 0) {
            return null
        }
        return slow;
    }


}