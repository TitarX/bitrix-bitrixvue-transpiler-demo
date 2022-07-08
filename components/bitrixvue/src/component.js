export const BitrixVueComponent =
{
	data()
	{
		return {
			counter: 0
		}
	},
	computed:
	{
		buttonName()
		{
			return this.$Bitrix.Loc.getMessage('DEMO_BITRIXVUE_BUTTON_COUNTER', {'#COUNTER#': this.counter});
		}
	},
	// language=Vue
	template: `
		{{$Bitrix.Loc.getMessage('DEMO_BITRIXVUE_TITLE')}} <button @click="counter++">{{buttonName}}</button>
	`
};

export const BitrixVueComponentMyExample =
{
    // language=Vue
    template: `{{$Bitrix.Loc.getMessage('MY_EXAMPLE')}}`
};
