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
/* harmony import */ var _context_api_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context-api/AuthContext */ "./context-api/AuthContext.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\B A T  M A C H I N E\\Dropbox\\Github\\Track-Earn-Ex__MERN-Stack\\client\\components\\App.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 //importing all components


 //importing context api




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
      setCount = _useState4[1];

  var authContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_api_AuthContext__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]); //the useEffect Hook... Getting Data from backend apis

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat("http://localhost:909", "/api/v1/get-earnings"), {
      headers: {
        passcode: "".concat(authContext.passcode)
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
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("".concat("http://localhost:909", "/api/v1/post-earning"), earning, {
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


  var expenseOnSubmitHandler = function expenseOnSubmitHandler(e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("".concat(authContext.passcode, "/api/v1/post-expense"), expense, {
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
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx("label", {
    className: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, "Earnings -  ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 40
    }
  }, " ", earningCounter(), " "), " "), __jsx("form", {
    className: "main-form",
    onSubmit: handleEarningOnSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
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
      lineNumber: 100,
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
      lineNumber: 101,
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
      lineNumber: 102,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: "binary-button",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, "Insert")), __jsx("div", {
    className: "table-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "table table-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 15
    }
  }, "Timestamp"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }, "Date"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, "Note"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }, "Amount")), earnings.map(function (earning) {
    return __jsx(_Earning__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: earning._id,
      earning: earning,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 24
      }
    });
  }))), __jsx("div", {
    className: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }, "Expenses"), __jsx("form", {
    className: "main-form",
    onSubmit: expenseOnSubmitHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
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
      lineNumber: 132,
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
      lineNumber: 133,
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
      lineNumber: 134,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: "binary-button",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, "Insert")), __jsx("div", {
    className: "table-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "table table-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  }, "Timestamp"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 15
    }
  }, "Date"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 15
    }
  }, "Note"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  }, "Amount")), __jsx("div", {
    className: "table",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, "22/4/2001"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }, "23/3/2003"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 15
    }
  }, "Welcome Amigo"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }, "56"))))));
};

_s(App, "y3UQrYtOMjv6kn+RzsVia0iWwRs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwidXNlU3RhdGUiLCJkYXRlIiwiYW1vdW50Iiwibm90ZSIsImVhcm5pbmciLCJzZXRFYXJuaW5nIiwiZXhwZW5zZSIsInNldEV4cGVuc2UiLCJlYXJuaW5ncyIsInNldEVhcm5pbmdzIiwiY291bnQiLCJzZXRDb3VudCIsImF1dGhDb250ZXh0IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwidXNlRWZmZWN0IiwiYXhpb3MiLCJnZXQiLCJwcm9jZXNzIiwiaGVhZGVycyIsInBhc3Njb2RlIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlYXJuaW5nT25DaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVFYXJuaW5nT25TdWJtaXQiLCJwb3N0Iiwic3VjY2VzcyIsIk1hdGgiLCJyYW5kb20iLCJlYXJuaW5nQ291bnRlciIsInRvdGFsRWFybmluZyIsImkiLCJsZW5ndGgiLCJvbkNoYW5nZUV4cGVuc2UiLCJleHBlbnNlT25TdWJtaXRIYW5kbGVyIiwicGFkZGluZyIsIm1hcCIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDQTtDQUdBOztBQUNBO0FBR0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBRVNDLHNEQUFRLENBQUM7QUFBRUMsUUFBSSxFQUFFLEVBQVI7QUFBWUMsVUFBTSxFQUFFLEVBQXBCO0FBQXdCQyxRQUFJLEVBQUU7QUFBOUIsR0FBRCxDQUZqQjtBQUFBLE1BRWRDLE9BRmM7QUFBQSxNQUVMQyxVQUZLOztBQUFBLG1CQUdTTCxzREFBUSxDQUFDO0FBQUVDLFFBQUksRUFBRSxFQUFSO0FBQVlDLFVBQU0sRUFBRSxF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QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsQ0FERixFQVFFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFKRixDQVJGLENBWEYsQ0FsQ0YsQ0FERixDQURGO0FBb0VELENBbEpEOztHQUFNM0MsRzs7S0FBQUEsRztBQW9KU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGEyM2NlMWFjNzgzMzdmYjY3NGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL2ltcG9ydGluZyBhbGwgY29tcG9uZW50c1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vTGF5b3V0JztcclxuaW1wb3J0IEVhcm5pbmcgZnJvbSAnLi9FYXJuaW5nJztcclxuXHJcbi8vaW1wb3J0aW5nIGNvbnRleHQgYXBpXHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC1hcGkvQXV0aENvbnRleHQnO1xyXG5cclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBBcHAgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgY29uc3QgW2Vhcm5pbmcsIHNldEVhcm5pbmddID0gdXNlU3RhdGUoeyBkYXRlOiBcIlwiLCBhbW91bnQ6IFwiXCIsIG5vdGU6IFwiXCIgfSk7XHJcbiAgY29uc3QgW2V4cGVuc2UsIHNldEV4cGVuc2VdID0gdXNlU3RhdGUoeyBkYXRlOiBcIlwiLCBhbW91bnQ6IFwiXCIsIG5vdGU6IFwiXCIgfSk7XHJcbiAgY29uc3QgW2Vhcm5pbmdzLCBzZXRFYXJuaW5nc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGF1dGhDb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcblxyXG4gIC8vdGhlIHVzZUVmZmVjdCBIb29rLi4uIEdldHRpbmcgRGF0YSBmcm9tIGJhY2tlbmQgYXBpc1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuc2VydmVyQXBpfS9hcGkvdjEvZ2V0LWVhcm5pbmdzYCwgeyBoZWFkZXJzOiB7IHBhc3Njb2RlOiBgJHthdXRoQ29udGV4dC5wYXNzY29kZX1gIH0gfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuZWFybmluZ3MpO1xyXG4gICAgICAgIHNldEVhcm5pbmdzKHJlc3BvbnNlLmRhdGEuZWFybmluZ3MpO1xyXG4gICAgICB9KVxyXG4gIH0sIFtjb3VudF0pO1xyXG5cclxuICAvL2RlZmluaW5nIGVhcm5pbmdPbkNoYW5nZVxyXG4gIGNvbnN0IGVhcm5pbmdPbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0RWFybmluZyh7IC4uLmVhcm5pbmcsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhlYXJuaW5nKTtcclxuICB9XHJcblxyXG4gIC8vZGVmaW5pbmcgaGFuZGxlRWFybmluZ09uU3VibWl0XHJcbiAgY29uc3QgaGFuZGxlRWFybmluZ09uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LnNlcnZlckFwaX0vYXBpL3YxL3Bvc3QtZWFybmluZ2AsIGVhcm5pbmcsXHJcbiAgICAgIHsgaGVhZGVyczogeyAncGFzc2NvZGUnOiBgJHthdXRoQ29udGV4dC5wYXNzY29kZX1gIH0gfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYE9wZXJhdGlvbiBTdWNjZXNzZnVsbGApO1xyXG4gICAgICAgICAgc2V0Q291bnQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdoYW5kbGVFYXJuaW5nT25TdWJtaXQgVHJpZ2dlcmVkJyk7XHJcbiAgfVxyXG4gIC8vZGVmaW5pbmcgZWFybmluZyBjb3VudGVyIGZ1bmN0aW9uXHJcbiAgY29uc3QgZWFybmluZ0NvdW50ZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgdG90YWxFYXJuaW5nID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVhcm5pbmdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRvdGFsRWFybmluZyA9IHRvdGFsRWFybmluZyArIGVhcm5pbmdzW2ldLmFtb3VudDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG90YWxFYXJuaW5nO1xyXG4gIH1cclxuXHJcbiAgLy9kZWZpbmluZyBvbkNoYW5nZUV4cGVuc2VcclxuICBjb25zdCBvbkNoYW5nZUV4cGVuc2UgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBzZXRFeHBlbnNlKHsgLi4uZXhwZW5zZSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgIGNvbnNvbGUubG9nKGV4cGVuc2UpO1xyXG4gIH1cclxuXHJcbiAgLy9kZWZpbmluZyBleHBlbnNlT25TdWJtaXRIYW5kbGVyXHJcbiAgY29uc3QgZXhwZW5zZU9uU3VibWl0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgYXhpb3MucG9zdChgJHthdXRoQ29udGV4dC5wYXNzY29kZX0vYXBpL3YxL3Bvc3QtZXhwZW5zZWAsIGV4cGVuc2UsXHJcbiAgICAgIHsgaGVhZGVyczogeyAncGFzc2NvZGUnOiBgJHthdXRoQ29udGV4dC5wYXNzY29kZX1gIH0gfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYE9wZXJhdGlvbiBTdWNjZXNzZnVsbGApO1xyXG4gICAgICAgICAgc2V0Q291bnQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdoYW5kbGVFeHBlbnNlT25TdWJtaXQgVHJpZ2dlcmVkJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcblxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT5FYXJuaW5ncyAtICA8c3Bhbj4ge2Vhcm5pbmdDb3VudGVyKCl9IDwvc3Bhbj4gPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICB7LyogRWFybmluZyBGb3JtICovfVxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibWFpbi1mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZUVhcm5pbmdPblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZWFybmluZ09uQ2hhbmdlfSBzdHlsZT17eyBwYWRkaW5nOiAnLjRyZW0nIH19IGNsYXNzTmFtZT1cImJpbmFyeS1pbnB1dFwiIHR5cGU9XCJkYXRlXCIgbmFtZT1cImRhdGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIERhdGVcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2Vhcm5pbmdPbkNoYW5nZX0gY2xhc3NOYW1lPVwiYmluYXJ5LWlucHV0XCIgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJhbW91bnRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEFtb3VudFwiIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZWFybmluZ09uQ2hhbmdlfSBjbGFzc05hbWU9XCJiaW5hcnktaW5wdXQtMlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5vdGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIE5vdGVcIiAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJpbmFyeS1idXR0b25cIiB0eXBlPVwic3VibWl0XCI+SW5zZXJ0PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICB7LyogRWFybmluZyBUYWJsZSAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhlYWRcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5UaW1lc3RhbXA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+RGF0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5Ob3RlPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkFtb3VudDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7Lyog8J+OiCBMb29waW5nIEhlcmUg8J+OiCAqL31cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGVhcm5pbmdzLm1hcChlYXJuaW5nID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8RWFybmluZyBrZXk9e2Vhcm5pbmcuX2lkfSBlYXJuaW5nPXtlYXJuaW5nfSAvPlxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcblxyXG4gICAgICAgICAgPGxhYmVsPkV4cGVuc2VzPC9sYWJlbD5cclxuICAgICAgICAgIHsvKiBFYXJuaW5nIEZvcm0gKi99XHJcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtYWluLWZvcm1cIiBvblN1Ym1pdD17ZXhwZW5zZU9uU3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17b25DaGFuZ2VFeHBlbnNlfSBzdHlsZT17eyBwYWRkaW5nOiAnLjRyZW0nIH19IGNsYXNzTmFtZT1cImJpbmFyeS1pbnB1dFwiIHR5cGU9XCJkYXRlXCIgbmFtZT1cImRhdGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIERhdGVcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlRXhwZW5zZX0gY2xhc3NOYW1lPVwiYmluYXJ5LWlucHV0XCIgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJhbW91bnRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEFtb3VudFwiIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17b25DaGFuZ2VFeHBlbnNlfSBjbGFzc05hbWU9XCJiaW5hcnktaW5wdXQtMlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5vdGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIE5vdGVcIiAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJpbmFyeS1idXR0b25cIiB0eXBlPVwic3VibWl0XCI+SW5zZXJ0PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICB7LyogRXhwZW5zZSBUYWJsZSAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhlYWRcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5UaW1lc3RhbXA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+RGF0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5Ob3RlPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkFtb3VudDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+MjIvNC8yMDAxPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPjIzLzMvMjAwMzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5XZWxjb21lIEFtaWdvPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPjU2PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==