import {rl} from "../createInterface.js";

class CustomNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function buildBalancedTree(n) {
    if (n === 0) {
        return null;
    } else {
        const value = Math.floor(Math.random() * 100);
        const left = buildBalancedTree(Math.floor(n / 2));
        const right = buildBalancedTree(n - Math.floor(n / 2) - 1);
        return new CustomNode(value, left, right);
    }
}

// функция возвращает дерово в виде массива с массивами значений на каждом уровне
/**
 * @param root {(CustomNode)}
 * @returns {number[][]}
 */
function getTreeLevels(root) {
    /**
     *
     * @type {number[][]}
     */
    const levels = [];
    /**
     *
     * @type {(CustomNode)[]}
     */
    const queue = [];
    queue.push(root);
    while (queue.length > 0) {
        /**
         *
         * @type {number[]}
         */
        const level = [];
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            level.push(node.value);
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        levels.push(level);
    }
    return levels;
}

/**
 *
 * @param rootArray {number[][]}
 *
 *                13                        0 2^2
 *        50                60              1 2^1
 *    59        22        36        42      2 2^0
 *
 * 3-1 = 2
 *
 * len - 1;
 */
function displayRawTree(rootArray) {
    const length = rootArray.length - 1;
    for (let i = 0; i < rootArray.length; i++) {
        let row = "";
        const rowTabs = '\t'.repeat(Math.pow(2, length - i));
        for (let j = 0; j < rootArray[i].length; j++) {

            row += rowTabs + rootArray[i][j] + rowTabs;
        }
        console.log(row);
    }
}

function preOrderTraversal(root, level = 0) {
    if (root !== null) {
        console.log('-'.repeat(level * 5) + root.value);
        preOrderTraversal(root.left, level + 1);
        preOrderTraversal(root.right, level + 1);
    }
}

function inOrderTraversal(root, level = 0) {
    if (root !== null) {
        inOrderTraversal(root.left, level + 1);
        console.log('-'.repeat(level * 5) + root.value);
        inOrderTraversal(root.right, level + 1);
    }
}

function postOrderTraversal(root, level = 0) {
    if (root !== null) {
        postOrderTraversal(root.left, level + 1);
        postOrderTraversal(root.right, level + 1);
        console.log('-'.repeat(level * 5) + root.value);
    }
}


export function run() {

// Main program
    rl.question("Enter the number of nodes: ", function(nodes) {
        const n = parseInt(nodes);
        const root = buildBalancedTree(n);

        console.log("Pre-order traversal:");
        preOrderTraversal(root);

        console.log("In-order traversal:");
        inOrderTraversal(root);

        console.log("Post-order traversal:");
        postOrderTraversal(root);

        console.log('getTreeLevels')
        displayRawTree(getTreeLevels(root));
        rl.close();
    });

}
