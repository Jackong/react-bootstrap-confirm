!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("alt"),require("react"),require("alt-connect"),require("es6-react-mixins"),require("react-bootstrap")):"function"==typeof define&&define.amd?define(["alt","react","alt-connect","es6-react-mixins","react-bootstrap"],t):"object"==typeof exports?exports.ReactBootstrapConfirm=t(require("alt"),require("react"),require("alt-connect"),require("es6-react-mixins"),require("react-bootstrap")):e.ReactBootstrapConfirm=t(e.alt,e.react,e["alt-connect"],e["es6-react-mixins"],e["react-bootstrap"])}(this,function(e,t,n,r,o){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),u=r(o),a=n(4),i=r(a);t["default"]={Actions:u["default"],Component:i["default"]},e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),i=r(a),l=function(){function e(){o(this,e)}return u(e,[{key:"show",value:function(e){var t=this;return new Promise(function(n,r){t.dispatch({message:e,resolve:n,reject:r})})}},{key:"cancel",value:function(){this.dispatch()}},{key:"sure",value:function(){this.dispatch()}}]),e}();t["default"]=i["default"].createActions(l),e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=r(o),a=new u["default"];t["default"]=a,e.exports=t["default"]},function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e,t,n){for(var r=!0;r;){var o=e,u=t,a=n;i=c=l=void 0,r=!1,null===o&&(o=Function.prototype);var i=Object.getOwnPropertyDescriptor(o,u);if(void 0!==i){if("value"in i)return i.value;var l=i.get;return void 0===l?void 0:l.call(a)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;e=c,t=u,n=a,r=!0}},l=n(5),c=r(l),s=n(6),f=r(s),d=n(7),p=r(d),v=n(8),b=n(9),y=r(b),h=n(1),m=r(h),x=function(e){function t(){o(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return u(t,e),a(t,[{key:"cancel",value:function(){return m["default"].cancel()}},{key:"show",value:function(e){return m["default"].show(e)}},{key:"render",value:function(){return c["default"].createElement(v.Modal,{"aria-labelledby":"contained-modal-title",bsSize:"small",container:this,onHide:this.cancel.bind(this),show:!!this.state.message},c["default"].createElement(v.Modal.Header,{closeButton:!0},c["default"].createElement(v.Modal.Title,null,this.props.title)),c["default"].createElement(v.Modal.Body,null,this.state.message),c["default"].createElement(v.Modal.Footer,null,c["default"].createElement(v.ButtonToolbar,null,c["default"].createElement(v.Button,{bsStyle:"info",onClick:m["default"].sure.bind(m["default"])},this.props.ok),c["default"].createElement(v.Button,{autoFocus:!0,bsStyle:"danger",onClick:this.cancel.bind(this)},this.props.ok))))}}]),t}(p["default"](f["default"](y["default"])));t["default"]=x,e.exports=t["default"]},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),i=r(a),l=n(1),c=r(l),s=function(){function e(){o(this,e),this.message=null,this.resolve=null,this.reject=null,this.bindActions(c["default"])}return u(e,[{key:"onSure",value:function(){this.resolve()}},{key:"onShow",value:function(e){this.message=e.message,this.resolve=e.resolve,this.reject=e.reject}},{key:"onCancel",value:function(){this.message=null,this.reject()}}]),e}();t["default"]=i["default"].createStore(s),e.exports=t["default"]}])});