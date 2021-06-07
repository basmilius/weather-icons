import { BaseJob } from "./BaseJob.js";

export class SvgJob extends BaseJob
{

	constructor(from, prefix = "")
	{
		super("svg", from, prefix);
	}

}
