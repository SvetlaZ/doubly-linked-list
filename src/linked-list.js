const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = new Node(); 
        this._tail = new Node();
        this.length = 0;
    }

    append(data) {
        if (this.length === 0){
            let node = new Node(data);

            this._head = node;
            this._tail = node;
        } else {
            let node = new Node(data, this._tail);

            this._tail = node;
            this._tail.prev.next = node;
        }

        this.length++;

        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let node = this._head;
        
        for (let i = 0; i < index; i++) {
            node = node.next;
        }

        return node.data;
    }

    insertAt(index, data) {
        if (this.length === 0) {
            this.append(data);
        } else {
            let node = this._head;
            
            for (let i = 0; i < index; i++) {
                node = node.next;
            }

            let newNode = new Node(data, node.prev, node);
            
            node.prev = newNode;
            newNode.prev.next = newNode;

            this.length++;
        }

        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._head = new Node(); 
        this._tail = new Node();
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        if (this.length === 1){
            this._head = new Node();
            this._tail = new Node();
        } else {
            let node = this._head;
            
            for (let i = 0; i < index; i++) {
                node = node.next;
            }
                
            node.prev.next = node.next;
            node.next.prev = node.prev;

            this.length--;
        }
        
        return this;
    }

    reverse() {
        let node = this._head;
        
        for (let i = 0; i < this.length; i++){
            let next = node.next;
            node.next = node.prev;
            node.prev = next;

            node = node.prev
        }

        let head = this._head
        this._head = this._tail;
        this._tail = head;

        return this;
    }

    indexOf(data) {
        let node = this._head;

        for (let i = 0; i < this.length; i++) {
            if (data === node.data) {
                return i;
            }

            node = node.next;
        }

        return -1;
    }
}

module.exports = LinkedList;
