export class BaseJob
{

	constructor(type, from, prefix)
	{
		this.type = type;
		this.from = from;
		this.prefix = prefix;
	}

	run()
	{
		console.error("Not implemented.");
	}

}
