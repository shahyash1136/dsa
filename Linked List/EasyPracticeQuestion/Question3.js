/* 
3. **Delete a Node by Value**  
   Write a function to delete the first occurrence of a node with a given value from the LinkedList.

   - **Input:**  
     Initial list: `1 -> 2 -> 3 -> 4`  
     Delete: `3`

   - **Expected Output:**  
     `1 -> 2 -> 4`

*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
    }

    delete(value) {
        if (!this.head) return;
        if (this.head.value === null) {
            this.head = this.head.next;
            if (!this.head) {
                this.tail = null
            }
        }

        let temp = this.head;
        let prev = null;
        while (temp !== null) {
            if (temp.value === value) {
                prev.next = temp.next;
                temp.next = null;
                if (temp === this.tail) {
                    this.tail = prev
                }
            }
            prev = temp;
            temp = temp.next
        }
    }

}