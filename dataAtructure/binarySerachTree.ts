// 二叉搜索数
class BinarySerachTree {
    root = null;

    insert(key) {
        var node = new Node(key);
        if (this.root === null) {
            this.root = node;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // 先序遍历
    preOrderTraversal(callback) {
        this.preOrderTraversalNode(this.node, callback);
    }
    preOrderTraversalNode(node, callback) {
        if (node !== null) {
            callback(node.key);
            this.preOrderTraversalNode(node.left, callback);
            this.preOrderTraversalNode(node.right, callback);
        }
    }

    min() {
        var node = this.root;
        var key = node.key;
        while (node !== null) {
            key = node.key;
            node = node.left;
        }
        return key;
    }

    max() {
        var node = this.root;
        var key = node.key;
        while (node != null) {
            key = node.key;
            node = node.right;
        }
        return key;
    }

    seach(key) {
        var node = this.root;
        while (node !== null) {
            if (key < node.key) {
                node = node.left;
            } else if (key > node.key) {
                node = node.right;
            } else {
                return true;
            }
        }
        return false;
    }

    remove(key) {
        var current = this.root;
        var parent = null;
        var isLeftChild = true;

        while (current.key !== key) {
            parent = current;
            if (key < current.key) {
                isLeftChild = true;
                current = current.left;
            } else {
                isLeftChild = false;
                current = current.right;
            }
            if (current === null) return false;
        }

        if (current.left === null && current.right = null) {
            if (current === this.root) {
                this.root = null;
            } else {
                isLeftChild ? parent.left = null : parent.right = null;
            }
        } else if (current.right === null || current.left === null) {
            if (current === this.root) {
                this.root = isLeftChild ? current.left : current.right;
            } else {
                isLeftChild ? parent.left = null : parent.right = null;
            }
        } else {
            var successor = this.getSuccessor(current);
            if (current === this.root) {
                this.root = successor;
            } else if (isLeftChild) {
                parent.left = successor;
            } else {
                parent.right = successor;
            }

            successor.left = current.left;
        }

    }
    getSuccessor(delNode) {
        var successor = delNode;
        var current = delNode.right;
        var successorParent = delNode;

        while (current !== null) {
            successorParent = successor;
            successor = current;
            current = current.left;
        }

        if (successor !== delNode.right) {
            successorParent.left = successor.right;
            successor.right = delNode.right;
        }

        return successor;
    }

}