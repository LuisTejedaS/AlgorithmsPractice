class Node {
    constructor(value) {
        this.value = value
    }
}

class LinkedList {
    constructor(head) {
        this.head = head;
    }

    addNode(params) {
        let curentNode = this.head
        while (curentNode.next) {
            curentNode = curentNode.next
        }
        curentNode.next = params
    }

    removeNode(index) {
        let curentNode = this.head
        let previous = this.head
        let indexNode = 1;

        if (index === 1) {
            this.head = this.head.next
        }

        while (curentNode.next && indexNode < index) {
            previous = curentNode
            curentNode = curentNode.next
            indexNode++;
        }
        if (!curentNode.next) {
            return
        }

        previous.next = curentNode.next
    }
}


function printList(list) {
    let head = list.head;
    let curentNode = head;
    while (curentNode) {
        console.log(curentNode.value)
        curentNode = curentNode.next
    }
}

let list = new LinkedList(new Node(1))
list.addNode(new Node(2))
list.addNode(new Node(3))
list.addNode(new Node(4))

printList(list)
list.removeNode(3)
printList(list)
list.removeNode(1)
printList(list)
