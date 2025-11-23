/* *
16. Movie Queue\
-   Remove B\
-   Add F, G at end\
-   Add V at start\
-   Get index 3
Solution
-   Imse muje B ka value search kar ke nikalna he with custom function.
-   Phir muje F,G ko add karna he with push method. -- done
-   Phir muje V ko add karna he with unshift method. -- done
-   Phir muje get method se value nikalni he with index  -- done
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
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
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

    searchByValue(value) {
        if (!this.head) return undefined;
        let temp = this.head;
        while (temp) {
            if (temp.value === value) {
                return temp
            }
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

        if (node === this.tail) {
            this.tail = temp;
        }
        node.next = null;
        this.length--;
        if (this.length === 0) {
            return null;
        }
        return node;
    }
}