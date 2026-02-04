export class Calculation {
    constructor(
        readonly numA: number,
        readonly numB: number,
        readonly op: "+" | "-") {
    }

    get result() {
        return this.op === "+" ? this.numA + this.numB : this.numA - this.numB;
    }

    toString() {
        return `${this.numA} ${this.op} ${this.numB} = ${this.result}`;
    }
}
