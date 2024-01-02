"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUpcomingMovies = exports.getTrendingMovies = exports.getTopRatedMovies = exports.getMoviesGenres = exports.getMovies = exports.getMovieReviews = exports.getMovieRecommendations = exports.getMovieImages = exports.getMovieCredits = exports.getMovie = exports.getLatestMovies = void 0;
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var getMovies = exports.getMovies = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(year, rating) {
    var page,
      url,
      response,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          page = _args.length > 2 && _args[2] !== undefined ? _args[2] : 1;
          url = "https://api.themoviedb.org/3/discover/movie?api_key=".concat(process.env.REACT_APP_TMDB_KEY, "&language=en-US&include_adult=false&include_video=false&page=").concat(page);
          if (year) {
            url += "&primary_release_year=".concat(year);
          }
          if (rating) {
            if (rating === '9+') {
              url += "&vote_average.gte=9";
            } else if (rating === '8-9') {
              url += "&vote_average.gte=8&vote_average.lt=9";
            } else if (rating === '7-8') {
              url += "&vote_average.gte=7&vote_average.lt=8";
            } else if (rating === '<7') {
              url += "&vote_average.lt=7";
            }
          }
          _context.prev = 4;
          _context.next = 7;
          return (0, _nodeFetch["default"])(url);
        case 7:
          response = _context.sent;
          if (response.ok) {
            _context.next = 10;
            break;
          }
          throw new Error(response.json().message);
        case 10:
          _context.next = 12;
          return response.json();
        case 12:
          return _context.abrupt("return", _context.sent);
        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](4);
          throw _context.t0;
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[4, 15]]);
  }));
  return function getMovies(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getMovie = exports.getMovie = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(args) {
    var id, response;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = args.id;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/movie/".concat(id, "?api_key=").concat(process.env.REACT_APP_TMDB_KEY));
        case 4:
          response = _context2.sent;
          if (response.ok) {
            _context2.next = 7;
            break;
          }
          throw new Error(response.json().message);
        case 7:
          _context2.next = 9;
          return response.json();
        case 9:
          return _context2.abrupt("return", _context2.sent);
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](1);
          throw _context2.t0;
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 12]]);
  }));
  return function getMovie(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
var getUpcomingMovies = exports.getUpcomingMovies = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var page,
      response,
      _args3 = arguments;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          page = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : 1;
          _context3.prev = 1;
          _context3.next = 4;
          return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(process.env.REACT_APP_TMDB_KEY, "&language=en-US&page=").concat(page));
        case 4:
          response = _context3.sent;
          if (response.ok) {
            _context3.next = 7;
            break;
          }
          throw new Error(response.json().message);
        case 7:
          _context3.next = 9;
          return response.json();
        case 9:
          return _context3.abrupt("return", _context3.sent);
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](1);
          throw _context3.t0;
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 12]]);
  }));
  return function getUpcomingMovies() {
    return _ref3.apply(this, arguments);
  };
}();
var getMoviesGenres = exports.getMoviesGenres = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var response;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(process.env.REACT_APP_TMDB_KEY, "&language=en-US"));
        case 3:
          response = _context4.sent;
          if (response.ok) {
            _context4.next = 6;
            break;
          }
          throw new Error(response.json().message);
        case 6:
          _context4.next = 8;
          return response.json();
        case 8:
          return _context4.abrupt("return", _context4.sent);
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          throw _context4.t0;
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 11]]);
  }));
  return function getMoviesGenres() {
    return _ref4.apply(this, arguments);
  };
}();
var getMovieImages = exports.getMovieImages = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(_ref5) {
    var queryKey, _queryKey, idPart, id, response;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          queryKey = _ref5.queryKey;
          _queryKey = _slicedToArray(queryKey, 2), idPart = _queryKey[1];
          id = idPart.id;
          _context5.prev = 3;
          _context5.next = 6;
          return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/movie/".concat(id, "/images?api_key=").concat(process.env.REACT_APP_TMDB_KEY));
        case 6:
          response = _context5.sent;
          if (response.ok) {
            _context5.next = 9;
            break;
          }
          throw new Error(response.json().message);
        case 9:
          _context5.next = 11;
          return response.json();
        case 11:
          return _context5.abrupt("return", _context5.sent);
        case 14:
          _context5.prev = 14;
          _context5.t0 = _context5["catch"](3);
          throw _context5.t0;
        case 17:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[3, 14]]);
  }));
  return function getMovieImages(_x4) {
    return _ref6.apply(this, arguments);
  };
}();
var getMovieReviews = exports.getMovieReviews = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(id) {
    var response;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/movie/".concat(id, "/reviews?api_key=").concat(process.env.REACT_APP_TMDB_KEY));
        case 3:
          response = _context6.sent;
          if (response.ok) {
            _context6.next = 6;
            break;
          }
          throw new Error(response.json().message);
        case 6:
          _context6.next = 8;
          return response.json().results;
        case 8:
          return _context6.abrupt("return", _context6.sent);
        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](0);
          throw _context6.t0;
        case 14:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 11]]);
  }));
  return function getMovieReviews(_x5) {
    return _ref7.apply(this, arguments);
  };
}();
var getLatestMovies = exports.getLatestMovies = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var currentDate, response;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          currentDate = new Date().toISOString().split('T')[0];
          _context7.prev = 1;
          _context7.next = 4;
          return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/discover/movie?api_key=".concat(process.env.REACT_APP_TMDB_KEY, "&language=en-US&sort_by=release_date.desc&release_date.lte=").concat(currentDate, "&page=3"));
        case 4:
          response = _context7.sent;
          if (response.ok) {
            _context7.next = 7;
            break;
          }
          throw new Error(response.json().message);
        case 7:
          _context7.next = 9;
          return response.json();
        case 9:
          return _context7.abrupt("return", _context7.sent);
        case 12:
          _context7.prev = 12;
          _context7.t0 = _context7["catch"](1);
          throw _context7.t0;
        case 15:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 12]]);
  }));
  return function getLatestMovies() {
    return _ref8.apply(this, arguments);
  };
}();
//acquire cast list
var getMovieCredits = exports.getMovieCredits = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(id) {
    var response;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/movie/".concat(id, "/credits?api_key=").concat(process.env.REACT_APP_TMDB_KEY));
        case 3:
          response = _context8.sent;
          if (response.ok) {
            _context8.next = 6;
            break;
          }
          throw new Error(response.json().message);
        case 6:
          _context8.next = 8;
          return response.json();
        case 8:
          return _context8.abrupt("return", _context8.sent);
        case 11:
          _context8.prev = 11;
          _context8.t0 = _context8["catch"](0);
          throw _context8.t0;
        case 14:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 11]]);
  }));
  return function getMovieCredits(_x6) {
    return _ref9.apply(this, arguments);
  };
}();
var getTopRatedMovies = exports.getTopRatedMovies = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
    var response;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(process.env.REACT_APP_TMDB_KEY, "&language=en-US&page=1"));
        case 3:
          response = _context9.sent;
          if (response.ok) {
            _context9.next = 6;
            break;
          }
          throw new Error(response.json().message);
        case 6:
          _context9.next = 8;
          return response.json();
        case 8:
          return _context9.abrupt("return", _context9.sent);
        case 11:
          _context9.prev = 11;
          _context9.t0 = _context9["catch"](0);
          throw _context9.t0;
        case 14:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 11]]);
  }));
  return function getTopRatedMovies() {
    return _ref10.apply(this, arguments);
  };
}();
var getTrendingMovies = exports.getTrendingMovies = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    var response;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(process.env.REACT_APP_TMDB_KEY));
        case 3:
          response = _context10.sent;
          if (response.ok) {
            _context10.next = 6;
            break;
          }
          throw new Error(response.json().message);
        case 6:
          _context10.next = 8;
          return response.json();
        case 8:
          return _context10.abrupt("return", _context10.sent);
        case 11:
          _context10.prev = 11;
          _context10.t0 = _context10["catch"](0);
          throw _context10.t0;
        case 14:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 11]]);
  }));
  return function getTrendingMovies() {
    return _ref11.apply(this, arguments);
  };
}();
var getMovieRecommendations = exports.getMovieRecommendations = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(id) {
    var response;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/movie/".concat(id, "/recommendations?api_key=").concat(process.env.REACT_APP_TMDB_KEY));
        case 3:
          response = _context11.sent;
          if (response.ok) {
            _context11.next = 6;
            break;
          }
          throw new Error(response.json().message);
        case 6:
          _context11.next = 8;
          return response.json();
        case 8:
          return _context11.abrupt("return", _context11.sent);
        case 11:
          _context11.prev = 11;
          _context11.t0 = _context11["catch"](0);
          throw _context11.t0;
        case 14:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 11]]);
  }));
  return function getMovieRecommendations(_x7) {
    return _ref12.apply(this, arguments);
  };
}();