import {rl} from "../createInterface.js";

class DynamicCircularQueue {
    constructor() {
        this.queue = [];
        this.head = 0;
        this.tail = 0;
    }

    // проверка пустоты очереди
    isEmpty() {
        return this.queue.length === 0;
    }

    // добавление элемента в конец очереди
    enqueue(item) {
        this.queue[this.tail] = item;
        this.tail = (this.tail + 1) % (this.queue.length + 1);
    }

    // удаление элемента из начала очереди
    dequeue() {
        if (!this.isEmpty()) {
            const item = this.queue[this.head];
            this.head = (this.head + 1) % (this.queue.length + 1);
            return item;
        } else {
            console.log('Queue is empty, cannot remove element');
        }
    }

    // вывод текущего состояния очереди на экран
    printQueue() {
        console.log(this.queue.slice(this.head, this.tail).join(' '));
    }
}

const printHelp = () => {
        console.log('enqueue <item> - добавить элемент в очередь');
        console.log('dequeue - удалить элемент из очереди');
        console.log('print - вывести очередь на экран');
        console.log('help - вывод справки');
        console.log('exit - выход из программы');
}

export function run() {

    console.log("start lab2_6");
    printHelp();


// инициализация пустой очереди
    let queue = new DynamicCircularQueue();


    rl.on('line', (input) => {
        const command = input.split(' ')[0];
        const argument = input.split(' ')[1];

        switch (command) {
            case 'enqueue':
                queue.enqueue(argument);
                break;
            case 'dequeue':
                queue.dequeue();
                break;
            case 'print':
                queue.printQueue();
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
