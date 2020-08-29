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
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, __jsx("label", {
    className: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, "Earnings -  ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 40
    }
  }, " ", earningCounter(), " "), " "), __jsx("form", {
    className: "main-form",
    onSubmit: handleEarningOnSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
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
      lineNumber: 106,
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
      lineNumber: 107,
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
      lineNumber: 108,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: "binary-button",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, "Insert")), __jsx("div", {
    className: "table-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "table table-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  }, "Timestamp"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, "Date"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, "Note"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, "Amount")), earnings.map(function (earning) {
    return __jsx(_Earning__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: earning._id,
      earning: earning,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 24
      }
    });
  }))), __jsx("div", {
    className: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, "Expenses"), __jsx("form", {
    className: "main-form",
    onSubmit: expenseOnSubmitHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
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
      lineNumber: 138,
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
      lineNumber: 139,
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
      lineNumber: 140,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: "binary-button",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, "Insert")), __jsx("div", {
    className: "table-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "table table-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, "Timestamp"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, "Date"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }, "Note"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 15
    }
  }, "Amount")), expenses.map(function (expense) {
    return __jsx(_Expense__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: expense._id,
      earning: expense,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 24
      }
    });
  })))));
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

/***/ }),

/***/ "./components/Expense.jsx":
/*!********************************!*\
  !*** ./components/Expense.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\B A T  M A C H I N E\\Dropbox\\Github\\Track-Earn-Ex__MERN-Stack\\client\\components\\Expense.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Expense = function Expense(_ref) {
  var expense = _ref.expense;
  return __jsx("div", {
    className: "table",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, " ", moment__WEBPACK_IMPORTED_MODULE_1___default()(expense.timestamp).format('MMMM D, YYYY'), " "), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, moment__WEBPACK_IMPORTED_MODULE_1___default()(expense.date).format('MMMM D, YYYY'), " "), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, expense.note), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, expense.amount, " BDT"));
};

_c = Expense;
/* harmony default export */ __webpack_exports__["default"] = (Expense);

var _c;

$RefreshReg$(_c, "Expense");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHAuanN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0V4cGVuc2UuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwidXNlU3RhdGUiLCJkYXRlIiwiYW1vdW50Iiwibm90ZSIsImVhcm5pbmciLCJzZXRFYXJuaW5nIiwiZXhwZW5zZSIsInNldEV4cGVuc2UiLCJlYXJuaW5ncyIsInNldEVhcm5pbmdzIiwiZXhwZW5zZXMiLCJzZXRFeHBlbnNlcyIsImNvdW50Iiwic2V0Q291bnQiLCJhdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwicHJvY2VzcyIsImhlYWRlcnMiLCJwYXNzY29kZSIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJlYXJuaW5nT25DaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRWFybmluZ09uU3VibWl0IiwicG9zdCIsInN1Y2Nlc3MiLCJNYXRoIiwicmFuZG9tIiwiZWFybmluZ0NvdW50ZXIiLCJ0b3RhbEVhcm5pbmciLCJpIiwibGVuZ3RoIiwib25DaGFuZ2VFeHBlbnNlIiwiZXhwZW5zZU9uU3VibWl0SGFuZGxlciIsInBhZGRpbmciLCJtYXAiLCJfaWQiLCJFeHBlbnNlIiwibW9tZW50IiwidGltZXN0YW1wIiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFHQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFFU0Msc0RBQVEsQ0FBQztBQUFFQyxRQUFJLEVBQUUsRUFBUjtBQUFZQyxVQUFNLEVBQUUsRUFBcEI7QUFBd0JDLFFBQUksRUFB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hLQTs7QUFFQSxJQUFNa0QsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBZTtBQUFBLE1BQWIxQyxPQUFhLFFBQWJBLE9BQWE7QUFDM0IsU0FDSTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVEyQyw2Q0FBTSxDQUFDM0MsT0FBTyxDQUFDNEMsU0FBVCxDQUFOLENBQTBCQyxNQUExQixDQUFpQyxjQUFqQyxDQUFSLE1BREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9GLDZDQUFNLENBQUMzQyxPQUFPLENBQUNMLElBQVQsQ0FBTixDQUFxQmtELE1BQXJCLENBQTRCLGNBQTVCLENBQVAsTUFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTzdDLE9BQU8sQ0FBQ0gsSUFBZixDQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPRyxPQUFPLENBQUNKLE1BQWYsU0FKSixDQURKO0FBUUgsQ0FURDs7S0FBTThDLE87QUFXU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOThhNDY5ZWU0ZDM0ZDY4YTExNzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL2ltcG9ydGluZyBhbGwgY29tcG9uZW50c1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vTGF5b3V0JztcclxuaW1wb3J0IEVhcm5pbmcgZnJvbSAnLi9FYXJuaW5nJztcclxuaW1wb3J0IEV4cGVuc2UgZnJvbSAnLi9FeHBlbnNlJztcclxuXHJcbi8vaW1wb3J0aW5nIGNvbnRleHQgYXBpXHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC1hcGkvQXV0aENvbnRleHQnO1xyXG5cclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBBcHAgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgY29uc3QgW2Vhcm5pbmcsIHNldEVhcm5pbmddID0gdXNlU3RhdGUoeyBkYXRlOiBcIlwiLCBhbW91bnQ6IFwiXCIsIG5vdGU6IFwiXCIgfSk7XHJcbiAgY29uc3QgW2V4cGVuc2UsIHNldEV4cGVuc2VdID0gdXNlU3RhdGUoeyBkYXRlOiBcIlwiLCBhbW91bnQ6IFwiXCIsIG5vdGU6IFwiXCIgfSk7XHJcbiAgY29uc3QgW2Vhcm5pbmdzLCBzZXRFYXJuaW5nc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2V4cGVuc2VzLCBzZXRFeHBlbnNlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGF1dGhDb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcblxyXG4gIC8vdGhlIHVzZUVmZmVjdCBIb29rLi4uIEdldHRpbmcgRGF0YSBmcm9tIGJhY2tlbmQgYXBpc1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuc2VydmVyQXBpfS9hcGkvdjEvZ2V0LWVhcm5pbmdzYCwgeyBoZWFkZXJzOiB7IHBhc3Njb2RlOiBgJHthdXRoQ29udGV4dC5wYXNzY29kZX1gIH0gfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHNldEVhcm5pbmdzKHJlc3BvbnNlLmRhdGEuZWFybmluZ3MpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5zZXJ2ZXJBcGl9L2FwaS92MS9nZXQtZXhwZW5zZXNgLCB7IGhlYWRlcnM6IHsgcGFzc2NvZGU6IGAke2F1dGhDb250ZXh0LnBhc3Njb2RlfWAgfSB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgc2V0RXhwZW5zZXMocmVzcG9uc2UuZGF0YS5leHBlbnNlcyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtjb3VudF0pO1xyXG5cclxuICAvL2RlZmluaW5nIGVhcm5pbmdPbkNoYW5nZVxyXG4gIGNvbnN0IGVhcm5pbmdPbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0RWFybmluZyh7IC4uLmVhcm5pbmcsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhlYXJuaW5nKTtcclxuICB9XHJcblxyXG4gIC8vZGVmaW5pbmcgaGFuZGxlRWFybmluZ09uU3VibWl0XHJcbiAgY29uc3QgaGFuZGxlRWFybmluZ09uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LnNlcnZlckFwaX0vYXBpL3YxL3Bvc3QtZWFybmluZ2AsIGVhcm5pbmcsXHJcbiAgICAgIHsgaGVhZGVyczogeyAncGFzc2NvZGUnOiBgJHthdXRoQ29udGV4dC5wYXNzY29kZX1gIH0gfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYE9wZXJhdGlvbiBTdWNjZXNzZnVsbGApO1xyXG4gICAgICAgICAgc2V0Q291bnQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdoYW5kbGVFYXJuaW5nT25TdWJtaXQgVHJpZ2dlcmVkJyk7XHJcbiAgfVxyXG4gIC8vZGVmaW5pbmcgZWFybmluZyBjb3VudGVyIGZ1bmN0aW9uXHJcbiAgY29uc3QgZWFybmluZ0NvdW50ZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgdG90YWxFYXJuaW5nID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVhcm5pbmdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRvdGFsRWFybmluZyA9IHRvdGFsRWFybmluZyArIGVhcm5pbmdzW2ldLmFtb3VudDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG90YWxFYXJuaW5nO1xyXG4gIH1cclxuXHJcbiAgLy9kZWZpbmluZyBvbkNoYW5nZUV4cGVuc2VcclxuICBjb25zdCBvbkNoYW5nZUV4cGVuc2UgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBzZXRFeHBlbnNlKHsgLi4uZXhwZW5zZSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgIGNvbnNvbGUubG9nKGV4cGVuc2UpO1xyXG4gIH1cclxuXHJcbiAgLy9kZWZpbmluZyBleHBlbnNlT25TdWJtaXRIYW5kbGVyXHJcbiAgY29uc3QgZXhwZW5zZU9uU3VibWl0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5zZXJ2ZXJBcGl9L2FwaS92MS9wb3N0LWV4cGVuc2VgLCBleHBlbnNlLFxyXG4gICAgICB7IGhlYWRlcnM6IHsgJ3Bhc3Njb2RlJzogYCR7YXV0aENvbnRleHQucGFzc2NvZGV9YCB9IH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgSW50ZXJuYWwgU2VydmVyIEVycm9yYCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBPcGVyYXRpb24gU3VjY2Vzc2Z1bGxgKTtcclxuICAgICAgICAgIHNldENvdW50KE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICBjb25zb2xlLmxvZygnaGFuZGxlRXhwZW5zZU9uU3VibWl0IFRyaWdnZXJlZCcpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU+RWFybmluZ3MgLSAgPHNwYW4+IHtlYXJuaW5nQ291bnRlcigpfSA8L3NwYW4+IDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgey8qIEVhcm5pbmcgRm9ybSAqL31cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1haW4tZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVFYXJuaW5nT25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2Vhcm5pbmdPbkNoYW5nZX0gc3R5bGU9e3sgcGFkZGluZzogJy40cmVtJyB9fSBjbGFzc05hbWU9XCJiaW5hcnktaW5wdXRcIiB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBEYXRlXCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtlYXJuaW5nT25DaGFuZ2V9IGNsYXNzTmFtZT1cImJpbmFyeS1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiYW1vdW50XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBBbW91bnRcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2Vhcm5pbmdPbkNoYW5nZX0gY2xhc3NOYW1lPVwiYmluYXJ5LWlucHV0LTJcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJub3RlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBOb3RlXCIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiaW5hcnktYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPkluc2VydDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgey8qIEVhcm5pbmcgVGFibGUgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+VGltZXN0YW1wPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkRhdGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+Tm90ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5BbW91bnQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIPCfjoggTG9vcGluZyBIZXJlIPCfjoggKi99XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBlYXJuaW5ncy5tYXAoZWFybmluZyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEVhcm5pbmcga2V5PXtlYXJuaW5nLl9pZH0gZWFybmluZz17ZWFybmluZ30gLz5cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG5cclxuICAgICAgICAgIDxsYWJlbD5FeHBlbnNlczwvbGFiZWw+XHJcbiAgICAgICAgICB7LyogRWFybmluZyBGb3JtICovfVxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibWFpbi1mb3JtXCIgb25TdWJtaXQ9e2V4cGVuc2VPblN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlRXhwZW5zZX0gc3R5bGU9e3sgcGFkZGluZzogJy40cmVtJyB9fSBjbGFzc05hbWU9XCJiaW5hcnktaW5wdXRcIiB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBEYXRlXCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtvbkNoYW5nZUV4cGVuc2V9IGNsYXNzTmFtZT1cImJpbmFyeS1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiYW1vdW50XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBBbW91bnRcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlRXhwZW5zZX0gY2xhc3NOYW1lPVwiYmluYXJ5LWlucHV0LTJcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJub3RlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBOb3RlXCIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiaW5hcnktYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPkluc2VydDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgey8qIEV4cGVuc2UgVGFibGUgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+VGltZXN0YW1wPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkRhdGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+Tm90ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5BbW91bnQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIPCfjoggTG9vcGluZyBIZXJlIPCfjoggKi99XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBleHBlbnNlcy5tYXAoZXhwZW5zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEV4cGVuc2Uga2V5PXtleHBlbnNlLl9pZH0gZWFybmluZz17ZXhwZW5zZX0gLz5cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG5cclxuIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuY29uc3QgRXhwZW5zZSA9ICh7ZXhwZW5zZX0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj4ge21vbWVudChleHBlbnNlLnRpbWVzdGFtcCkuZm9ybWF0KCdNTU1NIEQsIFlZWVknKX0gPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj57bW9tZW50KGV4cGVuc2UuZGF0ZSkuZm9ybWF0KCdNTU1NIEQsIFlZWVknKX0gPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj57ZXhwZW5zZS5ub3RlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+e2V4cGVuc2UuYW1vdW50fSBCRFQ8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBlbnNlOyJdLCJzb3VyY2VSb290IjoiIn0=