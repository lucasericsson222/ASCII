import { Wall } from "./wall.js";
import { World } from "./world.js";

let currentWorld = new World();

let newWall = new Wall();

currentWorld.addEntity(newWall, 1 ,1);

console.log(currentWorld.toHTML());