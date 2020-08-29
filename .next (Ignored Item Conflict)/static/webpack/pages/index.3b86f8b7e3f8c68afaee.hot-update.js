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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      expenses = _useState4[0],
      setExpenses = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      count = _useState5[0],
      setCount = _useState5[1];

  var authContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_api_AuthContext__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]); //the useEffect Hook... Getting Data from backend apis

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat("http://localhost:909", "/api/v1/get-earnings"), {
      headers: {
        passcode: "".concat(authContext.passcode)
      }
    }).then(function (response) {
      setEarnings(response.data.earnings);
    });
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat("http://localhost:909", "/api/v1/get-expenses"), {
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
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("".concat("http://localhost:909", "/api/v1/post-expense"), expense, {
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
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx("label", {
    className: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, "Earnings -  ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 40
    }
  }, " ", earningCounter(), " "), " "), __jsx("form", {
    className: "main-form",
    onSubmit: handleEarningOnSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
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
      lineNumber: 105,
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
      lineNumber: 106,
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
      lineNumber: 107,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: "binary-button",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, "Insert")), __jsx("div", {
    className: "table-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "table table-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, "Timestamp"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  }, "Date"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, "Note"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, "Amount")), earnings.map(function (earning) {
    return __jsx(_Earning__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: earning._id,
      earning: earning,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 24
      }
    });
  }))), __jsx("div", {
    className: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, "Expenses"), __jsx("form", {
    className: "main-form",
    onSubmit: expenseOnSubmitHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
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
      lineNumber: 137,
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
      lineNumber: 138,
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
      lineNumber: 139,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: "binary-button",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }, "Insert")), __jsx("div", {
    className: "table-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "table table-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }, "Timestamp"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, "Date"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, "Note"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }, "Amount")), expenses.map(function (expense) {
    return __jsx(Expense, {
      key: expense._id,
      earning: expense,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwidXNlU3RhdGUiLCJkYXRlIiwiYW1vdW50Iiwibm90ZSIsImVhcm5pbmciLCJzZXRFYXJuaW5nIiwiZXhwZW5zZSIsInNldEV4cGVuc2UiLCJlYXJuaW5ncyIsInNldEVhcm5pbmdzIiwiZXhwZW5zZXMiLCJzZXRFeHBlbnNlcyIsImNvdW50Iiwic2V0Q291bnQiLCJhdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwicHJvY2VzcyIsImhlYWRlcnMiLCJwYXNzY29kZSIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJlYXJuaW5nT25DaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRWFybmluZ09uU3VibWl0IiwicG9zdCIsInN1Y2Nlc3MiLCJNYXRoIiwicmFuZG9tIiwiZWFybmluZ0NvdW50ZXIiLCJ0b3RhbEVhcm5pbmciLCJpIiwibGVuZ3RoIiwib25DaGFuZ2VFeHBlbnNlIiwiZXhwZW5zZU9uU3VibWl0SGFuZGxlciIsInBhZGRpbmciLCJtYXAiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ0E7Q0FHQTs7QUFDQTtBQUdBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUVTQyxzREFBUSxDQUFDO0FBQUVDLFFBQUksRUFBRSxFQUFSO0FBQVlDLFVBQU0sRUFBRSxFQUFwQjtBQUF3QkMsUUFBSSxFQUFFO0FBQTlCLEdBQUQsQ0FGakI7QUFBQSxNQUVkQyxPQUZjO0FBQUEsTUFFTEMsVUFGSzs7QUFBQSxtQkFHU0wsc0RBQVEsQ0FBQztBQUFFQyxRQUFJLEVB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akI7QUFBa0MsYUFBUyxFQUFDLGdCQUE1QztBQUE2RCxRQUFJLEVBQUMsTUFBbEU7QUFBeUUsUUFBSSxFQUFDLE1BQTlFO0FBQXFGLGVBQVcsRUFBQyxZQUFqRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRTtBQUFRLGFBQVMsRUFBQyxlQUFsQjtBQUFrQyxRQUFJLEVBQUMsUUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLENBSkYsRUFXRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixDQURGLEVBVUlqQyxRQUFRLENBQUNvQyxHQUFULENBQWEsVUFBQXhDLE9BQU8sRUFBSTtBQUN0QixXQUFPLE1BQUMsT0FBRDtBQUFTLFNBQUcsRUFBRUEsT0FBTyxDQUFDeUMsR0FBdEI7QUFBMkIsYUFBTyxFQUFFekMsT0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0QsR0FGRCxDQVZKLENBWEYsQ0FsQ0YsQ0FERixDQURGO0FBc0VELENBekpEOztHQUFNUixHOztLQUFBQSxHO0FBMkpTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zYjg2ZjhiN2UzZjhjNjhhZmFlZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vaW1wb3J0aW5nIGFsbCBjb21wb25lbnRzXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQnO1xyXG5pbXBvcnQgRWFybmluZyBmcm9tICcuL0Vhcm5pbmcnO1xyXG5cclxuLy9pbXBvcnRpbmcgY29udGV4dCBhcGlcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0LWFwaS9BdXRoQ29udGV4dCc7XHJcblxyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IEFwcCA9IChwcm9wcykgPT4ge1xyXG5cclxuICBjb25zdCBbZWFybmluZywgc2V0RWFybmluZ10gPSB1c2VTdGF0ZSh7IGRhdGU6IFwiXCIsIGFtb3VudDogXCJcIiwgbm90ZTogXCJcIiB9KTtcclxuICBjb25zdCBbZXhwZW5zZSwgc2V0RXhwZW5zZV0gPSB1c2VTdGF0ZSh7IGRhdGU6IFwiXCIsIGFtb3VudDogXCJcIiwgbm90ZTogXCJcIiB9KTtcclxuICBjb25zdCBbZWFybmluZ3MsIHNldEVhcm5pbmdzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZXhwZW5zZXMsIHNldEV4cGVuc2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgYXV0aENvbnRleHQgPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuXHJcbiAgLy90aGUgdXNlRWZmZWN0IEhvb2suLi4gR2V0dGluZyBEYXRhIGZyb20gYmFja2VuZCBhcGlzXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5zZXJ2ZXJBcGl9L2FwaS92MS9nZXQtZWFybmluZ3NgLCB7IGhlYWRlcnM6IHsgcGFzc2NvZGU6IGAke2F1dGhDb250ZXh0LnBhc3Njb2RlfWAgfSB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgc2V0RWFybmluZ3MocmVzcG9uc2UuZGF0YS5lYXJuaW5ncyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LnNlcnZlckFwaX0vYXBpL3YxL2dldC1leHBlbnNlc2AsIHsgaGVhZGVyczogeyBwYXNzY29kZTogYCR7YXV0aENvbnRleHQucGFzc2NvZGV9YCB9IH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBzZXRFeHBlbnNlcyhyZXNwb25zZS5kYXRhLmV4cGVuc2VzKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW2NvdW50XSk7XHJcblxyXG4gIC8vZGVmaW5pbmcgZWFybmluZ09uQ2hhbmdlXHJcbiAgY29uc3QgZWFybmluZ09uQ2hhbmdlID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRFYXJuaW5nKHsgLi4uZWFybmluZywgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgIGNvbnNvbGUubG9nKGVhcm5pbmcpO1xyXG4gIH1cclxuXHJcbiAgLy9kZWZpbmluZyBoYW5kbGVFYXJuaW5nT25TdWJtaXRcclxuICBjb25zdCBoYW5kbGVFYXJuaW5nT25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuc2VydmVyQXBpfS9hcGkvdjEvcG9zdC1lYXJuaW5nYCwgZWFybmluZyxcclxuICAgICAgeyBoZWFkZXJzOiB7ICdwYXNzY29kZSc6IGAke2F1dGhDb250ZXh0LnBhc3Njb2RlfWAgfSB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYEludGVybmFsIFNlcnZlciBFcnJvcmApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgT3BlcmF0aW9uIFN1Y2Nlc3NmdWxsYCk7XHJcbiAgICAgICAgICBzZXRDb3VudChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgY29uc29sZS5sb2coJ2hhbmRsZUVhcm5pbmdPblN1Ym1pdCBUcmlnZ2VyZWQnKTtcclxuICB9XHJcbiAgLy9kZWZpbmluZyBlYXJuaW5nIGNvdW50ZXIgZnVuY3Rpb25cclxuICBjb25zdCBlYXJuaW5nQ291bnRlciA9ICgpID0+IHtcclxuICAgIGxldCB0b3RhbEVhcm5pbmcgPSAwO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWFybmluZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdG90YWxFYXJuaW5nID0gdG90YWxFYXJuaW5nICsgZWFybmluZ3NbaV0uYW1vdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b3RhbEVhcm5pbmc7XHJcbiAgfVxyXG5cclxuICAvL2RlZmluaW5nIG9uQ2hhbmdlRXhwZW5zZVxyXG4gIGNvbnN0IG9uQ2hhbmdlRXhwZW5zZSA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHNldEV4cGVuc2UoeyAuLi5leHBlbnNlLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgY29uc29sZS5sb2coZXhwZW5zZSk7XHJcbiAgfVxyXG5cclxuICAvL2RlZmluaW5nIGV4cGVuc2VPblN1Ym1pdEhhbmRsZXJcclxuICBjb25zdCBleHBlbnNlT25TdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LnNlcnZlckFwaX0vYXBpL3YxL3Bvc3QtZXhwZW5zZWAsIGV4cGVuc2UsXHJcbiAgICAgIHsgaGVhZGVyczogeyAncGFzc2NvZGUnOiBgJHthdXRoQ29udGV4dC5wYXNzY29kZX1gIH0gfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYE9wZXJhdGlvbiBTdWNjZXNzZnVsbGApO1xyXG4gICAgICAgICAgc2V0Q291bnQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdoYW5kbGVFeHBlbnNlT25TdWJtaXQgVHJpZ2dlcmVkJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcblxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT5FYXJuaW5ncyAtICA8c3Bhbj4ge2Vhcm5pbmdDb3VudGVyKCl9IDwvc3Bhbj4gPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICB7LyogRWFybmluZyBGb3JtICovfVxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibWFpbi1mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZUVhcm5pbmdPblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZWFybmluZ09uQ2hhbmdlfSBzdHlsZT17eyBwYWRkaW5nOiAnLjRyZW0nIH19IGNsYXNzTmFtZT1cImJpbmFyeS1pbnB1dFwiIHR5cGU9XCJkYXRlXCIgbmFtZT1cImRhdGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIERhdGVcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2Vhcm5pbmdPbkNoYW5nZX0gY2xhc3NOYW1lPVwiYmluYXJ5LWlucHV0XCIgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJhbW91bnRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEFtb3VudFwiIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZWFybmluZ09uQ2hhbmdlfSBjbGFzc05hbWU9XCJiaW5hcnktaW5wdXQtMlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5vdGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIE5vdGVcIiAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJpbmFyeS1idXR0b25cIiB0eXBlPVwic3VibWl0XCI+SW5zZXJ0PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICB7LyogRWFybmluZyBUYWJsZSAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhlYWRcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5UaW1lc3RhbXA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+RGF0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5Ob3RlPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkFtb3VudDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7Lyog8J+OiCBMb29waW5nIEhlcmUg8J+OiCAqL31cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGVhcm5pbmdzLm1hcChlYXJuaW5nID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8RWFybmluZyBrZXk9e2Vhcm5pbmcuX2lkfSBlYXJuaW5nPXtlYXJuaW5nfSAvPlxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcblxyXG4gICAgICAgICAgPGxhYmVsPkV4cGVuc2VzPC9sYWJlbD5cclxuICAgICAgICAgIHsvKiBFYXJuaW5nIEZvcm0gKi99XHJcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtYWluLWZvcm1cIiBvblN1Ym1pdD17ZXhwZW5zZU9uU3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17b25DaGFuZ2VFeHBlbnNlfSBzdHlsZT17eyBwYWRkaW5nOiAnLjRyZW0nIH19IGNsYXNzTmFtZT1cImJpbmFyeS1pbnB1dFwiIHR5cGU9XCJkYXRlXCIgbmFtZT1cImRhdGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIERhdGVcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlRXhwZW5zZX0gY2xhc3NOYW1lPVwiYmluYXJ5LWlucHV0XCIgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJhbW91bnRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEFtb3VudFwiIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17b25DaGFuZ2VFeHBlbnNlfSBjbGFzc05hbWU9XCJiaW5hcnktaW5wdXQtMlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5vdGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIE5vdGVcIiAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJpbmFyeS1idXR0b25cIiB0eXBlPVwic3VibWl0XCI+SW5zZXJ0PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICB7LyogRXhwZW5zZSBUYWJsZSAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhlYWRcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5UaW1lc3RhbXA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+RGF0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5Ob3RlPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkFtb3VudDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7Lyog8J+OiCBMb29waW5nIEhlcmUg8J+OiCAqL31cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGV4cGVuc2VzLm1hcChleHBlbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8RXhwZW5zZSBrZXk9e2V4cGVuc2UuX2lkfSBlYXJuaW5nPXtleHBlbnNlfSAvPlxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9