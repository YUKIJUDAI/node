// 集合
class Set {
    items = {};

    has(value) {
        return this.items.hasOwnProperty(value);
    }

    add(value) {
        if (this.has(value)) return;
        this.items[value] = value;
    }

    remove(value) {
        if (this.has(value)) {
            delete this.items[value];
        }
    }

    clear() {
        this.items = {};
    }

    size() {
        return Object.keys(this.items).length;
    }

    values() {
        return Object.keys(this.items);
    }

    union(otherSet) {
        var unionSet = new Set();
        var values = this.values();
        for (var index = 0; index < values.length; index++) {
            unionSet.add(values[index]);
        }
        values = otherSet.values();
        for (var index = 0; index < values.length; index++) {
            unionSet.add(values[index]);
        }
        return unionSet;
    }

    intersection(otherSet) {
        var intersectionSet = new Set();
        var values = this.values();
        for (var index = 0; index < values.length; index++) {
            if (otherSet.has(values[index])) {
                intersectionSet.add(values[index]);
            }
        }
        return intersectionSet;
    }

    difference(otherSet) {
        var differenceSet = new Set();
        var values = this.values();
        for (var index = 0; index < values.length; index++) {
            if (!otherSet.has(values[index])) {
                differenceSet.add(values[index]);
            }
        }
        return differenceSet;
    }

    subset(otherSet) {
        var subsetSet = new Set();
        var values = this.values();
        for (var index = 0; index < values.length; index++) {
            if (!otherSet.has(values[index])) {
                return false;
            }
        }
        return true;
    }
}