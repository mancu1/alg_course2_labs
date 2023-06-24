import {rl} from "../createInterface.js";

class LinearList {
    constructor() {
        this.list = [];
    }

    // проход по списку с выводом на экран информационных частей элементов
    traverse() {
        console.log(this.list.join(' '));
    }

    // поиск элемента с заданной информационной частью
    search(value) {
        let index = this.list.indexOf(value);
        if (index !== -1) {
            console.log(`Element found at index ${index}`);
        } else {
            console.log('Element not found');
        }
    }

    // добавление нового элемента после заданного со сдвигом
    addAfter(value, afterValue) {
        let index = this.list.indexOf(afterValue);
        if (index !== -1) {
            this.list.splice(index + 1, 0, value);
        } else {
            console.log('Element not found, cannot add after');
        }
    }

    // добавление нового элемента перед заданным со сдвигом
    addBefore(value, beforeValue) {
        let index = this.list.indexOf(beforeValue);
        if (index !== -1) {
            this.list.splice(index, 0, value);
        } else {
            console.log('Element not found, cannot add before');
        }
    }

    // удаление заданного элемента со сдвигом
    remove(value) {
        let index = this.list.indexOf(value);
        if (index !== -1) {
            this.list.splice(index, 1);
        } else {
            console.log('Element not found, cannot remove');
        }
    }
}


const printHelp = () => {
    console.log('add <item> <afterItem> - добавить элемент в список после элемента с заданным значением');
    console.log('addBefore <item> <beforeItem> - добавить элемент в список перед элементом с заданным значением');
    console.log('remove <item> - удалить элемент из списка');
    console.log('search <item> - найти элемент в списке');
    console.log('traverse - вывести список на экран');
    console.log('exit - выход из программы');
    console.log('help - вывод справки');
}

export function run() {

    console.log("start lab3_1");
    printHelp();
// инициализация пустого списка
    let list = new LinearList();


    rl.on('line', (input) => {
        const command = input.split(' ')[0];
        const argument1 = input.split(' ')[1];
        const argument2 = input.split(' ')[2];

        switch (command) {
            case 'add':
                list.addAfter(argument1, argument2);
                break;
            case 'addBefore':
                list.addBefore(argument1, argument2);
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
