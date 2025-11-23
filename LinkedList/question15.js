/* *
15. Cricket Team\
-   Remove P3\
-   Add X after P4\
-   Add Captain Y at end\
-   Update first player → Opener Z
Solution
-   Imse muje P3 ka value search kar ke nikalna he with custom function.
-   Phir muje P4 ka poistion search kar ke add karna he "X" jiske liye custom function use hoga. - done
-   Phir muje "Y" end me add karna he with push method. - done
-   Phir muje first player ko update karna he Opener Z se with custom function - done
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

    findByValue(value) {
        if (!this.head) return undefined;

        let temp = this.head;
        while (temp) {
            if (temp.value === value) return temp;
            temp = temp.next;
        }

        return undefined
    }

    insertAfterValue(searchValue, newValue) {
        if (!this.head) return undefined;

        let node = this.findByValue(searchValue);
        if (!node) return undefined;

        const newNode = new Node(newValue);
        newNode.next = node.next;
        node.next = newNode;

        if (this.tail === node) {
            this.tail = newNode;
        }

        this.length++;
        return true;
    }

    updateAtStart(newValue) {
        if (!this.head) return undefined;

        this.head.value = newValue;
        return true;
    }

    removeByValue(value) {
        if (!this.head) return undefined;

        let node = this.findByValue(value);
        if (!node) return undefined;

        if (node === this.head) return this.shift();

        let temp = this.head;
        while (temp.next !== node) {
            temp = temp.next;
        }
        temp.next = node.next;

        if (node === this.tail) {
            this.tail = temp;
        }
        node.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null
        }

        return node;
    }

}