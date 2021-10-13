class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }


    checkNext(){
        console.log('Next Node is: ' + this.next.data)
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0
    }


    insert(data){

        let newNode;

        let current;


        // If the list is empty set the new node to head
        if(!this.head){
            newNode = new Node(data, this.tail)
            this.head = newNode;
            this.tail = newNode;
        }


        //if the list is not empty insert behind
        else if(this.head){

           let oldTail = this.tail;
           this.tail = new Node(data)
           oldTail.next = this.tail
            
        }
    }


    view(count){

        let i;
        let current = this.head;

        for(i = 0; i < count; i++){

            console.log(current.data)
            current = current.next;
            
        }
    }
}




const n1 = new Node('Timmy')

const n2 = new Node('Johns', n1)


let linkedList = new LinkedList()
linkedList.insert(100)
linkedList.insert(200)
linkedList.insert(300)
linkedList.insert(400)
linkedList.insert(500)


linkedList.view(2)

//n2.checkNext()

//console.log(linkedList)