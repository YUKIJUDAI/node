// 单项列链表
class LinkedList {
    head: Node;
    length = 0;

    append(data) {
        var node = new Node(data);
        if (this.length === 0) {
            this.head = node;
        } else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    insert(position, data) {
        if (position < 0 || position > this.length) return;
        var node = new Node(data);
        if (position === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            var index = 0;
            var current = this.head;
            var previous = null;
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            node.next = current;
            previous.next = node;
        }
        this.length++;
    }

    get(position) {
        if (position < 0 || position >= this.length) return null;

        var current = this.head;
        var index = 0;
        while (index++ < position) {
            current = current.next;
        }
        return current.data;
    }

    indexOf(data) {
        var current = this.head;
        var index = 0;
        while (current) {
            if ((current.data = data)) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    update(position, newData) {
        if (position < 0 || position >= this.length) return false;
        var current = this.head;
        var index = 0;
        while (index++ < position) {
            current = current.next;
        }
        current.data = newData;
        return true;
    }

    removeAt(position) {
        if (position < 0 || position >= this.length) return false;

        if (position === 0) {
            this.head = this.head.next;
        } else {
            var index = 0;
            var current = this.head;
            var previous = null;
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            this.length -= 1;
        }
    }

    remove(data) {
        var position = this.indexOf(data);
        this.removeAt(position);
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }
}

// 双向链表
class DoublyLinkList {
    head = null;
    tail = null;
    length = 0;

    append(data) {
        var node = new Node(data);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    insert(position, data) {
        if (position < 0 || position > this.length) return;
        var node = new Node(data);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.length++;
            return;
        }
        if (position === 0) {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        } else if (position === this.length) {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        } else {
            var index = 0;
            var current = this.head;
            var previous = null;
            var next = null;
            while (index++ < position) {
                previous = current;
                current = current.next;
                next = current.next;
            }
            node.prev = previous;
            node.next = current;
            previous.next = node;
            next.prev = node;
        }
        this.length++;
    }

    get(position) {
        if (position < 0 || position >= this.length) return null;

        var current = this.head;
        var index = 0;
        while (index++ < position) {
            current = current.next;
        }
        return current.data;
    }

    indexOf(data) {
        var current = this.head;
        var index = 0;
        while (current) {
            if ((current.data = data)) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    update(position, newData) {
        if (position < 0 || position >= this.length) return false;
        var current = this.head;
        var index = 0;
        while (index++ < position) {
            current = current.next;
        }
        current.data = newData;
        return true;
    }

    removeAt(position) {
        if (position < 0 || position >= this.length) return false;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return;
        }

        if (position === 0) {
            this.head.next.prev = null;
            this.head = this.head.next;
        } else if (position === this.length) {
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
        } else {
            var index = 0;
            var current = this.head;
            var previous = null;
            var next = null;
            while (index++ < position) {
                previous = current;
                current = current.next;
                next = current.next;
            }
            previous.next = next;
            next.prev = previous;
            this.length--;
        }
    }

    remove(data) {
        var position = this.indexOf(data);
        this.removeAt(position);
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }
}
