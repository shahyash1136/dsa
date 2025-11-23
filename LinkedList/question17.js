/* *
17. Bank Tokens\
-   Remove 101\
-   Remove last\
-   Insert 103.5 after 103\
-   Update 104 → 204
Solution
-   search the value 101 and remove it using custom remove function. -- done
-   remove the last node using pop(). -- done
-   search the value 103 and insert 103.5 after it using custom insert function.
-   search the value 104 and update it to 204 using custom update function. -- done
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

    shift() {
        if (!this.head) return undefined;
        let temp = this.head;
        this.head = temp.next;
        temp.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
        }
        return temp;
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
        return temp
    }

    searchByValue(value) {
        if (!this.head) return undefined;

        let temp = this.head;
        while (temp) {
            if (temp.value === value) return temp;
            temp = temp.next;
        }

        return undefined;
    }

    removeByValue(value) {
        if (!this.head) return undefined;

        let node = this.searchByValue(value);
        if (!node) return undefined;

        if (node === this.head) return this.shift();

        let temp = this.head;
        while (temp.next !== node) {
            temp = temp.next;
        }

        temp.next = node.next;

        if (this.tail === node) {
            this.tail = temp;
        }
        node.next = null;
        this.length--;

        if (this.length === 0) return null;

        return node;
    }

    updateByValue(oldValue, newValue) {
        if (!this.head) return undefined;

        let node = this.searchByValue(oldValue);
        if (node) {
            node.value = newValue;
            return true
        }
        return false;
    }

    insertAfterValue(oldValue, newValue) {
        if (!this.head) return undefined;

        let node = this.searchByValue(oldValue);
        if (!node) return undefined;

        let newNode = new Node(newValue);
        newNode.next = node.next;
        node.next = newNode;

        if (node === this.tail) {
            this.tail = newNode;
        }

        this.length++;
        return true;
    }

}