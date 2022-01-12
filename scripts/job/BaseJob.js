import {clearDirectory, createDirectory, getFiles} from "../util/filesystem.js";

export class BaseJob {

    #cwd;
    #from;
    #prefix;
    #target;
    #type;

    get type() {
        return this.#type;
    }

    constructor(type, target, from, prefix) {
        this.#cwd = process.cwd();
        this.#from = from;
        this.#prefix = prefix;
        this.#target = target;
        this.#type = type;
    }

    async run() {
    }

    async runClearTarget() {
        await clearDirectory(`./production/${this.#target}`);
    }

    async runEnsureTarget(suffix = "") {
        await createDirectory(`./production/${this.#target}${suffix}`);
    }

    async getFromFiles() {
        return await getFiles(`./design/${this.#from}`);
    }

    getFromDirectory(suffix = "") {
        return `${this.#cwd}/design/${this.#from}${suffix}`;
    }

    getTargetDirectory(suffix = "") {
        return `${this.#cwd}/production/${this.#target}${suffix}`;
    }

    getFromFile(name, suffix = "") {
        return `${this.#cwd}/design/${this.#from}/${name}${suffix}`;
    }

    getTargetFile(name, suffix = "", prefix = "") {
        return `${this.#cwd}/production/${this.#target}${prefix}/${name.substr(this.#prefix.length)}${suffix}`;
    }

}
