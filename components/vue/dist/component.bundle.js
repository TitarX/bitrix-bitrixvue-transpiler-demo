this.BX = this.BX || {};
(function (exports) {
	'use strict';

	var VueComponent = {
	  data: function data() {
	    return {
	      counter: 0
	    };
	  },
	  created: function created() {
	    var _this = this;

	    setInterval(function () {
	      return _this.counter++;
	    }, 1000);
	  },
	  // language=Vue
	  template: "\n\t\t{{$Bitrix.Loc.getMessage('DEMO_VUE_TITLE', {'#COUNTER#': this.counter})}}\n\t"
	};

	exports.VueComponent = VueComponent;

}((this.BX.Demo = this.BX.Demo || {})));
//# sourceMappingURL=component.bundle.js.map
