export class Person {
    constructor() {
        this.name = '';
    }

    setName = (name) => {
        this.name = name;
    };

    getName = () => {
        return this.name;
    }
}