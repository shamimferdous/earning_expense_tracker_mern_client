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
/* harmony import */ var _Expense__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Expense */ "./components/Expense.jsx");
/* harmony import */ var _context_api_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context-api/AuthContext */ "./context-api/AuthContext.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);


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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      expenses = _useState4[0],
      setExpenses = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      count = _useState5[0],
      setCount = _useState5[1];

  var authContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_api_AuthContext__WEBPACK_IMPORTED_MODULE_5__["AuthContext"]); //the useEffect Hook... Getting Data from backend apis

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("".concat("http://localhost:909", "/api/v1/get-earnings"), {
      headers: {
        passcode: "".concat(authContext.passcode)
      }
    }).then(function (response) {
      setEarnings(response.data.earnings);
    });
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("".concat("http://localhost:909", "/api/v1/get-expenses"), {
      headers: {
        passcode: "".concat(authContext.passcode)
      }
    }).then(function (response) {
      setExpenses(response.data.expenses);
    });
  }, [count]); //defining earningOnChange

  var earningOnChange = function earningOnChange(e) {
    e.preventDefault();
    setEarning(_objectSpread(_objectSpread({}, earning), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
    console.log(earning);
  }; //defining handleEarningOnSubmit


  var handleEarningOnSubmit = function handleEarningOnSubmit(e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("".concat("http://localhost:909", "/api/v1/post-earning"), earning, {
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
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("".concat("http://localhost:909", "/api/v1/post-expense"), expense, {
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
  }; //defining expense counter
  //defining earning counter function


  var expenseCounter = function expenseCounter() {
    var totalExpense = 0;

    for (var i = 0; i < expenses.length; i++) {
      totalExpense = totalExpense + expenses[i].amount;
    }

    return totalExpense;
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx("label", {
    className: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, "Earnings -  ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 40
    }
  }, " ", earningCounter(), " "), " "), __jsx("form", {
    className: "main-form",
    onSubmit: handleEarningOnSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
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
      lineNumber: 121,
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
      lineNumber: 122,
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
      lineNumber: 123,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: "binary-button",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, "Insert")), __jsx("div", {
    className: "table-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "table table-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }, "Timestamp"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, "Date"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  }, "Note"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }, "Amount")), earnings.map(function (earning) {
    return __jsx(_Earning__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: earning._id,
      earning: earning,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 24
      }
    });
  }))), __jsx("div", {
    className: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 11
    }
  }, "Expenses - ", expenseCounter()), __jsx("form", {
    className: "main-form",
    onSubmit: expenseOnSubmitHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
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
      lineNumber: 153,
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
      lineNumber: 154,
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
      lineNumber: 155,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: "binary-button",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }, "Insert")), __jsx("div", {
    className: "table-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "table table-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  }, "Timestamp"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  }, "Date"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 15
    }
  }, "Note"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 15
    }
  }, "Amount")), expenses.map(function (expense) {
    return __jsx(_Expense__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: expense._id,
      expense: expense,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 24
      }
    });
  })), __jsx("div", {
    className: "money-on-pocket",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 11
    }
  }))));
};

_s(App, "gXQ745aG9yD0iBXlgt7LRMvlJpM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwidXNlU3RhdGUiLCJkYXRlIiwiYW1vdW50Iiwibm90ZSIsImVhcm5pbmciLCJzZXRFYXJuaW5nIiwiZXhwZW5zZSIsInNldEV4cGVuc2UiLCJlYXJuaW5ncyIsInNldEVhcm5pbmdzIiwiZXhwZW5zZXMiLCJzZXRFeHBlbnNlcyIsImNvdW50Iiwic2V0Q291bnQiLCJhdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwicHJvY2VzcyIsImhlYWRlcnMiLCJwYXNzY29kZSIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJlYXJuaW5nT25DaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRWFybmluZ09uU3VibWl0IiwicG9zdCIsInN1Y2Nlc3MiLCJNYXRoIiwicmFuZG9tIiwiZWFybmluZ0NvdW50ZXIiLCJ0b3RhbEVhcm5pbmciLCJpIiwibGVuZ3RoIiwib25DaGFuZ2VFeHBlbnNlIiwiZXhwZW5zZU9uU3VibWl0SGFuZGxlciIsImV4cGVuc2VDb3VudGVyIiwidG90YWxFeHBlbnNlIiwicGFkZGluZyIsIm1hcCIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBR0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBRVNDLHNEQUFRLENBQUM7QUFBRUMsUUFBSSxFQUFFLEVBQVI7QUFBWUMsVUFBTSxFQUFFLEVBQXBCO0FBQXdCQyxRQUFJLEVBQUU7QUFBOUIsR0FBRCxDQUZqQjtBQUFBLE1BRWRDLE9BRmM7QUFBQSxNQUVMQyxVQUZL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MUMsT0FBTyxFQUFJO0FBQ3RCLFdBQU8sTUFBQyxnREFBRDtBQUFTLFNBQUcsRUFBRUEsT0FBTyxDQUFDMkMsR0FBdEI7QUFBMkIsYUFBTyxFQUFFM0MsT0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0QsR0FGRCxDQVZKLENBWEYsRUE4QkU7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlCRixDQWxDRixDQURGLENBREY7QUF5RUQsQ0EzS0Q7O0dBQU1SLEc7O0tBQUFBLEc7QUE2S1NBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI0N2ZmOTk1OWVlM2U3MDhlYjg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9pbXBvcnRpbmcgYWxsIGNvbXBvbmVudHNcclxuaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dCc7XHJcbmltcG9ydCBFYXJuaW5nIGZyb20gJy4vRWFybmluZyc7XHJcbmltcG9ydCBFeHBlbnNlIGZyb20gJy4vRXhwZW5zZSc7XHJcblxyXG4vL2ltcG9ydGluZyBjb250ZXh0IGFwaVxyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQtYXBpL0F1dGhDb250ZXh0JztcclxuXHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgQXBwID0gKHByb3BzKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtlYXJuaW5nLCBzZXRFYXJuaW5nXSA9IHVzZVN0YXRlKHsgZGF0ZTogXCJcIiwgYW1vdW50OiBcIlwiLCBub3RlOiBcIlwiIH0pO1xyXG4gIGNvbnN0IFtleHBlbnNlLCBzZXRFeHBlbnNlXSA9IHVzZVN0YXRlKHsgZGF0ZTogXCJcIiwgYW1vdW50OiBcIlwiLCBub3RlOiBcIlwiIH0pO1xyXG4gIGNvbnN0IFtlYXJuaW5ncywgc2V0RWFybmluZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtleHBlbnNlcywgc2V0RXhwZW5zZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBhdXRoQ29udGV4dCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG5cclxuICAvL3RoZSB1c2VFZmZlY3QgSG9vay4uLiBHZXR0aW5nIERhdGEgZnJvbSBiYWNrZW5kIGFwaXNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LnNlcnZlckFwaX0vYXBpL3YxL2dldC1lYXJuaW5nc2AsIHsgaGVhZGVyczogeyBwYXNzY29kZTogYCR7YXV0aENvbnRleHQucGFzc2NvZGV9YCB9IH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBzZXRFYXJuaW5ncyhyZXNwb25zZS5kYXRhLmVhcm5pbmdzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuc2VydmVyQXBpfS9hcGkvdjEvZ2V0LWV4cGVuc2VzYCwgeyBoZWFkZXJzOiB7IHBhc3Njb2RlOiBgJHthdXRoQ29udGV4dC5wYXNzY29kZX1gIH0gfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHNldEV4cGVuc2VzKHJlc3BvbnNlLmRhdGEuZXhwZW5zZXMpO1xyXG4gICAgICB9KTtcclxuICB9LCBbY291bnRdKTtcclxuXHJcbiAgLy9kZWZpbmluZyBlYXJuaW5nT25DaGFuZ2VcclxuICBjb25zdCBlYXJuaW5nT25DaGFuZ2UgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldEVhcm5pbmcoeyAuLi5lYXJuaW5nLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgY29uc29sZS5sb2coZWFybmluZyk7XHJcbiAgfVxyXG5cclxuICAvL2RlZmluaW5nIGhhbmRsZUVhcm5pbmdPblN1Ym1pdFxyXG4gIGNvbnN0IGhhbmRsZUVhcm5pbmdPblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5zZXJ2ZXJBcGl9L2FwaS92MS9wb3N0LWVhcm5pbmdgLCBlYXJuaW5nLFxyXG4gICAgICB7IGhlYWRlcnM6IHsgJ3Bhc3Njb2RlJzogYCR7YXV0aENvbnRleHQucGFzc2NvZGV9YCB9IH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgSW50ZXJuYWwgU2VydmVyIEVycm9yYCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBPcGVyYXRpb24gU3VjY2Vzc2Z1bGxgKTtcclxuICAgICAgICAgIHNldENvdW50KE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICBjb25zb2xlLmxvZygnaGFuZGxlRWFybmluZ09uU3VibWl0IFRyaWdnZXJlZCcpO1xyXG4gIH1cclxuXHJcbiAgLy9kZWZpbmluZyBlYXJuaW5nIGNvdW50ZXIgZnVuY3Rpb25cclxuICBjb25zdCBlYXJuaW5nQ291bnRlciA9ICgpID0+IHtcclxuICAgIGxldCB0b3RhbEVhcm5pbmcgPSAwO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWFybmluZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdG90YWxFYXJuaW5nID0gdG90YWxFYXJuaW5nICsgZWFybmluZ3NbaV0uYW1vdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b3RhbEVhcm5pbmc7XHJcbiAgfVxyXG5cclxuICAvL2RlZmluaW5nIG9uQ2hhbmdlRXhwZW5zZVxyXG4gIGNvbnN0IG9uQ2hhbmdlRXhwZW5zZSA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHNldEV4cGVuc2UoeyAuLi5leHBlbnNlLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgY29uc29sZS5sb2coZXhwZW5zZSk7XHJcbiAgfVxyXG5cclxuICAvL2RlZmluaW5nIGV4cGVuc2VPblN1Ym1pdEhhbmRsZXJcclxuICBjb25zdCBleHBlbnNlT25TdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LnNlcnZlckFwaX0vYXBpL3YxL3Bvc3QtZXhwZW5zZWAsIGV4cGVuc2UsXHJcbiAgICAgIHsgaGVhZGVyczogeyAncGFzc2NvZGUnOiBgJHthdXRoQ29udGV4dC5wYXNzY29kZX1gIH0gfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYE9wZXJhdGlvbiBTdWNjZXNzZnVsbGApO1xyXG4gICAgICAgICAgc2V0Q291bnQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdoYW5kbGVFeHBlbnNlT25TdWJtaXQgVHJpZ2dlcmVkJyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy9kZWZpbmluZyBleHBlbnNlIGNvdW50ZXJcclxuICAgIC8vZGVmaW5pbmcgZWFybmluZyBjb3VudGVyIGZ1bmN0aW9uXHJcbiAgICBjb25zdCBleHBlbnNlQ291bnRlciA9ICgpID0+IHtcclxuICAgICAgbGV0IHRvdGFsRXhwZW5zZSA9IDA7XHJcbiAgXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwZW5zZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0b3RhbEV4cGVuc2UgPSB0b3RhbEV4cGVuc2UgKyBleHBlbnNlc1tpXS5hbW91bnQ7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgcmV0dXJuIHRvdGFsRXhwZW5zZTtcclxuICAgIH1cclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU+RWFybmluZ3MgLSAgPHNwYW4+IHtlYXJuaW5nQ291bnRlcigpfSA8L3NwYW4+IDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgey8qIEVhcm5pbmcgRm9ybSAqL31cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1haW4tZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVFYXJuaW5nT25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2Vhcm5pbmdPbkNoYW5nZX0gc3R5bGU9e3sgcGFkZGluZzogJy40cmVtJyB9fSBjbGFzc05hbWU9XCJiaW5hcnktaW5wdXRcIiB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBEYXRlXCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtlYXJuaW5nT25DaGFuZ2V9IGNsYXNzTmFtZT1cImJpbmFyeS1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiYW1vdW50XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBBbW91bnRcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2Vhcm5pbmdPbkNoYW5nZX0gY2xhc3NOYW1lPVwiYmluYXJ5LWlucHV0LTJcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJub3RlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBOb3RlXCIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiaW5hcnktYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPkluc2VydDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgey8qIEVhcm5pbmcgVGFibGUgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+VGltZXN0YW1wPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkRhdGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+Tm90ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5BbW91bnQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIPCfjoggTG9vcGluZyBIZXJlIPCfjoggKi99XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBlYXJuaW5ncy5tYXAoZWFybmluZyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEVhcm5pbmcga2V5PXtlYXJuaW5nLl9pZH0gZWFybmluZz17ZWFybmluZ30gLz5cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG5cclxuICAgICAgICAgIDxsYWJlbD5FeHBlbnNlcyAtIHtleHBlbnNlQ291bnRlcigpfTwvbGFiZWw+XHJcbiAgICAgICAgICB7LyogRWFybmluZyBGb3JtICovfVxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibWFpbi1mb3JtXCIgb25TdWJtaXQ9e2V4cGVuc2VPblN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlRXhwZW5zZX0gc3R5bGU9e3sgcGFkZGluZzogJy40cmVtJyB9fSBjbGFzc05hbWU9XCJiaW5hcnktaW5wdXRcIiB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBEYXRlXCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtvbkNoYW5nZUV4cGVuc2V9IGNsYXNzTmFtZT1cImJpbmFyeS1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiYW1vdW50XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBBbW91bnRcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlRXhwZW5zZX0gY2xhc3NOYW1lPVwiYmluYXJ5LWlucHV0LTJcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJub3RlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBOb3RlXCIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiaW5hcnktYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPkluc2VydDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgey8qIEV4cGVuc2UgVGFibGUgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+VGltZXN0YW1wPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkRhdGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+Tm90ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5BbW91bnQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIPCfjoggTG9vcGluZyBIZXJlIPCfjoggKi99XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBleHBlbnNlcy5tYXAoZXhwZW5zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEV4cGVuc2Uga2V5PXtleHBlbnNlLl9pZH0gZXhwZW5zZT17ZXhwZW5zZX0gLz5cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiBNb25leSBvbiBIYW5kICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb25leS1vbi1wb2NrZXRcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=