// 队列
class Queue {
    items: Element[] = [];

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

class QueueElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
    element?: Element;
    priority: number;
}

// 优先级队列
class PriorityQueue {
    items: QueueElement[] = [];

    enqueue(element, priority) {
        var queueElement = new QueueElement(element, priority);
        if (this.items.length === 0) {
            this.items.push(queueElement);
        } else {
            var flag = false;
            for (var index = 0; index < this.items.length; index++) {
                if (queueElement.priority < this.items[index].priority) {
                    this.items.splice(index, 0, queueElement);
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                this.items.push(queueElement);
            }
        }
    }
    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}
