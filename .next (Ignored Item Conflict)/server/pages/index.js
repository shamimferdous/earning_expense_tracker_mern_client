module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/App.jsx":
/*!****************************!*\
  !*** ./components/App.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./components/Layout.jsx");
/* harmony import */ var _Earning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Earning */ "./components/Earning.jsx");
/* harmony import */ var _Expense__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Expense */ "./components/Expense.jsx");
/* harmony import */ var _context_api_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context-api/AuthContext */ "./context-api/AuthContext.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\B A T  M A C H I N E\\Dropbox\\Github\\Track-Earn-Ex__MERN-Stack\\client\\components\\App.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //importing all components



 //importing context api




const App = props => {
  const {
    0: earning,
    1: setEarning
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    date: "",
    amount: "",
    note: ""
  });
  const {
    0: expense,
    1: setExpense
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    date: "",
    amount: "",
    note: ""
  });
  const {
    0: earnings,
    1: setEarnings
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: expenses,
    1: setExpenses
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: count,
    1: setCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const authContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_api_AuthContext__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]); //the useEffect Hook... Getting Data from backend apis

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(`${"http://localhost:909"}/api/v1/get-earnings`, {
      headers: {
        passcode: `${authContext.passcode}`
      }
    }).then(response => {
      setEarnings(response.data.earnings);
    });
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(`${"http://localhost:909"}/api/v1/get-expenses`, {
      headers: {
        passcode: `${authContext.passcode}`
      }
    }).then(response => {
      setExpenses(response.data.expenses);
    });
  }, [count]); //defining earningOnChange

  const earningOnChange = e => {
    e.preventDefault();
    setEarning(_objectSpread(_objectSpread({}, earning), {}, {
      [e.target.name]: e.target.value
    }));
    console.log(earning);
  }; //defining handleEarningOnSubmit


  const handleEarningOnSubmit = e => {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(`${"http://localhost:909"}/api/v1/post-earning`, earning, {
      headers: {
        'passcode': `${authContext.passcode}`
      }
    }).then(response => {
      if (response.data.success === false) {
        console.log(`Internal Server Error`);
      } else {
        console.log(`Operation Successfull`);
        setCount(Math.random());
      }
    });
    console.log('handleEarningOnSubmit Triggered');
  }; //defining earning counter function


  const earningCounter = () => {
    let totalEarning = 0;

    for (let i = 0; i < earnings.length; i++) {
      totalEarning = totalEarning + earnings[i].amount;
    }

    return totalEarning;
  }; //defining onChangeExpense


  const onChangeExpense = e => {
    e.preventDefault();
    setExpense(_objectSpread(_objectSpread({}, expense), {}, {
      [e.target.name]: e.target.value
    }));
    console.log(expense);
  }; //defining expenseOnSubmitHandler


  const expenseOnSubmitHandler = e => {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(`${"http://localhost:909"}/api/v1/post-expense`, expense, {
      headers: {
        'passcode': `${authContext.passcode}`
      }
    }).then(response => {
      if (response.data.success === false) {
        console.log(`Internal Server Error`);
      } else {
        console.log(`Operation Successfull`);
        setCount(Math.random());
      }
    });
    console.log('handleExpenseOnSubmit Triggered');
  }; //defining expense counter
  //defining earning counter function


  const expenseCounter = () => {
    let totalExpense = 0;

    for (let i = 0; i < expenses.length; i++) {
      totalExpense = totalExpense + expenses[i].amount;
    }

    return totalExpense;
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx("label", {
    className: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, "Earnings -  ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 40
    }
  }, " ", earningCounter(), " "), " "), __jsx("form", {
    className: "main-form",
    onSubmit: handleEarningOnSubmit,
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: "binary-button",
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, "Insert")), __jsx("div", {
    className: "table-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "table table-head",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }, "Timestamp"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, "Date"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  }, "Note"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }, "Amount")), earnings.map(earning => {
    return __jsx(_Earning__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: earning._id,
      earning: earning,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 24
      }
    });
  }))), __jsx("div", {
    className: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 11
    }
  }, "Expenses - ", expenseCounter()), __jsx("form", {
    className: "main-form",
    onSubmit: expenseOnSubmitHandler,
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: "binary-button",
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }, "Insert")), __jsx("div", {
    className: "table-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "table table-head",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  }, "Timestamp"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  }, "Date"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 15
    }
  }, "Note"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 15
    }
  }, "Amount")), expenses.map(expense => {
    return __jsx(_Expense__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: expense._id,
      expense: expense,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 24
      }
    });
  })), __jsx("div", {
    className: "money-on-pocket",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  }, "1400 ", __jsx("svg", {
    className: "the-coin",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "coins",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 24
    }
  }, __jsx("path", {
    fill: "currentColor",
    d: "M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 192
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./components/Earning.jsx":
/*!********************************!*\
  !*** ./components/Earning.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\B A T  M A C H I N E\\Dropbox\\Github\\Track-Earn-Ex__MERN-Stack\\client\\components\\Earning.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Earning = ({
  earning
}) => {
  return __jsx("div", {
    className: "table",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, " ", moment__WEBPACK_IMPORTED_MODULE_1___default()(earning.timestamp).format('MMMM D, YYYY'), " "), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, moment__WEBPACK_IMPORTED_MODULE_1___default()(earning.date).format('MMMM D, YYYY'), " "), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, earning.note), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, earning.amount, " BDT"));
};

/* harmony default export */ __webpack_exports__["default"] = (Earning);

/***/ }),

/***/ "./components/Expense.jsx":
/*!********************************!*\
  !*** ./components/Expense.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\B A T  M A C H I N E\\Dropbox\\Github\\Track-Earn-Ex__MERN-Stack\\client\\components\\Expense.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Expense = ({
  expense
}) => {
  return __jsx("div", {
    className: "table",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, " ", moment__WEBPACK_IMPORTED_MODULE_1___default()(expense.timestamp).format('MMMM D, YYYY'), " "), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, moment__WEBPACK_IMPORTED_MODULE_1___default()(expense.date).format('MMMM D, YYYY'), " "), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, expense.note), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, expense.amount, " BDT"));
};

/* harmony default export */ __webpack_exports__["default"] = (Expense);

/***/ }),

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\B A T  M A C H I N E\\Dropbox\\Github\\Track-Earn-Ex__MERN-Stack\\client\\components\\Layout.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Layout = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, "Track Earning & Expense -- just another MERN app"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap",
    rel: "stylesheet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  })), __jsx("section", {
    className: "main",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Passcode.jsx":
/*!*********************************!*\
  !*** ./components/Passcode.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_api_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context-api/AuthContext */ "./context-api/AuthContext.js");
var _jsxFileName = "C:\\Users\\B A T  M A C H I N E\\Dropbox\\Github\\Track-Earn-Ex__MERN-Stack\\client\\components\\Passcode.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Passcode = props => {
  const authContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_api_AuthContext__WEBPACK_IMPORTED_MODULE_1__["AuthContext"]);
  const {
    0: passcodeInput,
    1: setPasscodeInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null); //defining onChangeHandler

  const onChangeHandler = e => {
    e.preventDefault();
    setPasscodeInput({
      value: e.target.value
    });
    console.log(passcodeInput);
  }; //defining onSubmitHandler


  const onSubmitHandler = e => {
    e.preventDefault();
    authContext.setPasscode(passcodeInput.value); // authContext.injectPasscodeToRequest(passcodeInput);
    // console.log(`hello`);
    // console.log(authContext.passcode);
  };

  return __jsx("form", {
    onSubmit: onSubmitHandler,
    className: "landing-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("input", {
    required: true,
    onChange: onChangeHandler,
    style: {
      width: "40vw"
    },
    className: "binary-input",
    type: "text",
    placeholder: "Type Passcode and Hit Enter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Passcode);

/***/ }),

/***/ "./context-api/AuthContext.js":
/*!************************************!*\
  !*** ./context-api/AuthContext.js ***!
  \************************************/
/*! exports provided: AuthContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\B A T  M A C H I N E\\Dropbox\\Github\\Track-Earn-Ex__MERN-Stack\\client\\context-api\\AuthContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

const AuthContextFunction = ({
  children
}) => {
  const {
    0: passcode,
    1: setPasscode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const injectPasscodeToRequest = string => {
    setPasscode(string);
  };

  return __jsx(AuthContext.Provider, {
    value: {
      setPasscode,
      passcode,
      injectPasscodeToRequest
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (AuthContextFunction);

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _components_Passcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Passcode */ "./components/Passcode.jsx");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/App */ "./components/App.jsx");
/* harmony import */ var _context_api_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context-api/AuthContext */ "./context-api/AuthContext.js");
var _jsxFileName = "C:\\Users\\B A T  M A C H I N E\\Dropbox\\Github\\Track-Earn-Ex__MERN-Stack\\client\\pages\\index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//importing components


 //importing context api




const Index = props => {
  const authContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_api_AuthContext__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, authContext.passcode ? null : __jsx(_components_Passcode__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 38
    }
  }), authContext.passcode === "devpass" ? __jsx(_components_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 54
    }
  }) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRWFybmluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FeHBlbnNlLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYXNzY29kZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC1hcGkvQXV0aENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsImVhcm5pbmciLCJzZXRFYXJuaW5nIiwidXNlU3RhdGUiLCJkYXRlIiwiYW1vdW50Iiwibm90ZSIsImV4cGVuc2UiLCJzZXRFeHBlbnNlIiwiZWFybmluZ3MiLCJzZXRFYXJuaW5ncyIsImV4cGVuc2VzIiwic2V0RXhwZW5zZXMiLCJjb3VudCIsInNldENvdW50IiwiYXV0aENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInByb2Nlc3MiLCJoZWFkZXJzIiwicGFzc2NvZGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZWFybmluZ09uQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUVhcm5pbmdPblN1Ym1pdCIsInBvc3QiLCJzdWNjZXNzIiwiTWF0aCIsInJhbmRvbSIsImVhcm5pbmdDb3VudGVyIiwidG90YWxFYXJuaW5nIiwiaSIsImxlbmd0aCIsIm9uQ2hhbmdlRXhwZW5zZSIsImV4cGVuc2VPblN1Ym1pdEhhbmRsZXIiLCJleHBlbnNlQ291bnRlciIsInRvdGFsRXhwZW5zZSIsInBhZGRpbmciLCJtYXAiLCJfaWQiLCJFYXJuaW5nIiwibW9tZW50IiwidGltZXN0YW1wIiwiZm9ybWF0IiwiRXhwZW5zZSIsIkxheW91dCIsImNoaWxkcmVuIiwiUGFzc2NvZGUiLCJwYXNzY29kZUlucHV0Iiwic2V0UGFzc2NvZGVJbnB1dCIsIm9uQ2hhbmdlSGFuZGxlciIsIm9uU3VibWl0SGFuZGxlciIsInNldFBhc3Njb2RlIiwid2lkdGgiLCJjcmVhdGVDb250ZXh0IiwiQXV0aENvbnRleHRGdW5jdGlvbiIsImluamVjdFBhc3Njb2RlVG9SZXF1ZXN0Iiwic3RyaW5nIiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVLVixRQUZMLENBREo7QUFRSCxDQWpCRDs7QUFtQmVTLGtGQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFFQTs7QUFFQSxNQUFNRyxLQUFLLEdBQUlyRSxLQUFELElBQVc7QUFHekIsUUFBTWUsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyxvRUFBRCxDQUE5QjtBQUlFLFNBQ0UsbUVBRUEsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0dGLFdBQVcsQ0FBQ1EsUUFBWixHQUF1QixJQUF2QixHQUE4QixNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIakMsRUFLRVIsV0FBVyxDQUFDUSxRQUFaLEtBQXlCRixTQUF6QixHQUErQyxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBL0MsR0FBdUQsSUFMekQsQ0FGQSxDQURGO0FBY0QsQ0FyQkQ7O0FBdUJlZ0Qsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNqQ0Esa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzeFwiKTtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL2ltcG9ydGluZyBhbGwgY29tcG9uZW50c1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vTGF5b3V0JztcclxuaW1wb3J0IEVhcm5pbmcgZnJvbSAnLi9FYXJuaW5nJztcclxuaW1wb3J0IEV4cGVuc2UgZnJvbSAnLi9FeHBlbnNlJztcclxuXHJcbi8vaW1wb3J0aW5nIGNvbnRleHQgYXBpXHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC1hcGkvQXV0aENvbnRleHQnO1xyXG5cclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBBcHAgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgY29uc3QgW2Vhcm5pbmcsIHNldEVhcm5pbmddID0gdXNlU3RhdGUoeyBkYXRlOiBcIlwiLCBhbW91bnQ6IFwiXCIsIG5vdGU6IFwiXCIgfSk7XHJcbiAgY29uc3QgW2V4cGVuc2UsIHNldEV4cGVuc2VdID0gdXNlU3RhdGUoeyBkYXRlOiBcIlwiLCBhbW91bnQ6IFwiXCIsIG5vdGU6IFwiXCIgfSk7XHJcbiAgY29uc3QgW2Vhcm5pbmdzLCBzZXRFYXJuaW5nc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2V4cGVuc2VzLCBzZXRFeHBlbnNlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGF1dGhDb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcblxyXG4gIC8vdGhlIHVzZUVmZmVjdCBIb29rLi4uIEdldHRpbmcgRGF0YSBmcm9tIGJhY2tlbmQgYXBpc1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuc2VydmVyQXBpfS9hcGkvdjEvZ2V0LWVhcm5pbmdzYCwgeyBoZWFkZXJzOiB7IHBhc3Njb2RlOiBgJHthdXRoQ29udGV4dC5wYXNzY29kZX1gIH0gfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHNldEVhcm5pbmdzKHJlc3BvbnNlLmRhdGEuZWFybmluZ3MpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5zZXJ2ZXJBcGl9L2FwaS92MS9nZXQtZXhwZW5zZXNgLCB7IGhlYWRlcnM6IHsgcGFzc2NvZGU6IGAke2F1dGhDb250ZXh0LnBhc3Njb2RlfWAgfSB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgc2V0RXhwZW5zZXMocmVzcG9uc2UuZGF0YS5leHBlbnNlcyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtjb3VudF0pO1xyXG5cclxuICAvL2RlZmluaW5nIGVhcm5pbmdPbkNoYW5nZVxyXG4gIGNvbnN0IGVhcm5pbmdPbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0RWFybmluZyh7IC4uLmVhcm5pbmcsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhlYXJuaW5nKTtcclxuICB9XHJcblxyXG4gIC8vZGVmaW5pbmcgaGFuZGxlRWFybmluZ09uU3VibWl0XHJcbiAgY29uc3QgaGFuZGxlRWFybmluZ09uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LnNlcnZlckFwaX0vYXBpL3YxL3Bvc3QtZWFybmluZ2AsIGVhcm5pbmcsXHJcbiAgICAgIHsgaGVhZGVyczogeyAncGFzc2NvZGUnOiBgJHthdXRoQ29udGV4dC5wYXNzY29kZX1gIH0gfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYE9wZXJhdGlvbiBTdWNjZXNzZnVsbGApO1xyXG4gICAgICAgICAgc2V0Q291bnQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdoYW5kbGVFYXJuaW5nT25TdWJtaXQgVHJpZ2dlcmVkJyk7XHJcbiAgfVxyXG5cclxuICAvL2RlZmluaW5nIGVhcm5pbmcgY291bnRlciBmdW5jdGlvblxyXG4gIGNvbnN0IGVhcm5pbmdDb3VudGVyID0gKCkgPT4ge1xyXG4gICAgbGV0IHRvdGFsRWFybmluZyA9IDA7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlYXJuaW5ncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0b3RhbEVhcm5pbmcgPSB0b3RhbEVhcm5pbmcgKyBlYXJuaW5nc1tpXS5hbW91bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRvdGFsRWFybmluZztcclxuICB9XHJcblxyXG4gIC8vZGVmaW5pbmcgb25DaGFuZ2VFeHBlbnNlXHJcbiAgY29uc3Qgb25DaGFuZ2VFeHBlbnNlID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgc2V0RXhwZW5zZSh7IC4uLmV4cGVuc2UsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhleHBlbnNlKTtcclxuICB9XHJcblxyXG4gIC8vZGVmaW5pbmcgZXhwZW5zZU9uU3VibWl0SGFuZGxlclxyXG4gIGNvbnN0IGV4cGVuc2VPblN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuc2VydmVyQXBpfS9hcGkvdjEvcG9zdC1leHBlbnNlYCwgZXhwZW5zZSxcclxuICAgICAgeyBoZWFkZXJzOiB7ICdwYXNzY29kZSc6IGAke2F1dGhDb250ZXh0LnBhc3Njb2RlfWAgfSB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYEludGVybmFsIFNlcnZlciBFcnJvcmApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgT3BlcmF0aW9uIFN1Y2Nlc3NmdWxsYCk7XHJcbiAgICAgICAgICBzZXRDb3VudChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgY29uc29sZS5sb2coJ2hhbmRsZUV4cGVuc2VPblN1Ym1pdCBUcmlnZ2VyZWQnKTtcclxuICB9XHJcblxyXG5cclxuICAvL2RlZmluaW5nIGV4cGVuc2UgY291bnRlclxyXG4gICAgLy9kZWZpbmluZyBlYXJuaW5nIGNvdW50ZXIgZnVuY3Rpb25cclxuICAgIGNvbnN0IGV4cGVuc2VDb3VudGVyID0gKCkgPT4ge1xyXG4gICAgICBsZXQgdG90YWxFeHBlbnNlID0gMDtcclxuICBcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHBlbnNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRvdGFsRXhwZW5zZSA9IHRvdGFsRXhwZW5zZSArIGV4cGVuc2VzW2ldLmFtb3VudDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICByZXR1cm4gdG90YWxFeHBlbnNlO1xyXG4gICAgfVxyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcblxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT5FYXJuaW5ncyAtICA8c3Bhbj4ge2Vhcm5pbmdDb3VudGVyKCl9IDwvc3Bhbj4gPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICB7LyogRWFybmluZyBGb3JtICovfVxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibWFpbi1mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZUVhcm5pbmdPblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZWFybmluZ09uQ2hhbmdlfSBzdHlsZT17eyBwYWRkaW5nOiAnLjRyZW0nIH19IGNsYXNzTmFtZT1cImJpbmFyeS1pbnB1dFwiIHR5cGU9XCJkYXRlXCIgbmFtZT1cImRhdGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIERhdGVcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2Vhcm5pbmdPbkNoYW5nZX0gY2xhc3NOYW1lPVwiYmluYXJ5LWlucHV0XCIgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJhbW91bnRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEFtb3VudFwiIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZWFybmluZ09uQ2hhbmdlfSBjbGFzc05hbWU9XCJiaW5hcnktaW5wdXQtMlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5vdGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIE5vdGVcIiAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJpbmFyeS1idXR0b25cIiB0eXBlPVwic3VibWl0XCI+SW5zZXJ0PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICB7LyogRWFybmluZyBUYWJsZSAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhlYWRcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5UaW1lc3RhbXA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+RGF0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5Ob3RlPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkFtb3VudDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7Lyog8J+OiCBMb29waW5nIEhlcmUg8J+OiCAqL31cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGVhcm5pbmdzLm1hcChlYXJuaW5nID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8RWFybmluZyBrZXk9e2Vhcm5pbmcuX2lkfSBlYXJuaW5nPXtlYXJuaW5nfSAvPlxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcblxyXG4gICAgICAgICAgPGxhYmVsPkV4cGVuc2VzIC0ge2V4cGVuc2VDb3VudGVyKCl9PC9sYWJlbD5cclxuICAgICAgICAgIHsvKiBFYXJuaW5nIEZvcm0gKi99XHJcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtYWluLWZvcm1cIiBvblN1Ym1pdD17ZXhwZW5zZU9uU3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17b25DaGFuZ2VFeHBlbnNlfSBzdHlsZT17eyBwYWRkaW5nOiAnLjRyZW0nIH19IGNsYXNzTmFtZT1cImJpbmFyeS1pbnB1dFwiIHR5cGU9XCJkYXRlXCIgbmFtZT1cImRhdGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIERhdGVcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlRXhwZW5zZX0gY2xhc3NOYW1lPVwiYmluYXJ5LWlucHV0XCIgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJhbW91bnRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEFtb3VudFwiIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17b25DaGFuZ2VFeHBlbnNlfSBjbGFzc05hbWU9XCJiaW5hcnktaW5wdXQtMlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5vdGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIE5vdGVcIiAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJpbmFyeS1idXR0b25cIiB0eXBlPVwic3VibWl0XCI+SW5zZXJ0PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICB7LyogRXhwZW5zZSBUYWJsZSAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhlYWRcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5UaW1lc3RhbXA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+RGF0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5Ob3RlPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkFtb3VudDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7Lyog8J+OiCBMb29waW5nIEhlcmUg8J+OiCAqL31cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGV4cGVuc2VzLm1hcChleHBlbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8RXhwZW5zZSBrZXk9e2V4cGVuc2UuX2lkfSBleHBlbnNlPXtleHBlbnNlfSAvPlxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIE1vbmV5IG9uIFBvY2tldCAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9uZXktb24tcG9ja2V0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuPjE0MDAgPHN2ZyBjbGFzc05hbWU9XCJ0aGUtY29pblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJjb2luc1wiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTAgNDA1LjNWNDQ4YzAgMzUuMyA4NiA2NCAxOTIgNjRzMTkyLTI4LjcgMTkyLTY0di00Mi43QzM0Mi43IDQzNC40IDI2Ny4yIDQ0OCAxOTIgNDQ4UzQxLjMgNDM0LjQgMCA0MDUuM3pNMzIwIDEyOGMxMDYgMCAxOTItMjguNyAxOTItNjRTNDI2IDAgMzIwIDAgMTI4IDI4LjcgMTI4IDY0czg2IDY0IDE5MiA2NHpNMCAzMDAuNFYzNTJjMCAzNS4zIDg2IDY0IDE5MiA2NHMxOTItMjguNyAxOTItNjR2LTUxLjZjLTQxLjMgMzQtMTE2LjkgNTEuNi0xOTIgNTEuNlM0MS4zIDMzNC40IDAgMzAwLjR6bTQxNiAxMWM1Ny4zLTExLjEgOTYtMzEuNyA5Ni01NS40di00Mi43Yy0yMy4yIDE2LjQtNTcuMyAyNy42LTk2IDM0LjV2NjMuNnpNMTkyIDE2MEM4NiAxNjAgMCAxOTUuOCAwIDI0MHM4NiA4MCAxOTIgODAgMTkyLTM1LjggMTkyLTgwLTg2LTgwLTE5Mi04MHptMjE5LjMgNTYuM2M2MC0xMC44IDEwMC43LTMyIDEwMC43LTU2LjN2LTQyLjdjLTM1LjUgMjUuMS05Ni41IDM4LjYtMTYwLjcgNDEuOCAyOS41IDE0LjMgNTEuMiAzMy41IDYwIDU3LjJ6XCI+PC9wYXRoPjwvc3ZnPjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG5cclxuIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuY29uc3QgRWFybmluZyA9ICh7ZWFybmluZ30pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj4ge21vbWVudChlYXJuaW5nLnRpbWVzdGFtcCkuZm9ybWF0KCdNTU1NIEQsIFlZWVknKX0gPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj57bW9tZW50KGVhcm5pbmcuZGF0ZSkuZm9ybWF0KCdNTU1NIEQsIFlZWVknKX0gPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj57ZWFybmluZy5ub3RlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+e2Vhcm5pbmcuYW1vdW50fSBCRFQ8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFYXJuaW5nOyIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmNvbnN0IEV4cGVuc2UgPSAoe2V4cGVuc2V9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgPHNwYW4+IHttb21lbnQoZXhwZW5zZS50aW1lc3RhbXApLmZvcm1hdCgnTU1NTSBELCBZWVlZJyl9IDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+e21vbWVudChleHBlbnNlLmRhdGUpLmZvcm1hdCgnTU1NTSBELCBZWVlZJyl9IDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+e2V4cGVuc2Uubm90ZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPntleHBlbnNlLmFtb3VudH0gQkRUPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwZW5zZTsiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+VHJhY2sgRWFybmluZyAmIEV4cGVuc2UgLS0ganVzdCBhbm90aGVyIE1FUk4gYXBwPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVVidW50dTp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgey8qIFRoZSBNYWluIEJvZHkgKi99XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsIlxyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQtYXBpL0F1dGhDb250ZXh0JztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgUGFzc2NvZGUgPSAocHJvcHMpID0+IHtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGF1dGhDb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgICBjb25zdCBbcGFzc2NvZGVJbnB1dCwgc2V0UGFzc2NvZGVJbnB1dF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICAvL2RlZmluaW5nIG9uQ2hhbmdlSGFuZGxlclxyXG4gICAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyID0gZSA9PiB7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgc2V0UGFzc2NvZGVJbnB1dCh7dmFsdWU6IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGFzc2NvZGVJbnB1dCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL2RlZmluaW5nIG9uU3VibWl0SGFuZGxlclxyXG4gICAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGF1dGhDb250ZXh0LnNldFBhc3Njb2RlKHBhc3Njb2RlSW5wdXQudmFsdWUpO1xyXG4gICAgICAgIC8vIGF1dGhDb250ZXh0LmluamVjdFBhc3Njb2RlVG9SZXF1ZXN0KHBhc3Njb2RlSW5wdXQpO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgaGVsbG9gKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhdXRoQ29udGV4dC5wYXNzY29kZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0SGFuZGxlcn0gY2xhc3NOYW1lPVwibGFuZGluZy1mb3JtXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfSBzdHlsZT17eyB3aWR0aDogXCI0MHZ3XCIgfX0gY2xhc3NOYW1lPVwiYmluYXJ5LWlucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlR5cGUgUGFzc2NvZGUgYW5kIEhpdCBFbnRlclwiIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFzc2NvZGU7IiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcblxyXG5jb25zdCBBdXRoQ29udGV4dEZ1bmN0aW9uID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtwYXNzY29kZSwgc2V0UGFzc2NvZGVdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgaW5qZWN0UGFzc2NvZGVUb1JlcXVlc3QgPSAoc3RyaW5nKSA9PntcclxuICAgICAgICBzZXRQYXNzY29kZShzdHJpbmcpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzZXRQYXNzY29kZSwgcGFzc2NvZGUsIGluamVjdFBhc3Njb2RlVG9SZXF1ZXN0IH19PlxyXG5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG5cclxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHRGdW5jdGlvbjsiLCIvL2ltcG9ydGluZyBjb21wb25lbnRzXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFBhc3Njb2RlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFzc2NvZGUnO1xuaW1wb3J0IEFwcCBmcm9tICcuLi9jb21wb25lbnRzL0FwcCc7XG5cbi8vaW1wb3J0aW5nIGNvbnRleHQgYXBpXG5pbXBvcnQge0F1dGhDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0LWFwaS9BdXRoQ29udGV4dCc7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xuXG4gIFxuY29uc3QgYXV0aENvbnRleHQgPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuXG4gICAgPExheW91dD5cbiAgICAgXG4gICAgIHsvKiBDb25kaXRpb25hbCBSZW5kZXJpbmcgSGVyZSAqL31cbiAgICAgeyBhdXRoQ29udGV4dC5wYXNzY29kZSA/IG51bGwgOiA8UGFzc2NvZGUvPiB9XG5cbiAgICAge2F1dGhDb250ZXh0LnBhc3Njb2RlID09PSBwcm9jZXNzLmVudi5wYXNzY29kZT8gPEFwcC8+OiBudWxsIH1cblxuICAgIDwvTGF5b3V0PlxuXG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==