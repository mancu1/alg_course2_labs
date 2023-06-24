import {rl} from "../createInterface.js";

class Stack {
    constructor(maxSize = Infinity) {
        this.stack = [];
        this.maxSize = maxSize;
    }

    // проверка пустоты стека
    isEmpty() {
        return this.stack.length === 0;
    }

    // проверка заполненности стекового массива
    isFull() {
        return this.stack.length === this.maxSize;
    }

    // добавление элемента в вершину стека
    push(item) {
        if (!this.isFull()) {
            this.stack.push(item);
        } else {
            console.log('Stack is full, cannot add element');
        }
    }

    // удаление элемента из вершины стека
    pop() {
        if (!this.isEmpty()) {
            return this.stack.pop();
        } else {
            console.log('Stack is empty, cannot remove element');
        }
    }

    // вывод текущего состояния стека на экран
    printStack() {
        console.log(this.stack.join(' '));
    }
}

const printHelp = () => {
    console.log('push <item> - добавить элемент в стек');
    console.log('pop - удалить элемент из стека');
    console.log('print - вывести стек на экран');
    console.log('exit - выход из программы');
    console.log('help - вывод справки');
}
export function run() {

    console.log("start lab2_1/lab2_2");
    printHelp();
// инициализация пустого стека
    let stack = new Stack();


    rl.on('line', (input) => {
        const command = input.split(' ')[0];
        const argument = input.split(' ')[1];

        switch (command) {
            case 'push':
                stack.push(argument);
                break;
            case 'pop':
                stack.pop();
                break;
            case 'print':
                stack.printStack();
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
