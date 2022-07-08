this.BX = this.BX || {};
(function (exports) {
	'use strict';

	var BitrixVueComponent = {
	  data: function data() {
	    return {
	      counter: 0
	    };
	  },
	  computed: {
	    buttonName: function buttonName() {
	      return this.$Bitrix.Loc.getMessage('DEMO_BITRIXVUE_BUTTON_COUNTER', {
	        '#COUNTER#': this.counter
	      });
	    }
	  },
	  // language=Vue
	  template: "\n\t\t{{$Bitrix.Loc.getMessage('DEMO_BITRIXVUE_TITLE')}} <button @click=\"counter++\">{{buttonName}}</button>\n\t"
	};
	var BitrixVueComponentMyExample = {
	  // language=Vue
	  template: "{{$Bitrix.Loc.getMessage('MY_EXAMPLE')}}"
	};

	exports.BitrixVueComponent = BitrixVueComponent;
	exports.BitrixVueComponentMyExample = BitrixVueComponentMyExample;

}((this.BX.Demo = this.BX.Demo || {})));
//# sourceMappingURL=component.bundle.js.map
