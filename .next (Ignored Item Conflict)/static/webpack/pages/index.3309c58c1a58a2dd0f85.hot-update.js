webpackHotUpdate_N_E("pages/index",{

/***/ "./context-api/AuthContext.js":
/*!************************************!*\
  !*** ./context-api/AuthContext.js ***!
  \************************************/
/*! exports provided: AuthContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\B A T  M A C H I N E\\Dropbox\\Github\\Track-Earn-Ex__MERN-Stack\\client\\context-api\\AuthContext.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

var AuthContextFunction = function AuthContextFunction(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("devpass"),
      passcode = _useState[0],
      setPasscode = _useState[1];

  var injectPasscodeToRequest = function injectPasscodeToRequest(string) {
    setPasscode(string);
  };

  return __jsx(AuthContext.Provider, {
    value: {
      setPasscode: setPasscode,
      passcode: passcode,
      injectPasscodeToRequest: injectPasscodeToRequest
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, children);
};

_s(AuthContextFunction, "sE5FV+A8efcKkQ4un2S+wl0YVSc=");

_c = AuthContextFunction;
/* harmony default export */ __webpack_exports__["default"] = (AuthContextFunction);

var _c;

$RefreshReg$(_c, "AuthContextFunction");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC1hcGkvQXV0aENvbnRleHQuanMiXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aENvbnRleHRGdW5jdGlvbiIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJwYXNzY29kZSIsInNldFBhc3Njb2RlIiwiaW5qZWN0UGFzc2NvZGVUb1JlcXVlc3QiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxXQUFXLEdBQUdDLDJEQUFhLEVBQWpDOztBQUdQLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBRVZDLHNEQUFRLFdBRkU7QUFBQSxNQUVuQ0MsUUFGbUM7QUFBQSxNQUV6QkMsV0FGeUI7O0FBSTFDLE1BQU1DLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQ0MsTUFBRCxFQUFXO0FBQ3ZDRixlQUFXLENBQUNFLE1BQUQsQ0FBWDtBQUNILEdBRkQ7O0FBS0EsU0FDSSxNQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFRixpQkFBVyxFQUFYQSxXQUFGO0FBQWVELGNBQVEsRUFBUkEsUUFBZjtBQUF5QkUsNkJBQXVCLEVBQXZCQTtBQUF6QixLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUtKLFFBRkwsQ0FESjtBQVFILENBakJEOztHQUFNRCxtQjs7S0FBQUEsbUI7QUFtQlNBLGtGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjMzMDljNThjMWE1OGEyZGQwZjg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0RnVuY3Rpb24gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3Bhc3Njb2RlLCBzZXRQYXNzY29kZV0gPSB1c2VTdGF0ZShgZGV2cGFzc2ApO1xyXG5cclxuICAgIGNvbnN0IGluamVjdFBhc3Njb2RlVG9SZXF1ZXN0ID0gKHN0cmluZykgPT57XHJcbiAgICAgICAgc2V0UGFzc2NvZGUoc3RyaW5nKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc2V0UGFzc2NvZGUsIHBhc3Njb2RlLCBpbmplY3RQYXNzY29kZVRvUmVxdWVzdCB9fT5cclxuXHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuXHJcbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0RnVuY3Rpb247Il0sInNvdXJjZVJvb3QiOiIifQ==