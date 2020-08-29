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





var app = function app(_ref) {
  _s();

  var characterID = _ref.characterID;

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

_s(app, "tpuk4z1iLvCVNjzOIauxvhrO5+U=");

/* harmony default export */ __webpack_exports__["default"] = (app);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbImFwcCIsImNoYXJhY3RlcklEIiwidXNlU3RhdGUiLCJkYXRlIiwiYW1vdW50Iiwibm90ZSIsImVhcm5pbmciLCJzZXRFYXJuaW5nIiwiZXhwZW5zZSIsInNldEV4cGVuc2UiLCJlYXJuaW5ncyIsInNldEVhcm5pbmdzIiwiY291bnQiLCJzZXRDb3VudCIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwicHJvY2VzcyIsImhlYWRlcnMiLCJwYXNzY29kZSIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZWFybmluZ09uQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlRWFybmluZ09uU3VibWl0IiwicG9zdCIsImF1dGhDb250ZXh0Iiwic3VjY2VzcyIsIk1hdGgiLCJyYW5kb20iLCJlYXJuaW5nQ291bnRlciIsInRvdGFsRWFybmluZyIsImkiLCJsZW5ndGgiLCJvbkNoYW5nZUV4cGVuc2UiLCJleHBlbnNlT25TdWJtaXRIYW5kbGVyIiwicGFkZGluZyIsIm1hcCIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBO0FBQ0E7QUFHQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFtQjtBQUFBOztBQUFBLE1BQWpCQyxXQUFpQixRQUFqQkEsV0FBaUI7O0FBQUEsa0JBRUNDLHNEQUFRLENBQUM7QUFBRUMsUUFBSSxFQUFFLEVBQVI7QUFBWUMsVUFBTSxFQUFFLEVBQXBCO0FBQXdCQyxRQUFJLEVBQUU7QUFBOUIsR0FBRCxDQUZUO0FBQUEsTUFFdEJDLE9BRnNCO0FBQUEsTUFFYkMsVUFGYTs7QUFBQSxtQkFHQ0wsc0RBQVEsQ0FBQztBQUFFQyxRQUFJLEVBQUUsRUFBUjtBQUFZQyxVQUFNLEVBQUUsRUFBcEI7QUFBd0JDLFFBQUksRUFBRTtBQUE5QixHQUFELENBSFQ7QUFBQSxNQUd0QkcsT0FIc0I7QUFBQSxNQUdiQyxVQUhhOztBQUFBLG1CQUlHUCxzREFBUSxDQUFDLEVBQUQsQ0FKWDtBQUFBLE1BSXRCUSxRQUpzQjtBQUFBLE1BSVpDLFdBSlk7O0FBQUEsbUJBTUhULHNEQUFRLENBQUMsQ0FBRCxDQU5MO0FBQUEsTUFNdEJVLEtBTnNCO0FBQUEsTUFNZkMsUUFOZSxrQkFRN0I7OztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsZ0RBQUssQ0FBQ0MsR0FBTixXQUFhQyxzQkFBYiwyQkFBMEQ7QUFBRUMsYUFBTyxFQUFFO0FBQUVDLGdCQUFRLFlBQUtGLFNBQUw7QUFBVjtBQUFYLEtBQTFELEVBQ0dHLElBREgsQ0FDUSxVQUFBQyxRQUFRLEVBQUk7QUFDaEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFRLENBQUNHLElBQVQsQ0FBY2QsUUFBMUI7QUFDQUMsaUJBQVcsQ0FBQ1UsUUFBUSxDQUFDRyxJQUFULENBQWNkLFFBQWYsQ0FBWDtBQUNELEtBSkg7QUFLRCxHQU5RLEVBTU4sQ0FBQ0UsS0FBRCxDQU5NLENBQVQsQ0FUNkIsQ0FpQjdCOztBQUNBLE1BQU1hLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsQ0FBQyxFQUFJO0FBQzNCQSxLQUFDLENBQUNDLGNBQUY7QUFDQXBCLGNBQVUsaUNBQU1ELE9BQU4scUdBQWdCb0IsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLElBQXpCLEVBQWdDSCxDQUFDLENBQUNFLE1BQUYsQ0FBU0UsS0FBekMsR0FBVjtBQUNBUixXQUFPLENBQUNDLEdBQVIsQ0FBWWpCLE9BQVo7QUFDRCxHQUpELENBbEI2QixDQXdCOUI7OztBQUNBLE1BQU15QixxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNMLENBQUQsRUFBTztBQUNwQ0EsS0FBQyxDQUFDQyxjQUFGO0FBRUFaLGdEQUFLLENBQUNpQixJQUFOLFdBQWNDLFdBQVcsQ0FBQ2QsUUFBMUIsMkJBQTBEYixPQUExRCxFQUNFO0FBQUVZLGFBQU8sRUFBRTtBQUFFLDhCQUFlZSxXQUFXLENBQUNkLFFBQTNCO0FBQUY7QUFBWCxLQURGLEVBQzBEQyxJQUQxRCxDQUMrRCxVQUFBQyxRQUFRLEVBQUk7QUFDdkUsVUFBSUEsUUFBUSxDQUFDRyxJQUFULENBQWNVLE9BQWQsS0FBMEIsS0FBOUIsRUFBcUM7QUFDbkNaLGVBQU8sQ0FBQ0MsR0FBUjtBQUNELE9BRkQsTUFFTztBQUNMRCxlQUFPLENBQUNDLEdBQVI7QUFDQVYsZ0JBQVEsQ0FBQ3NCLElBQUksQ0FBQ0MsTUFBTCxFQUFELENBQVI7QUFDRDtBQUNGLEtBUkg7QUFVQWQsV0FBTyxDQUFDQyxHQUFSLENBQVksaUNBQVo7QUFDRCxHQWRBLENBekI4QixDQXdDN0I7OztBQUNBLE1BQU1jLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBSztBQUMxQixRQUFJQyxZQUFZLEdBQUcsQ0FBbkI7O0FBRUUsU0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUM3QixRQUFRLENBQUM4QixNQUF4QixFQUFnQ0QsQ0FBQyxFQUFqQyxFQUFxQztBQUNuQ0Qsa0JBQVksR0FBR0EsWUFBWSxHQUFHNUIsUUFBUSxDQUFDNkIsQ0FBRCxDQUFSLENBQVluQyxNQUExQztBQUNEOztBQUVELFdBQU9rQyxZQUFQO0FBQ0gsR0FSRCxDQXpDNkIsQ0FtRDdCOzs7QUFDQSxNQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFmLENBQUMsRUFBRztBQUMxQkEsS0FBQyxDQUFDQyxjQUFGO0FBRUFsQixjQUFVLGlDQUFLRCxPQUFMLHFHQUFla0IsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLElBQXhCLEVBQStCSCxDQUFDLENBQUNFLE1BQUYsQ0FBU0UsS0FBeEMsR0FBVjtBQUNBUixXQUFPLENBQUNDLEdBQVIsQ0FBWWYsT0FBWjtBQUNELEdBTEQsQ0FwRDZCLENBMkQ3Qjs7O0FBQ0EsTUFBTWtDLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsR0FBTTtBQUNuQ2hCLEtBQUMsQ0FBQ0MsY0FBRjtBQUVBWixnREFBSyxDQUFDaUIsSUFBTixXQUFjQyxXQUFXLENBQUNkLFFBQTFCLDJCQUEwRFgsT0FBMUQsRUFDRTtBQUFFVSxhQUFPLEVBQUU7QUFBRSw4QkFBZWUsV0FBVyxDQUFDZCxRQUEzQjtBQUFGO0FBQVgsS0FERixFQUMwREMsSUFEMUQsQ0FDK0QsVUFBQUMsUUFBUSxFQUFJO0FBQ3ZFLFVBQUlBLFFBQVEsQ0FBQ0csSUFBVCxDQUFjVSxPQUFkLEtBQTBCLEtBQTlCLEVBQXFDO0FBQ25DWixlQUFPLENBQUNDLEdBQVI7QUFDRCxPQUZELE1BRU87QUFDTEQsZUFBTyxDQUFDQyxHQUFSO0FBQ0FWLGdCQUFRLENBQUNzQixJQUFJLENBQUNDLE1BQUwsRUFBRCxDQUFSO0FBQ0Q7QUFDRixLQVJIO0FBVUFkLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGlDQUFaO0FBQ0QsR0FkRDs7QUFnQkEsU0FDRSxtRUFDRSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRTtBQUFPLGFBQVMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFRYyxjQUFjLEVBQXRCLE1BQTdCLE1BRkYsRUFLRTtBQUFNLGFBQVMsRUFBQyxXQUFoQjtBQUE0QixZQUFRLEVBQUVOLHFCQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxZQUFRLEVBQUVOLGVBQWpCO0FBQWtDLFNBQUssRUFBRTtBQUFFa0IsYUFBTyxFQUFFO0FBQVgsS0FBekM7QUFBK0QsYUFBUyxFQUFDLGNBQXpFO0FBQXdGLFFBQUksRUFBQyxNQUE3RjtBQUFvRyxRQUFJLEVBQUMsTUFBekc7QUFBZ0gsZUFBVyxFQUFDLFlBQTVIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU8sWUFBUSxFQUFFbEIsZUFBakI7QUFBa0MsYUFBUyxFQUFDLGNBQTVDO0FBQTJELFFBQUksRUFBQyxRQUFoRTtBQUF5RSxRQUFJLEVBQUMsUUFBOUU7QUFBdUYsZUFBVyxFQUFDLGNBQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQU8sWUFBUSxFQUFFQSxlQUFqQjtBQUFrQyxhQUFTLEVBQUMsZ0JBQTVDO0FBQTZELFFBQUksRUFBQyxNQUFsRTtBQUF5RSxRQUFJLEVBQUMsTUFBOUU7QUFBcUYsZUFBVyxFQUFDLFlBQWpHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFO0FBQVEsYUFBUyxFQUFDLGVBQWxCO0FBQWtDLFFBQUksRUFBQyxRQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsQ0FMRixFQVlFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLENBREYsRUFVSWYsUUFBUSxDQUFDa0MsR0FBVCxDQUFhLFVBQUF0QyxPQUFPLEVBQUk7QUFDdEIsV0FBTyxNQUFDLGdEQUFEO0FBQVMsU0FBRyxFQUFFQSxPQUFPLENBQUN1QyxHQUF0QjtBQUEyQixhQUFPLEVBQUV2QyxPQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDRCxHQUZELENBVkosQ0FaRixDQURGLEVBa0NFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsRUFJRTtBQUFNLGFBQVMsRUFBQyxXQUFoQjtBQUE0QixZQUFRLEVBQUVvQyxzQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sWUFBUSxFQUFFRCxlQUFqQjtBQUFrQyxTQUFLLEVBQUU7QUFBRUUsYUFBTyxFQUFFO0FBQVgsS0FBekM7QUFBK0QsYUFBUyxFQUFDLGNBQXpFO0FBQXdGLFFBQUksRUFBQyxNQUE3RjtBQUFvRyxRQUFJLEVBQUMsTUFBekc7QUFBZ0gsZUFBVyxFQUFDLFlBQTVIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU8sWUFBUSxFQUFFRixlQUFqQjtBQUFrQyxhQUFTLEVBQUMsY0FBNUM7QUFBMkQsUUFBSSxFQUFDLFFBQWhFO0FBQXlFLFFBQUksRUFBQyxRQUE5RTtBQUF1RixlQUFXLEVBQUMsY0FBbkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTyxZQUFRLEVBQUVBLGVBQWpCO0FBQWtDLGFBQVMsRUFBQyxnQkFBNUM7QUFBNkQsUUFBSSxFQUFDLE1BQWxFO0FBQXlFLFFBQUksRUFBQyxNQUE5RTtBQUFxRixlQUFXLEVBQUMsWUFBakc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBUSxhQUFTLEVBQUMsZUFBbEI7QUFBa0MsUUFBSSxFQUFDLFFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixDQUpGLEVBV0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsQ0FERixFQVFFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFKRixDQVJGLENBWEYsQ0FsQ0YsQ0FERixDQURGO0FBb0VELENBaEpEOztHQUFNekMsRzs7QUFrSlNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFiYWZkYWJhN2I2ODgwNTYwMjg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9pbXBvcnRpbmcgYWxsIGNvbXBvbmVudHNcclxuaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dCc7XHJcbmltcG9ydCBFYXJuaW5nIGZyb20gJy4vRWFybmluZyc7XHJcblxyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IGFwcCA9ICh7Y2hhcmFjdGVySUR9KSA9PiB7XHJcblxyXG4gIGNvbnN0IFtlYXJuaW5nLCBzZXRFYXJuaW5nXSA9IHVzZVN0YXRlKHsgZGF0ZTogXCJcIiwgYW1vdW50OiBcIlwiLCBub3RlOiBcIlwiIH0pO1xyXG4gIGNvbnN0IFtleHBlbnNlLCBzZXRFeHBlbnNlXSA9IHVzZVN0YXRlKHsgZGF0ZTogXCJcIiwgYW1vdW50OiBcIlwiLCBub3RlOiBcIlwiIH0pO1xyXG4gIGNvbnN0IFtlYXJuaW5ncywgc2V0RWFybmluZ3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAvL3RoZSB1c2VFZmZlY3QgSG9vay4uLiBHZXR0aW5nIERhdGEgZnJvbSBiYWNrZW5kIGFwaXNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LnNlcnZlckFwaX0vYXBpL3YxL2dldC1lYXJuaW5nc2AsIHsgaGVhZGVyczogeyBwYXNzY29kZTogYCR7cHJvY2Vzcy5lbnYucGFzc2NvZGV9YCB9IH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmVhcm5pbmdzKTtcclxuICAgICAgICBzZXRFYXJuaW5ncyhyZXNwb25zZS5kYXRhLmVhcm5pbmdzKTtcclxuICAgICAgfSlcclxuICB9LCBbY291bnRdKTtcclxuXHJcbiAgLy9kZWZpbmluZyBlYXJuaW5nT25DaGFuZ2VcclxuICBjb25zdCBlYXJuaW5nT25DaGFuZ2UgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldEVhcm5pbmcoeyAuLi5lYXJuaW5nLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgY29uc29sZS5sb2coZWFybmluZyk7XHJcbiAgfVxyXG5cclxuIC8vZGVmaW5pbmcgaGFuZGxlRWFybmluZ09uU3VibWl0XHJcbiBjb25zdCBoYW5kbGVFYXJuaW5nT25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgYXhpb3MucG9zdChgJHthdXRoQ29udGV4dC5wYXNzY29kZX0vYXBpL3YxL3Bvc3QtZWFybmluZ2AsIGVhcm5pbmcsXHJcbiAgICB7IGhlYWRlcnM6IHsgJ3Bhc3Njb2RlJzogYCR7YXV0aENvbnRleHQucGFzc2NvZGV9YCB9IH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09PSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgT3BlcmF0aW9uIFN1Y2Nlc3NmdWxsYCk7XHJcbiAgICAgICAgc2V0Q291bnQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gIGNvbnNvbGUubG9nKCdoYW5kbGVFYXJuaW5nT25TdWJtaXQgVHJpZ2dlcmVkJyk7XHJcbn1cclxuICAvL2RlZmluaW5nIGVhcm5pbmcgY291bnRlciBmdW5jdGlvblxyXG4gIGNvbnN0IGVhcm5pbmdDb3VudGVyID0gKCkgPT57XHJcbiAgICBsZXQgdG90YWxFYXJuaW5nID0gMDtcclxuICBcclxuICAgICAgZm9yKGxldCBpPTA7IGk8ZWFybmluZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0b3RhbEVhcm5pbmcgPSB0b3RhbEVhcm5pbmcgKyBlYXJuaW5nc1tpXS5hbW91bnQ7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgcmV0dXJuIHRvdGFsRWFybmluZztcclxuICB9XHJcblxyXG4gIC8vZGVmaW5pbmcgb25DaGFuZ2VFeHBlbnNlXHJcbiAgY29uc3Qgb25DaGFuZ2VFeHBlbnNlID0gZSA9PntcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBzZXRFeHBlbnNlKHsuLi5leHBlbnNlLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICBjb25zb2xlLmxvZyhleHBlbnNlKTtcclxuICB9XHJcblxyXG4gIC8vZGVmaW5pbmcgZXhwZW5zZU9uU3VibWl0SGFuZGxlclxyXG4gIGNvbnN0IGV4cGVuc2VPblN1Ym1pdEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgYXhpb3MucG9zdChgJHthdXRoQ29udGV4dC5wYXNzY29kZX0vYXBpL3YxL3Bvc3QtZWFybmluZ2AsIGV4cGVuc2UsXHJcbiAgICAgIHsgaGVhZGVyczogeyAncGFzc2NvZGUnOiBgJHthdXRoQ29udGV4dC5wYXNzY29kZX1gIH0gfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYE9wZXJhdGlvbiBTdWNjZXNzZnVsbGApO1xyXG4gICAgICAgICAgc2V0Q291bnQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdoYW5kbGVFeHBlbnNlT25TdWJtaXQgVHJpZ2dlcmVkJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcblxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT5FYXJuaW5ncyAtICA8c3Bhbj4ge2Vhcm5pbmdDb3VudGVyKCl9IDwvc3Bhbj4gPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICB7LyogRWFybmluZyBGb3JtICovfVxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibWFpbi1mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZUVhcm5pbmdPblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZWFybmluZ09uQ2hhbmdlfSBzdHlsZT17eyBwYWRkaW5nOiAnLjRyZW0nIH19IGNsYXNzTmFtZT1cImJpbmFyeS1pbnB1dFwiIHR5cGU9XCJkYXRlXCIgbmFtZT1cImRhdGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIERhdGVcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2Vhcm5pbmdPbkNoYW5nZX0gY2xhc3NOYW1lPVwiYmluYXJ5LWlucHV0XCIgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJhbW91bnRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEFtb3VudFwiIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZWFybmluZ09uQ2hhbmdlfSBjbGFzc05hbWU9XCJiaW5hcnktaW5wdXQtMlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5vdGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIE5vdGVcIiAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJpbmFyeS1idXR0b25cIiB0eXBlPVwic3VibWl0XCI+SW5zZXJ0PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICB7LyogRWFybmluZyBUYWJsZSAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhlYWRcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5UaW1lc3RhbXA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+RGF0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5Ob3RlPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkFtb3VudDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7Lyog8J+OiCBMb29waW5nIEhlcmUg8J+OiCAqL31cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGVhcm5pbmdzLm1hcChlYXJuaW5nID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8RWFybmluZyBrZXk9e2Vhcm5pbmcuX2lkfSBlYXJuaW5nPXtlYXJuaW5nfSAvPlxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcblxyXG4gICAgICAgICAgPGxhYmVsPkV4cGVuc2VzPC9sYWJlbD5cclxuICAgICAgICAgIHsvKiBFYXJuaW5nIEZvcm0gKi99XHJcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtYWluLWZvcm1cIiBvblN1Ym1pdD17ZXhwZW5zZU9uU3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17b25DaGFuZ2VFeHBlbnNlfSBzdHlsZT17eyBwYWRkaW5nOiAnLjRyZW0nIH19IGNsYXNzTmFtZT1cImJpbmFyeS1pbnB1dFwiIHR5cGU9XCJkYXRlXCIgbmFtZT1cImRhdGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIERhdGVcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlRXhwZW5zZX0gY2xhc3NOYW1lPVwiYmluYXJ5LWlucHV0XCIgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJhbW91bnRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEFtb3VudFwiIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17b25DaGFuZ2VFeHBlbnNlfSBjbGFzc05hbWU9XCJiaW5hcnktaW5wdXQtMlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5vdGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIE5vdGVcIiAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJpbmFyeS1idXR0b25cIiB0eXBlPVwic3VibWl0XCI+SW5zZXJ0PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICB7LyogRXhwZW5zZSBUYWJsZSAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhlYWRcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5UaW1lc3RhbXA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+RGF0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5Ob3RlPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkFtb3VudDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+MjIvNC8yMDAxPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPjIzLzMvMjAwMzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5XZWxjb21lIEFtaWdvPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPjU2PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==