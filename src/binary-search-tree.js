const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {

    rootNode = null;

    root() {
        return this.rootNode;
    }

    add(data) {
        this.addInternal(new Node(data))
    }

    addInternal(insertNode) {
        if (this.rootNode === null) {
            this.rootNode = insertNode;
            return;
        }

        this.insertOrFind(this.rootNode, insertNode);
    }

    insertOrFind(node, insertNode) {
        const data = insertNode.data;
        if (data > node.data) {
            if (node.right === null) {
                node.right = insertNode;
            } else {
                this.insertOrFind(node.right, insertNode);
            }
        } else {
            if (node.left === null) {
                node.left = insertNode;
            } else {
                this.insertOrFind(node.left, insertNode);
            }
        }
    }

    has(data) {
        return this.find(data) !== null;
    }

    find(data) {
        return this.findNode(this.rootNode, data);
    }

    findNode(node, data) {
        if (node === null) {
            return null;
        }
        if (data === node.data) {
            return node;
        }
        if (data > node.data) {
            return this.findNode(node.right, data);
        } else {
            return this.findNode(node.left, data);
        }
    }

    remove(data) {
        const result = this.findNodeToRemove(this.rootNode, data, null);
        if (result === null) return;

        const {node, parent} = result;

        const left = node.left;
        const right = node.right;

        if (parent === null) {
            this.rootNode = null;
        }
        else {
            if (parent.left === node) {
                parent.left = null;
            } else if (parent.right === node) {
                parent.right = null;
            }
        }

        if (left !== null) {
            this.addInternal(left)
        }
        if (right !== null) {
            this.addInternal(right);
        }
    }

    findNodeToRemove(node, data, parent) {
        if (node === null) {
            return null;
        }

        if (data === node.data) {
            return {node, parent};
        }

        if (data > node.data) {
            return this.findNodeToRemove(node.right, data, node);
        } else {
            return this.findNodeToRemove(node.left, data, node);
        }
    }

    min() {
        if (!this.rootNode) {
            return null;
        }

        let currentNode = this.rootNode;
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }

        return currentNode.data;
    }

    max() {
        if (!this.rootNode) {
            return null;
        }

        let currentNode = this.rootNode;
        while (currentNode.right !== null) {
            currentNode = currentNode.right;
        }

        return currentNode.data;
    }
}

module.exports = {
    BinarySearchTree
};
