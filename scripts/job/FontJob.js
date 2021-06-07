import { BaseJob } from "./BaseJob.js";

export class FontJob extends BaseJob
{

	constructor(from, types, prefix = "")
	{
		super("font", from, prefix);

		this.types = types;
	}

}
