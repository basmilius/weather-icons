import { BaseJob } from "./BaseJob.js";

export class PngJob extends BaseJob
{

	constructor(from, sizes, prefix = "")
	{
		super("png", from, prefix);

		this.sizes = sizes;
	}

}
