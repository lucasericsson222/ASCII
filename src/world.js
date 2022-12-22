import { ActiveEntity, Empty } from './Entity.js';
const N = 7;
const M = 18;
const W = 5;
export class World {
    static get N() {
        return N;
    }
    static get M() {
        return M;
    }
    constructor() {
        this.data = [];
        // initialize all data in world to empty entity that prints a space
        for (let i = 0; i < N; i++) {
            let inner_array = [];
            for (let j = 0; j < M; j++) {
                inner_array.push(new Empty());
            }
            this.data.push(inner_array);
        }
    }
    /*
    toHTML(): string
    body: loops through all the data points for the two dimensional world
        displays the levels, and combines into one string
    return: a string of html to be displayed
    */
    toHTML() {
        // output is an array containing each levels html
        let output = Array(W);
        // each level opens with a paragraph bracket
        for (let k = 0; k < W; k++) {
            output[k] = `<p id=world${k}>`;
        }
        // call each entity's display function
        for (let i = 0; i < N; i++) { // row number
            for (let j = 0; j < M; j++) { // column number
                for (let k = 0; k < W; k++) { // level number
                    let listValues = this.data[i][j].display();
                    if (listValues.length > k) {
                        output[k] += listValues[k];
                    }
                    else {
                        output[k] += new Empty().display()[0];
                    }
                }
            }
            // newline after each row
            for (let k = 0; k < W; k++) {
                output[k] += "<br/>";
            }
        }
        // each level ends with a paragraph bracket
        for (let k = 0; k < W; k++) {
            output[k] += "</p>";
        }
        // combine each level into one long html string to return
        let final = output[0];
        for (let k = 1; k < W; k++) {
            final += output[k];
        }
        return final;
    }
    addEntity(obj, x, y) {
        if (!(this.data[x][y] instanceof Empty)) {
            throw new Error("There is already a Entity there.");
        }
        if (obj instanceof ActiveEntity) {
            this.activeData.push(obj);
        }
        this.data[x][y] = obj;
        obj.setPosition(x, y);
    }
}
