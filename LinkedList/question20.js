/* *
20. Insert X in middle (manual index).
Solution
- Traverse the list to find its length.
- Calculate the middle index = Math.floor(length / 2).
- Traverse again until middle index - 1.
- Insert new node X at that middle position.
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
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if (!this.head) return undefined;
        let temp = this.head;
        this.head = temp.next;
        temp.next = null;
        this.length--;
        if (this.length === 0) {
            return null;
        }
        return temp;
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

    pop() {
        if (!this.head) return undefined;

        let temp = this.head;
        let prev = this.head;

        while (temp.next) {
            prev = temp;
            temp = temp.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            return null;
        }
        return temp;
    }

    addInMiddle(value) {
        if (!this.head) return undefined;

        const newNode = new Node(value);
        let middle = Math.floor(this.length / 2);

        // Insert at head
        if (middle === 0) {
            return this.unshift(value);
        }

        let temp = this.head;

        for (let i = 0; i < middle - 1; i++) {
            temp = temp.next;
        }
        newNode.next = temp.next;
        temp.next = newNode;

        this.length++;
        return true;
    }



}