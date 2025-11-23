/* *
18. Shopping List\
-   Remove Soap\
-   Add Milk at start\
-   Update Rice → Brown Rice\
-   Add Olive Oil after Oil
Solution
-   search the value Soap and remove it using custom remove function. -- done
-   add the first node using unshift. -- done
-   search the value Rice and update it to Brown Rice using custom update function. -- done
-   search the value Oil and add Olive Oil after it using custom add function. 
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
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    searchByValue(value) {
        if (!this.head) return undefined;

        let temp = this.head;
        while (temp) {
            if (temp.value === value) return temp;
            temp = temp.next;
        }

        return undefined
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

    updateByValue(oldValue, value) {
        if (!this.head) return undefined;

        let node = this.searchByValue(oldValue);
        if (!node) return false;
        node.value = value;
        return true;
    }

    insertAfterValue(searchValue, newValue) {
        if (!this.head) return undefined;

        let node = this.searchByValue(searchValue);
        if (!node) return undefined;

        let newNode = new Node(newValue); 
        newNode.next = node.next;
        node.next = newNode;

        if (node === this.tail) {
            this.tail = newNode;
        }

        this.length++;
        return true
    }

}