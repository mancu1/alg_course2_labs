import {rl} from "../createInterface.js";

class Stack {
    constructor() {
        this.stack = [];
    }

    // проверка пустоты стека
    isEmpty() {
        return this.stack.length === 0;
    }

    // добавление элемента в вершину стека
    push(item) {
        this.stack.push(item);
    }

    // добавление нескольких элементов в стек
    pushMultiple(count) {
        for (let i = 0; i < count; i++) {
            // добавляем в стек случайное число от 0 до 100
            this.stack.push(Math.floor(Math.random() * 100));
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
    console.log('pushMultiple <count> - добавить несколько элементов в стек');
    console.log('pop - удалить элемент из стека');
    console.log('print - вывести стек на экран');
    console.log('exit - выход из программы');
    console.log('help - вывод справки');
}

export function run() {
    console.log("start lab2_3");
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
            case 'pushMultiple':
                stack.pushMultiple(Number(argument));
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
