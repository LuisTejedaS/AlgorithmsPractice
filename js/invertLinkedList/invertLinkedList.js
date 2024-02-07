class nodeList {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

function invertList(head) {
    let traverseNode = head
    let prevNode = null
    let nextNode
    while (traverseNode) {
        nextNode = traverseNode.next //save for future
        traverseNode.next = prevNode // point to previous
        prevNode = traverseNode // save for future // current node is prev in next it
        traverseNode = nextNode // iterate trhough nodes
    }
    return prevNode
}


function traverseList(head) {
    let traverseNode = head
    while (traverseNode) {
        console.log(traverseNode.val)
        traverseNode = traverseNode.next
    }
    console.log("list is finished")
}

let node3 = new nodeList(3, null)
let node2 = new nodeList(2, node3)
let node1 = new nodeList(1, node2)


let node6 = new nodeList(6, null)
let node7 = new nodeList(7, node6)
let node8 = new nodeList(8, node7)


traverseList(node1)
traverseList(node8)

let newHead = invertList(node1)
let newHead2 = invertList(node8)
traverseList(newHead)
traverseList(newHead2)