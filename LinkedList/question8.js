/* 
*  Remove "Cover" from cart.
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

    unshift(value) {
        let newNode = new Node(value);
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
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    push(value) {
        let newNode = new Node(value);
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

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    set(index, value) {
        let oldValue = this.get(index);
        if (oldValue) {
            oldValue.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index === 0) {
            return this.unshift(value)
        }

        if (index === this.length) {
            return this.push(value)
        }

        if (index < 0 || index >= this.length) return undefined;

        let newNode = new Node(value);
        let preValue = this.get(index - 1);
        newNode.next = preValue.next;
        preValue.next = newNode;
        this.length++;
        return this;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;

        if (index === 0) {
            return this.shift()
        }

        if (index === this.length - 1) {
            return this.pop();
        }

        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

}