class CustomNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class ListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class ListOfLists {
    constructor() {
        this.head = null;
    }

    // Полный проход по всей структуре
    traverse(){
        let temp = this.head;
        let index = 0;
        while (temp) {
            let listNode = temp.data;
            console.log(`List ${index}:`);
            let stringNodesValuesSeparatedByComma = "";
            while (listNode) {
                stringNodesValuesSeparatedByComma += `${listNode.data}, `;
                listNode = listNode.next;
            }
            console.log(`${stringNodesValuesSeparatedByComma.slice(0, -2)}`);  // Удаляем последнюю запятую
            temp = temp.next;
            index++;
        }
    }

    // Поиск последнего вхождения заданного элемента только в нечетных подсписках
    search(value) {
        let foundResult = null;
        let temp = this.head;
        let sublistIndex = 0;
        while (temp) {
            if (sublistIndex % 2 !== 0) {  // Если индекс нечетный
                let listNode = temp.data;
                let elementIndex = 0;
                while (listNode) {
                    if (listNode.data === value) {
                        foundResult = {
                            sublistIndex,
                            elementIndex,
                            node: listNode
                        };
                    }
                    listNode = listNode.next;
                    elementIndex++;
                }
            }
            temp = temp.next;
            sublistIndex++;
        }
        return foundResult;  // Возвращаем null, если элемент не найден
    }

    // Добавление нового элемента (связного списка) в список списков
    addNewList(value) {
        const newNode = new CustomNode(value);
        const newListNode = new ListNode(newNode, this.head);
        this.head = newListNode;
    }

    // Добавление нового элемента в связанный список
    addToList(listIndex, value) {
        let temp = this.head;
        let length = 0;
        while (temp) {
            temp = temp.next;
            length++;
        }

        if (listIndex >= length || listIndex < 0) {
            console.error("Invalid index");
            return;
        }

        temp = this.head;
        for (let i = 0; i < length - listIndex - 1; i++) {
            temp = temp.next;
        }

        const newNode = new CustomNode(value);
        let listNode = temp.data;
        while (listNode.next) {
            listNode = listNode.next;
        }
        listNode.next = newNode;
    }
}

export function run() {

    const list = new ListOfLists();

// Создаем и заполняем список списков случайными значениями
    for (let i = 0; i < 5; i++) {
        list.addNewList(Math.floor(Math.random() * 10));  // Добавляем новый подсписок с одним случайным значением
        for (let j = 0; j < 5; j++) {
            list.addToList(i, Math.floor(Math.random() * 10));  // Добавляем в подсписок случайные значения
        }
    }

    list.traverse();  // Выводим все списки для наглядности

// Ищем последнее вхождение заданного элемента в нечетных подсписках
    const value = 8;  // Значение, которое мы ищем
    const foundResult = list.search(value);
    if (foundResult) {
        console.log(`Found ${value}  sublist index: ${foundResult.sublistIndex}, element index: ${foundResult.elementIndex}`);
    } else {
        console.log(`${value} not found`);
    }
}
