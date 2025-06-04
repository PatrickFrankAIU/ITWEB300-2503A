class Counter {
    count = 0;
    increment() {
        this.count++;
    }

    getCount() {
        return this.count;
    }
}

const count = new Counter();

console.log(count.getCount());
count.increment();
console.log(count.getCount());
