"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
function main(a, mode) {
    const contents = fs.readFileSync(__dirname + "/" + a, {
        encoding: "utf8",
    });
    const records = contents.split("\n");
    if (mode == "depth") {
        return depthBreadth(records);
    }
    else {
        return aimAssist(records);
    }
}
function depthBreadth(records) {
    let depth = 0;
    let breadth = 0;
    records.forEach((p) => {
        if (!p) {
            return;
        }
        const [head, val] = p.split(" ");
        switch (head.trim()) {
            case "forward":
                breadth = breadth + parseInt(val);
                break;
            case "up":
                depth = depth - parseInt(val);
                break;
            case "down":
                depth = depth + parseInt(val);
                break;
            default:
                throw new Error(`'${head}'`);
                break;
        }
    });
    return depth * breadth;
}
function aimAssist(records) {
    let depth = 0;
    let horizontal = 0;
    let aim = 0;
    records.forEach((p) => {
        if (!p) {
            return;
        }
        const [head, val] = p.split(" ");
        switch (head.trim()) {
            case "forward":
                horizontal = horizontal + parseInt(val);
                depth = depth + aim * parseInt(val);
                break;
            case "up":
                aim = aim - parseInt(val);
                break;
            case "down":
                aim = aim + parseInt(val);
                break;
            default:
                throw new Error(`'${head}'`);
                break;
        }
    });
    console.log("aim", depth, horizontal, aim);
    return depth * horizontal;
}
// console.log(main("part1exampleinput", "depth"));
// console.log(main("part1input", "depth"));
console.log(main("part1exampleinput", "aim"));
console.log(main("part1input", "aim"));
