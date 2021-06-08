import {BaseJob} from "./BaseJob.js";

export class FontJob extends BaseJob {

    constructor(target, from, types, prefix = "") {
        super("font", target, from, prefix);

        this.types = types;
    }

}
