import {rl} from "../createInterface.js";

class Node {
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = new Node(null); // элемент-заголовок
        this.head.next = this.head;
        this.head.prev = this.head;
    }

    // проверка на пустоту списка
    isEmpty() {
        return this.head.next === this.head;
    }

    // добавление элемента после заданного
    addAfter(newValue, value) {
        if (this.isEmpty()) { // если список пуст, добавляем сразу после заголовка
            let node = new Node(newValue, this.head, this.head);
            this.head.next = node;
            this.head.prev = node;
        } else {
            let current = this.head.next;
            while (current !== this.head) {
                if (current.value === value) { // нашли заданный элемент
                    let node = new Node(newValue, current.next, current);
                    current.next.prev = node;
                    current.next = node;
                    return;
                }
                current = current.next;
            }
            console.log('Element not found, cannot add after');
        }
    }

    // добавление элемента перед заданным
    addBefore(newValue, value) {
        if (this.isEmpty()) { // если список пуст, добавляем сразу после заголовка
            let node = new Node(newValue, this.head, this.head);
            this.head.next = node;
            this.head.prev = node;
        } else {
            let current = this.head.next;
            while (current !== this.head) {
                if (current.value === value) { // нашли заданный элемент
                    let node = new Node(newValue, current, current.prev);
                    current.prev.next = node;
                    current.prev = node;
                    return;
                }
                current = current.next;
            }
            console.log('Element not found, cannot add before');
        }
    }

    // удаление заданного элемента
    remove(value) {
        let current = this.head.next;
        while (current !== this.head) {
            if (current.value === value) { // нашли элемент для удаления
                current.prev.next = current.next;
                current.next.prev = current.prev;
                return;
            }
            current = current.next;
        }
        console.log('Element not found, cannot remove');
    }

    // просмотр списка в прямом направлении
    traverse() {
        let current = this.head.next;
        while (current !== this.head) {
            console.log(current.value);
            current = current.next;
        }
    }

    // просмотр списка в обратном направлении
    reverseTraverse() {
        let current = this.head.prev;
        while (current !== this.head) {
            console.log(current.value);
            current = current.prev;
        }
    }

    // поиск элемента в прямом направлении
    search(value) {
        let current = this.head.next;
        while (current !== this.head) {
            if (current.value === value) {
                console.log(`Element found: ${value}`);
                return;
            }
            current = current.next;
        }
        console.log('Element not found');
    }

    // поиск элемента в обратном направлении
    reverseSearch(value) {
        let current = this.head.prev;
        while (current !== this.head) {
            if (current.value === value) {
                console.log(`Element found: ${value}`);
                return;
            }
            current = current.prev;
        }
        console.log('Element not found');
    }
}

const printHelp = () => {
    console.log('\n1. Add element after');
    console.log('2. Add element before');
    console.log('3. Remove element');
    console.log('4. Print list');
    console.log('5. help');
    console.log('6. Exit');
}


export function run() {
    const list = new DoublyLinkedList();


    rl.on('line', (input) => {
        const command = input.split(' ')[0];
        const argument = input.split(' ')[1];

        switch (command) {
            case '1':
                rl.question('Enter value to add and value after which to add (separated by space): ', (input) => {
                    const [newValue, value] = input.split(' ');
                    list.addAfter(newValue, value);
                });
                break;
            case '2':
                rl.question('Enter value to add and value before which to add (separated by space): ', (input) => {
                    const [newValue, value] = input.split(' ');
                    list.addBefore(newValue, value);
                });
                break;
            case '3':
                rl.question('Enter value to remove: ', (value) => {
                    list.remove(value);
                });
                break;
            case '4':
                console.log('List in forward direction:');
                list.traverse();
                console.log('List in reverse direction:');
                list.reverseTraverse();
                break;
            case '5':
                printHelp();
                break;
            case '6':
                rl.close();
                break;
            default:
                console.log('Invalid option. Please choose a valid option.');
                break;
        }
    });
}
