import {rl} from "../createInterface.js";

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node(null); // элемент-заголовок с ссылочной частью, равной null
    }

    // проверка на пустоту списка
    isEmpty() {
        return this.head.next === null;
    }

    // добавление элемента после заданного
    addAfter(newValue, value) {
        if (this.isEmpty()) { // если список пуст, добавляем сразу после заголовка
            this.head.next = new Node(newValue);
        } else {
            let current = this.head.next;
            while (current !== null) {
                if (current.value === value) { // нашли заданный элемент
                    let node = new Node(newValue, current.next);
                    current.next = node;
                    return;
                }
                current = current.next;
            }
            console.log('Element not found, cannot add after');
        }
    }

    // удаление заданного элемента
    remove(value) {
        let current = this.head;
        while (current.next !== null) {
            if (current.next.value === value) { // нашли элемент для удаления
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
        console.log('Element not found, cannot remove');
    }

    // проход по списку с выводом на экран информационных частей элементов
    traverse() {
        let current = this.head.next;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

    // поиск элемента с заданной информационной частью
    search(value) {
        let current = this.head.next;
        while (current !== null) {
            if (current.value === value) {
                console.log(`Element found: ${value}`);
                return;
            }
            current = current.next;
        }
        console.log('Element not found');
    }
}

const printHelp = () => {
    console.log('add <item> <afterItem> - добавить элемент в список после элемента с заданным значением');
    console.log('remove <item> - удалить элемент из списка');
    console.log('search <item> - найти элемент в списке');
    console.log('traverse - вывести список на экран');
    console.log('exit - выход');
}

export function run() {

    console.log('start lab3_4');
    printHelp();

// инициализация пустого списка
    let list = new LinkedList();

    rl.on('line', (input) => {
        const command = input.split(' ')[0];
        const argument1 = input.split(' ')[1];
        const argument2 = input.split(' ')[2];

        switch (command) {
            case 'add':
                list.addAfter(argument1, argument2);
                break;
            case 'remove':
                list.remove(argument1);
                break;
            case 'search':
                list.search(argument1);
                break;
            case 'traverse':
                list.traverse();
                break;
            case 'exit':
                rl.close();
                break;
            case 'help':
                printHelp();
                break;
            default:
                console.log('Unknown command');
        }
    });
}
