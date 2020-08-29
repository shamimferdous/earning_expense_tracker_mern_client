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
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat(passcode, "/api/v1/get-earnings"), {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInBhc3Njb2RlIiwidXNlU3RhdGUiLCJkYXRlIiwiYW1vdW50Iiwibm90ZSIsImVhcm5pbmciLCJzZXRFYXJuaW5nIiwiZXhwZW5zZSIsInNldEV4cGVuc2UiLCJlYXJuaW5ncyIsInNldEVhcm5pbmdzIiwiY291bnQiLCJzZXRDb3VudCIsImF1dGhDb250ZXh0IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwidXNlRWZmZWN0IiwiYXhpb3MiLCJnZXQiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlYXJuaW5nT25DaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVFYXJuaW5nT25TdWJtaXQiLCJwb3N0Iiwic3VjY2VzcyIsIk1hdGgiLCJyYW5kb20iLCJlYXJuaW5nQ291bnRlciIsInRvdGFsRWFybmluZyIsImkiLCJsZW5ndGgiLCJvbkNoYW5nZUV4cGVuc2UiLCJleHBlbnNlT25TdWJtaXRIYW5kbGVyIiwicGFkZGluZyIsIm1hcCIsIl9pZCIsImdldEluaXRpYWxQcm9wcyIsImFtaVNoYW1pbUJoYWkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBO0NBR0E7O0FBQ0E7QUFHQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFnQjtBQUFBOztBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYzs7QUFBQSxrQkFFSUMsc0RBQVEsQ0FBQztBQUFFQyxRQUFJLEVBQUUsRUFBUjtBQUFZQyxVQUFNLEVBQUUsRUFBcEI7QUFBd0JDLFFBQUksRUFBRTtBQUE5QixHQUFELENBRlo7QUFBQSxNQUVuQkMsT0FGbUI7QUFBQSxNQUVWQyxVQUZVOztBQUFBLG1CQUdJTCxzREFBUSxDQUFDO0FB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsQ0FKRixFQVdFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLENBREYsRUFRRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBSkYsQ0FSRixDQVhGLENBbENGLENBREYsQ0FERjtBQW9FRCxDQWxKRDs7R0FBTXpDLEc7O0tBQUFBLEc7QUFvSlNBLGtFQUFmO0FBR0FBLEdBQUcsQ0FBQzhDLGVBQUosT0FBc0IsVUFBQ0MsYUFBRCxFQUFrQjtBQUFBOztBQUN0QyxNQUFNakMsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyxvRUFBRCxDQUE5QjtBQUNBLFNBQU87QUFDTGYsWUFBUSxFQUFFYSxXQUFXLENBQUNiO0FBRGpCLEdBQVA7QUFHRCxDQUxEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUyMWY0YmRkZGRlNjk1YWIxN2M4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9pbXBvcnRpbmcgYWxsIGNvbXBvbmVudHNcclxuaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dCc7XHJcbmltcG9ydCBFYXJuaW5nIGZyb20gJy4vRWFybmluZyc7XHJcblxyXG4vL2ltcG9ydGluZyBjb250ZXh0IGFwaVxyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQtYXBpL0F1dGhDb250ZXh0JztcclxuXHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgQXBwID0gKHtwYXNzY29kZX0pID0+IHtcclxuXHJcbiAgY29uc3QgW2Vhcm5pbmcsIHNldEVhcm5pbmddID0gdXNlU3RhdGUoeyBkYXRlOiBcIlwiLCBhbW91bnQ6IFwiXCIsIG5vdGU6IFwiXCIgfSk7XHJcbiAgY29uc3QgW2V4cGVuc2UsIHNldEV4cGVuc2VdID0gdXNlU3RhdGUoeyBkYXRlOiBcIlwiLCBhbW91bnQ6IFwiXCIsIG5vdGU6IFwiXCIgfSk7XHJcbiAgY29uc3QgW2Vhcm5pbmdzLCBzZXRFYXJuaW5nc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGF1dGhDb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcblxyXG4gIC8vdGhlIHVzZUVmZmVjdCBIb29rLi4uIEdldHRpbmcgRGF0YSBmcm9tIGJhY2tlbmQgYXBpc1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7cGFzc2NvZGV9L2FwaS92MS9nZXQtZWFybmluZ3NgLCB7IGhlYWRlcnM6IHsgcGFzc2NvZGU6IGAke3Bhc3Njb2RlfWAgfSB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5lYXJuaW5ncyk7XHJcbiAgICAgICAgc2V0RWFybmluZ3MocmVzcG9uc2UuZGF0YS5lYXJuaW5ncyk7XHJcbiAgICAgIH0pXHJcbiAgfSwgW2NvdW50XSk7XHJcblxyXG4gIC8vZGVmaW5pbmcgZWFybmluZ09uQ2hhbmdlXHJcbiAgY29uc3QgZWFybmluZ09uQ2hhbmdlID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRFYXJuaW5nKHsgLi4uZWFybmluZywgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgIGNvbnNvbGUubG9nKGVhcm5pbmcpO1xyXG4gIH1cclxuXHJcbiAgLy9kZWZpbmluZyBoYW5kbGVFYXJuaW5nT25TdWJtaXRcclxuICBjb25zdCBoYW5kbGVFYXJuaW5nT25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGF4aW9zLnBvc3QoYCR7YXV0aENvbnRleHQucGFzc2NvZGV9L2FwaS92MS9wb3N0LWVhcm5pbmdgLCBlYXJuaW5nLFxyXG4gICAgICB7IGhlYWRlcnM6IHsgJ3Bhc3Njb2RlJzogYCR7YXV0aENvbnRleHQucGFzc2NvZGV9YCB9IH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgSW50ZXJuYWwgU2VydmVyIEVycm9yYCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBPcGVyYXRpb24gU3VjY2Vzc2Z1bGxgKTtcclxuICAgICAgICAgIHNldENvdW50KE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICBjb25zb2xlLmxvZygnaGFuZGxlRWFybmluZ09uU3VibWl0IFRyaWdnZXJlZCcpO1xyXG4gIH1cclxuICAvL2RlZmluaW5nIGVhcm5pbmcgY291bnRlciBmdW5jdGlvblxyXG4gIGNvbnN0IGVhcm5pbmdDb3VudGVyID0gKCkgPT4ge1xyXG4gICAgbGV0IHRvdGFsRWFybmluZyA9IDA7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlYXJuaW5ncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0b3RhbEVhcm5pbmcgPSB0b3RhbEVhcm5pbmcgKyBlYXJuaW5nc1tpXS5hbW91bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRvdGFsRWFybmluZztcclxuICB9XHJcblxyXG4gIC8vZGVmaW5pbmcgb25DaGFuZ2VFeHBlbnNlXHJcbiAgY29uc3Qgb25DaGFuZ2VFeHBlbnNlID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgc2V0RXhwZW5zZSh7IC4uLmV4cGVuc2UsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhleHBlbnNlKTtcclxuICB9XHJcblxyXG4gIC8vZGVmaW5pbmcgZXhwZW5zZU9uU3VibWl0SGFuZGxlclxyXG4gIGNvbnN0IGV4cGVuc2VPblN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGF4aW9zLnBvc3QoYCR7YXV0aENvbnRleHQucGFzc2NvZGV9L2FwaS92MS9wb3N0LWV4cGVuc2VgLCBleHBlbnNlLFxyXG4gICAgICB7IGhlYWRlcnM6IHsgJ3Bhc3Njb2RlJzogYCR7YXV0aENvbnRleHQucGFzc2NvZGV9YCB9IH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgSW50ZXJuYWwgU2VydmVyIEVycm9yYCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBPcGVyYXRpb24gU3VjY2Vzc2Z1bGxgKTtcclxuICAgICAgICAgIHNldENvdW50KE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICBjb25zb2xlLmxvZygnaGFuZGxlRXhwZW5zZU9uU3VibWl0IFRyaWdnZXJlZCcpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU+RWFybmluZ3MgLSAgPHNwYW4+IHtlYXJuaW5nQ291bnRlcigpfSA8L3NwYW4+IDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgey8qIEVhcm5pbmcgRm9ybSAqL31cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1haW4tZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVFYXJuaW5nT25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2Vhcm5pbmdPbkNoYW5nZX0gc3R5bGU9e3sgcGFkZGluZzogJy40cmVtJyB9fSBjbGFzc05hbWU9XCJiaW5hcnktaW5wdXRcIiB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBEYXRlXCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtlYXJuaW5nT25DaGFuZ2V9IGNsYXNzTmFtZT1cImJpbmFyeS1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiYW1vdW50XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBBbW91bnRcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2Vhcm5pbmdPbkNoYW5nZX0gY2xhc3NOYW1lPVwiYmluYXJ5LWlucHV0LTJcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJub3RlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBOb3RlXCIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiaW5hcnktYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPkluc2VydDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgey8qIEVhcm5pbmcgVGFibGUgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+VGltZXN0YW1wPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkRhdGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+Tm90ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5BbW91bnQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIPCfjoggTG9vcGluZyBIZXJlIPCfjoggKi99XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBlYXJuaW5ncy5tYXAoZWFybmluZyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEVhcm5pbmcga2V5PXtlYXJuaW5nLl9pZH0gZWFybmluZz17ZWFybmluZ30gLz5cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG5cclxuICAgICAgICAgIDxsYWJlbD5FeHBlbnNlczwvbGFiZWw+XHJcbiAgICAgICAgICB7LyogRWFybmluZyBGb3JtICovfVxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibWFpbi1mb3JtXCIgb25TdWJtaXQ9e2V4cGVuc2VPblN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlRXhwZW5zZX0gc3R5bGU9e3sgcGFkZGluZzogJy40cmVtJyB9fSBjbGFzc05hbWU9XCJiaW5hcnktaW5wdXRcIiB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBEYXRlXCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtvbkNoYW5nZUV4cGVuc2V9IGNsYXNzTmFtZT1cImJpbmFyeS1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiYW1vdW50XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBBbW91bnRcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlRXhwZW5zZX0gY2xhc3NOYW1lPVwiYmluYXJ5LWlucHV0LTJcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJub3RlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBOb3RlXCIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiaW5hcnktYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPkluc2VydDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgey8qIEV4cGVuc2UgVGFibGUgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+VGltZXN0YW1wPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkRhdGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+Tm90ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5BbW91bnQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPjIyLzQvMjAwMTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj4yMy8zLzIwMDM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+V2VsY29tZSBBbWlnbzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj41Njwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuXHJcblxyXG5BcHAuZ2V0SW5pdGlhbFByb3BzID0gKGFtaVNoYW1pbUJoYWkpID0+e1xyXG4gIGNvbnN0IGF1dGhDb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhc3Njb2RlOiBhdXRoQ29udGV4dC5wYXNzY29kZVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=