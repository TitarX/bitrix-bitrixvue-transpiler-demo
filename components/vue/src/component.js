export const VueComponent =
{
	data()
	{
		return {
			counter: 0
		}
	},
	created()
	{
		setInterval(() => this.counter++, 1000);
	},
	// language=Vue
	template: `
		{{$Bitrix.Loc.getMessage('DEMO_VUE_TITLE', {'#COUNTER#': this.counter})}}
	`
};