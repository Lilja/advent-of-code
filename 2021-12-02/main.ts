import * as fs from "fs";

function main(a: string, mode: "depth" | "aim") {
    const contents = fs.readFileSync(__dirname + "/" + a, {
        encoding: "utf8",
    });
    const records = contents.split("\n");
    if (mode == "depth") {
        return depthBreadth(records);
    } else {
        return aimAssist(records);
    }
}

function depthBreadth(records: string[]) {
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
        }
    });
    return depth * breadth;
}

function aimAssist(records: string[]) {
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
        }
    });
    return depth * horizontal;
}

console.log(main("part1exampleinput", "depth"));
console.log(main("part1input", "depth"));

console.log(main("part1exampleinput", "aim"));
console.log(main("part1input", "aim"));
