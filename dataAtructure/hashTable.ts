// 哈希表
class HashTable {
    storage = [];
    count = 0;
    limit = 7;

    hashFunc(str, size) {
        var hashCode = 0;
        for (var i = 0; i < str.length; i++) {
            hashCode = 37 * hashCode + str.charCodeAt(i);
        }
        return hashCode % size;
    }

    isPrime(num) {
        var temp = +Math.sqrt(num);
        for (var i = 0; i <= temp; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    put(key, value) {
        var index = this.hashFunc(key, this.limit);
        var bucket = this.storage[index];
        if (bucket === null) {
            bucket = [];
            this.storage[index] = bucket;
        }
        for (let i = 0; i < bucket.length; i++) {
            var item = bucket[i];
            if (item[0] === key) {
                item[1] = value;
                return;
            }
        }
        bucket.push([key, value]);
        this.count++;

        if (this.count > this.limit * 0.75) {
            var newPrime = new getPrime(this.limit * 2);
            this.resize(newPrime);
        }
    }

    get(key) {
        var index = this.hashFunc(key, this.limit);
        var bucket = this.storage[index];
        if (bucket === null) {
            return null;
        }
        for (let i = 0; i < bucket.length; i++) {
            var item = bucket[i];
            if (item[0] === key) {
                return item[1];
            }
        }
        return null;
    }

    remove(key) {
        var index = this.hashFunc(key, this.limit);
        var bucket = this.storage[index];
        if (bucket === null) {
            return;
        }
        for (let i = 0; i < bucket.length; i++) {
            var item = bucket[i];
            if (item[0] === key) {
                bucket.splice(i, 1);
                this.count--;
                if (this.limit > 7 && this.count < this.limit * 0.25
                    var newPrime = new getPrime(~~(this.limit / 2));
                this.resize(newPrime);
            }
            return;
        }
    }

    isEmpty() {
        return this.count === 0;
    }

    size() {
        return this.count;
    }

    resize(newLimt) {
        var oldStorage = this.storage;
        this.storage = [];
        this.count = 0;
        this.limit = newLimt;

        for (var i = 0; i < oldStorage.length; i++) {
            var bucket = oldStorage[i];
            if (bucket === null) {
                continue;
            }
            for (var j = 0; j < bucket.length; j++) {
                var item = bucket[j];
                this.put(item[0], item[1]);
            }
        }
    }

    getPrime(num) {
        while (!this.isPrime(num)) {
            num++;
        }
        return num;
    }
}