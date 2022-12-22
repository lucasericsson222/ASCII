var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var N = 18;
var M = 7;
var W = 5;
var Entity = /** @class */ (function () {
    function Entity() {
    }
    return Entity;
}());
var Empty = /** @class */ (function (_super) {
    __extends(Empty, _super);
    function Empty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Empty.prototype.display = function () {
        return [" "];
    };
    return Empty;
}(Entity));
var World = /** @class */ (function () {
    function World() {
        this.data = [];
        // initialize all data in world to empty entity that prints a space
        for (var i = 0; i < N; i++) {
            var inner_array = [];
            for (var j = 0; j < M; j++) {
                inner_array.push(new Empty());
            }
            this.data.push(inner_array);
        }
    }
    Object.defineProperty(World, "N", {
        get: function () {
            return N;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(World, "M", {
        get: function () {
            return M;
        },
        enumerable: false,
        configurable: true
    });
    /*
    toHTML(): string
    body: loops through all the data points for the two dimensional world
        displays the levels, and combines into one string
    return: a string of html to be displayed
    */
    World.prototype.toHTML = function () {
        // output is an array containing each levels html
        var output = Array(W);
        // each level opens with a paragraph bracket
        for (var k = 0; k < W; k++) {
            output[k] = "<p id=world".concat(k, ">");
        }
        // call each entity's display function
        for (var i = 0; i < N; i++) { // row number
            for (var j = 0; j < M; j++) { // column number
                for (var k = 0; k < W; k++) { // level number
                    output[k] += this.data[i][j].display();
                }
            }
            // newline after each row
            for (var k = 0; k < W; k++) {
                output[k] += "&#10;";
            }
        }
        // each level ends with a paragraph bracket
        for (var k = 0; k < W; k++) {
            output[k] += "</p>";
        }
        // combine each level into one long html string to return
        var final = output[0];
        for (var k = 1; k < W; k++) {
            final += output[k];
        }
        return final;
    };
    return World;
}());
