webpackHotUpdate_N_E("pages/index",{

/***/ "./components/App.jsx":
/*!****************************!*\
  !*** ./components/App.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ "./components/Layout.jsx");
/* harmony import */ var _Earning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Earning */ "./components/Earning.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\B A T  M A C H I N E\\Dropbox\\Github\\Track-Earn-Ex__MERN-Stack\\client\\components\\App.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 //importing all components





var App = function App(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    date: "",
    amount: "",
    note: ""
  }),
      earning = _useState[0],
      setEarning = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    date: "",
    amount: "",
    note: ""
  }),
      expense = _useState2[0],
      setExpense = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      earnings = _useState3[0],
      setEarnings = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      count = _useState4[0],
      setCount = _useState4[1]; //the useEffect Hook... Getting Data from backend apis


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat("http://localhost:909", "/api/v1/get-earnings"), {
      headers: {
        passcode: "".concat("devpass")
      }
    }).then(function (response) {
      console.log(response.data.earnings);
      setEarnings(response.data.earnings);
    });
  }, [count]); //defining earningOnChange

  var earningOnChange = function earningOnChange(e) {
    e.preventDefault();
    setEarning(_objectSpread(_objectSpread({}, earning), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
    console.log(earning);
  }; //defining handleEarningOnSubmit


  var handleEarningOnSubmit = function handleEarningOnSubmit(e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(authContext.passcode, "/api/v1/post-earning"), earning, {
      headers: {
        'passcode': "".concat(authContext.passcode)
      }
    }).then(function (response) {
      if (response.data.success === false) {
        console.log("Internal Server Error");
      } else {
        console.log("Operation Successfull");
        setCount(Math.random());
      }
    });
    console.log('handleEarningOnSubmit Triggered');
  }; //defining earning counter function


  var earningCounter = function earningCounter() {
    var totalEarning = 0;

    for (var i = 0; i < earnings.length; i++) {
      totalEarning = totalEarning + earnings[i].amount;
    }

    return totalEarning;
  }; //defining onChangeExpense


  var onChangeExpense = function onChangeExpense(e) {
    e.preventDefault();
    setExpense(_objectSpread(_objectSpread({}, expense), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
    console.log(expense);
  }; //defining expenseOnSubmitHandler


  var expenseOnSubmitHandler = function expenseOnSubmitHandler() {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(authContext.passcode, "/api/v1/post-earning"), expense, {
      headers: {
        'passcode': "".concat(authContext.passcode)
      }
    }).then(function (response) {
      if (response.data.success === false) {
        console.log("Internal Server Error");
      } else {
        console.log("Operation Successfull");
        setCount(Math.random());
      }
    });
    console.log('handleExpenseOnSubmit Triggered');
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx("label", {
    className: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, "Earnings -  ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 40
    }
  }, " ", earningCounter(), " "), " "), __jsx("form", {
    className: "main-form",
    onSubmit: handleEarningOnSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, __jsx("input", {
    onChange: earningOnChange,
    style: {
      padding: '.4rem'
    },
    className: "binary-input",
    type: "date",
    name: "date",
    placeholder: "Enter Date",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }), __jsx("input", {
    onChange: earningOnChange,
    className: "binary-input",
    type: "number",
    name: "amount",
    placeholder: "Enter Amount",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }), __jsx("input", {
    onChange: earningOnChange,
    className: "binary-input-2",
    type: "text",
    name: "note",
    placeholder: "Enter Note",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: "binary-button",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, "Insert")), __jsx("div", {
    className: "table-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "table table-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }, "Timestamp"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, "Date"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }, "Note"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }, "Amount")), earnings.map(function (earning) {
    return __jsx(_Earning__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: earning._id,
      earning: earning,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 24
      }
    });
  }))), __jsx("div", {
    className: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, "Expenses"), __jsx("form", {
    className: "main-form",
    onSubmit: expenseOnSubmitHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, __jsx("input", {
    onChange: onChangeExpense,
    style: {
      padding: '.4rem'
    },
    className: "binary-input",
    type: "date",
    name: "date",
    placeholder: "Enter Date",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }), __jsx("input", {
    onChange: onChangeExpense,
    className: "binary-input",
    type: "number",
    name: "amount",
    placeholder: "Enter Amount",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }), __jsx("input", {
    onChange: onChangeExpense,
    className: "binary-input-2",
    type: "text",
    name: "note",
    placeholder: "Enter Note",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: "binary-button",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, "Insert")), __jsx("div", {
    className: "table-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "table table-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, "Timestamp"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, "Date"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }, "Note"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, "Amount")), __jsx("div", {
    className: "table",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 15
    }
  }, "22/4/2001"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  }, "23/3/2003"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }, "Welcome Amigo"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }, "56"))))));
};

_s(App, "tpuk4z1iLvCVNjzOIauxvhrO5+U=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwidXNlU3RhdGUiLCJkYXRlIiwiYW1vdW50Iiwibm90ZSIsImVhcm5pbmciLCJzZXRFYXJuaW5nIiwiZXhwZW5zZSIsInNldEV4cGVuc2UiLCJlYXJuaW5ncyIsInNldEVhcm5pbmdzIiwiY291bnQiLCJzZXRDb3VudCIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwicHJvY2VzcyIsImhlYWRlcnMiLCJwYXNzY29kZSIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZWFybmluZ09uQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlRWFybmluZ09uU3VibWl0IiwicG9zdCIsImF1dGhDb250ZXh0Iiwic3VjY2VzcyIsIk1hdGgiLCJyYW5kb20iLCJlYXJuaW5nQ291bnRlciIsInRvdGFsRWFybmluZyIsImkiLCJsZW5ndGgiLCJvbkNoYW5nZUV4cGVuc2UiLCJleHBlbnNlT25TdWJtaXRIYW5kbGVyIiwicGFkZGluZyIsIm1hcCIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBO0FBQ0E7QUFHQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFFU0Msc0RBQVEsQ0FBQztBQUFFQyxRQUFJLEVBQUUsRUFBUjtBQUFZQyxVQUFNLEVBQUUsRUFBcEI7QUFBd0JDLFFBQUksRUFBRTtBQUE5QixHQUFELENBRmpCO0FBQUEsTUFFZEMsT0FGYztBQUFBLE1BRUxDLFVBRks7O0FBQUEsbUJBR1NMLHNEQUFRLENBQUM7QUFBRUMsUUFBSSxFQUFFLEVBQVI7QUFBWUMsVUFBTSxFQUFFLEVBQXBCO0FBQXdCQyxRQUFJLEVBQUU7QUFBOUIsR0FBRCxD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QUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixDQURGLEVBUUU7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUpGLENBUkYsQ0FYRixDQWxDRixDQURGLENBREY7QUFvRUQsQ0FoSkQ7O0dBQU16QyxHOztLQUFBQSxHO0FBa0pTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NGY2NTU2Nzg5YzFlMWE4NDM5Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vaW1wb3J0aW5nIGFsbCBjb21wb25lbnRzXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQnO1xyXG5pbXBvcnQgRWFybmluZyBmcm9tICcuL0Vhcm5pbmcnO1xyXG5cclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBBcHAgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgY29uc3QgW2Vhcm5pbmcsIHNldEVhcm5pbmddID0gdXNlU3RhdGUoeyBkYXRlOiBcIlwiLCBhbW91bnQ6IFwiXCIsIG5vdGU6IFwiXCIgfSk7XHJcbiAgY29uc3QgW2V4cGVuc2UsIHNldEV4cGVuc2VdID0gdXNlU3RhdGUoeyBkYXRlOiBcIlwiLCBhbW91bnQ6IFwiXCIsIG5vdGU6IFwiXCIgfSk7XHJcbiAgY29uc3QgW2Vhcm5pbmdzLCBzZXRFYXJuaW5nc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIC8vdGhlIHVzZUVmZmVjdCBIb29rLi4uIEdldHRpbmcgRGF0YSBmcm9tIGJhY2tlbmQgYXBpc1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuc2VydmVyQXBpfS9hcGkvdjEvZ2V0LWVhcm5pbmdzYCwgeyBoZWFkZXJzOiB7IHBhc3Njb2RlOiBgJHtwcm9jZXNzLmVudi5wYXNzY29kZX1gIH0gfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuZWFybmluZ3MpO1xyXG4gICAgICAgIHNldEVhcm5pbmdzKHJlc3BvbnNlLmRhdGEuZWFybmluZ3MpO1xyXG4gICAgICB9KVxyXG4gIH0sIFtjb3VudF0pO1xyXG5cclxuICAvL2RlZmluaW5nIGVhcm5pbmdPbkNoYW5nZVxyXG4gIGNvbnN0IGVhcm5pbmdPbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0RWFybmluZyh7IC4uLmVhcm5pbmcsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhlYXJuaW5nKTtcclxuICB9XHJcblxyXG4gIC8vZGVmaW5pbmcgaGFuZGxlRWFybmluZ09uU3VibWl0XHJcbiAgY29uc3QgaGFuZGxlRWFybmluZ09uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBheGlvcy5wb3N0KGAke2F1dGhDb250ZXh0LnBhc3Njb2RlfS9hcGkvdjEvcG9zdC1lYXJuaW5nYCwgZWFybmluZyxcclxuICAgICAgeyBoZWFkZXJzOiB7ICdwYXNzY29kZSc6IGAke2F1dGhDb250ZXh0LnBhc3Njb2RlfWAgfSB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYEludGVybmFsIFNlcnZlciBFcnJvcmApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgT3BlcmF0aW9uIFN1Y2Nlc3NmdWxsYCk7XHJcbiAgICAgICAgICBzZXRDb3VudChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgY29uc29sZS5sb2coJ2hhbmRsZUVhcm5pbmdPblN1Ym1pdCBUcmlnZ2VyZWQnKTtcclxuICB9XHJcbiAgLy9kZWZpbmluZyBlYXJuaW5nIGNvdW50ZXIgZnVuY3Rpb25cclxuICBjb25zdCBlYXJuaW5nQ291bnRlciA9ICgpID0+IHtcclxuICAgIGxldCB0b3RhbEVhcm5pbmcgPSAwO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWFybmluZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdG90YWxFYXJuaW5nID0gdG90YWxFYXJuaW5nICsgZWFybmluZ3NbaV0uYW1vdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b3RhbEVhcm5pbmc7XHJcbiAgfVxyXG5cclxuICAvL2RlZmluaW5nIG9uQ2hhbmdlRXhwZW5zZVxyXG4gIGNvbnN0IG9uQ2hhbmdlRXhwZW5zZSA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHNldEV4cGVuc2UoeyAuLi5leHBlbnNlLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgY29uc29sZS5sb2coZXhwZW5zZSk7XHJcbiAgfVxyXG5cclxuICAvL2RlZmluaW5nIGV4cGVuc2VPblN1Ym1pdEhhbmRsZXJcclxuICBjb25zdCBleHBlbnNlT25TdWJtaXRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGF4aW9zLnBvc3QoYCR7YXV0aENvbnRleHQucGFzc2NvZGV9L2FwaS92MS9wb3N0LWVhcm5pbmdgLCBleHBlbnNlLFxyXG4gICAgICB7IGhlYWRlcnM6IHsgJ3Bhc3Njb2RlJzogYCR7YXV0aENvbnRleHQucGFzc2NvZGV9YCB9IH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgSW50ZXJuYWwgU2VydmVyIEVycm9yYCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBPcGVyYXRpb24gU3VjY2Vzc2Z1bGxgKTtcclxuICAgICAgICAgIHNldENvdW50KE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICBjb25zb2xlLmxvZygnaGFuZGxlRXhwZW5zZU9uU3VibWl0IFRyaWdnZXJlZCcpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU+RWFybmluZ3MgLSAgPHNwYW4+IHtlYXJuaW5nQ291bnRlcigpfSA8L3NwYW4+IDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgey8qIEVhcm5pbmcgRm9ybSAqL31cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1haW4tZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVFYXJuaW5nT25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2Vhcm5pbmdPbkNoYW5nZX0gc3R5bGU9e3sgcGFkZGluZzogJy40cmVtJyB9fSBjbGFzc05hbWU9XCJiaW5hcnktaW5wdXRcIiB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBEYXRlXCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtlYXJuaW5nT25DaGFuZ2V9IGNsYXNzTmFtZT1cImJpbmFyeS1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiYW1vdW50XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBBbW91bnRcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2Vhcm5pbmdPbkNoYW5nZX0gY2xhc3NOYW1lPVwiYmluYXJ5LWlucHV0LTJcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJub3RlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBOb3RlXCIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiaW5hcnktYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPkluc2VydDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgey8qIEVhcm5pbmcgVGFibGUgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+VGltZXN0YW1wPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkRhdGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+Tm90ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5BbW91bnQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIPCfjoggTG9vcGluZyBIZXJlIPCfjoggKi99XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBlYXJuaW5ncy5tYXAoZWFybmluZyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEVhcm5pbmcga2V5PXtlYXJuaW5nLl9pZH0gZWFybmluZz17ZWFybmluZ30gLz5cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG5cclxuICAgICAgICAgIDxsYWJlbD5FeHBlbnNlczwvbGFiZWw+XHJcbiAgICAgICAgICB7LyogRWFybmluZyBGb3JtICovfVxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibWFpbi1mb3JtXCIgb25TdWJtaXQ9e2V4cGVuc2VPblN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlRXhwZW5zZX0gc3R5bGU9e3sgcGFkZGluZzogJy40cmVtJyB9fSBjbGFzc05hbWU9XCJiaW5hcnktaW5wdXRcIiB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBEYXRlXCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtvbkNoYW5nZUV4cGVuc2V9IGNsYXNzTmFtZT1cImJpbmFyeS1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiYW1vdW50XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBBbW91bnRcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlRXhwZW5zZX0gY2xhc3NOYW1lPVwiYmluYXJ5LWlucHV0LTJcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJub3RlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBOb3RlXCIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiaW5hcnktYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPkluc2VydDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgey8qIEV4cGVuc2UgVGFibGUgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+VGltZXN0YW1wPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkRhdGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+Tm90ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5BbW91bnQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPjIyLzQvMjAwMTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj4yMy8zLzIwMDM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+V2VsY29tZSBBbWlnbzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj41Njwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=