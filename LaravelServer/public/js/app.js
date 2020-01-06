/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/fsilva/dev/Projects/DADProject/LaravelServer/node_modules/@babel/runtime/regenerator/index.js'");

/***/ }),

/***/ "./node_modules/@mdi/font/css/materialdesignicons.css":
/*!************************************************************!*\
  !*** ./node_modules/@mdi/font/css/materialdesignicons.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader??ref--6-1!../../../postcss-loader/src??ref--6-2!./materialdesignicons.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@mdi/font/css/materialdesignicons.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/fsilva/dev/Projects/DADProject/LaravelServer/node_modules/axios/index.js'");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      title: 'Virtual Wallet',
      walletCount: 0
    };
  },
  methods: {
    getWalletCount: function getWalletCount() {
      var _this = this;

      axios.get('api/walletCount').then(function (response) {
        _this.walletCount = response.data;
      });
    }
  },
  mounted: function mounted() {
    this.getWalletCount();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/login.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: {
        email: "",
        password: ""
      },
      rules: {
        required: function required(value) {
          return !!value || 'Required.';
        },
        counter: function counter(value) {
          return value == null || value.length <= 20 || 'Max 20 characters';
        },
        email: function email(value) {
          var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        },
        passsword: function passsword(value) {
          return value == null || value.lenght < 8 || 'Minimum of 8 characters';
        }
      },
      hasAlert: null
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      this.hasAlert = false;

      if (!this.$refs.form.validate()) {
        return;
      }

      axios.post("api/login", this.user).then(function (response) {
        _this.$store.commit("setToken", response.data.access_token);

        return axios.get("api/users/me");
      }).then(function (response) {
        console.log(response);

        _this.$store.commit("setUser", response.data.data);

        _this.$socket.emit('register', response.data.data);

        _this.$router.push('/home');
      })["catch"](function (error) {
        _this.$store.commit("clearUserAndToken");

        _this.hasAlert = true;
        console.log(error);
      });
    },
    cancelLogin: function cancelLogin() {
      this.$emit('cancel-login');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/movements/CreateComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/movements/CreateComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {
        wallet_id: null,

        /* user id */
        type: null,
        transfer: false,
        transfer_movement_id: null,
        transfer_wallet_id: null,
        type_payment: null,
        category_id: null,
        iban: null,
        mb_entity_code: null,
        mb_payment_reference: null,
        description: null,
        source_description: null,
        value: null
      },
      incomeCategories: [],
      debitCategories: [],
      users: [],
      destUser: null,
      wallet: [],
      rules: {
        required: function required(value) {
          return !!value || 'Required.';
        },
        credit: function credit(value) {
          var pattern = /^(0(.(?:2[1-9]|[0-9]\d))|[1-9]\.(?:2[0-9]|[0-9]\d)|[1-8][0-9]\.(?:2[0-9]|[0-9]\d)|9[0-9]\.(?:2[0-9]|[0-9]\d)|[1-8][0-9]{2}\.(?:2[0-9]|[0-9]\d)|9[0-8][0-9]\.(?:2[0-9]|[0-9]\d)|99[0-9]\.(?:2[0-9]|[0-9]\d)|[1-4][0-9]{3}\.(?:2[0-9]|[0-9]\d)|5000\.(?:2[0-0]|[0-0]\d))$/;
          return pattern.test(value) || 'Must be a number between 0,01 and 5000,00';
        },
        iban: function iban(value) {
          var pattern = /^[A-Z]{2}[0-9]{23}$/;
          return pattern.test(value) || 'Must contain 2 letters and 23 digits';
        },
        mb_entity_code: function mb_entity_code(value) {
          var pattern = /^[0-9]{5}$/;
          return pattern.test(value) || 'Must contain 5 digits';
        },
        mb_payment_reference: function mb_payment_reference(value) {
          var pattern = /^[0-9]{9}$/;
          return pattern.test(value) || 'Must contain 9 digits';
        }
      },
      income_payment_types: [{
        text: 'Cash',
        value: 'c'
      }, {
        text: 'Bank Transfer',
        value: 'bt'
      }],
      expense_payment_types: [{
        text: 'Bank Transfer',
        value: 'bt'
      }, {
        text: 'MB payment',
        value: 'mb'
      }],
      hasAlert: null,
      errorMsg: null
    };
  },
  created: function created() {
    this.getIncomeCategories();
    this.getDebitCategories();
    this.getUsers();
  },
  methods: {
    getIncomeCategories: function getIncomeCategories() {
      var _this = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getIncomeCategories$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.get("/api/categories/incomeCategories").then(function (response) {
                _this.incomeCategories = response.data;
              })["catch"](function (error) {
                console.log(error);
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    getDebitCategories: function getDebitCategories() {
      var _this2 = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getDebitCategories$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.get("/api/categories/debitCategories").then(function (response) {
                _this2.debitCategories = response.data;
              })["catch"](function (error) {
                console.log(error);
              }));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      });
    },
    getUsers: function getUsers() {
      var _this3 = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getUsers$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.get("/api/users/platformUsers").then(function (response) {
                _this3.users = response.data;
                /*FILTERS TO REMOVE LOGGED IN USER*/

                _this3.users = _this3.users.filter(function (user) {
                  return user.id != _this3.$store.state.user.id;
                });
              })["catch"](function (error) {
                console.log(error);
              }));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      });
    },
    registerExpense: function registerExpense() {
      var _this4 = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function registerExpense$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              this.form.type = 'e'; //this.form.wallet_id = user_id;

              this.hasAlert = false;
              this.form.transfer_wallet_id = this.form.wallet_id;
              this.form.wallet_id = null;

              if (this.form.transfer === true) {
                this.form.transfer = 1;
              }

              if (this.$refs.form.validate()) {
                _context4.next = 7;
                break;
              }

              return _context4.abrupt("return");

            case 7:
              _context4.next = 9;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.get("api/users/".concat(this.form.transfer_wallet_id)).then(function (response) {
                _this4.destUser = response.data.data;
              })["catch"](function (error) {
                console.log(error);
              }));

            case 9:
              _context4.next = 11;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.post('api/registerMovement', this.form).then(function (response) {
                if (_this4.form.transfer == 1) {
                  _this4.$socket.emit('transfer-user', _this4.form.transfer_wallet_id, _this4.$store.state.user, _this4.form.value, _this4.destUser.email);
                }

                _this4.$toasted.show("Transfer sent!");

                _this4.$router.push('/movements');
              })["catch"](function (error) {
                _this4.hasAlert = true;
                _this4.errorMsg = "Error creating new movement!";
              }));

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    },
    registerIncome: function registerIncome() {
      var _this5 = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function registerIncome$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              this.form.transfer = 0;
              this.form.type = 'i';
              this.hasAlert = false;

              if (this.$refs.form.validate()) {
                _context5.next = 5;
                break;
              }

              return _context5.abrupt("return");

            case 5:
              _context5.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.get("api/users/".concat(this.form.wallet_id)).then(function (response) {
                _this5.destUser = response.data.data;
              })["catch"](function (error) {
                console.log(error);
              }));

            case 7:
              _context5.next = 9;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.post('api/registerMovement', this.form).then(function (response) {
                _this5.$socket.emit('income-user', _this5.form.wallet_id, _this5.form.value, _this5.destUser.email);

                _this5.$toasted.show("Income sent!");

                _this5.$router.push('/home');
              }));

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/movements/ListComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/movements/ListComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_1__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dialog: null,
      search: '',
      searchObject: {
        id: '',
        type: '',
        date: '',
        category_id: '',
        type_payment: '',
        email: '',
        end_date: ''
      },
      headers: [{
        text: 'ID',
        value: 'id'
      }, {
        text: 'Type',
        value: 'type'
      }, {
        text: 'Transfer',
        value: 'transfer'
      }, {
        text: 'Transfer Wallet Email',
        value: 'transfer_wallet_id'
      }, {
        text: 'Type Payment',
        value: 'type_payment'
      }, {
        text: 'Category',
        value: 'category_id'
      }, {
        text: 'IBAN',
        value: 'iban'
      }, {
        text: 'MB Entity Code',
        value: 'mb_entity_code'
      }, {
        text: 'MB Payment Reference',
        value: 'mb_payment_reference'
      }, {
        text: 'Description',
        value: 'description'
      }, {
        text: 'Source Description',
        value: 'source_description'
      }, {
        text: 'Date',
        value: 'date'
      }, {
        text: 'Start Balance',
        value: 'start_balance'
      }, {
        text: 'End Balance',
        value: 'end_balance'
      }, {
        text: 'Value',
        value: 'value'
      }, {
        text: 'Actions',
        value: 'action',
        sortable: false
      }],
      movements: [],
      categories: [],
      wallet: [],
      user: [],
      users: [],
      user_id: null,
      user_wallet_id: null,
      editedIndex: -1,
      editedMovement: {
        id: '',
        category_id: '',
        description: ''
      },
      defaultMovement: {
        id: '',
        category_id: '',
        description: ''
      }
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'Edit Movement' : 'Edit Movement';
    },
    getfilters: function getfilters() {
      var self = this;
      var movements = this.movements;

      if (this.searchObject.category_id !== '') {
        movements = movements.filter(function (movements) {
          return movements.category_id.includes(self.searchObject.category_id);
        });
      }

      if (this.searchObject.type !== '') {
        movements = movements.filter(function (movements) {
          return movements.type.toLowerCase().includes(self.searchObject.type.toLowerCase());
        });
      }

      if (this.searchObject.id !== '') {
        movements = movements.filter(function (movements) {
          return movements.id.toString().includes(self.searchObject.id);
        });
      }

      if (this.searchObject.type_payment !== '') {
        movements = movements.filter(function (movements) {
          return movements.type_payment.toLowerCase().includes(self.searchObject.type_payment.toLowerCase());
        });
      }

      if (this.searchObject.end_date !== '') {
        movements.forEach(function (element) {
          if (element.date >= self.searchObject.date && element.date <= self.searchObject.end_date) {}
        });
      } else {
        if (this.searchObject.date !== '') {
          movements = movements.filter(function (movements) {
            return movements.date.toLowerCase().includes(self.searchObject.date.toLowerCase());
          });
        }
      }

      return movements;
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  created: function created() {
    this.getCategories();
    this.getUser();
    this.getUsers();
  },
  methods: {
    getCategories: function getCategories() {
      var _this = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getCategories$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.get("/api/categories").then(function (response) {
                _this.categories = response.data;
              })["catch"](function (error) {
                console.log(error);
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    getUsers: function getUsers() {
      var _this2 = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getUsers$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.get("/api/users").then(function (response) {
                _this2.users = response.data;
              })["catch"](function (error) {
                console.log(error);
              }));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      });
    },
    getUser: function getUser() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getUser$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              this.user = this.$store.state.user;
              this.user_id = this.user.id;

              if (this.user.type === 'u') {
                this.user_wallet_id = this.user.id;
                this.getUserWallet();
                this.getMovements();
              }

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    },
    getMovements: function getMovements() {
      var _this3 = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getMovements$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.get("/api/users/movements").then(function (response) {
                _this3.movements = response.data;
                _this3.user_wallet_id = response.data[0].wallet_id;

                _this3.movements.forEach(function (element) {
                  element.transfer == 1 ? element.transfer = 'Yes' : element.transfer = 'No';
                  element.type == 'e' ? element.type = 'Expense' : element.type = 'Income';
                  element.type_payment == 'c' ? element.type_payment = 'Cash' : element.type_payment == 'bt' ? element.type_payment = 'Bank Transfer' : element.type_payment = 'MB Payment';

                  _this3.categories.forEach(function (category) {
                    element.category_id == category.id ? element.category_id = category.name : 'n/a';
                  });

                  if (element.category_id === null) {
                    element.category_id = 'N/A';
                  } // this.users.forEach(user => {
                  //   element.transfer_wallet_id == user.id ? element.transfer_wallet_id = user.email : element.transfer_wallet_id = 'N/A'
                  //   element.wallet_id == user.id ? element.wallet_id = user.email : element.wallet_id = 'N/A'
                  // });

                });
              })["catch"](function (error) {
                console.log(error);
              }));

            case 2:
              this.getUserWallet();

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    },
    getUserWallet: function getUserWallet() {
      var _this4 = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getUserWallet$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.get("/api/wallets/" + this.user_wallet_id).then(function (response) {
                _this4.wallet = response.data;
              })["catch"](function (error) {
                console.log(error);
              }));

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this);
    },
    registerMovement: function registerMovement() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function registerMovement$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              this.$router.push('/movements/create');

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, null, this);
    },
    close: function close() {
      var _this5 = this;

      this.dialog = false;
      setTimeout(function () {
        _this5.editedMovement = Object.assign({}, _this5.defaultMovement);
        _this5.editedIndex = -1;

        _this5.getMovements();
      }, 300);
    },
    save: function save() {
      var _this6 = this;

      var formData, headers;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function save$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              formData = new FormData();
              console.log(this.editedMovement.description);
              formData.append('category_id', this.editedMovement.category_id);
              formData.append('description', this.editedMovement.description);
              headers = {
                'Content-Type': 'multipart/form-data'
              };
              console.log(this.editedMovement.id);
              _context7.next = 8;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.post('api/movements/update/' + this.editedMovement.id, formData, {
                'Content-Type': 'multipart/form-data'
              }).then(function (response) {
                console.log(response.data);
              })["catch"](function (error) {
                _this6.hasAlert = true;
                console.log(error);
              }));

            case 8:
              this.getMovements();
              this.dialog = false;

            case 10:
            case "end":
              return _context7.stop();
          }
        }
      }, null, this);
    },
    editMovement: function editMovement(item) {
      this.movement_id = this.movements.indexOf(item);
      this.editedMovement = Object.assign({}, item);
      this.dialog = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _this = this;

    return {
      name: null,
      email: null,
      password: null,
      passwordConfirmation: null,
      nif: null,
      selectedFile: null,
      type: 'u',
      active: 1,
      photo: null,
      rules: {
        required: function required(value) {
          return !!value || 'Required.';
        },
        counter: function counter(value) {
          return value == null || value.length <= 20 || 'Max 20 characters';
        },
        email: function email(value) {
          var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        },
        password: function password(value) {
          var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{3,}$/;
          return pattern.test(value) || 'Must contain at least 1 uppercase letter, 1 lowercase letter and 1 number. Min of 3 characters';
        },
        passwordConfirmation: function passwordConfirmation(value) {
          return value == null || value == _this.password || 'Passwords dont match.';
        },
        nif: function nif(value) {
          var pattern = /^([0-9]{9})+$/;
          return pattern.test(value) || 'Min of 9 characters';
        }
      },
      hasAlert: null
    };
  },
  methods: {
    register: function register() {
      var _this2 = this;

      var formData, headers;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function register$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.hasAlert = false;

              if (this.$refs.form.validate()) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              formData = new FormData();
              formData.append('name', this.name);
              formData.append('email', this.email);
              formData.append('password', this.password);
              formData.append('password_confirmation', this.passwordConfirmation);
              formData.append('type', this.type);
              formData.append('active', this.active);
              formData.append('nif', this.nif);
              console.log(this.photo);
              if (this.photo) formData.append('photo', this.photo);
              headers = {
                'Content-Type': 'multipart/form-data'
              };
              _context.next = 16;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.post('api/register', formData, headers).then(function (response) {
                /*SAVE TOKEN IN SESSION*/
                var token = response.data.access_token;
                localStorage.setItem('token', token);
                axios.defaults.headers.common['Authorization'] = token;

                _this2.$router.push('/login');
              })["catch"](function (error) {
                _this2.hasAlert = true;
                console.log(error);
              }));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/EditComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/EditComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _this = this;

    return {
      passwordConfirmation: null,
      user: {
        name: "",
        email: "",
        type: "",
        active: 0,
        nif: 0
      },
      selectedFile: null,
      name: null,
      oldPassword: null,
      newPassword: null,
      newPasswordConf: null,
      nif: null,
      photo: null,
      errorMsg: null,
      rules: {
        required: function required(value) {
          return !!value || 'Required.';
        },
        requiredPassword: function requiredPassword(value) {
          if (_this.oldPassword != null && _this.newPassword != null && _this.newPasswordConf != null || _this.oldPassword == null && _this.newPassword == null && _this.newPasswordConf == null) {
            return true;
          }

          return 'Old and New Password required to change password';
        },
        counter: function counter(value) {
          return value == null || value.length <= 20 || 'Max 20 characters';
        },
        password: function password(value) {
          if (value != null) {
            var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{3,}$/;
            return pattern.test(value) || 'Must contain at least 1 uppercase letter, 1 lowercase letter and 1 number. Min of 3 characters';
          }
        },
        passwordConfirmation: function passwordConfirmation(value) {
          return value == null || value == _this.newPassword || 'Passwords dont match.';
        },
        nif: function nif(value) {
          var pattern = /^([0-9]{9})+$/;
          return pattern.test(value) || 'Min of 9 characters';
        }
      },
      hasAlert: null
    };
  },
  mounted: function mounted() {
    this.getUser();
  },
  methods: {
    getUser: function getUser() {
      var _this2 = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getUser$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.get("api/users/me").then(function (response) {
                _this2.user = response.data.data;
                console.log(_this2.user);
              })["catch"](function (error) {
                console.log(error);
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    update: function update() {
      var _this3 = this;

      var formData, headers;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function update$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.hasAlert = false;

              if (this.$refs.form.validate()) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return");

            case 3:
              formData = new FormData();
              formData.append('name', this.user.name);

              if (this.oldPassword != null && this.newPassword != null) {
                formData.append('oldPassword', this.oldPassword);
                formData.append('newPassword', this.newPassword);
              }

              if (this.user.nif != null) {
                formData.append('nif', this.user.nif);
              }

              console.log(this.photo);

              if (this.photo) {
                formData.append('photo', this.photo);
              }

              headers = {
                'Content-Type': 'multipart/form-data'
              };
              _context2.next = 12;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.post("api/users/".concat(this.user.id), formData, headers).then(function (response) {
                _this3.$store.commit('setUser', response.data);

                _this3.errorMsg = "Updated with success!";
                _this3.hasAlert = true;

                _this3.$router.push('/home');
              })["catch"](function (error) {
                _this3.errorMsg = "Error updating profile!";
                _this3.hasAlert = true; //console.log(error)
              }));

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/ListUsers.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/ListUsers.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_1__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      search: '',
      dialog: false,
      headers: [{
        text: 'User Name',
        value: 'name'
      }, {
        text: 'Email',
        value: 'email'
      }, {
        text: 'Type',
        value: 'type'
      }, {
        text: 'Active',
        value: 'active'
      }, {
        text: 'NIF',
        value: 'nif'
      }, {
        text: 'Photo',
        value: 'photo'
      }, {
        text: 'Actions',
        value: 'action',
        sortable: false
      }],
      users: [],
      user: [],
      selectedFile: null,
      editedIndex: -1,
      editedUser: {
        name: '',
        email: '',
        type: '',
        acive: '',
        photo: ''
      },
      defaultUser: {
        name: '',
        email: '',
        type: '',
        acive: '',
        photo: ''
      },
      userTypes: [{
        text: 'Admin',
        value: 'a'
      }, {
        text: 'Operator',
        value: 'o'
      }]
    };
  },
  hasAlert: null,
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'New Admin/Operator' : 'edit';
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  created: function created() {
    this.getUsers();
    this.getUser();
  },
  methods: {
    getUser: function getUser() {
      var _this = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getUser$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.get("api/users/me").then(function (response) {
                _this.user = response.data.data;
              })["catch"](function (error) {
                console.log(error);
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    getUsers: function getUsers() {
      var _this2 = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getUsers$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.get("/api/usersList").then(function (response) {
                _this2.users = response.data.data;
              })["catch"](function (error) {
                console.log(error);
              }));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      });
    },
    editUser: function editUser(item) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function editUser$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              this.editedIndex = this.users.indexOf(item);
              this.editedUser = Object.assign({}, item);
              this.dialog = true;

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    },
    deleteUser: function deleteUser(item) {
      var _this3 = this;

      var user_id;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function deleteUser$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              user_id = this.users.indexOf(item) + 1;
              console.log();
              _context4.t0 = confirm('Are you sure you want to delete this item?');

              if (!_context4.t0) {
                _context4.next = 6;
                break;
              }

              _context4.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.put('api/users/delete/' + user_id).then(function (response) {})["catch"](function (error) {
                _this3.hasAlert = true;
                console.log(error);
              }));

            case 6:
              this.getUsers();

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    },
    close: function close() {
      var _this4 = this;

      this.dialog = false;
      setTimeout(function () {
        _this4.editedUser = Object.assign({}, _this4.defaultUser);
        _this4.editedIndex = -1;

        _this4.getUsers();
      }, 300);
    },
    save: function save() {
      var _this5 = this;

      var formData, headers;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function save$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              this.hasAlert = false;
              formData = new FormData();
              formData.append('name', this.editedUser.name);
              formData.append('email', this.editedUser.email);
              formData.append('password', 'Gt3');
              formData.append('password_confirmation', 'Gt3');
              formData.append('type', this.editedUser.type);
              formData.append('active', 1);
              formData.append('nif', this.editedUser.nif);
              if (this.selectedFile) formData.append('photo', this.selectedFile);
              headers = {
                'Content-Type': 'multipart/form-data'
              };
              _context5.next = 13;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.post('api/register', formData, headers).then(function (response) {})["catch"](function (error) {
                _this5.hasAlert = true;
                console.log(error);
              }));

            case 13:
              this.close();

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@mdi/font/css/materialdesignicons.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/@mdi/font/css/materialdesignicons.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/postcss-loader/src/index.js):\nError: ENOENT: no such file or directory, open '/home/fsilva/dev/Projects/DADProject/LaravelServer/node_modules/@mdi/font/css/materialdesignicons.css'");

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/fsilva/dev/Projects/DADProject/LaravelServer/node_modules/lodash/lodash.js'");

/***/ }),

/***/ "./node_modules/q/q.js":
/*!*****************************!*\
  !*** ./node_modules/q/q.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/fsilva/dev/Projects/DADProject/LaravelServer/node_modules/q/q.js'");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/fsilva/dev/Projects/DADProject/LaravelServer/node_modules/style-loader/lib/addStyles.js'");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home.vue?vue&type=template&id=fa6affac&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home.vue?vue&type=template&id=fa6affac& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "jumbotron" }, [
        _c("h1", { staticClass: "text-center" }, [_vm._v(_vm._s(_vm.title))])
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "text-center" }, [
        _vm._v("V-Wallet, your own simple Virtual Wallet")
      ]),
      _vm._v(" "),
      _c("v-spacer"),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c("v-spacer"),
      _vm._v(" "),
      _c("h4", { staticClass: "text-center" }, [
        _vm._v("Total ammount of wallets: " + _vm._s(_vm.walletCount))
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/login.vue?vue&type=template&id=172b28a4&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/login.vue?vue&type=template&id=172b28a4& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c(
        "v-app",
        { attrs: { id: "inspire" } },
        [
          _c(
            "v-content",
            [
              _c(
                "v-container",
                { attrs: { fluid: "", "fill-height": "" } },
                [
                  _c(
                    "v-layout",
                    { attrs: { "align-center": "", "justify-center": "" } },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", sm8: "", md4: "" } },
                        [
                          _c(
                            "v-card",
                            { staticClass: "elevation-12" },
                            [
                              _c(
                                "v-toolbar",
                                {
                                  attrs: {
                                    color: "primary",
                                    dark: "",
                                    flat: ""
                                  }
                                },
                                [
                                  _c("v-toolbar-title", [_vm._v("Login form")]),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c("v-tooltip", {
                                    attrs: { bottom: "" },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "activator",
                                        fn: function(ref) {
                                          var on = ref.on
                                          return undefined
                                        }
                                      }
                                    ])
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-tooltip",
                                    {
                                      attrs: { right: "" },
                                      scopedSlots: _vm._u([
                                        {
                                          key: "activator",
                                          fn: function(ref) {
                                            var on = ref.on
                                            return undefined
                                          }
                                        }
                                      ])
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("span", [_vm._v("Codepen")])
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-form",
                                    { ref: "form" },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Email",
                                          name: "email",
                                          "prepend-icon": "person",
                                          type: "text",
                                          rules: [
                                            _vm.rules.required,
                                            _vm.rules.counter,
                                            _vm.rules.email
                                          ]
                                        },
                                        model: {
                                          value: _vm.user.email,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.user,
                                              "email",
                                              typeof $$v === "string"
                                                ? $$v.trim()
                                                : $$v
                                            )
                                          },
                                          expression: "user.email"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: {
                                          id: "password",
                                          label: "Password",
                                          name: "password",
                                          "prepend-icon": "lock",
                                          type: "password",
                                          rules: [
                                            _vm.rules.required,
                                            _vm.rules.password
                                          ]
                                        },
                                        model: {
                                          value: _vm.user.password,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "password", $$v)
                                          },
                                          expression: "user.password"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.hasAlert
                                ? _c(
                                    "v-alert",
                                    {
                                      attrs: {
                                        color: "red",
                                        dense: "",
                                        outlined: "",
                                        type: "error"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "Wrong username/password combination! "
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { color: "primary" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.cancelLogin()
                                        }
                                      }
                                    },
                                    [_vm._v("Cancel")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { color: "primary" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.login()
                                        }
                                      }
                                    },
                                    [_vm._v("Login")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/movements/CreateComponent.vue?vue&type=template&id=b05043ca&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/movements/CreateComponent.vue?vue&type=template&id=b05043ca& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c(
        "v-app",
        { attrs: { id: "inspire" } },
        [
          _c(
            "v-content",
            [
              _c(
                "v-container",
                { attrs: { fluid: "", "fill-height": "", "fill-width": "" } },
                [
                  _c(
                    "v-layout",
                    { attrs: { "align-center": "", "justify-center": "" } },
                    [
                      _vm.$store.state.user &&
                      _vm.$store.state.user.active === 1
                        ? _c(
                            "v-flex",
                            { attrs: { xs12: "", sm8: "", md8: "" } },
                            [
                              _c(
                                "v-card",
                                { staticClass: "elevation-12" },
                                [
                                  _c(
                                    "v-toolbar",
                                    {
                                      attrs: {
                                        color: "primary",
                                        dark: "",
                                        flat: ""
                                      }
                                    },
                                    [
                                      _c("v-toolbar-title", [
                                        _vm._v("Register New Movement")
                                      ]),
                                      _vm._v(" "),
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c("v-tooltip", {
                                        attrs: { bottom: "" },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "activator",
                                              fn: function(ref) {
                                                var on = ref.on
                                                return undefined
                                              }
                                            }
                                          ],
                                          null,
                                          false,
                                          2612987011
                                        )
                                      }),
                                      _vm._v(" "),
                                      _c("v-tooltip", {
                                        attrs: { right: "" },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "activator",
                                              fn: function(ref) {
                                                var on = ref.on
                                                return undefined
                                              }
                                            }
                                          ],
                                          null,
                                          false,
                                          2612987011
                                        )
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-form",
                                        { ref: "form" },
                                        [
                                          (_vm.$store.state.user.type === "o" ||
                                            _vm.$store.state.user.type ===
                                              "a") &&
                                          _vm.$store.state.user.active === 1
                                            ? _c(
                                                "v-col",
                                                {
                                                  staticClass: "d-flex",
                                                  attrs: { cols: "12", sm: "6" }
                                                },
                                                [
                                                  _c("v-select", {
                                                    attrs: {
                                                      rules: [
                                                        _vm.rules.required
                                                      ],
                                                      items:
                                                        _vm.income_payment_types,
                                                      label: "Type of Payment"
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.form.type_payment,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "type_payment",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.type_payment"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.$store.state.user.type === "u" &&
                                          _vm.$store.state.user.active === 1
                                            ? _c(
                                                "v-col",
                                                {
                                                  staticClass: "d-flex",
                                                  attrs: { cols: "12", sm: "6" }
                                                },
                                                [
                                                  _c("v-checkbox", {
                                                    attrs: {
                                                      label: "Transfer"
                                                    },
                                                    model: {
                                                      value: _vm.form.transfer,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "transfer",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.transfer"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.$store.state.user.type === "u" &&
                                          _vm.$store.state.user.active === 1 &&
                                          _vm.form.transfer == false
                                            ? _c(
                                                "v-col",
                                                {
                                                  staticClass: "d-flex",
                                                  attrs: { cols: "12", sm: "6" }
                                                },
                                                [
                                                  _c("v-select", {
                                                    attrs: {
                                                      rules: [
                                                        _vm.rules.required
                                                      ],
                                                      items:
                                                        _vm.expense_payment_types,
                                                      label: "Type of Payment"
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.form.type_payment,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "type_payment",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.type_payment"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.form.type_payment === "bt"
                                            ? _c(
                                                "v-row",
                                                [
                                                  _c(
                                                    "v-col",
                                                    { attrs: { cols: "8" } },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          id: "iban",
                                                          label: "IBAN",
                                                          hint:
                                                            "Insert IBAN, 2 letters and 23 digits",
                                                          rules: [
                                                            _vm.rules.required,
                                                            _vm.rules.iban
                                                          ]
                                                        },
                                                        model: {
                                                          value: _vm.form.iban,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.form,
                                                              "iban",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "form.iban"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.form.type_payment === "mb"
                                            ? _c(
                                                "v-row",
                                                [
                                                  _c(
                                                    "v-col",
                                                    { attrs: { cols: "8" } },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          id: "mb_entity_code",
                                                          label:
                                                            "MB entity code",
                                                          hint:
                                                            "Insert MB entity code, 5 digits",
                                                          rules: [
                                                            _vm.rules.required,
                                                            _vm.rules
                                                              .mb_entity_code
                                                          ]
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.form
                                                              .mb_entity_code,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.form,
                                                              "mb_entity_code",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "form.mb_entity_code"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    { attrs: { cols: "8" } },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          id:
                                                            "mb_payment_reference",
                                                          label:
                                                            "MB payment reference",
                                                          hint:
                                                            "Insert MB payment reference, 9 digits",
                                                          rules: [
                                                            _vm.rules.required,
                                                            _vm.rules
                                                              .mb_payment_reference
                                                          ]
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.form
                                                              .mb_payment_reference,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.form,
                                                              "mb_payment_reference",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "form.mb_payment_reference"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "v-row",
                                            [
                                              (_vm.$store.state.user.type ===
                                                "o" ||
                                                _vm.$store.state.user.type ===
                                                  "a" ||
                                                (_vm.$store.state.user.type ===
                                                  "u" &&
                                                  _vm.form.transfer == true)) &&
                                              _vm.$store.state.user.active === 1
                                                ? _c(
                                                    "v-col",
                                                    {
                                                      staticClass: "d-flex",
                                                      attrs: {
                                                        cols: "12",
                                                        sm: "6"
                                                      }
                                                    },
                                                    [
                                                      _c("v-select", {
                                                        attrs: {
                                                          rules: [
                                                            _vm.rules.required
                                                          ],
                                                          items: _vm.users,
                                                          "item-text": "name",
                                                          "item-value": "id",
                                                          label: "Users"
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.form.wallet_id,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.form,
                                                              "wallet_id",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "form.wallet_id"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass: "d-flex",
                                                  attrs: { cols: "12", sm: "6" }
                                                },
                                                [
                                                  _c("v-select", {
                                                    attrs: {
                                                      rules: [
                                                        _vm.rules.required
                                                      ],
                                                      items:
                                                        _vm.incomeCategories,
                                                      "item-text": "name",
                                                      "item-value": "id",
                                                      label: "Category"
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.form.category_id,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "category_id",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.category_id"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-row",
                                            [
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "3"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "Description"
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.form.description,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "description",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.description"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              (_vm.$store.state.user.type ===
                                                "o" ||
                                                _vm.$store.state.user.type ===
                                                  "a") &&
                                              _vm.$store.state.user.active === 1
                                                ? _c(
                                                    "v-col",
                                                    {
                                                      attrs: {
                                                        cols: "12",
                                                        sm: "6",
                                                        md: "3"
                                                      }
                                                    },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          label:
                                                            "Source description"
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.form
                                                              .source_description,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.form,
                                                              "source_description",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "form.source_description"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                : _vm._e()
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-row",
                                            [
                                              _c(
                                                "v-col",
                                                { attrs: { cols: "8" } },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      id: "value",
                                                      label: "Value to Credit",
                                                      hint:
                                                        "from 0,01€ up to 5000,00€",
                                                      prefix: "€",
                                                      rules: [
                                                        _vm.rules.required,
                                                        _vm.rules.credit
                                                      ]
                                                    },
                                                    model: {
                                                      value: _vm.form.value,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "value",
                                                          $$v
                                                        )
                                                      },
                                                      expression: "form.value"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  (_vm.$store.state.user.type === "o" ||
                                    _vm.$store.state.user.type === "a") &&
                                  _vm.$store.state.user.active === 1
                                    ? _c(
                                        "v-card-actions",
                                        [
                                          _c("v-spacer"),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: { color: "primary" },
                                              on: {
                                                click: function($event) {
                                                  $event.preventDefault()
                                                  return _vm.registerIncome()
                                                }
                                              }
                                            },
                                            [_vm._v("Register New Movement")]
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-actions",
                                    [
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _vm.hasAlert
                                        ? _c(
                                            "v-alert",
                                            {
                                              attrs: {
                                                color: "red",
                                                dense: "",
                                                outlined: "",
                                                type: "error"
                                              }
                                            },
                                            [_vm._v(_vm._s(_vm.errorMsg))]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _vm.$store.state.user.type === "u" &&
                                  _vm.$store.state.user.active === 1
                                    ? _c(
                                        "v-card-actions",
                                        [
                                          _c("v-spacer"),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: { color: "primary" },
                                              on: {
                                                click: function($event) {
                                                  $event.preventDefault()
                                                  return _vm.registerExpense()
                                                }
                                              }
                                            },
                                            [_vm._v("Register New Movement")]
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _c("v-col", [
                            _vm._v("\n            Não vai dar\n          ")
                          ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/movements/ListComponent.vue?vue&type=template&id=40f8f38e&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/movements/ListComponent.vue?vue&type=template&id=40f8f38e& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c(
        "v-app",
        { attrs: { id: "inspire" } },
        [
          _c(
            "v-content",
            [
              _c(
                "v-container",
                { attrs: { fluid: "", "fill-height": "", "fill-width": "" } },
                [
                  _c(
                    "v-layout",
                    { attrs: { "align-center": "", "justify-center": "" } },
                    [
                      _c(
                        "v-col",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                !_vm.$store.state.user ||
                                !_vm.$store.state.user.type === "a",
                              expression:
                                "!$store.state.user || !$store.state.user.type === 'a'"
                            }
                          ],
                          attrs: { link: "", xs8: "", sm8: "", md11: "" }
                        },
                        [_vm._v(" N/A ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.$store.state.user,
                              expression: "$store.state.user"
                            }
                          ],
                          attrs: { link: "", xs8: "", sm8: "", md11: "" }
                        },
                        [
                          _vm.$store.state.user.type === "u"
                            ? _c(
                                "v-row",
                                { attrs: { align: "center" } },
                                [
                                  _c("v-col", { attrs: { cols: "12" } }, [
                                    _c(
                                      "p",
                                      { staticClass: "subtitle-2 text-center" },
                                      [
                                        _vm._v(
                                          "Balance: " +
                                            _vm._s(this.wallet.balance) +
                                            " € "
                                        )
                                      ]
                                    )
                                  ])
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _vm.$store.state.user.type === "o"
                                ? _c(
                                    "v-btn",
                                    {
                                      attrs: { color: "primary" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.registerMovement()
                                        }
                                      }
                                    },
                                    [_vm._v("Register New Income")]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.$store.state.user.type === "u"
                                ? _c(
                                    "v-btn",
                                    {
                                      attrs: { color: "primary" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.registerMovement()
                                        }
                                      }
                                    },
                                    [_vm._v("Create New Expense")]
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.$store.state.user.type === "u"
                            ? _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-title",
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          "append-icon": "search",
                                          label: "Search all",
                                          "single-line": "",
                                          "hide-details": ""
                                        },
                                        model: {
                                          value: _vm.search,
                                          callback: function($$v) {
                                            _vm.search = $$v
                                          },
                                          expression: "search"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-row",
                                          attrs: {
                                            "align-center": "",
                                            "justify-center": ""
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "col" },
                                            [
                                              _c("v-text-field", {
                                                attrs: { label: "ID:" },
                                                model: {
                                                  value: _vm.searchObject.id,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.searchObject,
                                                      "id",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "searchObject.id"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col" },
                                            [
                                              _c("v-text-field", {
                                                attrs: { label: "Type:" },
                                                model: {
                                                  value: _vm.searchObject.type,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.searchObject,
                                                      "type",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "searchObject.type"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col" },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Date:",
                                                  hint: "YYYY-MM-DD format",
                                                  "persistent-hint": ""
                                                },
                                                model: {
                                                  value: _vm.searchObject.date,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.searchObject,
                                                      "date",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "searchObject.date"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          !(_vm.searchObject.date == "")
                                            ? _c(
                                                "div",
                                                { staticClass: "col" },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "End Date:",
                                                      hint: "YYYY-MM-DD format",
                                                      "persistent-hint": ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.searchObject
                                                          .end_date,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.searchObject,
                                                          "end_date",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "searchObject.end_date"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col" },
                                            [
                                              _c("v-text-field", {
                                                attrs: { label: "Category:" },
                                                model: {
                                                  value:
                                                    _vm.searchObject
                                                      .category_id,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.searchObject,
                                                      "category_id",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "searchObject.category_id"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col" },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Type of payment:"
                                                },
                                                model: {
                                                  value:
                                                    _vm.searchObject
                                                      .type_payment,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.searchObject,
                                                      "type_payment",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "searchObject.type_payment"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-data-table", {
                                    staticClass: "elevation-1",
                                    attrs: {
                                      headers: _vm.headers,
                                      items: _vm.getfilters,
                                      search: _vm.search,
                                      "items-per-page": 5,
                                      "sort-by": [
                                        "id",
                                        "date",
                                        "type",
                                        "category_id",
                                        "transfer",
                                        "transfer_wallet_id",
                                        "value",
                                        "iban",
                                        "description",
                                        "source_description",
                                        "mb_entity_code",
                                        "type_payment",
                                        "start_balance",
                                        "end_balance"
                                      ],
                                      "sort-desc": [true, true, true],
                                      "footer-props": {
                                        showFirstLastPage: true,
                                        firstIcon: "mdi-arrow-collapse-left",
                                        lastIcon: "mdi-arrow-collapse-right",
                                        prevIcon: "mdi-minus",
                                        nextIcon: "mdi-plus"
                                      }
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "top",
                                          fn: function() {
                                            return [
                                              _c(
                                                "v-toolbar",
                                                {
                                                  attrs: {
                                                    flat: "",
                                                    color: "white"
                                                  }
                                                },
                                                [
                                                  _c("v-toolbar-title", [
                                                    _vm._v("Users")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("v-divider", {
                                                    staticClass: "mx-4",
                                                    attrs: {
                                                      inset: "",
                                                      vertical: ""
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-spacer"),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-dialog",
                                                    {
                                                      attrs: {
                                                        "max-width": "500px"
                                                      },
                                                      model: {
                                                        value: _vm.dialog,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.dialog = $$v
                                                        },
                                                        expression: "dialog"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-card",
                                                        { ref: "form" },
                                                        [
                                                          _c("v-card-title", [
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "headline"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.formTitle
                                                                  )
                                                                )
                                                              ]
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-card-text",
                                                            [
                                                              _c(
                                                                "v-container",
                                                                [
                                                                  _c(
                                                                    "v-row",
                                                                    [
                                                                      _c(
                                                                        "v-col",
                                                                        {
                                                                          attrs: {
                                                                            cols:
                                                                              "12",
                                                                            sm:
                                                                              "6",
                                                                            md:
                                                                              "4"
                                                                          }
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "v-text-field",
                                                                            {
                                                                              attrs: {
                                                                                label:
                                                                                  "Description"
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  _vm
                                                                                    .editedMovement
                                                                                    .description,
                                                                                callback: function(
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.$set(
                                                                                    _vm.editedMovement,
                                                                                    "description",
                                                                                    $$v
                                                                                  )
                                                                                },
                                                                                expression:
                                                                                  "editedMovement.description"
                                                                              }
                                                                            }
                                                                          )
                                                                        ],
                                                                        1
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "v-select",
                                                                        {
                                                                          attrs: {
                                                                            items:
                                                                              _vm.categories,
                                                                            "item-text":
                                                                              "name",
                                                                            "item-value":
                                                                              "id",
                                                                            label:
                                                                              "Category"
                                                                          },
                                                                          model: {
                                                                            value:
                                                                              _vm
                                                                                .editedMovement
                                                                                .category_id,
                                                                            callback: function(
                                                                              $$v
                                                                            ) {
                                                                              _vm.$set(
                                                                                _vm.editedMovement,
                                                                                "category_id",
                                                                                $$v
                                                                              )
                                                                            },
                                                                            expression:
                                                                              "editedMovement.category_id"
                                                                          }
                                                                        }
                                                                      )
                                                                    ],
                                                                    1
                                                                  )
                                                                ],
                                                                1
                                                              )
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-card-actions",
                                                            [
                                                              _c("v-spacer"),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-btn",
                                                                {
                                                                  attrs: {
                                                                    color:
                                                                      "blue darken-1",
                                                                    text: ""
                                                                  },
                                                                  on: {
                                                                    click:
                                                                      _vm.close
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Cancel"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-btn",
                                                                {
                                                                  attrs: {
                                                                    color:
                                                                      "blue darken-1",
                                                                    text: ""
                                                                  },
                                                                  on: {
                                                                    click:
                                                                      _vm.save
                                                                  }
                                                                },
                                                                [_vm._v("Save")]
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            ]
                                          },
                                          proxy: true
                                        },
                                        {
                                          key: "item.action",
                                          fn: function(ref) {
                                            var item = ref.item
                                            return [
                                              _c(
                                                "v-icon",
                                                {
                                                  staticClass: "mr-2",
                                                  attrs: { small: "" },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.editMovement(
                                                        item
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                    edit\n                  "
                                                  )
                                                ]
                                              )
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      false,
                                      1162089737
                                    )
                                  })
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/register.vue?vue&type=template&id=aacc3324&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/register.vue?vue&type=template&id=aacc3324& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c(
        "v-app",
        { attrs: { id: "inspire" } },
        [
          _c(
            "v-content",
            [
              _c(
                "v-container",
                { attrs: { fluid: "", "fill-height": "", "fill-width": "" } },
                [
                  _c(
                    "v-layout",
                    { attrs: { "align-center": "", "justify-center": "" } },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", sm8: "", md4: "" } },
                        [
                          _c(
                            "v-card",
                            { staticClass: "elevation-12" },
                            [
                              _c(
                                "v-toolbar",
                                {
                                  attrs: {
                                    color: "primary",
                                    dark: "",
                                    flat: ""
                                  }
                                },
                                [
                                  _c("v-toolbar-title", [_vm._v("Register")]),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c("v-tooltip", {
                                    attrs: { bottom: "" },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "activator",
                                        fn: function(ref) {
                                          var on = ref.on
                                          return undefined
                                        }
                                      }
                                    ])
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-tooltip",
                                    {
                                      attrs: { right: "" },
                                      scopedSlots: _vm._u([
                                        {
                                          key: "activator",
                                          fn: function(ref) {
                                            var on = ref.on
                                            return undefined
                                          }
                                        }
                                      ])
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("span", [_vm._v("Codepen")])
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-form",
                                    { ref: "form" },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Name",
                                          name: "name",
                                          "prepend-icon": "person",
                                          type: "text",
                                          rules: [
                                            _vm.rules.required,
                                            _vm.rules.counter
                                          ]
                                        },
                                        model: {
                                          value: _vm.name,
                                          callback: function($$v) {
                                            _vm.name = $$v
                                          },
                                          expression: "name"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Email",
                                          name: "email",
                                          "prepend-icon": "person",
                                          type: "text",
                                          rules: [
                                            _vm.rules.required,
                                            _vm.rules.counter,
                                            _vm.rules.email
                                          ]
                                        },
                                        model: {
                                          value: _vm.email,
                                          callback: function($$v) {
                                            _vm.email = $$v
                                          },
                                          expression: "email"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: {
                                          id: "password",
                                          label: "Password",
                                          name: "password",
                                          "prepend-icon": "lock",
                                          type: "password",
                                          rules: [
                                            _vm.rules.required,
                                            _vm.rules.password
                                          ]
                                        },
                                        model: {
                                          value: _vm.password,
                                          callback: function($$v) {
                                            _vm.password = $$v
                                          },
                                          expression: "password"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: {
                                          id: "passwordConfirmation",
                                          label: "Password Confirmation",
                                          name: "passwordConfirmation",
                                          "prepend-icon": "lock",
                                          type: "password",
                                          rules: [
                                            _vm.rules.required,
                                            _vm.rules.password,
                                            _vm.rules.passwordConfirmation
                                          ]
                                        },
                                        model: {
                                          value: _vm.passwordConfirmation,
                                          callback: function($$v) {
                                            _vm.passwordConfirmation = $$v
                                          },
                                          expression: "passwordConfirmation"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: {
                                          id: "nif",
                                          label: "NIF",
                                          name: "nif",
                                          "prepend-icon": "lock",
                                          type: "number",
                                          rules: [
                                            _vm.rules.required,
                                            _vm.rules.nif
                                          ]
                                        },
                                        model: {
                                          value: _vm.nif,
                                          callback: function($$v) {
                                            _vm.nif = $$v
                                          },
                                          expression: "nif"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-file-input", {
                                        attrs: {
                                          placeholder: "Pick an avatar",
                                          "prepend-icon": "camera",
                                          label: "Avatar"
                                        },
                                        model: {
                                          value: _vm.photo,
                                          callback: function($$v) {
                                            _vm.photo = $$v
                                          },
                                          expression: "photo"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { color: "primary" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.register()
                                        }
                                      }
                                    },
                                    [_vm._v("Register")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/EditComponent.vue?vue&type=template&id=2fad1e31&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/EditComponent.vue?vue&type=template&id=2fad1e31& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c(
        "v-app",
        { attrs: { id: "inspire" } },
        [
          _c(
            "v-content",
            [
              _c(
                "v-container",
                { attrs: { fluid: "", "fill-height": "", "fill-width": "" } },
                [
                  _c(
                    "v-layout",
                    { attrs: { "align-center": "", "justify-center": "" } },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", sm8: "", md4: "" } },
                        [
                          _c(
                            "v-card",
                            { staticClass: "elevation-12" },
                            [
                              _c(
                                "v-toolbar",
                                {
                                  attrs: {
                                    color: "primary",
                                    dark: "",
                                    flat: ""
                                  }
                                },
                                [
                                  _c("v-toolbar-title", [_vm._v("Edit")]),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c("v-tooltip", {
                                    attrs: { bottom: "" },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "activator",
                                        fn: function(ref) {
                                          var on = ref.on
                                          return undefined
                                        }
                                      }
                                    ])
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-form",
                                { ref: "form" },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Name",
                                      name: "name",
                                      "prepend-icon": "person",
                                      type: "text",
                                      rules: [
                                        _vm.rules.required,
                                        _vm.rules.counter
                                      ]
                                    },
                                    model: {
                                      value: _vm.user.name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.user, "name", $$v)
                                      },
                                      expression: "user.name"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      id: "oldPassword",
                                      label: "Old Password",
                                      name: "oldPassword",
                                      "prepend-icon": "lock",
                                      type: "password",
                                      rules: [_vm.rules.requiredPassword]
                                    },
                                    model: {
                                      value: _vm.oldPassword,
                                      callback: function($$v) {
                                        _vm.oldPassword = $$v
                                      },
                                      expression: "oldPassword"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      id: "New Password",
                                      label: "New Password",
                                      name: "newPassword",
                                      "prepend-icon": "lock",
                                      type: "password",
                                      rules: [
                                        _vm.rules.password,
                                        _vm.rules.requiredPassword
                                      ]
                                    },
                                    model: {
                                      value: _vm.newPassword,
                                      callback: function($$v) {
                                        _vm.newPassword = $$v
                                      },
                                      expression: "newPassword"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      id: "passwordConfirmation",
                                      label: "Password Confirmation",
                                      name: "passwordConfirmation",
                                      "prepend-icon": "lock",
                                      type: "password",
                                      rules: [
                                        _vm.rules.passwordConfirmation,
                                        _vm.rules.requiredPassword
                                      ]
                                    },
                                    model: {
                                      value: _vm.newPasswordConf,
                                      callback: function($$v) {
                                        _vm.newPasswordConf = $$v
                                      },
                                      expression: "newPasswordConf"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm.user.nif
                                    ? _c("v-text-field", {
                                        attrs: {
                                          id: "nif",
                                          label: "NIF",
                                          name: "nif",
                                          "prepend-icon": "lock",
                                          type: "number",
                                          rules: [_vm.rules.nif]
                                        },
                                        model: {
                                          value: _vm.user.nif,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "nif", $$v)
                                          },
                                          expression: "user.nif"
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("v-file-input", {
                                    attrs: {
                                      placeholder: "Pick an avatar",
                                      "prepend-icon": "camera",
                                      label: "Avatar"
                                    },
                                    model: {
                                      value: _vm.photo,
                                      callback: function($$v) {
                                        _vm.photo = $$v
                                      },
                                      expression: "photo"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-actions",
                                    [
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _vm.hasAlert
                                        ? _c(
                                            "v-alert",
                                            {
                                              attrs: {
                                                color: "red",
                                                dense: "",
                                                outlined: "",
                                                type: "error"
                                              }
                                            },
                                            [_vm._v(_vm._s(_vm.errorMsg))]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { color: "primary" },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.update()
                                            }
                                          }
                                        },
                                        [_vm._v("Update")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/ListUsers.vue?vue&type=template&id=382b38b0&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/ListUsers.vue?vue&type=template&id=382b38b0& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { id: "inspire" } },
    [
      _c(
        "v-content",
        [
          _c(
            "v-container",
            { attrs: { "fill-height": "", "fill-width": "" } },
            [
              _c(
                "v-layout",
                { attrs: { "align-center": "", "justify-center": "" } },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-card-title",
                        [
                          _c("v-text-field", {
                            attrs: {
                              "append-icon": "search",
                              label: "Search",
                              "single-line": "",
                              "hide-details": ""
                            },
                            model: {
                              value: _vm.search,
                              callback: function($$v) {
                                _vm.search = $$v
                              },
                              expression: "search"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-data-table", {
                        staticClass: "elevation-1",
                        attrs: {
                          headers: _vm.headers,
                          items: _vm.users,
                          search: _vm.search,
                          "sort-by": ["name", "email", "type", "active", "nif"],
                          "sort-desc": [true, true],
                          "items-per-page": 5,
                          "footer-props": {
                            showFirstLastPage: true,
                            firstIcon: "mdi-arrow-collapse-left",
                            lastIcon: "mdi-arrow-collapse-right",
                            prevIcon: "mdi-minus",
                            nextIcon: "mdi-plus"
                          }
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "top",
                            fn: function() {
                              return [
                                _c(
                                  "v-toolbar",
                                  { attrs: { flat: "", color: "white" } },
                                  [
                                    _c("v-toolbar-title", [_vm._v("Users")]),
                                    _vm._v(" "),
                                    _c("v-divider", {
                                      staticClass: "mx-4",
                                      attrs: { inset: "", vertical: "" }
                                    }),
                                    _vm._v(" "),
                                    _c("v-spacer"),
                                    _vm._v(" "),
                                    _c(
                                      "v-dialog",
                                      {
                                        attrs: { "max-width": "500px" },
                                        scopedSlots: _vm._u([
                                          {
                                            key: "activator",
                                            fn: function(ref) {
                                              var on = ref.on
                                              return [
                                                _c(
                                                  "v-btn",
                                                  _vm._g(
                                                    {
                                                      staticClass: "mb-2",
                                                      attrs: {
                                                        color: "primary",
                                                        dark: ""
                                                      }
                                                    },
                                                    on
                                                  ),
                                                  [_vm._v("New Admin/Operator")]
                                                )
                                              ]
                                            }
                                          }
                                        ]),
                                        model: {
                                          value: _vm.dialog,
                                          callback: function($$v) {
                                            _vm.dialog = $$v
                                          },
                                          expression: "dialog"
                                        }
                                      },
                                      [
                                        _vm._v(" "),
                                        _c(
                                          "v-card",
                                          { ref: "form" },
                                          [
                                            _c("v-card-title", [
                                              _c(
                                                "span",
                                                { staticClass: "headline" },
                                                [_vm._v(_vm._s(_vm.formTitle))]
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "v-card-text",
                                              [
                                                _c(
                                                  "v-container",
                                                  [
                                                    _c(
                                                      "v-row",
                                                      [
                                                        _c(
                                                          "v-col",
                                                          {
                                                            attrs: {
                                                              cols: "12",
                                                              sm: "6",
                                                              md: "4"
                                                            }
                                                          },
                                                          [
                                                            _c("v-text-field", {
                                                              attrs: {
                                                                label: "Name"
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.editedUser
                                                                    .name,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.editedUser,
                                                                    "name",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "editedUser.name"
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-col",
                                                          {
                                                            attrs: {
                                                              cols: "12",
                                                              sm: "6",
                                                              md: "4"
                                                            }
                                                          },
                                                          [
                                                            _c("v-text-field", {
                                                              attrs: {
                                                                label: "Email"
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.editedUser
                                                                    .email,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.editedUser,
                                                                    "email",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "editedUser.email"
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-col",
                                                          {
                                                            attrs: {
                                                              cols: "12",
                                                              sm: "6",
                                                              md: "4"
                                                            }
                                                          },
                                                          [
                                                            _c("v-text-field", {
                                                              attrs: {
                                                                label: "NIF"
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.editedUser
                                                                    .nif,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.editedUser,
                                                                    "nif",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "editedUser.nif"
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-col",
                                                          {
                                                            staticClass:
                                                              "d-flex",
                                                            attrs: {
                                                              cols: "12",
                                                              sm: "6"
                                                            }
                                                          },
                                                          [
                                                            _c("v-select", {
                                                              attrs: {
                                                                items:
                                                                  _vm.userTypes,
                                                                label:
                                                                  "User Type"
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.editedUser
                                                                    .type,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.editedUser,
                                                                    "type",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "editedUser.type"
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-col",
                                                          {
                                                            attrs: {
                                                              cols: "12",
                                                              sm: "6",
                                                              md: "4"
                                                            }
                                                          },
                                                          [
                                                            _c("v-file-input", {
                                                              attrs: {
                                                                placeholder:
                                                                  "Pick an avatar",
                                                                "prepend-icon":
                                                                  "camera",
                                                                label: "Avatar"
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.selectedFile,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.selectedFile = $$v
                                                                },
                                                                expression:
                                                                  "selectedFile"
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-card-actions",
                                              [
                                                _c("v-spacer"),
                                                _vm._v(" "),
                                                _c(
                                                  "v-btn",
                                                  {
                                                    attrs: {
                                                      color: "blue darken-1",
                                                      text: ""
                                                    },
                                                    on: { click: _vm.close }
                                                  },
                                                  [_vm._v("Cancel")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-btn",
                                                  {
                                                    attrs: {
                                                      color: "blue darken-1",
                                                      text: ""
                                                    },
                                                    on: { click: _vm.save }
                                                  },
                                                  [_vm._v("Save")]
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          },
                          {
                            key: "item.action",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "v-icon",
                                  {
                                    staticClass: "mr-2",
                                    attrs: { small: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.editUser(item)
                                      }
                                    }
                                  },
                                  [_vm._v("\n        edit\n      ")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-icon",
                                  {
                                    attrs: { small: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.deleteUser(item)
                                      }
                                    }
                                  },
                                  [_vm._v("\n        delete\n      ")]
                                )
                              ]
                            }
                          },
                          {
                            key: "no-data",
                            fn: function() {
                              return [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "primary" },
                                    on: {
                                      click: function($event) {
                                        return _vm.created()
                                      }
                                    }
                                  },
                                  [_vm._v("Reset")]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/fsilva/dev/Projects/DADProject/LaravelServer/node_modules/vue-loader/lib/runtime/componentNormalizer.js'");

/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/fsilva/dev/Projects/DADProject/LaravelServer/node_modules/vue-router/dist/vue-router.esm.js'");

/***/ }),

/***/ "./node_modules/vue-socket.io/dist/vue-socketio.js":
/*!*********************************************************!*\
  !*** ./node_modules/vue-socket.io/dist/vue-socketio.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/fsilva/dev/Projects/DADProject/LaravelServer/node_modules/vue-socket.io/dist/vue-socketio.js'");

/***/ }),

/***/ "./node_modules/vue-toasted/dist/vue-toasted.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/vue-toasted/dist/vue-toasted.min.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/fsilva/dev/Projects/DADProject/LaravelServer/node_modules/vue-toasted/dist/vue-toasted.min.js'");

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/fsilva/dev/Projects/DADProject/LaravelServer/node_modules/vue/dist/vue.common.js'");

/***/ }),

/***/ "./node_modules/vuetify/dist/vuetify.js":
/*!**********************************************!*\
  !*** ./node_modules/vuetify/dist/vuetify.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/fsilva/dev/Projects/DADProject/LaravelServer/node_modules/vuetify/dist/vuetify.js'");

/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/fsilva/dev/Projects/DADProject/LaravelServer/node_modules/vuex/dist/vuex.esm.js'");

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mdi_font_css_materialdesignicons_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mdi/font/css/materialdesignicons.css */ "./node_modules/@mdi/font/css/materialdesignicons.css");
/* harmony import */ var _mdi_font_css_materialdesignicons_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mdi_font_css_materialdesignicons_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify */ "./node_modules/vuetify/dist/vuetify.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuetify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-socket.io */ "./node_modules/vue-socket.io/dist/vue-socketio.js");
/* harmony import */ var vue_socket_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_socket_io__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./resources/js/store.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./router */ "./resources/js/router.js");
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toast */ "./resources/js/toast.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");
/*jshint esversion: 6 */

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */



window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");

Vue.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);

Vue.use(vuetify__WEBPACK_IMPORTED_MODULE_2___default.a);

Vue.use(vuex__WEBPACK_IMPORTED_MODULE_3__["default"]);

Vue.use(new vue_socket_io__WEBPACK_IMPORTED_MODULE_4___default.a({
  debug: true,
  connection: 'http://localhost:8080'
}));


 //TODO: LOGOUT SOCKET ON PAGE CLOSE/RELOAD

var app = new Vue({
  vuetify: new vuetify__WEBPACK_IMPORTED_MODULE_2___default.a({
    icons: {
      iconfont: 'mdi'
    }
  }),
  store: _store__WEBPACK_IMPORTED_MODULE_5__["default"],
  router: _router__WEBPACK_IMPORTED_MODULE_6__["default"],
  created: function created() {
    _store__WEBPACK_IMPORTED_MODULE_5__["default"].commit('loadTokenAndUserFromSession');
    if (this.$store.state.user) this.$socket.emit('register', this.$store.state.user); //window.addEventListener('beforeunload', this.handler)
  },
  sockets: {
    transfer: function transfer(user) {
      this.$toasted.show("Received transfer of ".concat(user.amount, "\u20AC from ").concat(user.name, "!"));
    },
    income: function income(amount) {
      this.$toasted.show("Received income of ".concat(amount, "\u20AC!"));
    }
  },
  methods: {
    handler: function handler(event) {
      this.$socket.emit('logout');
      _store__WEBPACK_IMPORTED_MODULE_5__["default"].commit('loadTokenAndUserFromSession'); //this.$socket.close();

      /*REGISTER IN SOCKET*/

      if (this.$store.state.user) this.$socket.emit('register', this.$store.state.user);
    },
    homePage: function homePage() {
      this.$router.push('/')["catch"](function (err) {});
    },
    loginAttempt: function loginAttempt() {
      this.$router.push('/login')["catch"](function (err) {});
    },
    logout: function logout() {
      var _this = this;

      axios.post("api/logout").then(function (response) {
        _this.$store.commit("clearUserAndToken");

        _this.$socket.emit('logout', _this.$store.state.user);

        _this.$router.push('/')["catch"](function (err) {});
      })["catch"](function (error) {
        _this.$store.commit("clearUserAndToken");

        console.log(error);
      });
    },
    registerAccount: function registerAccount() {
      this.$router.push('/register')["catch"](function (err) {});
    },
    createMovements: function createMovements() {
      this.$router.push('/registerIncome')["catch"](function (err) {});
    },
    profile: function profile() {
      this.$router.push('/profile')["catch"](function (err) {});
    },
    listMovements: function listMovements() {
      this.$router.push('/movements')["catch"](function (err) {});
    },
    listUsers: function listUsers() {
      this.$router.push('/users')["catch"](function (err) {});
    },
    isAdmin: function isAdmin() {
      if ($store.state.user.type == 'a') {
        return true;
      }

      return false;
    }
  }
}).$mount("#app");

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./resources/js/components/home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/home.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_vue_vue_type_template_id_fa6affac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=fa6affac& */ "./resources/js/components/home.vue?vue&type=template&id=fa6affac&");
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ "./resources/js/components/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _home_vue_vue_type_template_id_fa6affac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _home_vue_vue_type_template_id_fa6affac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/home.vue?vue&type=template&id=fa6affac&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/home.vue?vue&type=template&id=fa6affac& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_fa6affac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=template&id=fa6affac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home.vue?vue&type=template&id=fa6affac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_fa6affac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_fa6affac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/login.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/login.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_172b28a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=172b28a4& */ "./resources/js/components/login.vue?vue&type=template&id=172b28a4&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/components/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_172b28a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_172b28a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/login.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/login.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/login.vue?vue&type=template&id=172b28a4&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/login.vue?vue&type=template&id=172b28a4& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_172b28a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=172b28a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/login.vue?vue&type=template&id=172b28a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_172b28a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_172b28a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/movements/CreateComponent.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/movements/CreateComponent.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateComponent_vue_vue_type_template_id_b05043ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateComponent.vue?vue&type=template&id=b05043ca& */ "./resources/js/components/movements/CreateComponent.vue?vue&type=template&id=b05043ca&");
/* harmony import */ var _CreateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/movements/CreateComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateComponent_vue_vue_type_template_id_b05043ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateComponent_vue_vue_type_template_id_b05043ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/movements/CreateComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/movements/CreateComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/movements/CreateComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/movements/CreateComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/movements/CreateComponent.vue?vue&type=template&id=b05043ca&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/movements/CreateComponent.vue?vue&type=template&id=b05043ca& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateComponent_vue_vue_type_template_id_b05043ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateComponent.vue?vue&type=template&id=b05043ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/movements/CreateComponent.vue?vue&type=template&id=b05043ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateComponent_vue_vue_type_template_id_b05043ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateComponent_vue_vue_type_template_id_b05043ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/movements/ListComponent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/movements/ListComponent.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListComponent_vue_vue_type_template_id_40f8f38e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListComponent.vue?vue&type=template&id=40f8f38e& */ "./resources/js/components/movements/ListComponent.vue?vue&type=template&id=40f8f38e&");
/* harmony import */ var _ListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/movements/ListComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListComponent_vue_vue_type_template_id_40f8f38e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListComponent_vue_vue_type_template_id_40f8f38e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/movements/ListComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/movements/ListComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/movements/ListComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/movements/ListComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/movements/ListComponent.vue?vue&type=template&id=40f8f38e&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/movements/ListComponent.vue?vue&type=template&id=40f8f38e& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListComponent_vue_vue_type_template_id_40f8f38e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListComponent.vue?vue&type=template&id=40f8f38e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/movements/ListComponent.vue?vue&type=template&id=40f8f38e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListComponent_vue_vue_type_template_id_40f8f38e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListComponent_vue_vue_type_template_id_40f8f38e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/register.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/register.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_aacc3324___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=aacc3324& */ "./resources/js/components/register.vue?vue&type=template&id=aacc3324&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/components/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_aacc3324___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_aacc3324___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/register.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/register.vue?vue&type=template&id=aacc3324&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/register.vue?vue&type=template&id=aacc3324& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_aacc3324___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=aacc3324& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/register.vue?vue&type=template&id=aacc3324&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_aacc3324___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_aacc3324___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/users/EditComponent.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/users/EditComponent.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditComponent_vue_vue_type_template_id_2fad1e31___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditComponent.vue?vue&type=template&id=2fad1e31& */ "./resources/js/components/users/EditComponent.vue?vue&type=template&id=2fad1e31&");
/* harmony import */ var _EditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/users/EditComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditComponent_vue_vue_type_template_id_2fad1e31___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditComponent_vue_vue_type_template_id_2fad1e31___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/EditComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/EditComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/users/EditComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/EditComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/EditComponent.vue?vue&type=template&id=2fad1e31&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/users/EditComponent.vue?vue&type=template&id=2fad1e31& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditComponent_vue_vue_type_template_id_2fad1e31___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditComponent.vue?vue&type=template&id=2fad1e31& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/EditComponent.vue?vue&type=template&id=2fad1e31&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditComponent_vue_vue_type_template_id_2fad1e31___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditComponent_vue_vue_type_template_id_2fad1e31___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/users/ListUsers.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/users/ListUsers.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListUsers_vue_vue_type_template_id_382b38b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListUsers.vue?vue&type=template&id=382b38b0& */ "./resources/js/components/users/ListUsers.vue?vue&type=template&id=382b38b0&");
/* harmony import */ var _ListUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListUsers.vue?vue&type=script&lang=js& */ "./resources/js/components/users/ListUsers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListUsers_vue_vue_type_template_id_382b38b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListUsers_vue_vue_type_template_id_382b38b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/ListUsers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/ListUsers.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/users/ListUsers.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListUsers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/ListUsers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/ListUsers.vue?vue&type=template&id=382b38b0&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/users/ListUsers.vue?vue&type=template&id=382b38b0& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUsers_vue_vue_type_template_id_382b38b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListUsers.vue?vue&type=template&id=382b38b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/ListUsers.vue?vue&type=template&id=382b38b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUsers_vue_vue_type_template_id_382b38b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUsers_vue_vue_type_template_id_382b38b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/router.js":
/*!********************************!*\
  !*** ./resources/js/router.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home */ "./resources/js/components/home.vue");
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login */ "./resources/js/components/login.vue");
/* harmony import */ var _components_register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register */ "./resources/js/components/register.vue");
/* harmony import */ var _components_users_EditComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/users/EditComponent */ "./resources/js/components/users/EditComponent.vue");
/* harmony import */ var _components_movements_ListComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/movements/ListComponent */ "./resources/js/components/movements/ListComponent.vue");
/* harmony import */ var _components_movements_CreateComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/movements/CreateComponent */ "./resources/js/components/movements/CreateComponent.vue");
/* harmony import */ var _components_users_ListUsers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/users/ListUsers */ "./resources/js/components/users/ListUsers.vue");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store.js */ "./resources/js/store.js");










vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
var routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  component: _components_home__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  path: '/login',
  component: _components_login__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: '/register',
  component: _components_register__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  path: '/profile',
  component: _components_users_EditComponent__WEBPACK_IMPORTED_MODULE_5__["default"]
}, {
  path: '/movements',
  component: _components_movements_ListComponent__WEBPACK_IMPORTED_MODULE_6__["default"]
}, {
  path: '/movements/create',
  component: _components_movements_CreateComponent__WEBPACK_IMPORTED_MODULE_7__["default"]
}, {
  path: '/users',
  component: _components_users_ListUsers__WEBPACK_IMPORTED_MODULE_8__["default"],
  beforeEnter: function beforeEnter(to, from, next) {
    if (_store_js__WEBPACK_IMPORTED_MODULE_9__["default"].state.user.type == 'a') next();else next('/home');
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  routes: routes
}));

/***/ }),

/***/ "./resources/js/store.js":
/*!*******************************!*\
  !*** ./resources/js/store.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: {
    token: "",
    user: null,
    status: ""
  },
  mutations: {
    clearUserAndToken: function clearUserAndToken(state) {
      state.user = null;
      state.token = "";
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("token");
      axios.defaults.headers.common.Authorization = undefined;
    },
    clearUser: function clearUser(state) {
      state.user = null;
      sessionStorage.removeItem("user");
    },
    clearToken: function clearToken(state) {
      state.token = "";
      sessionStorage.removeItem("token");
      axios.defaults.headers.common.Authorization = undefined;
    },
    setUser: function setUser(state, user) {
      state.user = user;
      sessionStorage.setItem("user", JSON.stringify(user));
    },
    setToken: function setToken(state, token) {
      state.token = token;
      sessionStorage.setItem("token", token);
      axios.defaults.headers.common.Authorization = "Bearer " + token;
    },
    loadTokenAndUserFromSession: function loadTokenAndUserFromSession(state) {
      state.token = "";
      state.user = null;
      var token = sessionStorage.getItem("token");
      var user = sessionStorage.getItem("user");

      if (token) {
        state.token = token;
        axios.defaults.headers.common.Authorization = "Bearer " + token;
      } else {
        axios.defaults.headers.common.Authorization = undefined;
      }

      if (user) {
        state.user = JSON.parse(user);
      }
    }
  },
  actions: {},
  getters: {}
}));

/***/ }),

/***/ "./resources/js/toast.js":
/*!*******************************!*\
  !*** ./resources/js/toast.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_toasted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-toasted */ "./node_modules/vue-toasted/dist/vue-toasted.min.js");
/* harmony import */ var vue_toasted__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_toasted__WEBPACK_IMPORTED_MODULE_1__);


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_toasted__WEBPACK_IMPORTED_MODULE_1___default.a, {
  position: "bottom-center",
  duration: 5000,
  type: "info"
});
vue__WEBPACK_IMPORTED_MODULE_0___default.a.toasted.register('unauthenticated', 'Unauthenticated!', {
  type: 'error'
});
vue__WEBPACK_IMPORTED_MODULE_0___default.a.toasted.register('unauthorized', 'Unauthorized!', {
  type: 'error'
});

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/home/fsilva/dev/Projects/DADProject/LaravelServer/node_modules/css-loader/lib/css-base.js'\n    at /home/fsilva/dev/Projects/DADProject/LaravelServer/node_modules/webpack/lib/NormalModule.js:316:20\n    at /home/fsilva/dev/Projects/DADProject/LaravelServer/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /home/fsilva/dev/Projects/DADProject/LaravelServer/node_modules/loader-runner/lib/LoaderRunner.js:203:19\n    at /home/fsilva/dev/Projects/DADProject/LaravelServer/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:85:15\n    at processTicksAndRejections (internal/process/task_queues.js:79:11)");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/fsilva/dev/Projects/DADProject/LaravelServer/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /home/fsilva/dev/Projects/DADProject/LaravelServer/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });