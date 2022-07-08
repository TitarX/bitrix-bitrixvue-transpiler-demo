import "./application.css";
import {BitrixVue} from "ui.vue3";
import {VueComponent} from "local.demo.components.vue";
import {BitrixVueComponent} from "local.demo.components.bitrixvue";
import {BitrixVueComponentMyExample} from "local.demo.components.bitrixvue";

export const Application =
{
	data()
	{
		return {
			showAsyncComponent: false
		}
	},
	components: {
		VueComponent,
		BitrixVueComponent,
		AsyncComponent: BitrixVue.defineAsyncComponent('local.demo.components.async', 'AsyncComponent'),
        BitrixVueComponentMyExample
	},
	// language=Vue
	template: `
		<div class="demo-header">{{$Bitrix.Loc.getMessage('DEMO_APPLICATION_TITLE')}}</div>
		<div>
			<span class="demo-block">
				<VueComponent/>
			</span>
			<br/>
			<span class="demo-block">
				<BitrixVueComponent/>
			</span>
			<br/>
			<span class="demo-block">
				<button @click="showAsyncComponent = !showAsyncComponent">{{$Bitrix.Loc.getMessage('DEMO_APPLICATION_ASYNC_TOGGLE')}}</button>: 
				<AsyncComponent v-if="showAsyncComponent"/>
			</span>
            <br/>
            <span class="demo-block"><BitrixVueComponentMyExample/></span>
		</div>
	`
};