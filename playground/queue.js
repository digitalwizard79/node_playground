class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    peek() {
        return this.first
    }

    enqueue(value) {
        let newNode = new Node(value)

        if (this.first === null) {
            this.first = newNode
            this.last = this.first
        } else {
            this.last.next = newNode
            this.last = newNode
        }
    
        this.length++
        return this
    }

    dequeue() {
        if (!this.first) {
            return null
        }
        if (this.first === this.last) {
            this.last = null
        }

        const headNode = this.first
        this.first = this.first.next
        this.length--
        return this
    }
}

const myQueue = new Queue()
myQueue.enqueue('google')
myQueue.enqueue('udemy')
myQueue.enqueue('discord')
myQueue.dequeue()
myQueue.dequeue()
console.log(myQueue)