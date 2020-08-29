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
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx("label", {
    className: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, "Earnings -  ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 40
    }
  }, " ", earningCounter(), " "), " "), __jsx("form", {
    className: "main-form",
    onSubmit: handleEarningOnSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
      lineNumber: 107,
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
      lineNumber: 108,
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
      lineNumber: 109,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: "binary-button",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, "Insert")), __jsx("div", {
    className: "table-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "table table-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, "Timestamp"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, "Date"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, "Note"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, "Amount")), earnings.map(function (earning) {
    return __jsx(_Earning__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: earning._id,
      earning: earning,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 24
      }
    });
  }))), __jsx("div", {
    className: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, "Expenses - expenseCounter()"), __jsx("form", {
    className: "main-form",
    onSubmit: expenseOnSubmitHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
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
      lineNumber: 139,
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
      lineNumber: 140,
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
      lineNumber: 141,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: "binary-button",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, "Insert")), __jsx("div", {
    className: "table-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "table table-head",
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
  }, "Timestamp"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }, "Date"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 15
    }
  }, "Note"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }, "Amount")), expenses.map(function (expense) {
    return __jsx(_Expense__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: expense._id,
      expense: expense,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwidXNlU3RhdGUiLCJkYXRlIiwiYW1vdW50Iiwibm90ZSIsImVhcm5pbmciLCJzZXRFYXJuaW5nIiwiZXhwZW5zZSIsInNldEV4cGVuc2UiLCJlYXJuaW5ncyIsInNldEVhcm5pbmdzIiwiZXhwZW5zZXMiLCJzZXRFeHBlbnNlcyIsImNvdW50Iiwic2V0Q291bnQiLCJhdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwicHJvY2VzcyIsImhlYWRlcnMiLCJwYXNzY29kZSIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJlYXJuaW5nT25DaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRWFybmluZ09uU3VibWl0IiwicG9zdCIsInN1Y2Nlc3MiLCJNYXRoIiwicmFuZG9tIiwiZWFybmluZ0NvdW50ZXIiLCJ0b3RhbEVhcm5pbmciLCJpIiwibGVuZ3RoIiwib25DaGFuZ2VFeHBlbnNlIiwiZXhwZW5zZU9uU3VibWl0SGFuZGxlciIsInBhZGRpbmciLCJtYXAiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUdBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUVTQyxzREFBUSxDQUFDO0FBQUVDLFFBQUksRUFBRSxFQUFSO0FBQVlDLFVBQU0sRUFBRSxFQUFwQjtBQUF3QkMsUUFBSSxFQUFFO0FBQTlCLEdBQUQsQ0FGakI7QUFBQSxNQUVkQyxPQUZjO0FBQUEsTUFFTEMsVUFGSzs7QUFBQSxtQkFHU0wsc0RBQVEsQ0FBQztBQUFFQyxR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RUEsZUFBakI7QUFBa0MsYUFBUyxFQUFDLGdCQUE1QztBQUE2RCxRQUFJLEVBQUMsTUFBbEU7QUFBeUUsUUFBSSxFQUFDLE1BQTlFO0FBQXFGLGVBQVcsRUFBQyxZQUFqRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRTtBQUFRLGFBQVMsRUFBQyxlQUFsQjtBQUFrQyxRQUFJLEVBQUMsUUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLENBSkYsRUFXRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixDQURGLEVBVUlqQyxRQUFRLENBQUNvQyxHQUFULENBQWEsVUFBQXhDLE9BQU8sRUFBSTtBQUN0QixXQUFPLE1BQUMsZ0RBQUQ7QUFBUyxTQUFHLEVBQUVBLE9BQU8sQ0FBQ3lDLEdBQXRCO0FBQTJCLGFBQU8sRUFBRXpDLE9BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNELEdBRkQsQ0FWSixDQVhGLENBbENGLENBREYsQ0FERjtBQXNFRCxDQTFKRDs7R0FBTVIsRzs7S0FBQUEsRztBQTRKU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNThlNWQ3MmQ2NzBiNDg0MzkzMWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL2ltcG9ydGluZyBhbGwgY29tcG9uZW50c1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vTGF5b3V0JztcclxuaW1wb3J0IEVhcm5pbmcgZnJvbSAnLi9FYXJuaW5nJztcclxuaW1wb3J0IEV4cGVuc2UgZnJvbSAnLi9FeHBlbnNlJztcclxuXHJcbi8vaW1wb3J0aW5nIGNvbnRleHQgYXBpXHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC1hcGkvQXV0aENvbnRleHQnO1xyXG5cclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBBcHAgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgY29uc3QgW2Vhcm5pbmcsIHNldEVhcm5pbmddID0gdXNlU3RhdGUoeyBkYXRlOiBcIlwiLCBhbW91bnQ6IFwiXCIsIG5vdGU6IFwiXCIgfSk7XHJcbiAgY29uc3QgW2V4cGVuc2UsIHNldEV4cGVuc2VdID0gdXNlU3RhdGUoeyBkYXRlOiBcIlwiLCBhbW91bnQ6IFwiXCIsIG5vdGU6IFwiXCIgfSk7XHJcbiAgY29uc3QgW2Vhcm5pbmdzLCBzZXRFYXJuaW5nc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2V4cGVuc2VzLCBzZXRFeHBlbnNlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGF1dGhDb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcblxyXG4gIC8vdGhlIHVzZUVmZmVjdCBIb29rLi4uIEdldHRpbmcgRGF0YSBmcm9tIGJhY2tlbmQgYXBpc1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuc2VydmVyQXBpfS9hcGkvdjEvZ2V0LWVhcm5pbmdzYCwgeyBoZWFkZXJzOiB7IHBhc3Njb2RlOiBgJHthdXRoQ29udGV4dC5wYXNzY29kZX1gIH0gfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHNldEVhcm5pbmdzKHJlc3BvbnNlLmRhdGEuZWFybmluZ3MpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5zZXJ2ZXJBcGl9L2FwaS92MS9nZXQtZXhwZW5zZXNgLCB7IGhlYWRlcnM6IHsgcGFzc2NvZGU6IGAke2F1dGhDb250ZXh0LnBhc3Njb2RlfWAgfSB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgc2V0RXhwZW5zZXMocmVzcG9uc2UuZGF0YS5leHBlbnNlcyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtjb3VudF0pO1xyXG5cclxuICAvL2RlZmluaW5nIGVhcm5pbmdPbkNoYW5nZVxyXG4gIGNvbnN0IGVhcm5pbmdPbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0RWFybmluZyh7IC4uLmVhcm5pbmcsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhlYXJuaW5nKTtcclxuICB9XHJcblxyXG4gIC8vZGVmaW5pbmcgaGFuZGxlRWFybmluZ09uU3VibWl0XHJcbiAgY29uc3QgaGFuZGxlRWFybmluZ09uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LnNlcnZlckFwaX0vYXBpL3YxL3Bvc3QtZWFybmluZ2AsIGVhcm5pbmcsXHJcbiAgICAgIHsgaGVhZGVyczogeyAncGFzc2NvZGUnOiBgJHthdXRoQ29udGV4dC5wYXNzY29kZX1gIH0gfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYE9wZXJhdGlvbiBTdWNjZXNzZnVsbGApO1xyXG4gICAgICAgICAgc2V0Q291bnQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdoYW5kbGVFYXJuaW5nT25TdWJtaXQgVHJpZ2dlcmVkJyk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vZGVmaW5pbmcgZWFybmluZyBjb3VudGVyIGZ1bmN0aW9uXHJcbiAgY29uc3QgZWFybmluZ0NvdW50ZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgdG90YWxFYXJuaW5nID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVhcm5pbmdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRvdGFsRWFybmluZyA9IHRvdGFsRWFybmluZyArIGVhcm5pbmdzW2ldLmFtb3VudDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG90YWxFYXJuaW5nO1xyXG4gIH1cclxuXHJcbiAgLy9kZWZpbmluZyBvbkNoYW5nZUV4cGVuc2VcclxuICBjb25zdCBvbkNoYW5nZUV4cGVuc2UgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBzZXRFeHBlbnNlKHsgLi4uZXhwZW5zZSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgIGNvbnNvbGUubG9nKGV4cGVuc2UpO1xyXG4gIH1cclxuXHJcbiAgLy9kZWZpbmluZyBleHBlbnNlT25TdWJtaXRIYW5kbGVyXHJcbiAgY29uc3QgZXhwZW5zZU9uU3VibWl0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5zZXJ2ZXJBcGl9L2FwaS92MS9wb3N0LWV4cGVuc2VgLCBleHBlbnNlLFxyXG4gICAgICB7IGhlYWRlcnM6IHsgJ3Bhc3Njb2RlJzogYCR7YXV0aENvbnRleHQucGFzc2NvZGV9YCB9IH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgSW50ZXJuYWwgU2VydmVyIEVycm9yYCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBPcGVyYXRpb24gU3VjY2Vzc2Z1bGxgKTtcclxuICAgICAgICAgIHNldENvdW50KE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICBjb25zb2xlLmxvZygnaGFuZGxlRXhwZW5zZU9uU3VibWl0IFRyaWdnZXJlZCcpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU+RWFybmluZ3MgLSAgPHNwYW4+IHtlYXJuaW5nQ291bnRlcigpfSA8L3NwYW4+IDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgey8qIEVhcm5pbmcgRm9ybSAqL31cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1haW4tZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVFYXJuaW5nT25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2Vhcm5pbmdPbkNoYW5nZX0gc3R5bGU9e3sgcGFkZGluZzogJy40cmVtJyB9fSBjbGFzc05hbWU9XCJiaW5hcnktaW5wdXRcIiB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBEYXRlXCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtlYXJuaW5nT25DaGFuZ2V9IGNsYXNzTmFtZT1cImJpbmFyeS1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiYW1vdW50XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBBbW91bnRcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2Vhcm5pbmdPbkNoYW5nZX0gY2xhc3NOYW1lPVwiYmluYXJ5LWlucHV0LTJcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJub3RlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBOb3RlXCIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiaW5hcnktYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPkluc2VydDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgey8qIEVhcm5pbmcgVGFibGUgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+VGltZXN0YW1wPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkRhdGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+Tm90ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5BbW91bnQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIPCfjoggTG9vcGluZyBIZXJlIPCfjoggKi99XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBlYXJuaW5ncy5tYXAoZWFybmluZyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEVhcm5pbmcga2V5PXtlYXJuaW5nLl9pZH0gZWFybmluZz17ZWFybmluZ30gLz5cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG5cclxuICAgICAgICAgIDxsYWJlbD5FeHBlbnNlcyAtIGV4cGVuc2VDb3VudGVyKCk8L2xhYmVsPlxyXG4gICAgICAgICAgey8qIEVhcm5pbmcgRm9ybSAqL31cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1haW4tZm9ybVwiIG9uU3VibWl0PXtleHBlbnNlT25TdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtvbkNoYW5nZUV4cGVuc2V9IHN0eWxlPXt7IHBhZGRpbmc6ICcuNHJlbScgfX0gY2xhc3NOYW1lPVwiYmluYXJ5LWlucHV0XCIgdHlwZT1cImRhdGVcIiBuYW1lPVwiZGF0ZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgRGF0ZVwiIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17b25DaGFuZ2VFeHBlbnNlfSBjbGFzc05hbWU9XCJiaW5hcnktaW5wdXRcIiB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImFtb3VudFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQW1vdW50XCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtvbkNoYW5nZUV4cGVuc2V9IGNsYXNzTmFtZT1cImJpbmFyeS1pbnB1dC0yXCIgdHlwZT1cInRleHRcIiBuYW1lPVwibm90ZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgTm90ZVwiIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmluYXJ5LWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5JbnNlcnQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIHsvKiBFeHBlbnNlIFRhYmxlICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaGVhZFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlRpbWVzdGFtcDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5EYXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPk5vdGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+QW1vdW50PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiDwn46IIExvb3BpbmcgSGVyZSDwn46IICovfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZXhwZW5zZXMubWFwKGV4cGVuc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxFeHBlbnNlIGtleT17ZXhwZW5zZS5faWR9IGV4cGVuc2U9e2V4cGVuc2V9IC8+XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=