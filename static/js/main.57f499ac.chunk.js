(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,function(e,t,_){"use strict";_.d(t,"b",(function(){return r})),_.d(t,"a",(function(){return c})),_.d(t,"c",(function(){return a}));var r=function(e){var t=new RegExp(/^(\+|\*|\/)|(\+|-|\*|\/)$/,"g"),_=new RegExp(/\./,"g"),r=e.match(t),c=e.match(_);return null===r||0===r.length&&(!(c.length>=2)||void 0)};function c(e){var t=e.split("");return t.pop(),t.join("")}function a(e,t){return null!==e.match(t)}},function(e,t,_){"use strict";_.d(t,"b",(function(){return r})),_.d(t,"c",(function(){return c})),_.d(t,"a",(function(){return a}));var r=function(e){return{type:"operatorAction",keyName:e}},c=function(e){return{type:"resultAction",data:e}},a=function(e){return{type:"isCalAble",operator:e}}},,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_PadItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(11),_KeyList__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(12),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);function Pad(){var operatorStr=Object(react_redux__WEBPACK_IMPORTED_MODULE_1__.c)((function(e){return e.operator})),calStatus=Object(react_redux__WEBPACK_IMPORTED_MODULE_1__.c)((function(e){return e.isCalAble})),dispatch=Object(react_redux__WEBPACK_IMPORTED_MODULE_1__.b)();Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){console.log(operatorStr),dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__.a)(operatorStr))}),[operatorStr]);var PadItems=function PadItems(){return _KeyList__WEBPACK_IMPORTED_MODULE_4__.a.map((function(e){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_PadItem__WEBPACK_IMPORTED_MODULE_3__.a,{id:"AC"===e?"clear":"+"===e?"add":"-"===e?"subtract":"*"===e?"multiply":"/"===e?"divide":"."===e?"decimal":"="===e?"equals":"<"===e?"key-back":"0"===e?"zero":"1"===e?"one":"2"===e?"two":"3"===e?"three":"4"===e?"four":"5"===e?"five":"6"===e?"six":"7"===e?"seven":"8"===e?"eight":"9"===e?"nine":"key-".concat(e),style:{background:"#9bc8ca"},symbol:e,onClick:function onClick(){return"="===e?calStatus&&dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__.b)(e))&&dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__.c)(eval(operatorStr))):dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__.b)(e))}},e)}))};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"grid grid-cols-4 gap-1",children:PadItems()})}__webpack_exports__.a=Pad},function(e,t,_){"use strict";_(0);var r=_(1);t.a=function(e){return Object(r.jsx)("div",{id:e.id,className:"bg-cyan-600 text-white cursor-pointer aspect-w-2 aspect-h-1",style:e.style,onClick:e.onClick,children:Object(r.jsx)("div",{className:"flex justify-center items-center font-bold text-2xl",children:e.symbol})})}},function(e,t,_){"use strict";_.d(t,"a",(function(){return r}));var r=["AC","<","+","7","8","9","-","4","5","6","*","1","2","3","/","0",".","="]},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return operatorReducer}));var _functions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),operatorReducer=function operatorReducer(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0",action=arguments.length>1?arguments[1]:void 0;switch(action.type){case"operatorAction":switch(action.keyName){case"AC":return"0";case"<":return 1===state.length?"0":Object(_functions__WEBPACK_IMPORTED_MODULE_0__.a)(state);case"+":case"-":case"*":case"/":var regexOperator1=new RegExp(/(\*|\/)-(\+|-|\*|\/)/,"g"),regexOperator2=new RegExp(/(\+(\+|-|\*|\/))|(-((-)|(\+)|(\*)|(\/)))|(\*(\+|\*|\/))|(\/(\+|\*|\/))/,"g"),oldState=state,newState=state.concat(action.keyName),newerState=Object(_functions__WEBPACK_IMPORTED_MODULE_0__.a)(state).concat(action.keyName);return Object(_functions__WEBPACK_IMPORTED_MODULE_0__.c)(newState,regexOperator1)?oldState:Object(_functions__WEBPACK_IMPORTED_MODULE_0__.c)(newState,regexOperator2)?newerState:newState;case".":var regexDecimal=new RegExp(/(^\.)|[0-9]\.\.|([0-9]\.[0-9]\.)/,"g"),regexDecimalTest=state.concat(".").match(regexDecimal);return null!==regexDecimalTest?state:"0"===state?action.keyName:state.concat(action.keyName);case"0":return"0"===state?state:state.concat(action.keyName);case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return"0"===state?action.keyName:state.concat(action.keyName);case"=":return eval(state).toString();default:return state}default:return state}}},,,,,function(e,t,_){},,,,,,function(e,t,_){"use strict";_.r(t);var r=_(0),c=_.n(r),a=_(5),n=_.n(a),o=(_(18),_(2)),s=_(1);function i(){var e=Object(o.c)((function(e){return e.operator}));return Object(s.jsx)("div",{id:"display",style:{color:"#9bc8ca"},className:"flex flex-wrap text-lg h-10",children:Object(s.jsx)("span",{className:"block w-full overflow-scroll scrollbar--removed",children:e})})}function u(){var e=Object(o.c)((function(e){return e.result}));return Object(s.jsx)("span",{className:"text-4xl font-bold text-gray-800 h-16",children:Object(s.jsx)("span",{className:"block w-full overflow-scroll scrollbar--removed",children:e})})}var l=function(){return Object(s.jsxs)("div",{className:"flex flex-col bg-white text-right font-bold font-mono px-4 py-8",children:[Object(s.jsx)(i,{}),Object(s.jsx)(u,{})]})},O=_(10);var E=function(){return Object(s.jsx)(c.a.Fragment,{children:Object(s.jsx)("div",{className:"w-full p-4",children:Object(s.jsxs)("div",{className:"rounded-lg overflow-hidden",children:[Object(s.jsx)(l,{}),Object(s.jsx)(O.a,{})]})})})};var d=function(){return Object(s.jsx)(E,{})},b=_(13),p=_(3),f=_(6),j=Object(f.a)({operator:b.a,result:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"resultAction":return void 0!==t.data&&t.data;default:return e}},isCalAble:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"isCalAble":return!!Object(p.b)(t.operator);default:return e}}}),D=Object(f.b)(j,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n.a.render(Object(s.jsx)(o.a,{store:D,children:Object(s.jsx)(d,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.57f499ac.chunk.js.map