(function (exports,ui_vue3,local_demo_components_vue,local_demo_components_bitrixvue) {
    'use strict';

    var Application = {
      data: function data() {
        return {
          showAsyncComponent: false
        };
      },
      components: {
        VueComponent: local_demo_components_vue.VueComponent,
        BitrixVueComponent: local_demo_components_bitrixvue.BitrixVueComponent,
        AsyncComponent: ui_vue3.BitrixVue.defineAsyncComponent('local.demo.components.async', 'AsyncComponent'),
        BitrixVueComponentMyExample: local_demo_components_bitrixvue.BitrixVueComponentMyExample
      },
      // language=Vue
      template: "\n\t\t<div class=\"demo-header\">{{$Bitrix.Loc.getMessage('DEMO_APPLICATION_TITLE')}}</div>\n\t\t<div>\n\t\t\t<span class=\"demo-block\">\n\t\t\t\t<VueComponent/>\n\t\t\t</span>\n\t\t\t<br/>\n\t\t\t<span class=\"demo-block\">\n\t\t\t\t<BitrixVueComponent/>\n\t\t\t</span>\n\t\t\t<br/>\n\t\t\t<span class=\"demo-block\">\n\t\t\t\t<button @click=\"showAsyncComponent = !showAsyncComponent\">{{$Bitrix.Loc.getMessage('DEMO_APPLICATION_ASYNC_TOGGLE')}}</button>: \n\t\t\t\t<AsyncComponent v-if=\"showAsyncComponent\"/>\n\t\t\t</span>\n            <br/>\n            <span class=\"demo-block\"><BitrixVueComponentMyExample/></span>\n\t\t</div>\n\t"
    };

    /**
     * Demo Loader
     *
     * @package demo
     * @subpackage local
     * @copyright 2001-2022 Bitrix
     */
    var DemoApplication = /*#__PURE__*/function () {
      function DemoApplication(rootNode) {
        babelHelpers.classCallCheck(this, DemoApplication);
        this.rootNode = document.querySelector(rootNode);
      }

      babelHelpers.createClass(DemoApplication, [{
        key: "run",
        value: function run() {
          ui_vue3.BitrixVue.createApp({
            name: 'Demo Application',
            components: {
              Application: Application
            },
            template: '<Application/>'
          }).mount(this.rootNode);
        }
      }]);
      return DemoApplication;
    }();

    exports.DemoApplication = DemoApplication;

}((this.BX = this.BX || {}),BX.Vue3,BX.Demo,BX.Demo));
//# sourceMappingURL=application.bundle.js.map
