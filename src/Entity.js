export class Entity {
    constructor() {
        this.position = [0, 0];
    }
    setPosition(x, y) {
        this.position = [x, y];
    }
    getPosition() {
        return this.position;
    }
}
export class Empty extends Entity {
    display() {
        return ["&nbsp;"];
    }
}
export class ActiveEntity extends Entity {
}
