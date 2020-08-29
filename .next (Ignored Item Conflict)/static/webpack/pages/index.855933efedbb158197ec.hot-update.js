webpackHotUpdate_N_E("pages/index",{

/***/ "./components/App.jsx":
/*!****************************!*\
  !*** ./components/App.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ "./components/Layout.jsx");
/* harmony import */ var _Earning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Earning */ "./components/Earning.jsx");
/* harmony import */ var _context_api_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context-api/AuthContext */ "./context-api/AuthContext.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\B A T  M A C H I N E\\Dropbox\\Github\\Track-Earn-Ex__MERN-Stack\\client\\components\\App.jsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 //importing all components


 //importing context api




var App = function App(_ref) {
  _s();

  var passcode = _ref.passcode;

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
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat(process.env.backendApi, "/api/v1/get-earnings"), {
      headers: {
        passcode: "".concat(passcode)
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
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("".concat(authContext.passcode, "/api/v1/post-earning"), earning, {
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
App.getInitialProps = _s2(function (amiShamimBhai) {
  _s2();

  var authContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_api_AuthContext__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]);
  return {
    passcode: authContext.passcode
  };
}, "g0q6N3HTsGa67OokMUhTOzE2a0M=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInBhc3Njb2RlIiwidXNlU3RhdGUiLCJkYXRlIiwiYW1vdW50Iiwibm90ZSIsImVhcm5pbmciLCJzZXRFYXJuaW5nIiwiZXhwZW5zZSIsInNldEV4cGVuc2UiLCJlYXJuaW5ncyIsInNldEVhcm5pbmdzIiwiY291bnQiLCJzZXRDb3VudCIsImF1dGhDb250ZXh0IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwidXNlRWZmZWN0IiwiYXhpb3MiLCJnZXQiLCJwcm9jZXNzIiwiZW52IiwiYmFja2VuZEFwaSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVhcm5pbmdPbkNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUVhcm5pbmdPblN1Ym1pdCIsInBvc3QiLCJzdWNjZXNzIiwiTWF0aCIsInJhbmRvbSIsImVhcm5pbmdDb3VudGVyIiwidG90YWxFYXJuaW5nIiwiaSIsImxlbmd0aCIsIm9uQ2hhbmdlRXhwZW5zZSIsImV4cGVuc2VPblN1Ym1pdEhhbmRsZXIiLCJwYWRkaW5nIiwibWFwIiwiX2lkIiwiZ2V0SW5pdGlhbFByb3BzIiwiYW1pU2hhbWltQmhhaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ0E7Q0FHQTs7QUFDQTtBQUdBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQWdCO0FBQUE7O0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjOztBQUFBLGtCQUVJQyxzREFBUSxDQUFDO0FBQUVDLFFBQUksRUFBRSxFQUFSO0FBQVlDLFVBQU0sRUFBRSxFQUFwQjtBQUF3QkMsUUFBSSxFQUFFO0FBQTlCLEdBQUQsQ0FGWjtBQUFBLE1BRW5CQyxPQUZtQjtBQUFBLE1BRVZDLFVB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aW5kZXguODU1OTMzZWZlZGJiMTU4MTk3ZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL2ltcG9ydGluZyBhbGwgY29tcG9uZW50c1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vTGF5b3V0JztcclxuaW1wb3J0IEVhcm5pbmcgZnJvbSAnLi9FYXJuaW5nJztcclxuXHJcbi8vaW1wb3J0aW5nIGNvbnRleHQgYXBpXHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC1hcGkvQXV0aENvbnRleHQnO1xyXG5cclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBBcHAgPSAoe3Bhc3Njb2RlfSkgPT4ge1xyXG5cclxuICBjb25zdCBbZWFybmluZywgc2V0RWFybmluZ10gPSB1c2VTdGF0ZSh7IGRhdGU6IFwiXCIsIGFtb3VudDogXCJcIiwgbm90ZTogXCJcIiB9KTtcclxuICBjb25zdCBbZXhwZW5zZSwgc2V0RXhwZW5zZV0gPSB1c2VTdGF0ZSh7IGRhdGU6IFwiXCIsIGFtb3VudDogXCJcIiwgbm90ZTogXCJcIiB9KTtcclxuICBjb25zdCBbZWFybmluZ3MsIHNldEVhcm5pbmdzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgYXV0aENvbnRleHQgPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuXHJcbiAgLy90aGUgdXNlRWZmZWN0IEhvb2suLi4gR2V0dGluZyBEYXRhIGZyb20gYmFja2VuZCBhcGlzXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5iYWNrZW5kQXBpfS9hcGkvdjEvZ2V0LWVhcm5pbmdzYCwgeyBoZWFkZXJzOiB7IHBhc3Njb2RlOiBgJHtwYXNzY29kZX1gIH0gfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuZWFybmluZ3MpO1xyXG4gICAgICAgIHNldEVhcm5pbmdzKHJlc3BvbnNlLmRhdGEuZWFybmluZ3MpO1xyXG4gICAgICB9KVxyXG4gIH0sIFtjb3VudF0pO1xyXG5cclxuICAvL2RlZmluaW5nIGVhcm5pbmdPbkNoYW5nZVxyXG4gIGNvbnN0IGVhcm5pbmdPbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0RWFybmluZyh7IC4uLmVhcm5pbmcsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhlYXJuaW5nKTtcclxuICB9XHJcblxyXG4gIC8vZGVmaW5pbmcgaGFuZGxlRWFybmluZ09uU3VibWl0XHJcbiAgY29uc3QgaGFuZGxlRWFybmluZ09uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBheGlvcy5wb3N0KGAke2F1dGhDb250ZXh0LnBhc3Njb2RlfS9hcGkvdjEvcG9zdC1lYXJuaW5nYCwgZWFybmluZyxcclxuICAgICAgeyBoZWFkZXJzOiB7ICdwYXNzY29kZSc6IGAke2F1dGhDb250ZXh0LnBhc3Njb2RlfWAgfSB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYEludGVybmFsIFNlcnZlciBFcnJvcmApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgT3BlcmF0aW9uIFN1Y2Nlc3NmdWxsYCk7XHJcbiAgICAgICAgICBzZXRDb3VudChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgY29uc29sZS5sb2coJ2hhbmRsZUVhcm5pbmdPblN1Ym1pdCBUcmlnZ2VyZWQnKTtcclxuICB9XHJcbiAgLy9kZWZpbmluZyBlYXJuaW5nIGNvdW50ZXIgZnVuY3Rpb25cclxuICBjb25zdCBlYXJuaW5nQ291bnRlciA9ICgpID0+IHtcclxuICAgIGxldCB0b3RhbEVhcm5pbmcgPSAwO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWFybmluZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdG90YWxFYXJuaW5nID0gdG90YWxFYXJuaW5nICsgZWFybmluZ3NbaV0uYW1vdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b3RhbEVhcm5pbmc7XHJcbiAgfVxyXG5cclxuICAvL2RlZmluaW5nIG9uQ2hhbmdlRXhwZW5zZVxyXG4gIGNvbnN0IG9uQ2hhbmdlRXhwZW5zZSA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHNldEV4cGVuc2UoeyAuLi5leHBlbnNlLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgY29uc29sZS5sb2coZXhwZW5zZSk7XHJcbiAgfVxyXG5cclxuICAvL2RlZmluaW5nIGV4cGVuc2VPblN1Ym1pdEhhbmRsZXJcclxuICBjb25zdCBleHBlbnNlT25TdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBheGlvcy5wb3N0KGAke2F1dGhDb250ZXh0LnBhc3Njb2RlfS9hcGkvdjEvcG9zdC1leHBlbnNlYCwgZXhwZW5zZSxcclxuICAgICAgeyBoZWFkZXJzOiB7ICdwYXNzY29kZSc6IGAke2F1dGhDb250ZXh0LnBhc3Njb2RlfWAgfSB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYEludGVybmFsIFNlcnZlciBFcnJvcmApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgT3BlcmF0aW9uIFN1Y2Nlc3NmdWxsYCk7XHJcbiAgICAgICAgICBzZXRDb3VudChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgY29uc29sZS5sb2coJ2hhbmRsZUV4cGVuc2VPblN1Ym1pdCBUcmlnZ2VyZWQnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuXHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPkVhcm5pbmdzIC0gIDxzcGFuPiB7ZWFybmluZ0NvdW50ZXIoKX0gPC9zcGFuPiA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgIHsvKiBFYXJuaW5nIEZvcm0gKi99XHJcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtYWluLWZvcm1cIiBvblN1Ym1pdD17aGFuZGxlRWFybmluZ09uU3VibWl0fT5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtlYXJuaW5nT25DaGFuZ2V9IHN0eWxlPXt7IHBhZGRpbmc6ICcuNHJlbScgfX0gY2xhc3NOYW1lPVwiYmluYXJ5LWlucHV0XCIgdHlwZT1cImRhdGVcIiBuYW1lPVwiZGF0ZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgRGF0ZVwiIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZWFybmluZ09uQ2hhbmdlfSBjbGFzc05hbWU9XCJiaW5hcnktaW5wdXRcIiB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImFtb3VudFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQW1vdW50XCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtlYXJuaW5nT25DaGFuZ2V9IGNsYXNzTmFtZT1cImJpbmFyeS1pbnB1dC0yXCIgdHlwZT1cInRleHRcIiBuYW1lPVwibm90ZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgTm90ZVwiIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmluYXJ5LWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5JbnNlcnQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIHsvKiBFYXJuaW5nIFRhYmxlICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaGVhZFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlRpbWVzdGFtcDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5EYXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPk5vdGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+QW1vdW50PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiDwn46IIExvb3BpbmcgSGVyZSDwn46IICovfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZWFybmluZ3MubWFwKGVhcm5pbmcgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxFYXJuaW5nIGtleT17ZWFybmluZy5faWR9IGVhcm5pbmc9e2Vhcm5pbmd9IC8+XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuXHJcbiAgICAgICAgICA8bGFiZWw+RXhwZW5zZXM8L2xhYmVsPlxyXG4gICAgICAgICAgey8qIEVhcm5pbmcgRm9ybSAqL31cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1haW4tZm9ybVwiIG9uU3VibWl0PXtleHBlbnNlT25TdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtvbkNoYW5nZUV4cGVuc2V9IHN0eWxlPXt7IHBhZGRpbmc6ICcuNHJlbScgfX0gY2xhc3NOYW1lPVwiYmluYXJ5LWlucHV0XCIgdHlwZT1cImRhdGVcIiBuYW1lPVwiZGF0ZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgRGF0ZVwiIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17b25DaGFuZ2VFeHBlbnNlfSBjbGFzc05hbWU9XCJiaW5hcnktaW5wdXRcIiB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImFtb3VudFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQW1vdW50XCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtvbkNoYW5nZUV4cGVuc2V9IGNsYXNzTmFtZT1cImJpbmFyeS1pbnB1dC0yXCIgdHlwZT1cInRleHRcIiBuYW1lPVwibm90ZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgTm90ZVwiIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmluYXJ5LWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5JbnNlcnQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIHsvKiBFeHBlbnNlIFRhYmxlICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaGVhZFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlRpbWVzdGFtcDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5EYXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPk5vdGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+QW1vdW50PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj4yMi80LzIwMDE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+MjMvMy8yMDAzPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPldlbGNvbWUgQW1pZ288L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+NTY8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcblxyXG5cclxuQXBwLmdldEluaXRpYWxQcm9wcyA9IChhbWlTaGFtaW1CaGFpKSA9PntcclxuICBjb25zdCBhdXRoQ29udGV4dCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwYXNzY29kZTogYXV0aENvbnRleHQucGFzc2NvZGVcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9