/* 
5. **Search for an Element in the LinkedList**  
   Implement a function that searches for a given element in the LinkedList and returns `true` if found, otherwise `false`.

   - **Input:**  
     LinkedList: `1 -> 2 -> 3 -> 4`  
     Search for: `3`

   - **Expected Output:**  
     Result: `true`

   - **Input:**  
     LinkedList: `1 -> 2 -> 3 -> 4`  
     Search for: `5`

   - **Expected Output:**  
     Result: `false`
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
    }

    search(value) {
        if (!this.head) return false;
        let temp = this.head;
        while (temp !== null) {
            if (temp.value === value) {
                return true
            }
            temp = temp.next;
        }
        return false;
    }

}