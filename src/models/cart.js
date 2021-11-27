export class Cart {
    constructor(items, total) {
        this.items = items;
        this.total = total;
    }
    constructor() {
        this.items = [];
        this.total = 0;
    }
}