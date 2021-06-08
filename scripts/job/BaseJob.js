import {clearDirectory, createDirectory, getFiles} from "../util/filesystem.js";

export class BaseJob {

    constructor(type, target, from, prefix) {
        this.type = type;
        this.from = from;
        this.prefix = prefix;
        this.target = target;

        this.cwd = process.cwd();
    }

    async run() {
    }

    async runClearTarget() {
        await clearDirectory(`./production/${this.target}`);
    }

    async runEnsureTarget(suffix = "") {
        await createDirectory(`./production/${this.target}${suffix}`);
    }

    async getFromFiles() {
        return await getFiles(`./design/${this.from}`);
    }

    getFromFile(name, suffix = "") {
        return `${this.cwd}/design/${this.from}/${name}${suffix}`;
    }

    getTargetFile(name, suffix = "", prefix = "") {
        return `${this.cwd}/production/${this.target}${prefix}/${name.substr(this.prefix.length)}${suffix}`;
    }

}
