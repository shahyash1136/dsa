/* *
14. Restaurant Orders\
-   Remove Order3\
-   Add "Special Thali"\
-   Add "VIP Order" at start\
-   Update Order2 → Order22
Solution
-   Imse muje order3 ka value search kar ke nikalna he with custom function.
-   Phir muje "Special Thali" end me add karni he with push.
-   Phir muje "VIP Order" start me add karna he with unshift.
-   Phir muje order2 ko update karna he order22 se with custom function
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

    push(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++
        return this;
    }

    unshift(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++
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
            this.tail = null;
        }
        return temp;
    }

    findNodeByValue(value) {
        if (!this.head) return undefined;
        let temp = this.head;
        while (temp) {
            if (temp.value === value) {
                return temp;
            }
            temp = temp.next;
        }
        return undefined;
    }

    removeByValue(value) {
        if (!this.head) return undefined;

        let node = this.findNodeByValue(value);
        if (!node) return undefined;

        if (node === this.head) return this.shift();


        let prev = this.head;
        while (prev.next !== node) {
            prev = prev.next;
        }

        prev.next = node.next

        // remove tail case
        if (node === this.tail) {
            this.tail = prev;
        }

        node.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return node;

    }

    updateByValue(oldValue, newValue) {
        if (!this.head) return false;
        let node = this.findNodeByValue(oldValue);
        if (node) {
            node.value = newValue;
            return true;
        }
        return false;
    }
}