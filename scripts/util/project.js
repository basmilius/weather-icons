const styles = ["fill", "line"];

export function eachStyle(fn)
{
	for (let style of styles)
	{
		fn(style);
	}
}

export async function eachStyleAsync(fn)
{
	for (let style of styles)
	{
		await fn(style);
	}
}
