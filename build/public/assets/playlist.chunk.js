webpackJsonp([1],{

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Playlist__ = __webpack_require__(662);
var _jsxFileName = '/Users/stephanie/dev/SideProjects/VoteList/src/routes/playlist/index.js';

var action = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', {
              chunks: ['playlist'],
              title: 'Spotify',
              component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Playlist__["a" /* default */], {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                  },
                  __self: this
                })
              )
            });

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function action() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(247);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/stephanie/dev/SideProjects/VoteList/src/components/Link/Link.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        return;
      }

      event.preventDefault();
      __WEBPACK_IMPORTED_MODULE_2__history__["a" /* default */].push(_this.props.to);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Link, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          to = _props.to,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['to', 'children']);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        _extends({ href: to }, props, { onClick: this.handleClick, __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }),
        children
      );
    }
  }]);

  return Link;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Link.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};
Link.defaultProps = {
  onClick: null
};


/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Request = function(builder) {
  if (!builder) {
    throw new Error('No builder supplied to constructor');
  }

  this.host = builder.host;
  this.port = builder.port;
  this.scheme = builder.scheme;
  this.queryParameters = builder.queryParameters;
  this.bodyParameters = builder.bodyParameters;
  this.headers = builder.headers;
  this.path = builder.path;
};

Request.prototype.getHost = function() {
  return this.host;
};

Request.prototype.getPort = function() {
  return this.port;
};

Request.prototype.getScheme = function() {
  return this.scheme;
};

Request.prototype.getPath = function() {
  return this.path;
};

Request.prototype.getQueryParameters = function() {
  return this.queryParameters;
};

Request.prototype.getBodyParameters = function() {
  return this.bodyParameters;
};

Request.prototype.getHeaders = function() {
  return this.headers;
};

Request.prototype.getURI = function() {
  if (!this.scheme || !this.host || !this.port) {
    throw new Error('Missing components necessary to construct URI');
  }
  var uri = this.scheme + '://' + this.host;
  if (this.scheme === 'http' && this.port !== 80 ||
    this.scheme === 'https' && this.port !== 443) {
    uri += ':' + this.port;
  }
  if (this.path) {
    uri += this.path;
  }
  return uri;
};

Request.prototype.getURL = function() {
  var uri = this.getURI();
  if (this.getQueryParameters()) {
    return uri + this.getQueryParameterString(this.getQueryParameters());
  } else {
    return uri;
  }
};

Request.prototype.addQueryParameters = function(queryParameters) {
  for (var key in queryParameters) {
    this.addQueryParameter(key, queryParameters[key]);
  }
};

Request.prototype.addQueryParameter = function(key, value) {
  if (!this.queryParameters) {
    this.queryParameters = {};
  }
  this.queryParameters[key] = value;
};

Request.prototype.addBodyParameters = function(bodyParameters) {
  for (var key in bodyParameters) {
    this.addBodyParameter(key, bodyParameters[key]);
  }
};

Request.prototype.addBodyParameter = function(key, value) {
  if (!this.bodyParameters) {
    this.bodyParameters = {};
  }
  this.bodyParameters[key] = value;
};

Request.prototype.addHeaders = function(headers) {
  if (!this.headers) {
    this.headers = headers;
  } else {
    for (var key in headers) {
      this.headers[key] = headers[key];
    }
  }
};

Request.prototype.getQueryParameterString = function() {
  var queryParameters = this.getQueryParameters();
  if (!queryParameters) {
    return;
  }
  var queryParameterString = '?';
  var first = true;
  for (var key in queryParameters) {
    if (queryParameters.hasOwnProperty(key)) {
      if (!first) {
        queryParameterString += '&';
      } else {
        first = false;
      }
      queryParameterString += key + '=' + queryParameters[key];
    }
  }
  return queryParameterString;
};

var Builder = function() {
  var host, port, scheme, queryParameters, bodyParameters, headers, jsonBody;
};

Builder.prototype.withHost = function(host) {
  this.host = host;
  return this;
};

Builder.prototype.withPort = function(port) {
  this.port = port;
  return this;
};

Builder.prototype.withScheme = function(scheme) {
  this.scheme = scheme;
  return this;
};

Builder.prototype.withQueryParameters = function(queryParameters) {
  this.queryParameters = queryParameters;
  return this;
};

Builder.prototype.withPath = function(path) {
  this.path = path;
  return this;
};

Builder.prototype.withBodyParameters = function(bodyParameters) {
  this.bodyParameters = bodyParameters;
  return this;
};

Builder.prototype.withHeaders = function(headers) {
  this.headers = headers;
  return this;
};

Builder.prototype.build = function() {
  return new Request(this);
};

module.exports.builder = function() {
  return new Builder();
};


/***/ }),

/***/ 618:
/***/ (function(module, exports) {

/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return null !== obj && 'object' === typeof obj;
}

module.exports = isObject;


/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(629);


/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalize_css__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_css__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Layout_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Header__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Footer__ = __webpack_require__(642);
var _jsxFileName = '/Users/stephanie/dev/SideProjects/VoteList/src/components/Layout/Layout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





// external-global styles must be imported in your JS.





var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Header__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }),
        this.props.children,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Footer__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        })
      );
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Layout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_3_normalize_css___default.a, __WEBPACK_IMPORTED_MODULE_4__Layout_css___default.a)(Layout));

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(622);
    var insertCss = __webpack_require__(245);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../css-loader/index.js??ref--2-1!./normalize.css", function() {
        content = require("!!../css-loader/index.js??ref--2-1!./normalize.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(244)(true);
// imports


// module
exports.push([module.i, "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n", "", {"version":3,"sources":["/Users/stephanie/dev/SideProjects/VoteList/node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,4EAA4E;;AAE5E;gFACgF;;AAEhF;;;;GAIG;;AAEH;EACE,kBAAkB,CAAC,OAAO;EAC1B,2BAA2B,CAAC,OAAO;EACnC,+BAA+B,CAAC,OAAO;CACxC;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,UAAU;CACX;;AAED;;GAEG;;AAEH;;;;;;EAME,eAAe;CAChB;;AAED;;;GAGG;;AAEH;EACE,eAAe;EACf,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;OAEO,OAAO;EACZ,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,wBAAwB,CAAC,OAAO;EAChC,UAAU,CAAC,OAAO;EAClB,kBAAkB,CAAC,OAAO;CAC3B;;AAED;;;GAGG;;AAEH;EACE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,sCAAsC,CAAC,OAAO;CAC/C;;AAED;;;GAGG;;AAEH;EACE,oBAAoB,CAAC,OAAO;EAC5B,2BAA2B,CAAC,OAAO;EACnC,kCAAkC,CAAC,OAAO;CAC3C;;AAED;;GAEG;;AAEH;;EAEE,qBAAqB;CACtB;;AAED;;GAEG;;AAEH;;EAEE,oBAAoB;CACrB;;AAED;;;GAGG;;AAEH;;;EAGE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,uBAAuB;EACvB,YAAY;CACb;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,yBAAyB;CAC1B;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,YAAY;CACb;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;;EAEE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;EACd,UAAU;CACX;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;;EAKE,wBAAwB,CAAC,OAAO;EAChC,gBAAgB,CAAC,OAAO;EACxB,kBAAkB,CAAC,OAAO;EAC1B,UAAU,CAAC,OAAO;CACnB;;AAED;;;GAGG;;AAEH;QACQ,OAAO;EACb,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;SACS,OAAO;EACd,qBAAqB;CACtB;;AAED;;;;GAIG;;AAEH;;;;EAIE,2BAA2B,CAAC,OAAO;CACpC;;AAED;;GAEG;;AAEH;;;;EAIE,mBAAmB;EACnB,WAAW;CACZ;;AAED;;GAEG;;AAEH;;;;EAIE,+BAA+B;CAChC;;AAED;;GAEG;;AAEH;EACE,+BAA+B;CAChC;;AAED;;;;;GAKG;;AAEH;EACE,uBAAuB,CAAC,OAAO;EAC/B,eAAe,CAAC,OAAO;EACvB,eAAe,CAAC,OAAO;EACvB,gBAAgB,CAAC,OAAO;EACxB,WAAW,CAAC,OAAO;EACnB,oBAAoB,CAAC,OAAO;CAC7B;;AAED;;;GAGG;;AAEH;EACE,sBAAsB,CAAC,OAAO;EAC9B,yBAAyB,CAAC,OAAO;CAClC;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,uBAAuB,CAAC,OAAO;EAC/B,WAAW,CAAC,OAAO;CACpB;;AAED;;GAEG;;AAEH;;EAEE,aAAa;CACd;;AAED;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,qBAAqB,CAAC,OAAO;CAC9B;;AAED;;GAEG;;AAEH;;EAEE,yBAAyB;CAC1B;;AAED;;;GAGG;;AAEH;EACE,2BAA2B,CAAC,OAAO;EACnC,cAAc,CAAC,OAAO;CACvB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;EAEE,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;CACf;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,cAAc;CACf","file":"normalize.css","sourcesContent":["/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(624);
    var insertCss = __webpack_require__(245);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Layout.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Layout.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(244)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n/*\n * normalize.css is imported in JS file.\n * If you import external CSS file from your internal CSS\n * then it will be inlined and processed with CSS modules.\n */\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  line-height: 1.375; /* ~22px */\n}\n\nbody {\n  margin: 0;\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", "", {"version":3,"sources":["/Users/stephanie/dev/SideProjects/VoteList/src/components/Layout/Layout.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;CAC/M;;AAED;;;;GAIG;;AAEH;;gFAEgF;;AAEhF;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe,CAAC,YAAY;EAC5B,2DAA2D;EAC3D,mBAAmB,CAAC,WAAW;CAChC;;AAED;EACE,UAAU;CACX;;AAED;EACE,eAAe;CAChB;;AAED;;;;;;GAMG;;AAEH;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;;GAEG;;AAEH;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,2BAA2B;EAC3B,cAAc;EACd,WAAW;CACZ;;AAED;;;;GAIG;;AAEH;;;;;;EAME,uBAAuB;CACxB;;AAED;;GAEG;;AAEH;EACE,UAAU;EACV,UAAU;EACV,WAAW;CACZ;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;gFAEgF;;AAEhF;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAClB;;AAED;;;;gFAIgF;;AAEhF;EACE;;;IAGE,mCAAmC;IACnC,uBAAuB,CAAC,+DAA+D;IACvF,oCAAoC;YAC5B,4BAA4B;IACpC,6BAA6B;GAC9B;;EAED;;IAEE,2BAA2B;GAC5B;;EAED;IACE,6BAA6B;GAC9B;;EAED;IACE,8BAA8B;GAC/B;;EAED;;;KAGG;;EAEH;;IAEE,YAAY;GACb;;EAED;;IAEE,uBAAuB;IACvB,yBAAyB;GAC1B;;EAED;;;KAGG;;EAEH;IACE,4BAA4B;GAC7B;;EAED;;IAEE,yBAAyB;GAC1B;;EAED;IACE,2BAA2B;GAC5B;;EAED;;;IAGE,WAAW;IACX,UAAU;GACX;;EAED;;IAEE,wBAAwB;GACzB;CACF","file":"Layout.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n/*\n * normalize.css is imported in JS file.\n * If you import external CSS file from your internal CSS\n * then it will be inlined and processed with CSS modules.\n */\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  line-height: 1.375; /* ~22px */\n}\n\nbody {\n  margin: 0;\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n:global(.browserupgrade) {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_css__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Header_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Navigation__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logo_small_png__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logo_small_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__logo_small_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logo_small_2x_png__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logo_small_2x_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__logo_small_2x_png__);
var _jsxFileName = '/Users/stephanie/dev/SideProjects/VoteList/src/components/Header/Header.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Navigation__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */],
            { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.brand, to: '/', __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.brandTxt, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                },
                __self: this
              },
              'SteffiApps'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.banner, __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h1',
              { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.bannerTitle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28
                },
                __self: this
              },
              'VoteList'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.bannerDesc, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                },
                __self: this
              },
              'Vote on Collab Playlists'
            )
          )
        )
      );
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_2__Header_css___default.a)(Header));

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(627);
    var insertCss = __webpack_require__(245);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Header.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Header.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(244)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Header-root-O9oW9 {\n  background: #373277;\n  color: #fff;\n}\n\n.Header-container-qQ2mF {\n  margin: 0 auto;\n  padding: 20px 0;\n  max-width: 1000px;\n}\n\n.Header-brand-2oS_y {\n  color: rgb(146, 229, 252);\n  text-decoration: none;\n  font-size: 1.75em; /* ~28px */\n}\n\n.Header-brandTxt-230aH {\n  margin-left: 10px;\n}\n\n.Header-banner-2AXOj {\n  text-align: center;\n}\n\n.Header-bannerTitle-3dmwX {\n  margin: 0;\n  padding: 10px;\n  font-weight: normal;\n  font-size: 4em;\n  line-height: 1em;\n}\n\n.Header-bannerDesc-I2eY9 {\n  padding: 0;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 1.25em;\n  margin: 0;\n}\n", "", {"version":3,"sources":["/Users/stephanie/dev/SideProjects/VoteList/src/components/Header/Header.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;CAC/M;;AAED;EACE,oBAAoB;EACpB,YAAY;CACb;;AAED;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;CACnB;;AAED;EACE,0BAA0B;EAC1B,sBAAsB;EACtB,kBAAkB,CAAC,WAAW;CAC/B;;AAED;EACE,kBAAkB;CACnB;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,UAAU;EACV,cAAc;EACd,oBAAoB;EACpB,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,WAAW;EACX,gCAAgC;EAChC,kBAAkB;EAClB,UAAU;CACX","file":"Header.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.root {\n  background: #373277;\n  color: #fff;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 0;\n  max-width: 1000px;\n}\n\n.brand {\n  color: rgb(146, 229, 252);\n  text-decoration: none;\n  font-size: 1.75em; /* ~28px */\n}\n\n.brandTxt {\n  margin-left: 10px;\n}\n\n.banner {\n  text-align: center;\n}\n\n.bannerTitle {\n  margin: 0;\n  padding: 10px;\n  font-weight: normal;\n  font-size: 4em;\n  line-height: 1em;\n}\n\n.bannerDesc {\n  padding: 0;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 1.25em;\n  margin: 0;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Header-root-O9oW9",
	"container": "Header-container-qQ2mF",
	"brand": "Header-brand-2oS_y",
	"brandTxt": "Header-brandTxt-230aH",
	"banner": "Header-banner-2AXOj",
	"bannerTitle": "Header-bannerTitle-3dmwX",
	"bannerDesc": "Header-bannerDesc-I2eY9"
};

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_spotify_web_api_node__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_spotify_web_api_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_spotify_web_api_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navigation_css__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Navigation_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Link__ = __webpack_require__(615);
var _jsxFileName = '/Users/stephanie/dev/SideProjects/VoteList/src/components/Navigation/Navigation.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






var CLIENT_ID = 'b8ae36286f1c4db28a8a2ba380a4d8cc';
var CLIENT_SECRET = '18cfc75e9f4b4785ac325eaa38a095c9';
var REDIRECT_URI = 'http://localhost:3000/callback';
var loginUrl = 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID + '&response_type=token' + '&scope=playlist-read-private%20playlist-modify%20playlist-modify-private' + '&redirect_uri=' + encodeURIComponent(REDIRECT_URI);

var Navigation = function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
  }

  _createClass(Navigation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getSpotify();
    }
  }, {
    key: 'getSpotify',
    value: function getSpotify() {
      var _this2 = this;

      var spotifyApi = new __WEBPACK_IMPORTED_MODULE_2_spotify_web_api_node___default.a({
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI
      });

      if (!localStorage.authToken) return null;
      var auth = JSON.parse(localStorage.authToken);

      spotifyApi.setAccessToken(auth.access_token);
      spotifyApi.getMe().then(function (res) {
        _this2.setState({
          user: res.body
        });
      });
    }
  }, {
    key: 'renderLogin',
    value: function renderLogin() {
      var _ref = this.state || {},
          user = _ref.user;

      if (user) {
        var name = user.display_name.split(" ");
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          },
          'Welcome ',
          name[0],
          '!'
        );
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link, href: loginUrl, __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        },
        'Log in'
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.root, role: 'navigation', __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        },
        this.renderLogin()
      );
    }
  }]);

  return Navigation;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a)(Navigation));

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var AuthenticationRequest = __webpack_require__(630),
    WebApiRequest = __webpack_require__(631),
    HttpManager = __webpack_require__(632);

function SpotifyWebApi(credentials) {
  this._credentials = credentials || {};
}

SpotifyWebApi.prototype = {
  _addBodyParameters: function(request, options) {
    if (options) {
      for (var key in options) {
        if (key !== 'credentials') {
          request.addBodyParameter(key, options[key]);
        }
      }
    }
  },

  _addQueryParameters: function(request, options) {
    if (!options) {
      return;
    }
    for (var key in options) {
      if (key !== 'credentials') {
        request.addQueryParameter(key, options[key]);
      }
    }
  },

  _performRequest: function(method, request) {
    var promiseFunction = function(resolve, reject) {
      method(request, function(error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    };
    return new Promise(promiseFunction);
  },

  _addAccessToken: function(request, accessToken) {
    if (accessToken) {
      request.addHeaders({
        'Authorization' : 'Bearer ' + accessToken
      });
    }
  },

  setCredentials: function(credentials) {
    for (var key in credentials) {
      if (credentials.hasOwnProperty(key)) {
        this._credentials[key] = credentials[key];
      }
    }
  },

  getCredentials: function() {
    return this._credentials;
  },

  resetCredentials: function() {
    this._credentials = null;
  },

  setClientId: function(clientId) {
    this._setCredential('clientId', clientId);
  },

  setClientSecret: function(clientSecret) {
    this._setCredential('clientSecret', clientSecret);
  },

  setAccessToken: function(accessToken) {
    this._setCredential('accessToken', accessToken);
  },

  setRefreshToken: function(refreshToken) {
    this._setCredential('refreshToken', refreshToken);
  },

  setRedirectURI: function(redirectUri) {
    this._setCredential('redirectUri', redirectUri);
  },

  getRedirectURI: function() {
    return this._getCredential('redirectUri');
  },

  getClientId: function() {
    return this._getCredential('clientId');
  },

  getClientSecret: function() {
    return this._getCredential('clientSecret');
  },

  getAccessToken: function() {
    return this._getCredential('accessToken');
  },

  getRefreshToken: function() {
    return this._getCredential('refreshToken');
  },

  resetClientId: function() {
    this._resetCredential('clientId');
  },

  resetClientSecret: function() {
    this._resetCredential('clientSecret');
  },

  resetAccessToken: function() {
    this._resetCredential('accessToken');
  },

  resetRefreshToken: function() {
    this._resetCredential('refreshToken');
  },

  resetRedirectURI: function() {
    this._resetCredential('redirectUri');
  },

  _setCredential: function(credentialKey, value) {
    this._credentials = this._credentials || {};
    this._credentials[credentialKey] = value;
  },

  _getCredential: function(credentialKey) {
    if (!this._credentials) {
      return;
    } else {
      return this._credentials[credentialKey];
    }
  },

  _resetCredential: function(credentialKey) {
    if (!this._credentials) {
      return;
    } else {
      this._credentials[credentialKey] = null;
    }
  },

  /**
   * Look up a track.
   * @param {string} trackId The track's ID.
   * @param {Object} [options] The possible options, currently only market.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example getTrack('3Qm86XLflmIXVm1wcwkgDK').then(...)
   * @returns {Promise|undefined} A promise that if successful, returns an object containing information
   *          about the track. Not returned if a callback is given.
   */
  getTrack: function(trackId, options, callback) {
     // In case someone is using a version where options parameter did not exist.
    var actualCallback;
    if (typeof options === 'function') {
      actualCallback = options;
    } else {
      actualCallback = callback;
    }

    var actualOptions = {};
    if (typeof options === 'object') {
      Object.keys(options).forEach(function(key) {
        actualOptions[key] = options[key];
      });
    }

    var request = WebApiRequest.builder()
      .withPath('/v1/tracks/' + trackId)
      .withQueryParameters(actualOptions)
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (actualCallback) {
      promise.then(function(data) {
        actualCallback(null, data);
      }, function(err) {
        actualCallback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Look up several tracks.
   * @param {string[]} trackIds The IDs of the artists.
   * @param {Object} [options] The possible options, currently only market.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example getArtists(['0oSGxfWSnnOXhD2fKuz2Gy', '3dBVyJ7JuOMt4GE9607Qin']).then(...)
   * @returns {Promise|undefined} A promise that if successful, returns an object containing information
   *          about the artists. Not returned if a callback is given.
   */
  getTracks: function(trackIds, options, callback) {
    // In case someone is using a version where options parameter did not exist.
    var actualCallback;
    if (typeof options === 'function') {
      actualCallback = options;
    } else {
      actualCallback = callback;
    }

    var actualOptions = {};
    if (typeof options === 'object') {
      Object.keys(options).forEach(function(key) {
        actualOptions[key] = options[key];
      });
    }

    var request = WebApiRequest.builder()
      .withPath('/v1/tracks')
      .withQueryParameters({
        'ids' : trackIds.join(',')
      })
      .build();

    this._addAccessToken(request, this.getAccessToken());
    this._addQueryParameters(request, actualOptions);

    var promise = this._performRequest(HttpManager.get, request);

    if (actualCallback) {
      promise.then(function(data) {
        actualCallback(null, data);
      }, function(err) {
        actualCallback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Look up an album.
   * @param {string} albumId The album's ID.
   * @param {Object} [options] The possible options, currently only market.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example getAlbum('0sNOF9WDwhWunNAHPD3Baj').then(...)
   * @returns {Promise|undefined} A promise that if successful, returns an object containing information
   *          about the album. Not returned if a callback is given.
   */
  getAlbum: function(albumId, options, callback) {
    // In case someone is using a version where options parameter did not exist.
    var actualCallback;
    if (typeof options === 'function') {
      actualCallback = options;
    } else {
      actualCallback = callback;
    }

    var actualOptions = {};
    if (typeof options === 'object') {
      Object.keys(options).forEach(function(key) {
        actualOptions[key] = options[key];
      });
    }

    var request = WebApiRequest.builder()
      .withPath('/v1/albums/' + albumId)
      .withQueryParameters(actualOptions)
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (actualCallback) {
      promise.then(function(data) {
        actualCallback(null, data);
      }, function(err) {
        actualCallback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Look up several albums.
   * @param {string[]} albumIds The IDs of the albums.
   * @param {Object} [options] The possible options, currently only market.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example getAlbums(['0oSGxfWSnnOXhD2fKuz2Gy', '3dBVyJ7JuOMt4GE9607Qin']).then(...)
   * @returns {Promise|undefined} A promise that if successful, returns an object containing information
   *          about the albums. Not returned if a callback is given.
   */
  getAlbums: function(albumIds, options, callback) {
    // In case someone is using a version where options parameter did not exist.
    var actualCallback;
    if (typeof options === 'function') {
      actualCallback = options;
    } else {
      actualCallback = callback;
    }

    var actualOptions = {};
    if (typeof options === 'object') {
      Object.keys(options).forEach(function(key) {
        actualOptions[key] = options[key];
      });
    }

    var request = WebApiRequest.builder()
      .withPath('/v1/albums')
      .withQueryParameters({
        'ids' : albumIds.join(',')
      })
      .build();

    this._addAccessToken(request, this.getAccessToken());
    this._addQueryParameters(request, actualOptions);

    var promise = this._performRequest(HttpManager.get, request);

    if (actualCallback) {
      promise.then(function(data) {
        actualCallback(null, data);
      }, function(err) {
        actualCallback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Look up an artist.
   * @param {string} artistId The artist's ID.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example api.getArtist('1u7kkVrr14iBvrpYnZILJR').then(...)
   * @returns {Promise|undefined} A promise that if successful, returns an object containing information
   *          about the artist. Not returned if a callback is given.
   */
  getArtist: function(artistId, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/artists/' + artistId)
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Look up several artists.
   * @param {string[]} artistIds The IDs of the artists.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example getArtists(['0oSGxfWSnnOXhD2fKuz2Gy', '3dBVyJ7JuOMt4GE9607Qin']).then(...)
   * @returns {Promise|undefined} A promise that if successful, returns an object containing information
   *          about the artists. Not returned if a callback is given.
   */
  getArtists: function(artistIds, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/artists')
      .withQueryParameters({
        'ids' : artistIds.join(',')
      })
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Search for music entities of certain types.
   * @param {string} query The search query.
   * @param {string[]} types An array of item types to search across.
   * Valid types are: 'album', 'artist', 'playlist', and 'track'.
   * @param {Object} [options] The possible options, e.g. limit, offset.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example search('Abba', ['track', 'playlist'], { limit : 5, offset : 1 }).then(...)
   * @returns {Promise|undefined} A promise that if successful, returns an object containing the
   *          search results. The result is paginated. If the promise is rejected,
   *          it contains an error object. Not returned if a callback is given.
   */
  search: function(query, types, options, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/search/')
      .withQueryParameters({
        type : types.join(','),
        q : query
      })
      .build();

    this._addAccessToken(request, this.getAccessToken());
    this._addQueryParameters(request, options);

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Search for an album.
   * @param {string} query The search query.
   * @param {Object} [options] The possible options, e.g. limit, offset.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example searchAlbums('Space Oddity', { limit : 5, offset : 1 }).then(...)
   * @returns {Promise|undefined} A promise that if successful, returns an object containing the
   *          search results. The result is paginated. If the promise is rejected,
   *          it contains an error object. Not returned if a callback is given.
   */
  searchAlbums: function(query, options, callback) {
    return this.search(query, ['album'], options, callback);
  },

  /**
   * Search for an artist.
   * @param {string} query The search query.
   * @param {Object} [options] The possible options, e.g. limit, offset.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example searchArtists('David Bowie', { limit : 5, offset : 1 }).then(...)
   * @returns {Promise|undefined} A promise that if successful, returns an object containing the
   *          search results. The result is paginated. If the promise is rejected,
   *          it contains an error object. Not returned if a callback is given.
   */
  searchArtists: function(query, options, callback) {
    return this.search(query, ['artist'], options, callback);
  },

  /**
   * Search for a track.
   * @param {string} query The search query.
   * @param {Object} [options] The possible options, e.g. limit, offset.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example searchTracks('Mr. Brightside', { limit : 3, offset : 2 }).then(...)
   * @returns {Promise|undefined} A promise that if successful, returns an object containing the
   *          search results. The result is paginated. If the promise is rejected,
   *          it contains an error object. Not returned if a callback is given.
   */
  searchTracks: function(query, options, callback) {
    return this.search(query, ['track'], options, callback);
  },

  /**
   * Search for playlists.
   * @param {string} query The search query.
   * @param {Object} options The possible options.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example searchPlaylists('workout', { limit : 1, offset : 0 }).then(...)
   * @returns {Promise|undefined} A promise that if successful, returns an object containing the
   *          search results. The result is paginated. If the promise is rejected,
   *          it contains an error object. Not returned if a callback is given.
   */
  searchPlaylists: function(query, options, callback) {
    return this.search(query, ['playlist'], options, callback);
  },

  /**
   * Get an artist's albums.
   * @param {string} artistId The artist's ID.
   * @options {Object} [options] The possible options, e.g. limit, offset.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example getArtistAlbums('0oSGxfWSnnOXhD2fKuz2Gy', { album_type : 'album', country : 'GB', limit : 2, offset : 5 }).then(...)
   * @returns {Promise|undefined} A promise that if successful, returns an object containing the albums
   *          for the given artist. The result is paginated. If the promise is rejected,
   *          it contains an error object. Not returned if a callback is given.
   */
  getArtistAlbums: function(artistId, options, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/artists/' + artistId + '/albums')
      .build();

    this._addAccessToken(request, this.getAccessToken());
    this._addQueryParameters(request, options);

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Get the tracks of an album.
   * @param albumId the album's ID.
   * @options {Object} [options] The possible options, e.g. limit.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example getAlbumTracks('41MnTivkwTO3UUJ8DrqEJJ', { limit : 5, offset : 1 }).then(...)
   * @returns {Promise|undefined} A promise that if successful, returns an object containing the
   *                    tracks in the album. The result is paginated. If the promise is rejected.
   *                    it contains an error object. Not returned if a callback is given.
   */
  getAlbumTracks: function(albumId, options, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/albums/' + albumId + '/tracks')
      .build();

    this._addAccessToken(request, this.getAccessToken());
    this._addQueryParameters(request, options);

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Get an artist's top tracks.
   * @param {string} artistId The artist's ID.
   * @param {string} country The country/territory where the tracks are most popular. (format: ISO 3166-1 alpha-2)
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example getArtistTopTracks('0oSGxfWSnnOXhD2fKuz2Gy', 'GB').then(...)
   * @returns {Promise|undefined} A promise that if successful, returns an object containing the
   *          artist's top tracks in the given country. If the promise is rejected,
   *          it contains an error object. Not returned if a callback is given.
   */
  getArtistTopTracks: function(artistId, country, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/artists/' + artistId + '/top-tracks')
      .withQueryParameters({
        'country' : country
      })
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Get related artists.
   * @param {string} artistId The artist's ID.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example getArtistRelatedArtists('0oSGxfWSnnOXhD2fKuz2Gy').then(...)
   * @returns {Promise|undefined} A promise that if successful, returns an object containing the
   *          related artists. If the promise is rejected, it contains an error object. Not returned if a callback is given.
   */
  getArtistRelatedArtists: function(artistId, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/artists/' + artistId + '/related-artists')
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Get information about a user.
   * @param userId The user ID.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example getUser('thelinmichael').then(...)
   * @returns {Promise|undefined} A promise that if successful, resolves to an object
   *          containing information about the user. If the promise is
   *          rejected, it contains an error object. Not returned if a callback is given.
   */
  getUser: function(userId, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/users/' + encodeURIComponent(userId))
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Get information about the user that has signed in (the current user).
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example getMe().then(...)
   * @returns {Promise|undefined} A promise that if successful, resolves to an object
   *          containing information about the user. The amount of information
   *          depends on the permissions given by the user. If the promise is
   *          rejected, it contains an error object. Not returned if a callback is given.
   */
  getMe: function(callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/me')
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Get a user's playlists.
   * @param {string} userId An optional id of the user. If you know the Spotify URI it is easy
   * to find the id (e.g. spotify:user:<here_is_the_id>). If not provided, the id of the user that granted
   * the permissions will be used.
   * @param {Object} [options] The options supplied to this request.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example getUserPlaylists('thelinmichael').then(...)
   * @returns {Promise|undefined} A promise that if successful, resolves to an object containing
   *          a list of playlists. If rejected, it contains an error object. Not returned if a callback is given.
   */
  getUserPlaylists: function(userId, options, callback) {
    var path;
    if (typeof userId === 'string') {
      path = '/v1/users/' + encodeURIComponent(userId) + '/playlists';
    } else {
      path = '/v1/me/playlists';
    }

    var request = WebApiRequest.builder()
      .withPath(path)
      .build();

    this._addAccessToken(request, this.getAccessToken());
    this._addQueryParameters(request, options);

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Get a playlist.
   * @param {string} userId The playlist's owner's user ID.
   * @param {string} playlistId The playlist's ID.
   * @param {Object} [options] The options supplied to this request.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example getPlaylist('thelinmichael', '3EsfV6XzCHU8SPNdbnFogK').then(...)
   * @returns {Promise|undefined} A promise that if successful, resolves to an object containing
   *          the playlist. If rejected, it contains an error object. Not returned if a callback is given.
   */
  getPlaylist: function(userId, playlistId, options, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/users/' + encodeURIComponent(userId) + '/playlists/' + playlistId)
      .build();

    this._addAccessToken(request, this.getAccessToken());
    this._addQueryParameters(request, options);

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Get tracks in a playlist.
   * @param {string} userId THe playlist's owner's user ID.
   * @param {string} playlistId The playlist's ID.
   * @param {Object} [options] Optional options, such as fields.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example getPlaylistTracks('thelinmichael', '3ktAYNcRHpazJ9qecm3ptn').then(...)
   * @returns {Promise|undefined} A promise that if successful, resolves to an object that containing
   * the tracks in the playlist. If rejected, it contains an error object. Not returned if a callback is given.
   */
  getPlaylistTracks: function(userId, playlistId, options, callback) {
    var request = WebApiRequest.builder().
      withPath('/v1/users/' + encodeURIComponent(userId) + '/playlists/' + playlistId + '/tracks').
      withQueryParameters(options).
      build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Create a playlist.
   * @param {string} userId The playlist's owner's user ID.
   * @param {string} playlistName The name of the playlist.
   * @param {Object} [options] The possible options, currently only public.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example createPlaylist('thelinmichael', 'My cool playlist!', { public : false }).then(...)
   * @returns {Promise|undefined} A promise that if successful, resolves to an object containing information about the
   *          created playlist. If rejected, it contains an error object. Not returned if a callback is given.
   */
  createPlaylist: function(userId, playlistName, options, callback) {
    // In case someone is using a version where options parameter did not exist.
    var actualCallback;
    if (typeof options === 'function') {
      actualCallback = options;
    } else {
      actualCallback = callback;
    }

    var actualOptions = { 'name' : playlistName };
    if (typeof options === 'object') {
      Object.keys(options).forEach(function(key) {
        actualOptions[key] = options[key];
      });
    }

    var request = WebApiRequest.builder()
      .withPath('/v1/users/' + encodeURIComponent(userId) + '/playlists')
      .withHeaders({ 'Content-Type' : 'application/json' })
      .withBodyParameters(actualOptions)
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.post, request);

    if (actualCallback) {
      promise.then(function(data) {
        actualCallback(null, data);
      }, function(err) {
        actualCallback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Follow a playlist.
   * @param {string} userId The playlist's owner's user ID
   * @param {string} playlistId The playlist's ID
   * @param {Object} [options] The possible options, currently only public.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful, simply resolves to an empty object. If rejected,
   * it contains an error object. Not returned if a callback is given.
   */
  followPlaylist: function(userId, playlistId, options, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/users/' + encodeURIComponent(userId) + '/playlists/' + playlistId + '/followers')
      .withBodyParameters(options)
      .withHeaders({ 'Content-Type' : 'application/json' })
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.put, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Unfollow a playlist.
   * @param {string} userId The playlist's owner's user ID
   * @param {string} playlistId The playlist's ID
   * @param {Object} [options] The possible options, currently only public.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful, simply resolves to an empty object. If rejected,
   * it contains an error object. Not returned if a callback is given.
   */
  unfollowPlaylist: function(userId, playlistId, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/users/' + encodeURIComponent(userId) + '/playlists/' + playlistId + '/followers')
      .withHeaders({ 'Content-Type' : 'application/json' })
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.del, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Change playlist details.
   * @param {string} userId The playlist's owner's user ID
   * @param {string} playlistId The playlist's ID
   * @param {Object} [options] The possible options, e.g. name, public.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example changePlaylistDetails('thelinmichael', '3EsfV6XzCHU8SPNdbnFogK', {name: 'New name', public: true}).then(...)
   * @returns {Promise|undefined} A promise that if successful, simply resolves to an empty object. If rejected,
   * it contains an error object. Not returned if a callback is given.
   */
  changePlaylistDetails: function(userId, playlistId, options, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/users/' + encodeURIComponent(userId) + '/playlists/' + playlistId)
      .withHeaders({ 'Content-Type' : 'application/json' })
      .withBodyParameters(options)
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.put, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Add tracks to a playlist.
   * @param {string} userId The playlist's owner's user ID
   * @param {string} playlistId The playlist's ID
   * @param {string[]} tracks URIs of the tracks to add to the playlist.
   * @param {Object} [options] Options, position being the only one.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example addTracksToPlaylist('thelinmichael', '3EsfV6XzCHU8SPNdbnFogK',
              '["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"]').then(...)
   * @returns {Promise|undefined} A promise that if successful returns an object containing a snapshot_id. If rejected,
   * it contains an error object. Not returned if a callback is given.
   */
  addTracksToPlaylist: function(userId, playlistId, tracks, options, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/users/' + encodeURIComponent(userId) + '/playlists/' + playlistId + '/tracks')
      .withHeaders({ 'Content-Type' : 'application/json' })
      .withBodyParameters({
        uris: tracks
      })
      .build();

    this._addQueryParameters(request, options);
    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.post, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Remove tracks from a playlist.
   * @param {string} userId The playlist's owner's user ID
   * @param {string} playlistId The playlist's ID
   * @param {Object[]} tracks An array of objects containing a property called uri with the track URI (String), and
   * a an optional property called positions (int[]), e.g. { uri : "spotify:track:491rM2JN8KvmV6p0oDDuJT", positions : [0, 15] }
   * @param {Object} options Options, snapshot_id being the only one.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful returns an object containing a snapshot_id. If rejected,
   * it contains an error object. Not returned if a callback is given.
   */
  removeTracksFromPlaylist: function(userId, playlistId, tracks, options, callback) {
    var request = WebApiRequest.builder().
      withPath('/v1/users/' + encodeURIComponent(userId) + '/playlists/' + playlistId + '/tracks').
      withHeaders({ 'Content-Type' : 'application/json' }).
      withBodyParameters({
        'tracks': tracks
      }).
      build();

    this._addBodyParameters(request, options);
    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.del, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Remove tracks from a playlist by position instead of specifying the tracks' URIs.
   * @param {string} userId The playlist's owner's user ID
   * @param {string} playlistId The playlist's ID
   * @param {int[]} positions The positions of the tracks in the playlist that should be removed
   * @param {string} snapshot_id The snapshot ID, or version, of the playlist. Required
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful returns an object containing a snapshot_id. If rejected,
   * it contains an error object. Not returned if a callback is given.
   */
  removeTracksFromPlaylistByPosition: function(userId, playlistId, positions, snapshotId, callback) {
    var request = WebApiRequest.builder().
      withPath('/v1/users/' + encodeURIComponent(userId) + '/playlists/' + playlistId + '/tracks').
      withHeaders({ 'Content-Type' : 'application/json' }).
      withBodyParameters({
        'positions': positions,
        'snapshot_id' : snapshotId
      }).
      build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.del, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Replace tracks in a playlist.
   * @param {string} userId The playlist's owner's user ID
   * @param {string} playlistId The playlist's ID
   * @param {Object[]} uris An array of track URIs (strings)
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful returns an empty object. If rejected,
   * it contains an error object. Not returned if a callback is given.
   */
  replaceTracksInPlaylist: function(userId, playlistId, uris, callback) {
    var request = WebApiRequest.builder().
      withPath('/v1/users/' + encodeURIComponent(userId) + '/playlists/' + playlistId + '/tracks').
      withHeaders({ 'Content-Type' : 'application/json' }).
      withBodyParameters({
        'uris': uris
      }).
      build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.put, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Reorder tracks in a playlist.
   * @param {string} userId The playlist's owner's user ID
   * @param {string} playlistId The playlist's ID
   * @param {int} rangeStart The position of the first track to be reordered.
   * @param {int} insertBefore The position where the tracks should be inserted.
   * @param {Object} options Optional parameters, i.e. range_length and snapshot_id.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful returns an object containing a snapshot_id. If rejected,
   * it contains an error object. Not returned if a callback is given.
   */
  reorderTracksInPlaylist: function(userId, playlistId, rangeStart, insertBefore, options, callback) {
    var request = WebApiRequest.builder().
      withPath('/v1/users/' + encodeURIComponent(userId) + '/playlists/' + playlistId + '/tracks').
      withHeaders({ 'Content-Type' : 'application/json' }).
      withBodyParameters({
        'range_start': rangeStart,
        'insert_before' : insertBefore
      }).
      build();

    this._addAccessToken(request, this.getAccessToken());
    this._addBodyParameters(request, options);

    var promise =  this._performRequest(HttpManager.put, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Get audio features for a single track identified by its unique Spotify ID.
   * @param {string} trackId The track ID
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example getAudioFeaturesForTrack('38P3Q4QcdjQALGF2Z92BmR').then(...)
   * @returns {Promise|undefined} A promise that if successful, resolves to an object
   *          containing information about the audio features. If the promise is
   *          rejected, it contains an error object. Not returned if a callback is given.
   */
  getAudioFeaturesForTrack: function(trackId, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/audio-features/' + trackId)
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Get audio analysis for a single track identified by its unique Spotify ID.
   * @param {string} trackId The track ID
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example getAudioAnalysisForTrack('38P3Q4QcdjQALGF2Z92BmR').then(...)
   * @returns {Promise|undefined} A promise that if successful, resolves to an object
   *          containing information about the audio analysis. If the promise is
   *          rejected, it contains an error object. Not returned if a callback is given.
   */
  getAudioAnalysisForTrack: function(trackId, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/audio-analysis/' + trackId)
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Get audio features for multiple tracks identified by their unique Spotify ID.
   * @param {string[]} trackIds The track IDs
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example getAudioFeaturesForTracks(['38P3Q4QcdjQALGF2Z92BmR', '2HO2bnoMrpnZUbUqiilLHi']).then(...)
   * @returns {Promise|undefined} A promise that if successful, resolves to an object
   *          containing information about the audio features for the tracks. If the promise is
   *          rejected, it contains an error object. Not returned if a callback is given.
   */
  getAudioFeaturesForTracks: function(trackIds, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/audio-features')
      .withQueryParameters({
        'ids' : trackIds.join(',')
      })
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Create a playlist-style listening experience based on seed artists, tracks and genres.
   * @param {Object} [options] The options supplied to this request.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example getRecommendations({ min_energy: 0.4, seed_artists: ['6mfK6Q2tzLMEchAr0e9Uzu', '4DYFVNKZ1uixa6SQTvzQwJ'], min_popularity: 50 }).then(...)
   * @returns {Promise|undefined} A promise that if successful, resolves to an object containing
   *          a list of tracks and a list of seeds. If rejected, it contains an error object. Not returned if a callback is given.
   */
  getRecommendations: function(options, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/recommendations')
      .build();

    var _opts = {};
    var optionsOfTypeArray = ['seed_artists', 'seed_genres', 'seed_tracks'];
    for (var option in options) {
      if (options.hasOwnProperty(option)) {
        if (optionsOfTypeArray.indexOf(option) !== -1 &&
          Object.prototype.toString.call(options[option]) === '[object Array]') {
          _opts[option] = options[option].join(',');
        } else {
          _opts[option] = options[option];
        }
      }
    }

    this._addAccessToken(request, this.getAccessToken());
    this._addQueryParameters(request, _opts);

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Retrieve a list of available genres seed parameter values for recommendations.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example getAvailableGenreSeeds().then(...)
   * @returns {Promise|undefined} A promise that if successful, resolves to an object containing
   *          a list of available genres to be used as seeds for recommendations.
   *          If rejected, it contains an error object. Not returned if a callback is given.
   */
  getAvailableGenreSeeds: function(callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/recommendations/available-genre-seeds')
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Retrieve a URL where the user can give the application permissions.
   * @param {string[]} scopes The scopes corresponding to the permissions the application needs.
   * @param {string} state A parameter that you can use to maintain a value between the request and the callback to redirect_uri.It is useful to prevent CSRF exploits.
   * @returns {string} The URL where the user can give application permissions.
   */
  createAuthorizeURL: function(scopes, state) {
    var request = AuthenticationRequest.builder()
      .withPath('/authorize')
      .withQueryParameters({
        'client_id' : this.getClientId(),
        'response_type' : 'code',
        'redirect_uri' : this.getRedirectURI(),
        'scope' : scopes.join('%20'),
        'state' : state
      })
      .build();

    return request.getURL();
  },

  /**
   * Retrieve the tracks that are saved to the authenticated users Your Music library.
   * @param {Object} [options] Options, being market, limit, and/or offset.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful, resolves to an object containing a paging object which in turn contains
   *          playlist track objects. Not returned if a callback is given.
   */
  getMySavedTracks: function(options, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/me/tracks')
      .withQueryParameters(options)
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Check if one or more tracks is already saved in the current Spotify user’s “Your Music” library.
   * @param {string[]} trackIds The track IDs
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful, resolves into an array of booleans. The order
   * of the returned array's elements correspond to the track ID in the request.
   * The boolean value of true indicates that the track is part of the user's library, otherwise false.
   * Not returned if a callback is given.
   */
  containsMySavedTracks: function(trackIds, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/me/tracks/contains')
      .withQueryParameters({
        'ids' : trackIds.join(',')
      })
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Remove a track from the authenticated user's Your Music library.
   * @param {string[]} trackIds The track IDs
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful returns null, otherwise an error.
   * Not returned if a callback is given.
   */
  removeFromMySavedTracks: function(trackIds, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/me/tracks')
      .withHeaders({ 'Content-Type' : 'application/json' })
      .withBodyParameters(trackIds)
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.del, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

   /**
   * Add a track from the authenticated user's Your Music library.
   * @param {string[]} trackIds The track IDs
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful returns null, otherwise an error. Not returned if a callback is given.
   */
  addToMySavedTracks: function(trackIds, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/me/tracks')
      .withHeaders({ 'Content-Type' : 'application/json' })
      .withBodyParameters(trackIds)
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.put, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Remove an album from the authenticated user's Your Music library.
   * @param {string[]} albumIds The album IDs
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful returns null, otherwise an error.
   * Not returned if a callback is given.
   */
  removeFromMySavedAlbums: function(albumIds, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/me/albums')
      .withHeaders({ 'Content-Type' : 'application/json' })
      .withBodyParameters(albumIds)
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.del, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Add an album from the authenticated user's Your Music library.
   * @param {string[]} albumIds The track IDs
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful returns null, otherwise an error. Not returned if a callback is given.
   */
  addToMySavedAlbums: function(albumIds, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/me/albums')
      .withHeaders({ 'Content-Type' : 'application/json' })
      .withBodyParameters(albumIds)
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.put, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Retrieve the albums that are saved to the authenticated users Your Music library.
   * @param {Object} [options] Options, being market, limit, and/or offset.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful, resolves to an object containing a paging object which in turn contains
   *          playlist album objects. Not returned if a callback is given.
   */
  getMySavedAlbums: function(options, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/me/albums')
      .withQueryParameters(options)
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Check if one or more albums is already saved in the current Spotify user’s “Your Music” library.
   * @param {string[]} albumIds The album IDs
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful, resolves into an array of booleans. The order
   * of the returned array's elements correspond to the album ID in the request.
   * The boolean value of true indicates that the album is part of the user's library, otherwise false.
   * Not returned if a callback is given.
   */
  containsMySavedAlbums: function(albumIds, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/me/albums/contains')
      .withQueryParameters({
        'ids' : albumIds.join(',')
      })
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Get the current user's top artists based on calculated affinity.
   * @param {Object} [options] Options, being time_range, limit, offset.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful, resolves into a paging object of artists,
   *          otherwise an error. Not returned if a callback is given.
   */
  getMyTopArtists: function(options, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/me/top/artists')
      .build();

    this._addAccessToken(request, this.getAccessToken());
    this._addQueryParameters(request, options);

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Get the current user's top tracks based on calculated affinity.
   * @param {Object} [options] Options, being time_range, limit, offset.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful, resolves into a paging object of tracks,
   *          otherwise an error. Not returned if a callback is given.
   */
  getMyTopTracks: function(options, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/me/top/tracks')
      .build();

    this._addAccessToken(request, this.getAccessToken());
    this._addQueryParameters(request, options);

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Get the Current User's Recently Played Tracks
   * @param {Object} [options] Options, being type, after, limit, before.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful, resolves into a paging object of tracks,
   *          otherwise an error. Not returned if a callback is given.
   */
  getMyRecentlyPlayedTracks: function(options, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/me/player/recently-played')
      .build();

    this._addAccessToken(request, this.getAccessToken());
    this._addQueryParameters(request, options);

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Get the Current User's Connect Devices
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful, resolves into a paging object of tracks,
   *          otherwise an error. Not returned if a callback is given.
   */
  getMyDevices: function(callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/me/player/devices')
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Get the Current User's Current Playback State
   * @param {Object} [options] Options, being market.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful, resolves into a paging object of tracks,
   *          otherwise an error. Not returned if a callback is given.
   */
  getMyCurrentPlaybackState: function(options, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/me/player')
      .build();

    this._addAccessToken(request, this.getAccessToken());
    this._addQueryParameters(request, options);

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Transfer a User's Playback
   * @param {Object} [options] Options, being market.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful, resolves into a paging object of tracks,
   *          otherwise an error. Not returned if a callback is given.
   */
  transferMyPlayback: function(options, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/me/player')
      .withHeaders({ 'Content-Type' : 'application/json' })
      .withBodyParameters({
        'device_ids': options.deviceIds,
        'play': options.play || false
      })
      .build();

    this._addAccessToken(request, this.getAccessToken());
    this._addBodyParameters(request, options);

    var promise = this._performRequest(HttpManager.put, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Add the current user as a follower of one or more other Spotify users.
   * @param {string[]} userIds The IDs of the users to be followed.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example followUsers(['thelinmichael', 'wizzler']).then(...)
   * @returns {Promise|undefined} A promise that if successful, simply resolves to an empty object. If rejected,
   *          it contains an error object. Not returned if a callback is given.
   */
  followUsers: function(userIds, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/me/following')
      .withQueryParameters({
        ids: userIds.join(','),
        type: 'user'
      })
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.put, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Add the current user as a follower of one or more artists.
   * @param {string[]} artistIds The IDs of the artists to be followed.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example followArtists(['0LcJLqbBmaGUft1e9Mm8HV', '3gqv1kgivAc92KnUm4elKv']).then(...)
   * @returns {Promise|undefined} A promise that if successful, simply resolves to an empty object. If rejected,
   *          it contains an error object. Not returned if a callback is given.
   */
  followArtists: function(artistIds, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/me/following')
      .withQueryParameters({
        ids: artistIds.join(','),
        type: 'artist'
      })
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.put, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Remove the current user as a follower of one or more other Spotify users.
   * @param {string[]} userIds The IDs of the users to be unfollowed.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example unfollowUsers(['thelinmichael', 'wizzler']).then(...)
   * @returns {Promise|undefined} A promise that if successful, simply resolves to an empty object. If rejected,
   *          it contains an error object. Not returned if a callback is given.
   */
  unfollowUsers: function(userIds, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/me/following')
      .withQueryParameters({
        ids: userIds.join(','),
        type: 'user'
      })
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.del, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Remove the current user as a follower of one or more artists.
   * @param {string[]} artistIds The IDs of the artists to be unfollowed.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example unfollowArtists(['0LcJLqbBmaGUft1e9Mm8HV', '3gqv1kgivAc92KnUm4elKv']).then(...)
   * @returns {Promise|undefined} A promise that if successful, simply resolves to an empty object. If rejected,
   *          it contains an error object. Not returned if a callback is given.
   */
  unfollowArtists: function(artistIds, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/me/following')
      .withQueryParameters({
        ids: artistIds.join(','),
        type: 'artist'
      })
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.del, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Check to see if the current user is following one or more other Spotify users.
   * @param {string[]} userIds The IDs of the users to check if are followed by the current user.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example isFollowingUsers(['thelinmichael', 'wizzler']).then(...)
   * @returns {Promise|undefined} A promise that if successful, resolves into an array of booleans. The order
   *          of the returned array's elements correspond to the users IDs in the request.
   *          The boolean value of true indicates that the user is following that user, otherwise is not.
   *          Not returned if a callback is given.
   */
  isFollowingUsers: function(userIds, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/me/following/contains')
      .withQueryParameters({
        ids: userIds.join(','),
        type: 'user'
      })
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Get the current user's followed artists.
   * @param {Object} [options] Options, being after and limit.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful, resolves to an object containing a paging object which contains
   * album objects. Not returned if a callback is given.
   */
  getFollowedArtists: function(options, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/me/following')
      .withHeaders({ 'Content-Type' : 'application/json' })
      .withQueryParameters({
        type : 'artist'
      })
      .build();

    this._addAccessToken(request, this.getAccessToken());
    this._addQueryParameters(request, options);

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Check if users are following a playlist.
   * @param {string} userId The playlist's owner's user ID
   * @param {string} playlistId The playlist's ID
   * @param {String[]} User IDs of the following users
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful returns an array of booleans. If rejected,
   * it contains an error object. Not returned if a callback is given.
   */
  areFollowingPlaylist: function(userId, playlistId, followerIds, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/users/' + encodeURIComponent(userId) + '/playlists/' + playlistId + '/followers/contains')
      .withQueryParameters({
        ids : followerIds.join(',')
      })
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Check to see if the current user is following one or more artists.
   * @param {string[]} artistIds The IDs of the artists to check if are followed by the current user.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example isFollowingArtists(['0LcJLqbBmaGUft1e9Mm8HV', '3gqv1kgivAc92KnUm4elKv']).then(...)
   * @returns {Promise|undefined} A promise that if successful, resolves into an array of booleans. The order
   *          of the returned array's elements correspond to the artists IDs in the request.
   *          The boolean value of true indicates that the user is following that artist, otherwise is not.
   *          Not returned if a callback is given.
   */
  isFollowingArtists: function(artistIds, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/me/following/contains')
      .withQueryParameters({
        ids: artistIds.join(','),
        type: 'artist'
      })
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Retrieve new releases
   * @param {Object} [options] Options, being country, limit and/or offset.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful, resolves to an object containing a paging object which contains
   * album objects. Not returned if a callback is given.
   */
  getNewReleases: function(options, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/browse/new-releases')
      .withHeaders({ 'Content-Type' : 'application/json' })
      .withQueryParameters(options)
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Retrieve featured playlists
   * @param {Object} [options] Options, being country, locale, timestamp, limit, offset.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful, resolves to an object containing a paging object which contains
   * featured playlists. Not returned if a callback is given.
   */
  getFeaturedPlaylists: function(options, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/browse/featured-playlists')
      .withHeaders({ 'Content-Type' : 'application/json' })
      .withQueryParameters(options)
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Retrieve a list of categories used to tag items in Spotify (e.g. in the 'Browse' tab)
   * @param {Object} [options] Options, being country, locale, limit, offset.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful, resolves to an object containing a paging object of categories.
   * Not returned if a callback is given.
   */
  getCategories: function(options, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/browse/categories')
      .withQueryParameters(options)
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Retrieve a category.
   * @param {string} categoryId The id of the category to retrieve.
   * @param {Object} [options] Options, being country, locale.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful, resolves to an object containing a category object.
   * Not returned if a callback is given.
   */
  getCategory: function(categoryId, options, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/browse/categories/' + categoryId)
      .withQueryParameters(options)
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  },

  /**
   * Retrieve playlists for a category.
   * @param {string} categoryId The id of the category to retrieve playlists for.
   * @param {Object} [options] Options, being country, limit, offset.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @returns {Promise|undefined} A promise that if successful, resolves to a paging object containing simple playlists.
   * Not returned if a callback is given.
   */
  getPlaylistsForCategory: function(categoryId, options, callback) {
    var request = WebApiRequest.builder()
      .withPath('/v1/browse/categories/' + categoryId + '/playlists')
      .withQueryParameters(options)
      .build();

    this._addAccessToken(request, this.getAccessToken());

    var promise = this._performRequest(HttpManager.get, request);

    if (callback) {
      promise.then(function(data) {
        callback(null, data);
      }, function(err) {
        callback(err);
      });
    } else {
      return promise;
    }
  }
};

SpotifyWebApi._addMethods = function(methods) {
  for (var i in methods) {
    if (methods.hasOwnProperty(i)) {
      this.prototype[i] = methods[i];
    }
  }
};

module.exports = SpotifyWebApi;


/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Request = __webpack_require__(617);

var DEFAULT_HOST = 'accounts.spotify.com',
    DEFAULT_PORT = 443,
    DEFAULT_SCHEME = 'https';

module.exports.builder = function() {
  return Request.builder()
      .withHost(DEFAULT_HOST)
      .withPort(DEFAULT_PORT)
      .withScheme(DEFAULT_SCHEME);
};

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Request = __webpack_require__(617);

var DEFAULT_HOST = 'api.spotify.com',
    DEFAULT_PORT = 443,
    DEFAULT_SCHEME = 'https';

module.exports.builder = function() {
  return Request.builder()
      .withHost(DEFAULT_HOST)
      .withPort(DEFAULT_PORT)
      .withScheme(DEFAULT_SCHEME);
};

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var superagent = __webpack_require__(633),
    WebApiError = __webpack_require__(637);

var HttpManager = {};

/* Create superagent options from the base request */
var _getParametersFromRequest = function(request) {

  var options = {};

  if (request.getQueryParameters()) {
    options.query = request.getQueryParameters();
  }

  if (request.getHeaders() &&
      request.getHeaders()['Content-Type'] === 'application/json') {
    options.data = JSON.stringify(request.getBodyParameters());
  } else if (request.getBodyParameters()) {
    options.data = request.getBodyParameters();
  }

  if (request.getHeaders()) {
    options.headers = request.getHeaders();
  }
  return options;
};

/* Create an error object from an error returned from the Web API */
var _getErrorObject = function(defaultMessage, err) {
  var errorObject;
  if (typeof err.error === 'object' && typeof err.error.message === 'string') {
    // Web API Error format
    errorObject = new WebApiError(err.error.message, err.error.status);
  } else if (typeof err.error === 'string') {
    // Authorization Error format
    /* jshint ignore:start */
    errorObject = new WebApiError(err.error + ': ' + err['error_description']);
    /* jshint ignore:end */
  } else if (typeof err === 'string') {
    // Serialized JSON error
    try {
      var parsedError = JSON.parse(err);
      errorObject = new WebApiError(parsedError.error.message, parsedError.error.status);
    } catch (err) {
      // Error not JSON formatted
    }
  }

  if(!errorObject) {
    // Unexpected format
    errorObject = new WebApiError(defaultMessage + ': ' + JSON.stringify(err));
  }

  return errorObject;
};

/* Make the request to the Web API */
HttpManager._makeRequest = function(method, options, uri, callback) {
  var req = method(uri);

  if (options.query) {
    req.query(options.query);
  }

  if (options.data && (!options.headers || options.headers['Content-Type'] !== 'application/json')) {
    req.type('form');
    req.send(options.data);
  } else if (options.data) {
    req.send(options.data);
  }

  if (options.headers) {
    req.set(options.headers);
  }

  req.end(function (err, response) {
    if (err) {
      var errorObject = _getErrorObject('Request error', {
        error: err
      });
      return callback(errorObject);
    }

    return callback(null, {
      body: response.body,
      headers: response.headers,
      statusCode: response.statusCode
    });
  });
};

/**
 * Make a HTTP GET request.
 * @param {BaseRequest} The request.
 * @param {Function} The callback function.
 */
HttpManager.get = function(request, callback) {
  var options = _getParametersFromRequest(request);
  var method = superagent.get;

  HttpManager._makeRequest(method, options, request.getURI(), callback);
};

/**
 * Make a HTTP POST request.
 * @param {BaseRequest} The request.
 * @param {Function} The callback function.
 */
HttpManager.post = function(request, callback) {

  var options = _getParametersFromRequest(request);
  var method = superagent.post;

  HttpManager._makeRequest(method, options, request.getURI(), callback);
};

/**
 * Make a HTTP DELETE request.
 * @param {BaseRequest} The request.
 * @param {Function} The callback function.
 */
HttpManager.del = function(request, callback) {

  var options = _getParametersFromRequest(request);
  var method = superagent.del;

  HttpManager._makeRequest(method, options, request.getURI(), callback);
};

/**
 * Make a HTTP PUT request.
 * @param {BaseRequest} The request.
 * @param {Function} The callback function.
 */
HttpManager.put = function(request, callback) {

  var options = _getParametersFromRequest(request);
  var method = superagent.put;

  HttpManager._makeRequest(method, options, request.getURI(), callback);
};

module.exports = HttpManager;


/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') { // Browser window
  root = window;
} else if (typeof self !== 'undefined') { // Web Worker
  root = self;
} else { // Other environments
  console.warn("Using browser-only version of superagent in non-browser environment");
  root = this;
}

var Emitter = __webpack_require__(634);
var requestBase = __webpack_require__(635);
var isObject = __webpack_require__(618);

/**
 * Noop.
 */

function noop(){};

/**
 * Expose `request`.
 */

var request = module.exports = __webpack_require__(636).bind(null, Request);

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest
      && (!root.location || 'file:' != root.location.protocol
          || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  throw Error("Browser-only verison of superagent could not find XHR");
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    pushEncodedKeyValuePair(pairs, key, obj[key]);
  }
  return pairs.join('&');
}

/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function pushEncodedKeyValuePair(pairs, key, val) {
  if (val != null) {
    if (Array.isArray(val)) {
      val.forEach(function(v) {
        pushEncodedKeyValuePair(pairs, key, v);
      });
    } else if (isObject(val)) {
      for(var subkey in val) {
        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
      }
    } else {
      pairs.push(encodeURIComponent(key)
        + '=' + encodeURIComponent(val));
    }
  } else if (val === null) {
    pairs.push(encodeURIComponent(key));
  }
}

/**
 * Expose serialization method.
 */

 request.serializeObject = serialize;

 /**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');
    if (pos == -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] =
        decodeURIComponent(pair.slice(pos + 1));
    }
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'application/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

 request.serialize = {
   'application/x-www-form-urlencoded': serialize,
   'application/json': JSON.stringify
 };

 /**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  lines.pop(); // trailing CRLF

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function isJSON(mime) {
  return /[\/+]json\b/.test(mime);
}

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function type(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function params(str){
  return str.split(/ *; */).reduce(function(obj, str){
    var parts = str.split(/ *= */),
        key = parts.shift(),
        val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req, options) {
  options = options || {};
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
     ? this.xhr.responseText
     : null;
  this.statusText = this.req.xhr.statusText;
  this._setStatusProperties(this.xhr.status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this._setHeaderProperties(this.header);
  this.body = this.req.method != 'HEAD'
    ? this._parseBody(this.text ? this.text : this.xhr.response)
    : null;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

Response.prototype.get = function(field){
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

Response.prototype._setHeaderProperties = function(header){
  // content-type
  var ct = this.header['content-type'] || '';
  this.type = type(ct);

  // params
  var obj = params(ct);
  for (var key in obj) this[key] = obj[key];
};

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody = function(str){
  var parse = request.parse[this.type];
  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }
  return parse && str && (str.length || str instanceof Object)
    ? parse(str)
    : null;
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

Response.prototype._setStatusProperties = function(status){
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
    status = 204;
  }

  var type = status / 100 | 0;

  // status / class
  this.status = this.statusCode = status;
  this.statusType = type;

  // basics
  this.info = 1 == type;
  this.ok = 2 == type;
  this.clientError = 4 == type;
  this.serverError = 5 == type;
  this.error = (4 == type || 5 == type)
    ? this.toError()
    : false;

  // sugar
  this.accepted = 202 == status;
  this.noContent = 204 == status;
  this.badRequest = 400 == status;
  this.unauthorized = 401 == status;
  this.notAcceptable = 406 == status;
  this.notFound = 404 == status;
  this.forbidden = 403 == status;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case
  this._header = {}; // coerces header names to lowercase
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      // issue #675: return the raw response if the response parsing fails
      err.rawResponse = self.xhr && self.xhr.responseText ? self.xhr.responseText : null;
      // issue #876: return the http status code if the response parsing fails
      err.statusCode = self.xhr && self.xhr.status ? self.xhr.status : null;
      return self.callback(err);
    }

    self.emit('response', res);

    var new_err;
    try {
      if (res.status < 200 || res.status >= 300) {
        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
        new_err.original = err;
        new_err.response = res;
        new_err.status = res.status;
      }
    } catch(e) {
      new_err = e; // #985 touching res may cause INVALID_STATE_ERR on old Android
    }

    // #1000 don't catch errors from the callback to avoid double calling it
    if (new_err) {
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}

/**
 * Mixin `Emitter` and `requestBase`.
 */

Emitter(Request.prototype);
for (var key in requestBase) {
  Request.prototype[key] = requestBase[key];
}

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set responseType to `val`. Presently valid responseTypes are 'blob' and
 * 'arraybuffer'.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.responseType = function(val){
  this._responseType = val;
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} pass
 * @param {Object} options with 'type' property 'auto' or 'basic' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass, options){
  if (!options) {
    options = {
      type: 'basic'
    }
  }

  switch (options.type) {
    case 'basic':
      var str = btoa(user + ':' + pass);
      this.set('Authorization', 'Basic ' + str);
    break;

    case 'auto':
      this.username = user;
      this.password = pass;
    break;
  }
  return this;
};

/**
* Add query-string `val`.
*
* Examples:
*
*   request.get('/shoes')
*     .query('size=10')
*     .query({ color: 'blue' })
*
* @param {Object|String} val
* @return {Request} for chaining
* @api public
*/

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `filename`.
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String} filename
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, filename){
  this._getFormData().append(field, file, filename || file.name);
  return this;
};

Request.prototype._getFormData = function(){
  if (!this._formData) {
    this._formData = new root.FormData();
  }
  return this._formData;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  var fn = this._callback;
  this.clearTimeout();
  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;

  err.status = this.status;
  err.method = this.method;
  err.url = this.url;

  this.callback(err);
};

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

Request.prototype._timeoutError = function(){
  var timeout = this._timeout;
  var err = new Error('timeout of ' + timeout + 'ms exceeded');
  err.timeout = timeout;
  this.callback(err);
};

/**
 * Compose querystring to append to req.url
 *
 * @api private
 */

Request.prototype._appendQueryString = function(){
  var query = this._query.join('&');
  if (query) {
    this.url += ~this.url.indexOf('?')
      ? '&' + query
      : '?' + query;
  }
};

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  var self = this;
  var xhr = this.xhr = request.getXHR();
  var timeout = this._timeout;
  var data = this._formData || this._data;

  // store callback
  this._callback = fn || noop;

  // state change
  xhr.onreadystatechange = function(){
    if (4 != xhr.readyState) return;

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try { status = xhr.status } catch(e) { status = 0; }

    if (0 == status) {
      if (self.timedout) return self._timeoutError();
      if (self._aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function(direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    e.direction = direction;
    self.emit('progress', e);
  }
  if (this.hasListeners('progress')) {
    try {
      xhr.onprogress = handleProgress.bind(null, 'download');
      if (xhr.upload) {
        xhr.upload.onprogress = handleProgress.bind(null, 'upload');
      }
    } catch(e) {
      // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  }

  // timeout
  if (timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self.timedout = true;
      self.abort();
    }, timeout);
  }

  // querystring
  this._appendQueryString();

  // initiate request
  if (this.username && this.password) {
    xhr.open(this.method, this.url, true, this.username, this.password);
  } else {
    xhr.open(this.method, this.url, true);
  }

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];
    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (!serialize && isJSON(contentType)) serialize = request.serialize['application/json'];
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;
    xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  }

  // send stuff
  this.emit('request', this);

  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined
  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};


/**
 * Expose `Request`.
 */

request.Request = Request;

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn){
  var req = request('GET', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn){
  var req = request('HEAD', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.options = function(url, data, fn){
  var req = request('OPTIONS', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

function del(url, fn){
  var req = request('DELETE', url);
  if (fn) req.end(fn);
  return req;
};

request['del'] = del;
request['delete'] = del;

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn){
  var req = request('PATCH', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn){
  var req = request('POST', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn){
  var req = request('PUT', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};


/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module of mixed-in functions shared between node and client code
 */
var isObject = __webpack_require__(618);

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

exports.clearTimeout = function _clearTimeout(){
  this._timeout = 0;
  clearTimeout(this._timer);
  return this;
};

/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */

exports.parse = function parse(fn){
  this._parser = fn;
  return this;
};

/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */

exports.serialize = function serialize(fn){
  this._serializer = fn;
  return this;
};

/**
 * Set timeout to `ms`.
 *
 * @param {Number} ms
 * @return {Request} for chaining
 * @api public
 */

exports.timeout = function timeout(ms){
  this._timeout = ms;
  return this;
};

/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} reject
 * @return {Request}
 */

exports.then = function then(resolve, reject) {
  if (!this._fullfilledPromise) {
    var self = this;
    this._fullfilledPromise = new Promise(function(innerResolve, innerReject){
      self.end(function(err, res){
        if (err) innerReject(err); else innerResolve(res);
      });
    });
  }
  return this._fullfilledPromise.then(resolve, reject);
}

exports.catch = function(cb) {
  return this.then(undefined, cb);
};

/**
 * Allow for extension
 */

exports.use = function use(fn) {
  fn(this);
  return this;
}


/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

exports.get = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */

exports.getHeader = exports.get;

/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

exports.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 */
exports.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name
 * @param {String|Blob|File|Buffer|fs.ReadStream} val
 * @return {Request} for chaining
 * @api public
 */
exports.field = function(name, val) {

  // name should be either a string or an object.
  if (null === name ||  undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (isObject(name)) {
    for (var key in name) {
      this.field(key, name[key]);
    }
    return this;
  }

  // val should be defined now
  if (null === val || undefined === val) {
    throw new Error('.field(name, val) val can not be empty');
  }
  this._getFormData().append(name, val);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */
exports.abort = function(){
  if (this._aborted) {
    return this;
  }
  this._aborted = true;
  this.xhr && this.xhr.abort(); // browser
  this.req && this.req.abort(); // node
  this.clearTimeout();
  this.emit('abort');
  return this;
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

exports.withCredentials = function(){
  // This is browser-only functionality. Node side is no-op.
  this._withCredentials = true;
  return this;
};

/**
 * Set the max redirects to `n`. Does noting in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */

exports.redirects = function(n){
  this._maxRedirects = n;
  return this;
};

/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */

exports.toJSON = function(){
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header
  };
};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * TODO: future proof, move to compoent land
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

exports._isHost = function _isHost(obj) {
  var str = {}.toString.call(obj);

  switch (str) {
    case '[object File]':
    case '[object Blob]':
    case '[object FormData]':
      return true;
    default:
      return false;
  }
}

/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

exports.send = function(data){
  var obj = isObject(data);
  var type = this._header['content-type'];

  // merge
  if (obj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!obj || this._isHost(data)) return this;

  // default to json
  if (!type) this.type('json');
  return this;
};


/***/ }),

/***/ 636:
/***/ (function(module, exports) {

// The node and browser modules expose versions of this with the
// appropriate constructor function bound as first argument
/**
 * Issue a request:
 *
 * Examples:
 *
 *    request('GET', '/users').end(callback)
 *    request('/users').end(callback)
 *    request('/users', callback)
 *
 * @param {String} method
 * @param {String|Function} url or callback
 * @return {Request}
 * @api public
 */

function request(RequestConstructor, method, url) {
  // callback
  if ('function' == typeof url) {
    return new RequestConstructor('GET', method).end(url);
  }

  // url first
  if (2 == arguments.length) {
    return new RequestConstructor('GET', method);
  }

  return new RequestConstructor(method, url);
}

module.exports = request;


/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function WebapiError(message, statusCode) {
  this.name = 'WebapiError';
  this.message = (message || '');
  this.statusCode = statusCode;
}

WebapiError.prototype = Error.prototype;

module.exports = WebapiError;

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(639);
    var insertCss = __webpack_require__(245);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Navigation.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Navigation.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(244)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.Navigation-root-2gcJx {\n  float: right;\n  margin: 6px 0 0;\n}\n\n.Navigation-link-Ntl35 {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.Navigation-link-Ntl35,\n.Navigation-link-Ntl35:active,\n.Navigation-link-Ntl35:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.Navigation-link-Ntl35:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n.Navigation-highlight-2UNlq {\n  margin-right: 8px;\n  margin-left: 8px;\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.15);\n  color: #fff;\n}\n\n.Navigation-highlight-2UNlq:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.Navigation-spacer-3vZVG {\n  color: rgba(255, 255, 255, 0.3);\n}\n", "", {"version":3,"sources":["/Users/stephanie/dev/SideProjects/VoteList/src/components/Navigation/Navigation.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,aAAa;EACb,gBAAgB;CACjB;;AAED;EACE,sBAAsB;EACtB,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB,CAAC,WAAW;CAChC;;AAED;;;EAGE,gCAAgC;CACjC;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,gCAAgC;EAChC,YAAY;CACb;;AAED;EACE,+BAA+B;CAChC;;AAED;EACE,gCAAgC;CACjC","file":"Navigation.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.root {\n  float: right;\n  margin: 6px 0 0;\n}\n\n.link {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n.highlight {\n  margin-right: 8px;\n  margin-left: 8px;\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.15);\n  color: #fff;\n}\n\n.highlight:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.spacer {\n  color: rgba(255, 255, 255, 0.3);\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Navigation-root-2gcJx",
	"link": "Navigation-link-Ntl35",
	"highlight": "Navigation-highlight-2UNlq",
	"spacer": "Navigation-spacer-3vZVG"
};

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/Header/logo-small.png?2f751285";

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/Header/logo-small@2x.png?8844262b";

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Footer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(615);
var _jsxFileName = '/Users/stephanie/dev/SideProjects/VoteList/src/components/Footer/Footer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.text, __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              },
              __self: this
            },
            '\xA9 SteffiApps'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.spacer, __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: this
            },
            '\xB7'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */],
            { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.link, to: '/', __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            },
            'Home'
          )
        )
      );
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a)(Footer));

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(644);
    var insertCss = __webpack_require__(245);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Footer.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Footer.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(244)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Footer-root-1UUMy {\n  background: #333;\n  color: #fff;\n}\n\n.Footer-container-3dfAC {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: 1000px;\n  text-align: center;\n}\n\n.Footer-text-3ReUN {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.Footer-spacer-297xE {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.Footer-text-3ReUN,\n.Footer-link-3qHjF {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.Footer-link-3qHjF,\n.Footer-link-3qHjF:active,\n.Footer-link-3qHjF:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.Footer-link-3qHjF:hover {\n  color: rgba(255, 255, 255, 1);\n}\n", "", {"version":3,"sources":["/Users/stephanie/dev/SideProjects/VoteList/src/components/Footer/Footer.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;CAC/M;;AAED;EACE,iBAAiB;EACjB,YAAY;CACb;;AAED;EACE,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;CACpB;;AAED;EACE,gCAAgC;CACjC;;AAED;EACE,gCAAgC;CACjC;;AAED;;EAEE,iBAAiB;EACjB,eAAe;CAChB;;AAED;;;EAGE,gCAAgC;EAChC,sBAAsB;CACvB;;AAED;EACE,8BAA8B;CAC/B","file":"Footer.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.root {\n  background: #333;\n  color: #fff;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: 1000px;\n  text-align: center;\n}\n\n.text {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.spacer {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.text,\n.link {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Footer-root-1UUMy",
	"container": "Footer-container-3dfAC",
	"text": "Footer-text-3ReUN",
	"spacer": "Footer-spacer-297xE",
	"link": "Footer-link-3qHjF"
};

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findTabbableDescendants;
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

var tabbableNode = /input|select|textarea|button|object/;

function hidden(el) {
  return el.offsetWidth <= 0 && el.offsetHeight <= 0 || el.style.display === 'none';
}

function visible(element) {
  var parentElement = element;
  while (parentElement) {
    if (parentElement === document.body) break;
    if (hidden(parentElement)) return false;
    parentElement = parentElement.parentNode;
  }
  return true;
}

function focusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
  return res && visible(element);
}

function tabbable(element) {
  var tabIndex = element.getAttribute('tabindex');
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}

function findTabbableDescendants(element) {
  return [].slice.call(element.querySelectorAll('*'), 0).filter(tabbable);
}

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertNodeList = assertNodeList;
exports.setElement = setElement;
exports.tryForceFallback = tryForceFallback;
exports.validateElement = validateElement;
exports.hide = hide;
exports.show = show;
exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
exports.resetForTesting = resetForTesting;
var globalElement = null;

function assertNodeList(nodeList, selector) {
  if (!nodeList || !nodeList.length) {
    throw new Error('react-modal: No elements were found for selector ' + selector + '.');
  }
}

function setElement(element) {
  var useElement = element;
  if (typeof useElement === 'string') {
    var el = document.querySelectorAll(useElement);
    assertNodeList(el, useElement);
    useElement = 'length' in el ? el[0] : el;
  }
  globalElement = useElement || globalElement;
  return globalElement;
}

function tryForceFallback() {
  if (document && document.body) {
    // force fallback to document.body
    setElement(document.body);
    return true;
  }
  return false;
}

function validateElement(appElement) {
  if (!appElement && !globalElement && !tryForceFallback()) {
    throw new Error(['react-modal: Cannot fallback to `document.body`, because it\'s not ready or available.', 'If you are doing server-side rendering, use this function to defined an element.', '`Modal.setAppElement(el)` to make this accessible']);
  }
}

function hide(appElement) {
  validateElement(appElement);
  (appElement || globalElement).setAttribute('aria-hidden', 'true');
}

function show(appElement) {
  validateElement(appElement);
  (appElement || globalElement).removeAttribute('aria-hidden');
}

function documentNotReadyOrSSRTesting() {
  globalElement = null;
}

function resetForTesting() {
  globalElement = document.body;
}

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _exenv = __webpack_require__(655);

var _exenv2 = _interopRequireDefault(_exenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EE = _exenv2.default;

var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};

exports.default = SafeHTMLElement;

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = __webpack_require__(649);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Modal2.default;

/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bodyOpenClassName = exports.portalClassName = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(74);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(248);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(108);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalPortal = __webpack_require__(650);

var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

var _ariaAppHider = __webpack_require__(646);

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _safeHTMLElement = __webpack_require__(647);

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var portalClassName = exports.portalClassName = 'ReactModalPortal';
var bodyOpenClassName = exports.bodyOpenClassName = 'ReactModal__Body--open';

var renderSubtreeIntoContainer = _reactDom2.default.unstable_renderSubtreeIntoContainer;

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
      _reactDom2.default.unmountComponentAtNode(_this.node);
      var parent = getParentElement(_this.props.parentSelector);
      parent.removeChild(_this.node);
    }, _this.renderPortal = function (props) {
      _this.portal = renderSubtreeIntoContainer(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal.defaultStyles }, props)), _this.node);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.node = document.createElement('div');
      this.node.className = this.props.portalClassName;

      var parent = getParentElement(this.props.parentSelector);
      parent.appendChild(this.node);

      this.renderPortal(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var isOpen = newProps.isOpen;
      // Stop unnecessary renders if modal is remaining closed

      if (!this.props.isOpen && !isOpen) return;

      var currentParent = getParentElement(this.props.parentSelector);
      var newParent = getParentElement(newProps.parentSelector);

      if (newParent !== currentParent) {
        currentParent.removeChild(this.node);
        newParent.appendChild(this.node);
      }

      this.renderPortal(newProps);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(newProps) {
      if (newProps.portalClassName !== this.props.portalClassName) {
        this.node.className = newProps.portalClassName;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (!this.node) return;

      var state = this.portal.state;
      var now = Date.now();
      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);

      if (closesAt) {
        if (!state.beforeClose) {
          this.portal.closeWithTimeout();
        }

        setTimeout(this.removePortal, closesAt - now);
      } else {
        this.removePortal();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'setAppElement',
    value: function setAppElement(element) {
      ariaAppHider.setElement(element);
    }

    /* eslint-disable no-console */

  }, {
    key: 'injectCSS',
    value: function injectCSS() {
      "development" !== "production" && console.warn('React-Modal: injectCSS has been deprecated ' + 'and no longer has any effect. It will be removed in a later version');
    }
    /* eslint-enable no-console */

    /* eslint-disable react/no-unused-prop-types */

    /* eslint-enable react/no-unused-prop-types */

  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  portalClassName: _propTypes2.default.string,
  bodyOpenClassName: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  ariaHideApp: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  parentSelector: _propTypes2.default.func,
  aria: _propTypes2.default.object,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string.isRequired
};
Modal.defaultProps = {
  isOpen: false,
  portalClassName: portalClassName,
  bodyOpenClassName: bodyOpenClassName,
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldCloseOnOverlayClick: true,
  parentSelector: function parentSelector() {
    return document.body;
  }
};
Modal.defaultStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    position: 'absolute',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px'
  }
};
exports.default = Modal;

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(74);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(108);

var _elementClass = __webpack_require__(651);

var _elementClass2 = _interopRequireDefault(_elementClass);

var _focusManager = __webpack_require__(652);

var focusManager = _interopRequireWildcard(_focusManager);

var _scopeTab = __webpack_require__(653);

var _scopeTab2 = _interopRequireDefault(_scopeTab);

var _ariaAppHider = __webpack_require__(646);

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _refCount = __webpack_require__(654);

var refCount = _interopRequireWildcard(_refCount);

var _safeHTMLElement = __webpack_require__(647);

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// so that our CSS is statically analyzable
var CLASS_NAMES = {
  overlay: 'ReactModal__Overlay',
  content: 'ReactModal__Content'
};

var TAB_KEY = 9;
var ESC_KEY = 27;

var ModalPortal = function (_Component) {
  _inherits(ModalPortal, _Component);

  function ModalPortal(props) {
    _classCallCheck(this, ModalPortal);

    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));

    _this.setFocusAfterRender = function (focus) {
      _this.focusAfterRender = focus;
    };

    _this.setOverlayRef = function (overlay) {
      _this.overlay = overlay;
    };

    _this.setContentRef = function (content) {
      _this.content = content;
    };

    _this.afterClose = function () {
      focusManager.returnFocus();
      focusManager.teardownScopedFocus();
    };

    _this.open = function () {
      _this.beforeOpen();
      if (_this.state.afterOpen && _this.state.beforeClose) {
        clearTimeout(_this.closeTimer);
        _this.setState({ beforeClose: false });
      } else {
        focusManager.setupScopedFocus(_this.node);
        focusManager.markForFocusLater();
        _this.setState({ isOpen: true }, function () {
          _this.setState({ afterOpen: true });

          if (_this.props.isOpen && _this.props.onAfterOpen) {
            _this.props.onAfterOpen();
          }
        });
      }
    };

    _this.close = function () {
      _this.beforeClose();
      if (_this.props.closeTimeoutMS > 0) {
        _this.closeWithTimeout();
      } else {
        _this.closeWithoutTimeout();
      }
    };

    _this.focusContent = function () {
      return _this.content && !_this.contentHasFocus() && _this.content.focus();
    };

    _this.closeWithTimeout = function () {
      var closesAt = Date.now() + _this.props.closeTimeoutMS;
      _this.setState({ beforeClose: true, closesAt: closesAt }, function () {
        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
      });
    };

    _this.closeWithoutTimeout = function () {
      _this.setState({
        beforeClose: false,
        isOpen: false,
        afterOpen: false,
        closesAt: null
      }, _this.afterClose);
    };

    _this.handleKeyDown = function (event) {
      if (event.keyCode === TAB_KEY) {
        (0, _scopeTab2.default)(_this.content, event);
      }
      if (event.keyCode === ESC_KEY) {
        event.preventDefault();
        _this.requestClose(event);
      }
    };

    _this.handleOverlayOnClick = function (event) {
      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
        if (_this.ownerHandlesClose()) {
          _this.requestClose(event);
        } else {
          _this.focusContent();
        }
      }
      _this.shouldClose = null;
    };

    _this.handleContentOnClick = function () {
      _this.shouldClose = false;
    };

    _this.requestClose = function (event) {
      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
    };

    _this.ownerHandlesClose = function () {
      return _this.props.onRequestClose;
    };

    _this.shouldBeClosed = function () {
      return !_this.state.isOpen && !_this.state.beforeClose;
    };

    _this.contentHasFocus = function () {
      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
    };

    _this.buildClassName = function (which, additional) {
      var classNames = (typeof additional === 'undefined' ? 'undefined' : _typeof(additional)) === 'object' ? additional : {
        base: CLASS_NAMES[which],
        afterOpen: CLASS_NAMES[which] + '--after-open',
        beforeClose: CLASS_NAMES[which] + '--before-close'
      };
      var className = classNames.base;
      if (_this.state.afterOpen) {
        className = className + ' ' + classNames.afterOpen;
      }
      if (_this.state.beforeClose) {
        className = className + ' ' + classNames.beforeClose;
      }
      return typeof additional === 'string' && additional ? className + ' ' + additional : className;
    };

    _this.ariaAttributes = function (items) {
      return Object.keys(items).reduce(function (acc, name) {
        acc['aria-' + name] = items[name];
        return acc;
      }, {});
    };

    _this.state = {
      afterOpen: false,
      beforeClose: false
    };

    _this.shouldClose = null;
    return _this;
  }

  _createClass(ModalPortal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Focus needs to be set when mounting and already open
      if (this.props.isOpen) {
        this.setFocusAfterRender(true);
        this.open();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (true) {
        if (newProps.bodyOpenClassName !== this.props.bodyOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "bodyOpenClassName" prop has been modified. ' + 'This may cause unexpected behavior when multiple modals are open.');
        }
      }
      // Focus only needs to be set once when the modal is being opened
      if (!this.props.isOpen && newProps.isOpen) {
        this.setFocusAfterRender(true);
        this.open();
      } else if (this.props.isOpen && !newProps.isOpen) {
        this.close();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.focusAfterRender) {
        this.focusContent();
        this.setFocusAfterRender(false);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.beforeClose();
      clearTimeout(this.closeTimer);
    }
  }, {
    key: 'beforeOpen',
    value: function beforeOpen() {
      var _props = this.props,
          appElement = _props.appElement,
          ariaHideApp = _props.ariaHideApp,
          bodyOpenClassName = _props.bodyOpenClassName;

      refCount.add(bodyOpenClassName);
      // Add body class
      (0, _elementClass2.default)(document.body).add(bodyOpenClassName);
      // Add aria-hidden to appElement
      if (ariaHideApp) {
        ariaAppHider.hide(appElement);
      }
    }
  }, {
    key: 'beforeClose',
    value: function beforeClose() {
      var _props2 = this.props,
          appElement = _props2.appElement,
          ariaHideApp = _props2.ariaHideApp,
          bodyOpenClassName = _props2.bodyOpenClassName;

      refCount.remove(bodyOpenClassName);
      // Remove class if no more modals are open
      if (refCount.count(bodyOpenClassName) === 0) {
        (0, _elementClass2.default)(document.body).remove(bodyOpenClassName);
      }
      // Reset aria-hidden attribute if all modals have been removed
      if (ariaHideApp && refCount.totalCount() < 1) {
        ariaAppHider.show(appElement);
      }
    }

    // Don't steal focus from inner elements

  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          className = _props3.className,
          overlayClassName = _props3.overlayClassName,
          defaultStyles = _props3.defaultStyles;

      var contentStyles = className ? {} : defaultStyles.content;
      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;

      return this.shouldBeClosed() ? _react2.default.createElement('div', null) : _react2.default.createElement(
        'div',
        {
          ref: this.setOverlayRef,
          className: this.buildClassName('overlay', overlayClassName),
          style: _extends({}, overlayStyles, this.props.style.overlay),
          onClick: this.handleOverlayOnClick },
        _react2.default.createElement(
          'div',
          _extends({
            ref: this.setContentRef,
            style: _extends({}, contentStyles, this.props.style.content),
            className: this.buildClassName('content', className),
            tabIndex: '-1',
            onKeyDown: this.handleKeyDown,
            onClick: this.handleContentOnClick,
            role: this.props.role,
            'aria-label': this.props.contentLabel
          }, this.ariaAttributes(this.props.aria || {})),
          this.props.children
        )
      );
    }
  }]);

  return ModalPortal;
}(_react.Component);

ModalPortal.defaultProps = {
  style: {
    overlay: {},
    content: {}
  }
};
ModalPortal.propTypes = {
  isOpen: _propTypes.PropTypes.bool.isRequired,
  defaultStyles: _propTypes.PropTypes.shape({
    content: _propTypes.PropTypes.object,
    overlay: _propTypes.PropTypes.object
  }),
  style: _propTypes.PropTypes.shape({
    content: _propTypes.PropTypes.object,
    overlay: _propTypes.PropTypes.object
  }),
  className: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.object]),
  overlayClassName: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.object]),
  bodyOpenClassName: _propTypes.PropTypes.string,
  ariaHideApp: _propTypes.PropTypes.bool,
  appElement: _propTypes.PropTypes.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes.PropTypes.func,
  onRequestClose: _propTypes.PropTypes.func,
  closeTimeoutMS: _propTypes.PropTypes.number,
  shouldCloseOnOverlayClick: _propTypes.PropTypes.bool,
  role: _propTypes.PropTypes.string,
  contentLabel: _propTypes.PropTypes.string,
  aria: _propTypes.PropTypes.object,
  children: _propTypes.PropTypes.node
};
exports.default = ModalPortal;

/***/ }),

/***/ 651:
/***/ (function(module, exports) {

module.exports = function(opts) {
  return new ElementClass(opts)
}

function indexOf(arr, prop) {
  if (arr.indexOf) return arr.indexOf(prop)
  for (var i = 0, len = arr.length; i < len; i++)
    if (arr[i] === prop) return i
  return -1
}

function ElementClass(opts) {
  if (!(this instanceof ElementClass)) return new ElementClass(opts)
  var self = this
  if (!opts) opts = {}

  // similar doing instanceof HTMLElement but works in IE8
  if (opts.nodeType) opts = {el: opts}

  this.opts = opts
  this.el = opts.el || document.body
  if (typeof this.el !== 'object') this.el = document.querySelector(this.el)
}

ElementClass.prototype.add = function(className) {
  var el = this.el
  if (!el) return
  if (el.className === "") return el.className = className
  var classes = el.className.split(' ')
  if (indexOf(classes, className) > -1) return classes
  classes.push(className)
  el.className = classes.join(' ')
  return classes
}

ElementClass.prototype.remove = function(className) {
  var el = this.el
  if (!el) return
  if (el.className === "") return
  var classes = el.className.split(' ')
  var idx = indexOf(classes, className)
  if (idx > -1) classes.splice(idx, 1)
  el.className = classes.join(' ')
  return classes
}

ElementClass.prototype.has = function(className) {
  var el = this.el
  if (!el) return
  var classes = el.className.split(' ')
  return indexOf(classes, className) > -1
}

ElementClass.prototype.toggle = function(className) {
  var el = this.el
  if (!el) return
  if (this.has(className)) this.remove(className)
  else this.add(className)
}


/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBlur = handleBlur;
exports.handleFocus = handleFocus;
exports.markForFocusLater = markForFocusLater;
exports.returnFocus = returnFocus;
exports.setupScopedFocus = setupScopedFocus;
exports.teardownScopedFocus = teardownScopedFocus;

var _tabbable = __webpack_require__(645);

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;

function handleBlur() {
  needToFocus = true;
}

function handleFocus() {
  if (needToFocus) {
    needToFocus = false;
    if (!modalElement) {
      return;
    }
    // need to see how jQuery shims document.on('focusin') so we don't need the
    // setTimeout, firefox doesn't support focusin, if it did, we could focus
    // the element outside of a setTimeout. Side-effect of this implementation
    // is that the document.body gets focus, and then we focus our element right
    // after, seems fine.
    setTimeout(function () {
      if (modalElement.contains(document.activeElement)) {
        return;
      }
      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
      el.focus();
    }, 0);
  }
}

function markForFocusLater() {
  focusLaterElements.push(document.activeElement);
}

/* eslint-disable no-console */
function returnFocus() {
  var toFocus = null;
  try {
    toFocus = focusLaterElements.pop();
    toFocus.focus();
    return;
  } catch (e) {
    console.warn(['You tried to return focus to', toFocus, 'but it is not in the DOM anymore'].join(" "));
  }
}
/* eslint-enable no-console */

function setupScopedFocus(element) {
  modalElement = element;

  if (window.addEventListener) {
    window.addEventListener('blur', handleBlur, false);
    document.addEventListener('focus', handleFocus, true);
  } else {
    window.attachEvent('onBlur', handleBlur);
    document.attachEvent('onFocus', handleFocus);
  }
}

function teardownScopedFocus() {
  modalElement = null;

  if (window.addEventListener) {
    window.removeEventListener('blur', handleBlur);
    document.removeEventListener('focus', handleFocus);
  } else {
    window.detachEvent('onBlur', handleBlur);
    document.detachEvent('onFocus', handleFocus);
  }
}

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scopeTab;

var _tabbable = __webpack_require__(645);

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scopeTab(node, event) {
  var tabbable = (0, _tabbable2.default)(node);
  if (!tabbable.length) {
    event.preventDefault();
    return;
  }
  var finalTabbable = tabbable[event.shiftKey ? 0 : tabbable.length - 1];
  var leavingFinalTabbable = finalTabbable === document.activeElement ||
  // handle immediate shift+tab after opening with mouse
  node === document.activeElement;
  if (!leavingFinalTabbable) return;
  event.preventDefault();
  var target = tabbable[event.shiftKey ? tabbable.length - 1 : 0];
  target.focus();
}

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.remove = remove;
exports.count = count;
exports.totalCount = totalCount;
var modals = {};

function add(bodyClass) {
  // Set variable and default if none
  if (!modals[bodyClass]) {
    modals[bodyClass] = 0;
  }
  modals[bodyClass] += 1;
}

function remove(bodyClass) {
  if (modals[bodyClass]) {
    modals[bodyClass] -= 1;
  }
}

function count(bodyClass) {
  return modals[bodyClass];
}

function totalCount() {
  return Object.keys(modals).reduce(function (acc, curr) {
    return acc + modals[curr];
  }, 0);
}

/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return ExecutionEnvironment;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = ExecutionEnvironment;
	} else {
		window.ExecutionEnvironment = ExecutionEnvironment;
	}

}());


/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_spotify_web_api_node__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_spotify_web_api_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_spotify_web_api_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_modal__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Playlist_css__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Playlist_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Playlist_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_isomorphic_style_loader_lib_withStyles__);
var _jsxFileName = '/Users/stephanie/dev/SideProjects/VoteList/src/routes/playlist/Playlist.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var CLIENT_ID = 'b8ae36286f1c4db28a8a2ba380a4d8cc';
var CLIENT_SECRET = '18cfc75e9f4b4785ac325eaa38a095c9';
var REDIRECT_URI = 'http://localhost:3000/callback';

var Playlist = function (_React$Component) {
  _inherits(Playlist, _React$Component);

  function Playlist() {
    _classCallCheck(this, Playlist);

    return _possibleConstructorReturn(this, (Playlist.__proto__ || Object.getPrototypeOf(Playlist)).apply(this, arguments));
  }

  _createClass(Playlist, [{
    key: 'getSpotify',
    value: function getSpotify(token) {
      var _this2 = this;

      var spotifyApi = new __WEBPACK_IMPORTED_MODULE_1_spotify_web_api_node___default.a({
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI
      });

      spotifyApi.setAccessToken(token);
      spotifyApi.getPlaylist('stephaniecurran', '7lj1gdwwwccyjEVXiEyIbQ').then(function (res) {
        var items = res.body.tracks.items;
        var tracks = items.map(function (x) {
          return Object.assign(x.track, { addedBy: x.added_by.id });
        });
        _this2.setState({
          playlist: res.body,
          tracks: tracks
        });
      }, function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!localStorage || !localStorage.authToken) {
        //todo login stuff
        return;
      }
      this.getSpotify(JSON.parse(localStorage.authToken).access_token);
    }
  }, {
    key: 'track',
    value: function track(_track, idx) {
      var artists = _track.artists.map(function (x) {
        return x.name;
      }).join(', ');
      var rowStyle = idx % 2 ? __WEBPACK_IMPORTED_MODULE_3__Playlist_css___default.a.even : __WEBPACK_IMPORTED_MODULE_3__Playlist_css___default.a.odd;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_4_classnames___default.a(__WEBPACK_IMPORTED_MODULE_3__Playlist_css___default.a.row, rowStyle), __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_4_classnames___default.a(__WEBPACK_IMPORTED_MODULE_3__Playlist_css___default.a.cell, __WEBPACK_IMPORTED_MODULE_3__Playlist_css___default.a.track), __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          },
          _track.name
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_4_classnames___default.a(__WEBPACK_IMPORTED_MODULE_3__Playlist_css___default.a.cell, __WEBPACK_IMPORTED_MODULE_3__Playlist_css___default.a.artist), __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          },
          artists
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_4_classnames___default.a(__WEBPACK_IMPORTED_MODULE_3__Playlist_css___default.a.cell, __WEBPACK_IMPORTED_MODULE_3__Playlist_css___default.a.addedBy), __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          },
          _track.addedBy
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_3__Playlist_css___default.a.cell, __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          },
          'Votes: 10'
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _ref = this.state || {},
          playlist = _ref.playlist,
          tracks = _ref.tracks;

      if (!tracks) return null;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          },
          playlist.name
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_3__Playlist_css___default.a.col, __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            },
            __self: this
          },
          tracks.map(this.track)
        )
      );
    }
  }]);

  return Playlist;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_5_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_3__Playlist_css___default.a)(Playlist));

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(664);
    var insertCss = __webpack_require__(245);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Playlist.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Playlist.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(244)(true);
// imports


// module
exports.push([module.i, ".Playlist-col-2KNeR {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.Playlist-row-_eyXP {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding: 1em 0;\n}\n\n.Playlist-cell-1_xml {\n  padding: 0 1em;\n}\n\n.Playlist-track-1u3BU {\n  min-width: 30%;\n}\n\n.Playlist-artist-3T6qs {\n  min-width: 20%;\n}\n\n.Playlist-addedBy-69Gap {\n  min-width: 20%;\n}\n\n.Playlist-even-3nhao {\n}\n\n.Playlist-odd-2S42e {\n  background: #92e5fc;\n}\n", "", {"version":3,"sources":["/Users/stephanie/dev/SideProjects/VoteList/src/routes/playlist/Playlist.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;MAC1B,2BAA2B;UACvB,uBAAuB;CAChC;;AAED;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,+BAA+B;EAC/B,8BAA8B;MAC1B,wBAAwB;UACpB,oBAAoB;EAC5B,eAAe;CAChB;;AAED;EACE,eAAe;CAChB;;AAED;EACE,eAAe;CAChB;;AAED;EACE,eAAe;CAChB;;AAED;EACE,eAAe;CAChB;;AAED;CACC;;AAED;EACE,oBAAoB;CACrB","file":"Playlist.css","sourcesContent":[".col {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding: 1em 0;\n}\n\n.cell {\n  padding: 0 1em;\n}\n\n.track {\n  min-width: 30%;\n}\n\n.artist {\n  min-width: 20%;\n}\n\n.addedBy {\n  min-width: 20%;\n}\n\n.even {\n}\n\n.odd {\n  background: #92e5fc;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"col": "Playlist-col-2KNeR",
	"row": "Playlist-row-_eyXP",
	"cell": "Playlist-cell-1_xml",
	"track": "Playlist-track-1u3BU",
	"artist": "Playlist-artist-3T6qs",
	"addedBy": "Playlist-addedBy-69Gap",
	"even": "Playlist-even-3nhao",
	"odd": "Playlist-odd-2S42e"
};

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWxpc3QuY2h1bmsuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVwaGFuaWUvZGV2L1NpZGVQcm9qZWN0cy9Wb3RlTGlzdC9zcmMvcm91dGVzL3BsYXlsaXN0L2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MaW5rL0xpbmsuanM/ZjIwYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3BvdGlmeS13ZWItYXBpLW5vZGUvc3JjL2Jhc2UtcmVxdWVzdC5qcz84NTU2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdXBlcmFnZW50L2xpYi9pcy1vYmplY3QuanM/MTQ4MCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3BvdGlmeS13ZWItYXBpLW5vZGUvc3JjL2NsaWVudC5qcz9mNDIwIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzPzM5NWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcz81MjhiKiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzP2RiYzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5jc3M/ZDYzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmNzcz84OGFmKiIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcz8zNjRlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuY3NzPzUxZTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jc3M/ODFkYSoiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5qcz82NDVhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zcG90aWZ5LXdlYi1hcGktbm9kZS9zcmMvc3BvdGlmeS13ZWItYXBpLmpzP2U0NGIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Nwb3RpZnktd2ViLWFwaS1ub2RlL3NyYy9hdXRoZW50aWNhdGlvbi1yZXF1ZXN0LmpzPzJhMzciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Nwb3RpZnktd2ViLWFwaS1ub2RlL3NyYy93ZWJhcGktcmVxdWVzdC5qcz85NWMyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zcG90aWZ5LXdlYi1hcGktbm9kZS9zcmMvaHR0cC1tYW5hZ2VyLmpzPzFjZTMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N1cGVyYWdlbnQvbGliL2NsaWVudC5qcz8xODZmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qcz9hNjc1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdXBlcmFnZW50L2xpYi9yZXF1ZXN0LWJhc2UuanM/YTM5NiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3VwZXJhZ2VudC9saWIvcmVxdWVzdC5qcz82OWJkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zcG90aWZ5LXdlYi1hcGktbm9kZS9zcmMvd2ViYXBpLWVycm9yLmpzPzc2ZjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmNzcz9jOGEwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5jc3M/ZDEzMSoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2xvZ28tc21hbGwucG5nP2JhODQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2xvZ28tc21hbGxAMngucG5nP2JkMDYiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanM/YjIyYyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmNzcz8yZGQyIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuY3NzPzA0MDMqIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy90YWJiYWJsZS5qcz8wNzA2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9hcmlhQXBwSGlkZXIuanM/ZDcwMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvc2FmZUhUTUxFbGVtZW50LmpzPzMxMTQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9pbmRleC5qcz9iMTZkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvY29tcG9uZW50cy9Nb2RhbC5qcz9hN2I4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvY29tcG9uZW50cy9Nb2RhbFBvcnRhbC5qcz8xN2YxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVtZW50LWNsYXNzL2luZGV4LmpzPzY2ZDYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9oZWxwZXJzL2ZvY3VzTWFuYWdlci5qcz85ZTcxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9zY29wZVRhYi5qcz83OGI1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9yZWZDb3VudC5qcz8yODkwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9leGVudi9pbmRleC5qcz9iYjg5IiwiL1VzZXJzL3N0ZXBoYW5pZS9kZXYvU2lkZVByb2plY3RzL1ZvdGVMaXN0L3NyYy9yb3V0ZXMvcGxheWxpc3QvUGxheWxpc3QuanMiLCIvVXNlcnMvc3RlcGhhbmllL2Rldi9TaWRlUHJvamVjdHMvVm90ZUxpc3Qvc3JjL3JvdXRlcy9wbGF5bGlzdC9QbGF5bGlzdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9wbGF5bGlzdC9QbGF5bGlzdC5jc3M/OTlhZiIsIi9Vc2Vycy9zdGVwaGFuaWUvZGV2L1NpZGVQcm9qZWN0cy9Wb3RlTGlzdC9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgUGxheWxpc3QgZnJvbSAnLi9QbGF5bGlzdCc7XG5cbmFzeW5jIGZ1bmN0aW9uIGFjdGlvbigpIHtcblxuXG4gIHJldHVybiB7XG4gICAgY2h1bmtzOiBbJ3BsYXlsaXN0J10sXG4gICAgdGl0bGU6ICdTcG90aWZ5JyxcbiAgICBjb21wb25lbnQ6IDxMYXlvdXQ+PFBsYXlsaXN0PjwvUGxheWxpc3Q+PC9MYXlvdXQ+LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9wbGF5bGlzdC9pbmRleC5qcyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgaGlzdG9yeSBmcm9tICcuLi8uLi9oaXN0b3J5JztcblxuZnVuY3Rpb24gaXNMZWZ0Q2xpY2tFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQuYnV0dG9uID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuXG5jbGFzcyBMaW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0bzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb25DbGljazogbnVsbCxcbiAgfTtcblxuICBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTW9kaWZpZWRFdmVudChldmVudCkgfHwgIWlzTGVmdENsaWNrRXZlbnQoZXZlbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGhpc3RvcnkucHVzaCh0aGlzLnByb3BzLnRvKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0bywgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiA8YSBocmVmPXt0b30gey4uLnByb3BzfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT57Y2hpbGRyZW59PC9hPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0xpbmsvTGluay5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFJlcXVlc3QgPSBmdW5jdGlvbihidWlsZGVyKSB7XG4gIGlmICghYnVpbGRlcikge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gYnVpbGRlciBzdXBwbGllZCB0byBjb25zdHJ1Y3RvcicpO1xuICB9XG5cbiAgdGhpcy5ob3N0ID0gYnVpbGRlci5ob3N0O1xuICB0aGlzLnBvcnQgPSBidWlsZGVyLnBvcnQ7XG4gIHRoaXMuc2NoZW1lID0gYnVpbGRlci5zY2hlbWU7XG4gIHRoaXMucXVlcnlQYXJhbWV0ZXJzID0gYnVpbGRlci5xdWVyeVBhcmFtZXRlcnM7XG4gIHRoaXMuYm9keVBhcmFtZXRlcnMgPSBidWlsZGVyLmJvZHlQYXJhbWV0ZXJzO1xuICB0aGlzLmhlYWRlcnMgPSBidWlsZGVyLmhlYWRlcnM7XG4gIHRoaXMucGF0aCA9IGJ1aWxkZXIucGF0aDtcbn07XG5cblJlcXVlc3QucHJvdG90eXBlLmdldEhvc3QgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuaG9zdDtcbn07XG5cblJlcXVlc3QucHJvdG90eXBlLmdldFBvcnQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucG9ydDtcbn07XG5cblJlcXVlc3QucHJvdG90eXBlLmdldFNjaGVtZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5zY2hlbWU7XG59O1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5nZXRQYXRoID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnBhdGg7XG59O1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5nZXRRdWVyeVBhcmFtZXRlcnMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucXVlcnlQYXJhbWV0ZXJzO1xufTtcblxuUmVxdWVzdC5wcm90b3R5cGUuZ2V0Qm9keVBhcmFtZXRlcnMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuYm9keVBhcmFtZXRlcnM7XG59O1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5nZXRIZWFkZXJzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmhlYWRlcnM7XG59O1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5nZXRVUkkgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCF0aGlzLnNjaGVtZSB8fCAhdGhpcy5ob3N0IHx8ICF0aGlzLnBvcnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgY29tcG9uZW50cyBuZWNlc3NhcnkgdG8gY29uc3RydWN0IFVSSScpO1xuICB9XG4gIHZhciB1cmkgPSB0aGlzLnNjaGVtZSArICc6Ly8nICsgdGhpcy5ob3N0O1xuICBpZiAodGhpcy5zY2hlbWUgPT09ICdodHRwJyAmJiB0aGlzLnBvcnQgIT09IDgwIHx8XG4gICAgdGhpcy5zY2hlbWUgPT09ICdodHRwcycgJiYgdGhpcy5wb3J0ICE9PSA0NDMpIHtcbiAgICB1cmkgKz0gJzonICsgdGhpcy5wb3J0O1xuICB9XG4gIGlmICh0aGlzLnBhdGgpIHtcbiAgICB1cmkgKz0gdGhpcy5wYXRoO1xuICB9XG4gIHJldHVybiB1cmk7XG59O1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5nZXRVUkwgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHVyaSA9IHRoaXMuZ2V0VVJJKCk7XG4gIGlmICh0aGlzLmdldFF1ZXJ5UGFyYW1ldGVycygpKSB7XG4gICAgcmV0dXJuIHVyaSArIHRoaXMuZ2V0UXVlcnlQYXJhbWV0ZXJTdHJpbmcodGhpcy5nZXRRdWVyeVBhcmFtZXRlcnMoKSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHVyaTtcbiAgfVxufTtcblxuUmVxdWVzdC5wcm90b3R5cGUuYWRkUXVlcnlQYXJhbWV0ZXJzID0gZnVuY3Rpb24ocXVlcnlQYXJhbWV0ZXJzKSB7XG4gIGZvciAodmFyIGtleSBpbiBxdWVyeVBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLmFkZFF1ZXJ5UGFyYW1ldGVyKGtleSwgcXVlcnlQYXJhbWV0ZXJzW2tleV0pO1xuICB9XG59O1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hZGRRdWVyeVBhcmFtZXRlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgaWYgKCF0aGlzLnF1ZXJ5UGFyYW1ldGVycykge1xuICAgIHRoaXMucXVlcnlQYXJhbWV0ZXJzID0ge307XG4gIH1cbiAgdGhpcy5xdWVyeVBhcmFtZXRlcnNba2V5XSA9IHZhbHVlO1xufTtcblxuUmVxdWVzdC5wcm90b3R5cGUuYWRkQm9keVBhcmFtZXRlcnMgPSBmdW5jdGlvbihib2R5UGFyYW1ldGVycykge1xuICBmb3IgKHZhciBrZXkgaW4gYm9keVBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLmFkZEJvZHlQYXJhbWV0ZXIoa2V5LCBib2R5UGFyYW1ldGVyc1trZXldKTtcbiAgfVxufTtcblxuUmVxdWVzdC5wcm90b3R5cGUuYWRkQm9keVBhcmFtZXRlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgaWYgKCF0aGlzLmJvZHlQYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5ib2R5UGFyYW1ldGVycyA9IHt9O1xuICB9XG4gIHRoaXMuYm9keVBhcmFtZXRlcnNba2V5XSA9IHZhbHVlO1xufTtcblxuUmVxdWVzdC5wcm90b3R5cGUuYWRkSGVhZGVycyA9IGZ1bmN0aW9uKGhlYWRlcnMpIHtcbiAgaWYgKCF0aGlzLmhlYWRlcnMpIHtcbiAgICB0aGlzLmhlYWRlcnMgPSBoZWFkZXJzO1xuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGtleSBpbiBoZWFkZXJzKSB7XG4gICAgICB0aGlzLmhlYWRlcnNba2V5XSA9IGhlYWRlcnNba2V5XTtcbiAgICB9XG4gIH1cbn07XG5cblJlcXVlc3QucHJvdG90eXBlLmdldFF1ZXJ5UGFyYW1ldGVyU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB0aGlzLmdldFF1ZXJ5UGFyYW1ldGVycygpO1xuICBpZiAoIXF1ZXJ5UGFyYW1ldGVycykge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgcXVlcnlQYXJhbWV0ZXJTdHJpbmcgPSAnPyc7XG4gIHZhciBmaXJzdCA9IHRydWU7XG4gIGZvciAodmFyIGtleSBpbiBxdWVyeVBhcmFtZXRlcnMpIHtcbiAgICBpZiAocXVlcnlQYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgcXVlcnlQYXJhbWV0ZXJTdHJpbmcgKz0gJyYnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlyc3QgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHF1ZXJ5UGFyYW1ldGVyU3RyaW5nICs9IGtleSArICc9JyArIHF1ZXJ5UGFyYW1ldGVyc1trZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcXVlcnlQYXJhbWV0ZXJTdHJpbmc7XG59O1xuXG52YXIgQnVpbGRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaG9zdCwgcG9ydCwgc2NoZW1lLCBxdWVyeVBhcmFtZXRlcnMsIGJvZHlQYXJhbWV0ZXJzLCBoZWFkZXJzLCBqc29uQm9keTtcbn07XG5cbkJ1aWxkZXIucHJvdG90eXBlLndpdGhIb3N0ID0gZnVuY3Rpb24oaG9zdCkge1xuICB0aGlzLmhvc3QgPSBob3N0O1xuICByZXR1cm4gdGhpcztcbn07XG5cbkJ1aWxkZXIucHJvdG90eXBlLndpdGhQb3J0ID0gZnVuY3Rpb24ocG9ydCkge1xuICB0aGlzLnBvcnQgPSBwb3J0O1xuICByZXR1cm4gdGhpcztcbn07XG5cbkJ1aWxkZXIucHJvdG90eXBlLndpdGhTY2hlbWUgPSBmdW5jdGlvbihzY2hlbWUpIHtcbiAgdGhpcy5zY2hlbWUgPSBzY2hlbWU7XG4gIHJldHVybiB0aGlzO1xufTtcblxuQnVpbGRlci5wcm90b3R5cGUud2l0aFF1ZXJ5UGFyYW1ldGVycyA9IGZ1bmN0aW9uKHF1ZXJ5UGFyYW1ldGVycykge1xuICB0aGlzLnF1ZXJ5UGFyYW1ldGVycyA9IHF1ZXJ5UGFyYW1ldGVycztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5CdWlsZGVyLnByb3RvdHlwZS53aXRoUGF0aCA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdGhpcy5wYXRoID0gcGF0aDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5CdWlsZGVyLnByb3RvdHlwZS53aXRoQm9keVBhcmFtZXRlcnMgPSBmdW5jdGlvbihib2R5UGFyYW1ldGVycykge1xuICB0aGlzLmJvZHlQYXJhbWV0ZXJzID0gYm9keVBhcmFtZXRlcnM7XG4gIHJldHVybiB0aGlzO1xufTtcblxuQnVpbGRlci5wcm90b3R5cGUud2l0aEhlYWRlcnMgPSBmdW5jdGlvbihoZWFkZXJzKSB7XG4gIHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7XG4gIHJldHVybiB0aGlzO1xufTtcblxuQnVpbGRlci5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMuYnVpbGRlciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IEJ1aWxkZXIoKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zcG90aWZ5LXdlYi1hcGktbm9kZS9zcmMvYmFzZS1yZXF1ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA2MTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICByZXR1cm4gbnVsbCAhPT0gb2JqICYmICdvYmplY3QnID09PSB0eXBlb2Ygb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3VwZXJhZ2VudC9saWIvaXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA2MThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3Nwb3RpZnktd2ViLWFwaScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3BvdGlmeS13ZWItYXBpLW5vZGUvc3JjL2NsaWVudC5qc1xuLy8gbW9kdWxlIGlkID0gNjE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5cbi8vIGV4dGVybmFsLWdsb2JhbCBzdHlsZXMgbXVzdCBiZSBpbXBvcnRlZCBpbiB5b3VyIEpTLlxuaW1wb3J0IG5vcm1hbGl6ZUNzcyBmcm9tICdub3JtYWxpemUuY3NzJztcbmltcG9ydCBzIGZyb20gJy4vTGF5b3V0LmNzcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0Zvb3Rlcic7XG5cbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMobm9ybWFsaXplQ3NzLCBzKShMYXlvdXQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4vbm9ybWFsaXplLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4vbm9ybWFsaXplLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4vbm9ybWFsaXplLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDYyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2Ny4wLjAgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluXFxuICogICAgSUUgb24gV2luZG93cyBQaG9uZSBhbmQgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKi9cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUuXFxuICovXFxuXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxubWFpbiB7IC8qIDEgKi9cXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgbWFyZ2luIGluIElFIDguXFxuICovXFxuXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMWVtIDQwcHg7XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgZ2FwcyBpbiBsaW5rcyB1bmRlcmxpbmUgaW4gaU9TIDgrIGFuZCBTYWZhcmkgOCsuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogb2JqZWN0czsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LSBhbmQgRmlyZWZveCAzOS0uXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgdGhlIGR1cGxpY2F0ZSBhcHBsaWNhdGlvbiBvZiBgYm9sZGVyYCBieSB0aGUgbmV4dCBydWxlIGluIFNhZmFyaSA2LlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzdHlsZSBpbiBBbmRyb2lkIDQuMy0uXFxuICovXFxuXFxuZGZuIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGJhY2tncm91bmQgYW5kIGNvbG9yIGluIElFIDktLlxcbiAqL1xcblxcbm1hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKi9cXG5cXG5hdWRpbyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGlPUyA0LTcuXFxuICovXFxuXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAtLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEhpZGUgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqL1xcblxcbnN2Zzpub3QoOnJvb3QpIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gUHJldmVudCBhIFdlYktpdCBidWcgd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gIGFuZCBgdmlkZW9gXFxuICogICAgY29udHJvbHMgaW4gQW5kcm9pZCA0LlxcbiAqIDIuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmh0bWwgW3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLS5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAtLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBhbmQgY2FuY2VsIGJ1dHRvbnMgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUsIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMsIC8qIDEgKi9cXG5tZW51IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogU2NyaXB0aW5nXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKi9cXG5cXG5jYW52YXMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRS5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBIaWRkZW5cXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLS5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL3N0ZXBoYW5pZS9kZXYvU2lkZVByb2plY3RzL1ZvdGVMaXN0L25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsNEVBQTRFOztBQUU1RTtnRkFDZ0Y7O0FBRWhGOzs7O0dBSUc7O0FBRUg7RUFDRSxrQkFBa0IsQ0FBQyxPQUFPO0VBQzFCLDJCQUEyQixDQUFDLE9BQU87RUFDbkMsK0JBQStCLENBQUMsT0FBTztDQUN4Qzs7QUFFRDtnRkFDZ0Y7O0FBRWhGOztHQUVHOztBQUVIO0VBQ0UsVUFBVTtDQUNYOztBQUVEOztHQUVHOztBQUVIOzs7Ozs7RUFNRSxlQUFlO0NBQ2hCOztBQUVEOzs7R0FHRzs7QUFFSDtFQUNFLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7O0dBR0c7O0FBRUg7O09BRU8sT0FBTztFQUNaLGVBQWU7Q0FDaEI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0Usd0JBQXdCLENBQUMsT0FBTztFQUNoQyxVQUFVLENBQUMsT0FBTztFQUNsQixrQkFBa0IsQ0FBQyxPQUFPO0NBQzNCOztBQUVEOzs7R0FHRzs7QUFFSDtFQUNFLGtDQUFrQyxDQUFDLE9BQU87RUFDMUMsZUFBZSxDQUFDLE9BQU87Q0FDeEI7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7O0dBR0c7O0FBRUg7RUFDRSw4QkFBOEIsQ0FBQyxPQUFPO0VBQ3RDLHNDQUFzQyxDQUFDLE9BQU87Q0FDL0M7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0Usb0JBQW9CLENBQUMsT0FBTztFQUM1QiwyQkFBMkIsQ0FBQyxPQUFPO0VBQ25DLGtDQUFrQyxDQUFDLE9BQU87Q0FDM0M7O0FBRUQ7O0dBRUc7O0FBRUg7O0VBRUUscUJBQXFCO0NBQ3RCOztBQUVEOztHQUVHOztBQUVIOztFQUVFLG9CQUFvQjtDQUNyQjs7QUFFRDs7O0dBR0c7O0FBRUg7OztFQUdFLGtDQUFrQyxDQUFDLE9BQU87RUFDMUMsZUFBZSxDQUFDLE9BQU87Q0FDeEI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtDQUNiOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDs7O0dBR0c7O0FBRUg7O0VBRUUsZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIseUJBQXlCO0NBQzFCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO2dGQUNnRjs7QUFFaEY7O0dBRUc7O0FBRUg7O0VBRUUsc0JBQXNCO0NBQ3ZCOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsY0FBYztFQUNkLFVBQVU7Q0FDWDs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtnRkFDZ0Y7O0FBRWhGOzs7R0FHRzs7QUFFSDs7Ozs7RUFLRSx3QkFBd0IsQ0FBQyxPQUFPO0VBQ2hDLGdCQUFnQixDQUFDLE9BQU87RUFDeEIsa0JBQWtCLENBQUMsT0FBTztFQUMxQixVQUFVLENBQUMsT0FBTztDQUNuQjs7QUFFRDs7O0dBR0c7O0FBRUg7UUFDUSxPQUFPO0VBQ2Isa0JBQWtCO0NBQ25COztBQUVEOzs7R0FHRzs7QUFFSDtTQUNTLE9BQU87RUFDZCxxQkFBcUI7Q0FDdEI7O0FBRUQ7Ozs7R0FJRzs7QUFFSDs7OztFQUlFLDJCQUEyQixDQUFDLE9BQU87Q0FDcEM7O0FBRUQ7O0dBRUc7O0FBRUg7Ozs7RUFJRSxtQkFBbUI7RUFDbkIsV0FBVztDQUNaOztBQUVEOztHQUVHOztBQUVIOzs7O0VBSUUsK0JBQStCO0NBQ2hDOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsK0JBQStCO0NBQ2hDOztBQUVEOzs7OztHQUtHOztBQUVIO0VBQ0UsdUJBQXVCLENBQUMsT0FBTztFQUMvQixlQUFlLENBQUMsT0FBTztFQUN2QixlQUFlLENBQUMsT0FBTztFQUN2QixnQkFBZ0IsQ0FBQyxPQUFPO0VBQ3hCLFdBQVcsQ0FBQyxPQUFPO0VBQ25CLG9CQUFvQixDQUFDLE9BQU87Q0FDN0I7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0Usc0JBQXNCLENBQUMsT0FBTztFQUM5Qix5QkFBeUIsQ0FBQyxPQUFPO0NBQ2xDOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDs7O0dBR0c7O0FBRUg7O0VBRUUsdUJBQXVCLENBQUMsT0FBTztFQUMvQixXQUFXLENBQUMsT0FBTztDQUNwQjs7QUFFRDs7R0FFRzs7QUFFSDs7RUFFRSxhQUFhO0NBQ2Q7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0UsOEJBQThCLENBQUMsT0FBTztFQUN0QyxxQkFBcUIsQ0FBQyxPQUFPO0NBQzlCOztBQUVEOztHQUVHOztBQUVIOztFQUVFLHlCQUF5QjtDQUMxQjs7QUFFRDs7O0dBR0c7O0FBRUg7RUFDRSwyQkFBMkIsQ0FBQyxPQUFPO0VBQ25DLGNBQWMsQ0FBQyxPQUFPO0NBQ3ZCOztBQUVEO2dGQUNnRjs7QUFFaEY7OztHQUdHOztBQUVIOztFQUVFLGVBQWU7Q0FDaEI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7R0FFRzs7QUFFSDtFQUNFLHNCQUFzQjtDQUN2Qjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtnRkFDZ0Y7O0FBRWhGOztHQUVHOztBQUVIO0VBQ0UsY0FBYztDQUNmXCIsXCJmaWxlXCI6XCJub3JtYWxpemUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY3LjAuMCB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW5cXG4gKiAgICBJRSBvbiBXaW5kb3dzIFBob25lIGFuZCBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRS5cXG4gKi9cXG5cXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5tYWluIHsgLyogMSAqL1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBtYXJnaW4gaW4gSUUgOC5cXG4gKi9cXG5cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAxZW0gNDBweDtcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSBnYXBzIGluIGxpbmtzIHVuZGVybGluZSBpbiBpT1MgOCsgYW5kIFNhZmFyaSA4Ky5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctIGFuZCBGaXJlZm94IDM5LS5cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUHJldmVudCB0aGUgZHVwbGljYXRlIGFwcGxpY2F0aW9uIG9mIGBib2xkZXJgIGJ5IHRoZSBuZXh0IHJ1bGUgaW4gU2FmYXJpIDYuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHN0eWxlIGluIEFuZHJvaWQgNC4zLS5cXG4gKi9cXG5cXG5kZm4ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgYmFja2dyb3VuZCBhbmQgY29sb3IgaW4gSUUgOS0uXFxuICovXFxuXFxubWFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcblxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gaU9TIDQtNy5cXG4gKi9cXG5cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC0uXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogSGlkZSB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICovXFxuXFxuc3ZnOm5vdCg6cm9vdCkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBQcmV2ZW50IGEgV2ViS2l0IGJ1ZyB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2AgYW5kIGB2aWRlb2BcXG4gKiAgICBjb250cm9scyBpbiBBbmRyb2lkIDQuXFxuICogMi4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaHRtbCBbdHlwZT1cXFwiYnV0dG9uXFxcIl0sIC8qIDEgKi9cXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRS5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAtLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC0uXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGFuZCBjYW5jZWwgYnV0dG9ucyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSwgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscywgLyogMSAqL1xcbm1lbnUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBTY3JpcHRpbmdcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcblxcbmNhbnZhcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIEhpZGRlblxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAtLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcInNvdXJjZU1hcFwiOnRydWUsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1xuLy8gbW9kdWxlIGlkID0gNjIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS0yIS4vTGF5b3V0LmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLTIhLi9MYXlvdXQuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS0yIS4vTGF5b3V0LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2MjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5cXG4vKlxcbiAqIG5vcm1hbGl6ZS5jc3MgaXMgaW1wb3J0ZWQgaW4gSlMgZmlsZS5cXG4gKiBJZiB5b3UgaW1wb3J0IGV4dGVybmFsIENTUyBmaWxlIGZyb20geW91ciBpbnRlcm5hbCBDU1NcXG4gKiB0aGVuIGl0IHdpbGwgYmUgaW5saW5lZCBhbmQgcHJvY2Vzc2VkIHdpdGggQ1NTIG1vZHVsZXMuXFxuICovXFxuXFxuLypcXG4gKiBCYXNlIHN0eWxlc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuaHRtbCB7XFxuICBjb2xvcjogIzIyMjtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LXNpemU6IDFlbTsgLyogfjE2cHg7ICovXFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgJ0hlbHZldGljYU5ldWUtTGlnaHQnLCBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDEuMzc1OyAvKiB+MjJweCAqL1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogIzAwNzRjMjtcXG59XFxuXFxuLypcXG4gKiBSZW1vdmUgdGV4dC1zaGFkb3cgaW4gc2VsZWN0aW9uIGhpZ2hsaWdodDpcXG4gKiBodHRwczovL3R3aXR0ZXIuY29tL21pa2V0YXlsci9zdGF0dXMvMTIyMjg4MDUzMDFcXG4gKlxcbiAqIFRoZXNlIHNlbGVjdGlvbiBydWxlIHNldHMgaGF2ZSB0byBiZSBzZXBhcmF0ZS5cXG4gKiBDdXN0b21pemUgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gbWF0Y2ggeW91ciBkZXNpZ24uXFxuICovXFxuXFxuOjotbW96LXNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG4gKiBBIGJldHRlciBsb29raW5nIGRlZmF1bHQgaG9yaXpvbnRhbCBydWxlXFxuICovXFxuXFxuaHIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuICogUmVtb3ZlIHRoZSBnYXAgYmV0d2VlbiBhdWRpbywgY2FudmFzLCBpZnJhbWVzLFxcbiAqIGltYWdlcywgdmlkZW9zIGFuZCB0aGUgYm90dG9tIG9mIHRoZWlyIGNvbnRhaW5lcnM6XFxuICogaHR0cHM6Ly9naXRodWIuY29tL2g1YnAvaHRtbDUtYm9pbGVycGxhdGUvaXNzdWVzLzQ0MFxcbiAqL1xcblxcbmF1ZGlvLFxcbmNhbnZhcyxcXG5pZnJhbWUsXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4vKlxcbiAqIFJlbW92ZSBkZWZhdWx0IGZpZWxkc2V0IHN0eWxlcy5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKlxcbiAqIEFsbG93IG9ubHkgdmVydGljYWwgcmVzaXppbmcgb2YgdGV4dGFyZWFzLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuICogQnJvd3NlciB1cGdyYWRlIHByb21wdFxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLmJyb3dzZXJ1cGdyYWRlIHtcXG4gIG1hcmdpbjogMC4yZW0gMDtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDAuMmVtIDA7XFxufVxcblxcbi8qXFxuICogUHJpbnQgc3R5bGVzXFxuICogSW5saW5lZCB0byBhdm9pZCB0aGUgYWRkaXRpb25hbCBIVFRQIHJlcXVlc3Q6XFxuICogaHR0cDovL3d3dy5waHBpZWQuY29tL2RlbGF5LWxvYWRpbmcteW91ci1wcmludC1jc3MvXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5AbWVkaWEgcHJpbnQge1xcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDsgLyogQmxhY2sgcHJpbnRzIGZhc3RlcjogaHR0cDovL3d3dy5zYW5iZWlqaS5jb20vYXJjaGl2ZXMvOTUzICovXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIGEsXFxuICBhOnZpc2l0ZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIH1cXG5cXG4gIGFbaHJlZl06OmFmdGVyIHtcXG4gICAgY29udGVudDogJyAoJyBhdHRyKGhyZWYpICcpJztcXG4gIH1cXG5cXG4gIGFiYnJbdGl0bGVdOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgKCcgYXR0cih0aXRsZSkgJyknO1xcbiAgfVxcblxcbiAgLypcXG4gICAqIERvbid0IHNob3cgbGlua3MgdGhhdCBhcmUgZnJhZ21lbnQgaWRlbnRpZmllcnMsXFxuICAgKiBvciB1c2UgdGhlIGBqYXZhc2NyaXB0OmAgcHNldWRvIHByb3RvY29sXFxuICAgKi9cXG5cXG4gIGFbaHJlZl49JyMnXTo6YWZ0ZXIsXFxuICBhW2hyZWZePSdqYXZhc2NyaXB0OiddOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgfVxcblxcbiAgcHJlLFxcbiAgYmxvY2txdW90ZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXG4gIH1cXG5cXG4gIC8qXFxuICAgKiBQcmludGluZyBUYWJsZXM6XFxuICAgKiBodHRwOi8vY3NzLWRpc2N1c3MuaW5jdXRpby5jb20vd2lraS9QcmludGluZ19UYWJsZXNcXG4gICAqL1xcblxcbiAgdGhlYWQge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XFxuICB9XFxuXFxuICB0cixcXG4gIGltZyB7XFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgcCxcXG4gIGgyLFxcbiAgaDMge1xcbiAgICBvcnBoYW5zOiAzO1xcbiAgICB3aWRvd3M6IDM7XFxuICB9XFxuXFxuICBoMixcXG4gIGgzIHtcXG4gICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWQ7XFxuICB9XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvc3RlcGhhbmllL2Rldi9TaWRlUHJvamVjdHMvVm90ZUxpc3Qvc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7R0FPRzs7QUFFSDs7Ozs7OztHQU9HOztBQUVIO0VBQ0U7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RSxFQUFFLGdDQUFnQyxFQUFFLDJCQUEyQixFQUFFLDZCQUE2QixDQUFDLGlDQUFpQztDQUMvTTs7QUFFRDs7OztHQUlHOztBQUVIOztnRkFFZ0Y7O0FBRWhGO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlLENBQUMsWUFBWTtFQUM1QiwyREFBMkQ7RUFDM0QsbUJBQW1CLENBQUMsV0FBVztDQUNoQzs7QUFFRDtFQUNFLFVBQVU7Q0FDWDs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7Ozs7OztHQU1HOztBQUVIO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7Q0FDbkI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLFdBQVc7Q0FDWjs7QUFFRDs7OztHQUlHOztBQUVIOzs7Ozs7RUFNRSx1QkFBdUI7Q0FDeEI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7Q0FDWjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDs7Z0ZBRWdGOztBQUVoRjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtDQUNsQjs7QUFFRDs7OztnRkFJZ0Y7O0FBRWhGO0VBQ0U7OztJQUdFLG1DQUFtQztJQUNuQyx1QkFBdUIsQ0FBQywrREFBK0Q7SUFDdkYsb0NBQW9DO1lBQzVCLDRCQUE0QjtJQUNwQyw2QkFBNkI7R0FDOUI7O0VBRUQ7O0lBRUUsMkJBQTJCO0dBQzVCOztFQUVEO0lBQ0UsNkJBQTZCO0dBQzlCOztFQUVEO0lBQ0UsOEJBQThCO0dBQy9COztFQUVEOzs7S0FHRzs7RUFFSDs7SUFFRSxZQUFZO0dBQ2I7O0VBRUQ7O0lBRUUsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtHQUMxQjs7RUFFRDs7O0tBR0c7O0VBRUg7SUFDRSw0QkFBNEI7R0FDN0I7O0VBRUQ7O0lBRUUseUJBQXlCO0dBQzFCOztFQUVEO0lBQ0UsMkJBQTJCO0dBQzVCOztFQUVEOzs7SUFHRSxXQUFXO0lBQ1gsVUFBVTtHQUNYOztFQUVEOztJQUVFLHdCQUF3QjtHQUN6QjtDQUNGXCIsXCJmaWxlXCI6XCJMYXlvdXQuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5cXG4vKlxcbiAqIG5vcm1hbGl6ZS5jc3MgaXMgaW1wb3J0ZWQgaW4gSlMgZmlsZS5cXG4gKiBJZiB5b3UgaW1wb3J0IGV4dGVybmFsIENTUyBmaWxlIGZyb20geW91ciBpbnRlcm5hbCBDU1NcXG4gKiB0aGVuIGl0IHdpbGwgYmUgaW5saW5lZCBhbmQgcHJvY2Vzc2VkIHdpdGggQ1NTIG1vZHVsZXMuXFxuICovXFxuXFxuLypcXG4gKiBCYXNlIHN0eWxlc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuaHRtbCB7XFxuICBjb2xvcjogIzIyMjtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LXNpemU6IDFlbTsgLyogfjE2cHg7ICovXFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgJ0hlbHZldGljYU5ldWUtTGlnaHQnLCBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDEuMzc1OyAvKiB+MjJweCAqL1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogIzAwNzRjMjtcXG59XFxuXFxuLypcXG4gKiBSZW1vdmUgdGV4dC1zaGFkb3cgaW4gc2VsZWN0aW9uIGhpZ2hsaWdodDpcXG4gKiBodHRwczovL3R3aXR0ZXIuY29tL21pa2V0YXlsci9zdGF0dXMvMTIyMjg4MDUzMDFcXG4gKlxcbiAqIFRoZXNlIHNlbGVjdGlvbiBydWxlIHNldHMgaGF2ZSB0byBiZSBzZXBhcmF0ZS5cXG4gKiBDdXN0b21pemUgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gbWF0Y2ggeW91ciBkZXNpZ24uXFxuICovXFxuXFxuOjotbW96LXNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG4gKiBBIGJldHRlciBsb29raW5nIGRlZmF1bHQgaG9yaXpvbnRhbCBydWxlXFxuICovXFxuXFxuaHIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuICogUmVtb3ZlIHRoZSBnYXAgYmV0d2VlbiBhdWRpbywgY2FudmFzLCBpZnJhbWVzLFxcbiAqIGltYWdlcywgdmlkZW9zIGFuZCB0aGUgYm90dG9tIG9mIHRoZWlyIGNvbnRhaW5lcnM6XFxuICogaHR0cHM6Ly9naXRodWIuY29tL2g1YnAvaHRtbDUtYm9pbGVycGxhdGUvaXNzdWVzLzQ0MFxcbiAqL1xcblxcbmF1ZGlvLFxcbmNhbnZhcyxcXG5pZnJhbWUsXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4vKlxcbiAqIFJlbW92ZSBkZWZhdWx0IGZpZWxkc2V0IHN0eWxlcy5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKlxcbiAqIEFsbG93IG9ubHkgdmVydGljYWwgcmVzaXppbmcgb2YgdGV4dGFyZWFzLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuICogQnJvd3NlciB1cGdyYWRlIHByb21wdFxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuOmdsb2JhbCguYnJvd3NlcnVwZ3JhZGUpIHtcXG4gIG1hcmdpbjogMC4yZW0gMDtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDAuMmVtIDA7XFxufVxcblxcbi8qXFxuICogUHJpbnQgc3R5bGVzXFxuICogSW5saW5lZCB0byBhdm9pZCB0aGUgYWRkaXRpb25hbCBIVFRQIHJlcXVlc3Q6XFxuICogaHR0cDovL3d3dy5waHBpZWQuY29tL2RlbGF5LWxvYWRpbmcteW91ci1wcmludC1jc3MvXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5AbWVkaWEgcHJpbnQge1xcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDsgLyogQmxhY2sgcHJpbnRzIGZhc3RlcjogaHR0cDovL3d3dy5zYW5iZWlqaS5jb20vYXJjaGl2ZXMvOTUzICovXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIGEsXFxuICBhOnZpc2l0ZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIH1cXG5cXG4gIGFbaHJlZl06OmFmdGVyIHtcXG4gICAgY29udGVudDogJyAoJyBhdHRyKGhyZWYpICcpJztcXG4gIH1cXG5cXG4gIGFiYnJbdGl0bGVdOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgKCcgYXR0cih0aXRsZSkgJyknO1xcbiAgfVxcblxcbiAgLypcXG4gICAqIERvbid0IHNob3cgbGlua3MgdGhhdCBhcmUgZnJhZ21lbnQgaWRlbnRpZmllcnMsXFxuICAgKiBvciB1c2UgdGhlIGBqYXZhc2NyaXB0OmAgcHNldWRvIHByb3RvY29sXFxuICAgKi9cXG5cXG4gIGFbaHJlZl49JyMnXTo6YWZ0ZXIsXFxuICBhW2hyZWZePSdqYXZhc2NyaXB0OiddOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgfVxcblxcbiAgcHJlLFxcbiAgYmxvY2txdW90ZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXG4gIH1cXG5cXG4gIC8qXFxuICAgKiBQcmludGluZyBUYWJsZXM6XFxuICAgKiBodHRwOi8vY3NzLWRpc2N1c3MuaW5jdXRpby5jb20vd2lraS9QcmludGluZ19UYWJsZXNcXG4gICAqL1xcblxcbiAgdGhlYWQge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XFxuICB9XFxuXFxuICB0cixcXG4gIGltZyB7XFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgcCxcXG4gIGgyLFxcbiAgaDMge1xcbiAgICBvcnBoYW5zOiAzO1xcbiAgICB3aWRvd3M6IDM7XFxuICB9XFxuXFxuICBoMixcXG4gIGgzIHtcXG4gICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZSxcImRpc2NhcmRDb21tZW50c1wiOntcInJlbW92ZUFsbFwiOnRydWV9fSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmNzc1xuLy8gbW9kdWxlIGlkID0gNjI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vSGVhZGVyLmNzcyc7XG5pbXBvcnQgTGluayBmcm9tICcuLi9MaW5rJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL05hdmlnYXRpb24nO1xuaW1wb3J0IGxvZ29VcmwgZnJvbSAnLi9sb2dvLXNtYWxsLnBuZyc7XG5pbXBvcnQgbG9nb1VybDJ4IGZyb20gJy4vbG9nby1zbWFsbEAyeC5wbmcnO1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxuICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzLmJyYW5kfSB0bz1cIi9cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5icmFuZFR4dH0+U3RlZmZpQXBwczwvc3Bhbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuYmFubmVyfT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3MuYmFubmVyVGl0bGV9PlZvdGVMaXN0PC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17cy5iYW5uZXJEZXNjfT5Wb3RlIG9uIENvbGxhYiBQbGF5bGlzdHM8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKEhlYWRlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS0yIS4vSGVhZGVyLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLTIhLi9IZWFkZXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS0yIS4vSGVhZGVyLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSA2MjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi8gIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovIC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5cXG4uSGVhZGVyLXJvb3QtTzlvVzkge1xcbiAgYmFja2dyb3VuZDogIzM3MzI3NztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uSGVhZGVyLWNvbnRhaW5lci1xUTJtRiB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbn1cXG5cXG4uSGVhZGVyLWJyYW5kLTJvU195IHtcXG4gIGNvbG9yOiByZ2IoMTQ2LCAyMjksIDI1Mik7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEuNzVlbTsgLyogfjI4cHggKi9cXG59XFxuXFxuLkhlYWRlci1icmFuZFR4dC0yMzBhSCB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLkhlYWRlci1iYW5uZXItMkFYT2oge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uSGVhZGVyLWJhbm5lclRpdGxlLTNkbXdYIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiA0ZW07XFxuICBsaW5lLWhlaWdodDogMWVtO1xcbn1cXG5cXG4uSGVhZGVyLWJhbm5lckRlc2MtSTJlWTkge1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9zdGVwaGFuaWUvZGV2L1NpZGVQcm9qZWN0cy9Wb3RlTGlzdC9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztHQU9HOztBQUVIOzs7Ozs7O0dBT0c7O0FBRUg7RUFDRTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFOztFQUU5RTs7Z0ZBRThFLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUMsaUNBQWlDO0NBQy9NOztBQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixrQkFBa0IsQ0FBQyxXQUFXO0NBQy9COztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLFVBQVU7Q0FDWFwiLFwiZmlsZVwiOlwiSGVhZGVyLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLnJvb3Qge1xcbiAgYmFja2dyb3VuZDogIzM3MzI3NztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMjBweCAwO1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxufVxcblxcbi5icmFuZCB7XFxuICBjb2xvcjogcmdiKDE0NiwgMjI5LCAyNTIpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjc1ZW07IC8qIH4yOHB4ICovXFxufVxcblxcbi5icmFuZFR4dCB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmJhbm5lciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5iYW5uZXJUaXRsZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogNGVtO1xcbiAgbGluZS1oZWlnaHQ6IDFlbTtcXG59XFxuXFxuLmJhbm5lckRlc2Mge1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJIZWFkZXItcm9vdC1POW9XOVwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkhlYWRlci1jb250YWluZXItcVEybUZcIixcblx0XCJicmFuZFwiOiBcIkhlYWRlci1icmFuZC0yb1NfeVwiLFxuXHRcImJyYW5kVHh0XCI6IFwiSGVhZGVyLWJyYW5kVHh0LTIzMGFIXCIsXG5cdFwiYmFubmVyXCI6IFwiSGVhZGVyLWJhbm5lci0yQVhPalwiLFxuXHRcImJhbm5lclRpdGxlXCI6IFwiSGVhZGVyLWJhbm5lclRpdGxlLTNkbXdYXCIsXG5cdFwiYmFubmVyRGVzY1wiOiBcIkhlYWRlci1iYW5uZXJEZXNjLUkyZVk5XCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDYyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgU3BvdGlmeVdlYkFwaSBmcm9tICdzcG90aWZ5LXdlYi1hcGktbm9kZSc7XG5pbXBvcnQgcyBmcm9tICcuL05hdmlnYXRpb24uY3NzJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnO1xuY29uc3QgQ0xJRU5UX0lEID0gJ2I4YWUzNjI4NmYxYzRkYjI4YThhMmJhMzgwYTRkOGNjJztcbmNvbnN0IENMSUVOVF9TRUNSRVQgPSAnMThjZmM3NWU5ZjRiNDc4NWFjMzI1ZWFhMzhhMDk1YzknO1xuY29uc3QgUkVESVJFQ1RfVVJJID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jYWxsYmFjayc7XG5jb25zdCBsb2dpblVybCA9ICdodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2F1dGhvcml6ZT9jbGllbnRfaWQ9JyArIENMSUVOVF9JRCArXG4gICAgJyZyZXNwb25zZV90eXBlPXRva2VuJyArXG4gICAgJyZzY29wZT1wbGF5bGlzdC1yZWFkLXByaXZhdGUlMjBwbGF5bGlzdC1tb2RpZnklMjBwbGF5bGlzdC1tb2RpZnktcHJpdmF0ZScgK1xuICAgICcmcmVkaXJlY3RfdXJpPScgKyBlbmNvZGVVUklDb21wb25lbnQoUkVESVJFQ1RfVVJJKTtcblxuY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5nZXRTcG90aWZ5KCk7XG4gIH1cblxuICBnZXRTcG90aWZ5KCl7XG4gICAgY29uc3Qgc3BvdGlmeUFwaSA9IG5ldyBTcG90aWZ5V2ViQXBpKHtcbiAgICAgIGNsaWVudElkIDogQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0IDogQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIHJlZGlyZWN0X3VyaTogUkVESVJFQ1RfVVJJXG4gICAgfSk7XG5cbiAgICBpZighbG9jYWxTdG9yYWdlLmF1dGhUb2tlbikgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgYXV0aCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmF1dGhUb2tlbik7XG5cbiAgICBzcG90aWZ5QXBpLnNldEFjY2Vzc1Rva2VuKGF1dGguYWNjZXNzX3Rva2VuKTtcbiAgICBzcG90aWZ5QXBpLmdldE1lKClcbiAgICAudGhlbigocmVzKT0+e1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHVzZXI6IHJlcy5ib2R5XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckxvZ2luKCkge1xuICAgIGNvbnN0IHsgdXNlciB9ID0gdGhpcy5zdGF0ZSB8fCB7fTtcbiAgICBpZih1c2VyKXtcbiAgICAgIGNvbnN0IG5hbWUgPSB1c2VyLmRpc3BsYXlfbmFtZS5zcGxpdChcIiBcIik7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c3Bhbj5XZWxjb21lIHtuYW1lWzBdfSE8L3NwYW4+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8YSBjbGFzc05hbWU9e3MubGlua30gaHJlZj17bG9naW5Vcmx9PkxvZyBpbjwvYT5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5yb290fSByb2xlPVwibmF2aWdhdGlvblwiPlxuICAgICAgICB7dGhpcy5yZW5kZXJMb2dpbigpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKE5hdmlnYXRpb24pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEF1dGhlbnRpY2F0aW9uUmVxdWVzdCA9IHJlcXVpcmUoJy4vYXV0aGVudGljYXRpb24tcmVxdWVzdCcpLFxuICAgIFdlYkFwaVJlcXVlc3QgPSByZXF1aXJlKCcuL3dlYmFwaS1yZXF1ZXN0JyksXG4gICAgSHR0cE1hbmFnZXIgPSByZXF1aXJlKCcuL2h0dHAtbWFuYWdlcicpO1xuXG5mdW5jdGlvbiBTcG90aWZ5V2ViQXBpKGNyZWRlbnRpYWxzKSB7XG4gIHRoaXMuX2NyZWRlbnRpYWxzID0gY3JlZGVudGlhbHMgfHwge307XG59XG5cblNwb3RpZnlXZWJBcGkucHJvdG90eXBlID0ge1xuICBfYWRkQm9keVBhcmFtZXRlcnM6IGZ1bmN0aW9uKHJlcXVlc3QsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgZm9yICh2YXIga2V5IGluIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGtleSAhPT0gJ2NyZWRlbnRpYWxzJykge1xuICAgICAgICAgIHJlcXVlc3QuYWRkQm9keVBhcmFtZXRlcihrZXksIG9wdGlvbnNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgX2FkZFF1ZXJ5UGFyYW1ldGVyczogZnVuY3Rpb24ocmVxdWVzdCwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKHZhciBrZXkgaW4gb3B0aW9ucykge1xuICAgICAgaWYgKGtleSAhPT0gJ2NyZWRlbnRpYWxzJykge1xuICAgICAgICByZXF1ZXN0LmFkZFF1ZXJ5UGFyYW1ldGVyKGtleSwgb3B0aW9uc1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgX3BlcmZvcm1SZXF1ZXN0OiBmdW5jdGlvbihtZXRob2QsIHJlcXVlc3QpIHtcbiAgICB2YXIgcHJvbWlzZUZ1bmN0aW9uID0gZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBtZXRob2QocmVxdWVzdCwgZnVuY3Rpb24oZXJyb3IsIHJlc3VsdCkge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocHJvbWlzZUZ1bmN0aW9uKTtcbiAgfSxcblxuICBfYWRkQWNjZXNzVG9rZW46IGZ1bmN0aW9uKHJlcXVlc3QsIGFjY2Vzc1Rva2VuKSB7XG4gICAgaWYgKGFjY2Vzc1Rva2VuKSB7XG4gICAgICByZXF1ZXN0LmFkZEhlYWRlcnMoe1xuICAgICAgICAnQXV0aG9yaXphdGlvbicgOiAnQmVhcmVyICcgKyBhY2Nlc3NUb2tlblxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIHNldENyZWRlbnRpYWxzOiBmdW5jdGlvbihjcmVkZW50aWFscykge1xuICAgIGZvciAodmFyIGtleSBpbiBjcmVkZW50aWFscykge1xuICAgICAgaWYgKGNyZWRlbnRpYWxzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGhpcy5fY3JlZGVudGlhbHNba2V5XSA9IGNyZWRlbnRpYWxzW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGdldENyZWRlbnRpYWxzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlZGVudGlhbHM7XG4gIH0sXG5cbiAgcmVzZXRDcmVkZW50aWFsczogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fY3JlZGVudGlhbHMgPSBudWxsO1xuICB9LFxuXG4gIHNldENsaWVudElkOiBmdW5jdGlvbihjbGllbnRJZCkge1xuICAgIHRoaXMuX3NldENyZWRlbnRpYWwoJ2NsaWVudElkJywgY2xpZW50SWQpO1xuICB9LFxuXG4gIHNldENsaWVudFNlY3JldDogZnVuY3Rpb24oY2xpZW50U2VjcmV0KSB7XG4gICAgdGhpcy5fc2V0Q3JlZGVudGlhbCgnY2xpZW50U2VjcmV0JywgY2xpZW50U2VjcmV0KTtcbiAgfSxcblxuICBzZXRBY2Nlc3NUb2tlbjogZnVuY3Rpb24oYWNjZXNzVG9rZW4pIHtcbiAgICB0aGlzLl9zZXRDcmVkZW50aWFsKCdhY2Nlc3NUb2tlbicsIGFjY2Vzc1Rva2VuKTtcbiAgfSxcblxuICBzZXRSZWZyZXNoVG9rZW46IGZ1bmN0aW9uKHJlZnJlc2hUb2tlbikge1xuICAgIHRoaXMuX3NldENyZWRlbnRpYWwoJ3JlZnJlc2hUb2tlbicsIHJlZnJlc2hUb2tlbik7XG4gIH0sXG5cbiAgc2V0UmVkaXJlY3RVUkk6IGZ1bmN0aW9uKHJlZGlyZWN0VXJpKSB7XG4gICAgdGhpcy5fc2V0Q3JlZGVudGlhbCgncmVkaXJlY3RVcmknLCByZWRpcmVjdFVyaSk7XG4gIH0sXG5cbiAgZ2V0UmVkaXJlY3RVUkk6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRDcmVkZW50aWFsKCdyZWRpcmVjdFVyaScpO1xuICB9LFxuXG4gIGdldENsaWVudElkOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0Q3JlZGVudGlhbCgnY2xpZW50SWQnKTtcbiAgfSxcblxuICBnZXRDbGllbnRTZWNyZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRDcmVkZW50aWFsKCdjbGllbnRTZWNyZXQnKTtcbiAgfSxcblxuICBnZXRBY2Nlc3NUb2tlbjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldENyZWRlbnRpYWwoJ2FjY2Vzc1Rva2VuJyk7XG4gIH0sXG5cbiAgZ2V0UmVmcmVzaFRva2VuOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0Q3JlZGVudGlhbCgncmVmcmVzaFRva2VuJyk7XG4gIH0sXG5cbiAgcmVzZXRDbGllbnRJZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcmVzZXRDcmVkZW50aWFsKCdjbGllbnRJZCcpO1xuICB9LFxuXG4gIHJlc2V0Q2xpZW50U2VjcmV0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9yZXNldENyZWRlbnRpYWwoJ2NsaWVudFNlY3JldCcpO1xuICB9LFxuXG4gIHJlc2V0QWNjZXNzVG9rZW46IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3Jlc2V0Q3JlZGVudGlhbCgnYWNjZXNzVG9rZW4nKTtcbiAgfSxcblxuICByZXNldFJlZnJlc2hUb2tlbjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcmVzZXRDcmVkZW50aWFsKCdyZWZyZXNoVG9rZW4nKTtcbiAgfSxcblxuICByZXNldFJlZGlyZWN0VVJJOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9yZXNldENyZWRlbnRpYWwoJ3JlZGlyZWN0VXJpJyk7XG4gIH0sXG5cbiAgX3NldENyZWRlbnRpYWw6IGZ1bmN0aW9uKGNyZWRlbnRpYWxLZXksIHZhbHVlKSB7XG4gICAgdGhpcy5fY3JlZGVudGlhbHMgPSB0aGlzLl9jcmVkZW50aWFscyB8fCB7fTtcbiAgICB0aGlzLl9jcmVkZW50aWFsc1tjcmVkZW50aWFsS2V5XSA9IHZhbHVlO1xuICB9LFxuXG4gIF9nZXRDcmVkZW50aWFsOiBmdW5jdGlvbihjcmVkZW50aWFsS2V5KSB7XG4gICAgaWYgKCF0aGlzLl9jcmVkZW50aWFscykge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5fY3JlZGVudGlhbHNbY3JlZGVudGlhbEtleV07XG4gICAgfVxuICB9LFxuXG4gIF9yZXNldENyZWRlbnRpYWw6IGZ1bmN0aW9uKGNyZWRlbnRpYWxLZXkpIHtcbiAgICBpZiAoIXRoaXMuX2NyZWRlbnRpYWxzKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NyZWRlbnRpYWxzW2NyZWRlbnRpYWxLZXldID0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIExvb2sgdXAgYSB0cmFjay5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRyYWNrSWQgVGhlIHRyYWNrJ3MgSUQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gVGhlIHBvc3NpYmxlIG9wdGlvbnMsIGN1cnJlbnRseSBvbmx5IG1hcmtldC5cbiAgICogQHBhcmFtIHtyZXF1ZXN0Q2FsbGJhY2t9IFtjYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbnN0ZWFkIG9mIHRoZSBwcm9taXNlLlxuICAgKiBAZXhhbXBsZSBnZXRUcmFjaygnM1FtODZYTGZsbUlYVm0xd2N3a2dESycpLnRoZW4oLi4uKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IEEgcHJvbWlzZSB0aGF0IGlmIHN1Y2Nlc3NmdWwsIHJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb25cbiAgICogICAgICAgICAgYWJvdXQgdGhlIHRyYWNrLiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIGdldFRyYWNrOiBmdW5jdGlvbih0cmFja0lkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAvLyBJbiBjYXNlIHNvbWVvbmUgaXMgdXNpbmcgYSB2ZXJzaW9uIHdoZXJlIG9wdGlvbnMgcGFyYW1ldGVyIGRpZCBub3QgZXhpc3QuXG4gICAgdmFyIGFjdHVhbENhbGxiYWNrO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYWN0dWFsQ2FsbGJhY2sgPSBvcHRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3R1YWxDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cblxuICAgIHZhciBhY3R1YWxPcHRpb25zID0ge307XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgYWN0dWFsT3B0aW9uc1trZXldID0gb3B0aW9uc1trZXldO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBXZWJBcGlSZXF1ZXN0LmJ1aWxkZXIoKVxuICAgICAgLndpdGhQYXRoKCcvdjEvdHJhY2tzLycgKyB0cmFja0lkKVxuICAgICAgLndpdGhRdWVyeVBhcmFtZXRlcnMoYWN0dWFsT3B0aW9ucylcbiAgICAgIC5idWlsZCgpO1xuXG4gICAgdGhpcy5fYWRkQWNjZXNzVG9rZW4ocmVxdWVzdCwgdGhpcy5nZXRBY2Nlc3NUb2tlbigpKTtcblxuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcGVyZm9ybVJlcXVlc3QoSHR0cE1hbmFnZXIuZ2V0LCByZXF1ZXN0KTtcblxuICAgIGlmIChhY3R1YWxDYWxsYmFjaykge1xuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgYWN0dWFsQ2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgYWN0dWFsQ2FsbGJhY2soZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIExvb2sgdXAgc2V2ZXJhbCB0cmFja3MuXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHRyYWNrSWRzIFRoZSBJRHMgb2YgdGhlIGFydGlzdHMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gVGhlIHBvc3NpYmxlIG9wdGlvbnMsIGN1cnJlbnRseSBvbmx5IG1hcmtldC5cbiAgICogQHBhcmFtIHtyZXF1ZXN0Q2FsbGJhY2t9IFtjYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbnN0ZWFkIG9mIHRoZSBwcm9taXNlLlxuICAgKiBAZXhhbXBsZSBnZXRBcnRpc3RzKFsnMG9TR3hmV1Nubk9YaEQyZkt1ejJHeScsICczZEJWeUo3SnVPTXQ0R0U5NjA3UWluJ10pLnRoZW4oLi4uKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IEEgcHJvbWlzZSB0aGF0IGlmIHN1Y2Nlc3NmdWwsIHJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb25cbiAgICogICAgICAgICAgYWJvdXQgdGhlIGFydGlzdHMuIE5vdCByZXR1cm5lZCBpZiBhIGNhbGxiYWNrIGlzIGdpdmVuLlxuICAgKi9cbiAgZ2V0VHJhY2tzOiBmdW5jdGlvbih0cmFja0lkcywgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAvLyBJbiBjYXNlIHNvbWVvbmUgaXMgdXNpbmcgYSB2ZXJzaW9uIHdoZXJlIG9wdGlvbnMgcGFyYW1ldGVyIGRpZCBub3QgZXhpc3QuXG4gICAgdmFyIGFjdHVhbENhbGxiYWNrO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYWN0dWFsQ2FsbGJhY2sgPSBvcHRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3R1YWxDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cblxuICAgIHZhciBhY3R1YWxPcHRpb25zID0ge307XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgYWN0dWFsT3B0aW9uc1trZXldID0gb3B0aW9uc1trZXldO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBXZWJBcGlSZXF1ZXN0LmJ1aWxkZXIoKVxuICAgICAgLndpdGhQYXRoKCcvdjEvdHJhY2tzJylcbiAgICAgIC53aXRoUXVlcnlQYXJhbWV0ZXJzKHtcbiAgICAgICAgJ2lkcycgOiB0cmFja0lkcy5qb2luKCcsJylcbiAgICAgIH0pXG4gICAgICAuYnVpbGQoKTtcblxuICAgIHRoaXMuX2FkZEFjY2Vzc1Rva2VuKHJlcXVlc3QsIHRoaXMuZ2V0QWNjZXNzVG9rZW4oKSk7XG4gICAgdGhpcy5fYWRkUXVlcnlQYXJhbWV0ZXJzKHJlcXVlc3QsIGFjdHVhbE9wdGlvbnMpO1xuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wZXJmb3JtUmVxdWVzdChIdHRwTWFuYWdlci5nZXQsIHJlcXVlc3QpO1xuXG4gICAgaWYgKGFjdHVhbENhbGxiYWNrKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBhY3R1YWxDYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBhY3R1YWxDYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogTG9vayB1cCBhbiBhbGJ1bS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGFsYnVtSWQgVGhlIGFsYnVtJ3MgSUQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gVGhlIHBvc3NpYmxlIG9wdGlvbnMsIGN1cnJlbnRseSBvbmx5IG1hcmtldC5cbiAgICogQHBhcmFtIHtyZXF1ZXN0Q2FsbGJhY2t9IFtjYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbnN0ZWFkIG9mIHRoZSBwcm9taXNlLlxuICAgKiBAZXhhbXBsZSBnZXRBbGJ1bSgnMHNOT0Y5V0R3aFd1bk5BSFBEM0JhaicpLnRoZW4oLi4uKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IEEgcHJvbWlzZSB0aGF0IGlmIHN1Y2Nlc3NmdWwsIHJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb25cbiAgICogICAgICAgICAgYWJvdXQgdGhlIGFsYnVtLiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIGdldEFsYnVtOiBmdW5jdGlvbihhbGJ1bUlkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIC8vIEluIGNhc2Ugc29tZW9uZSBpcyB1c2luZyBhIHZlcnNpb24gd2hlcmUgb3B0aW9ucyBwYXJhbWV0ZXIgZGlkIG5vdCBleGlzdC5cbiAgICB2YXIgYWN0dWFsQ2FsbGJhY2s7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhY3R1YWxDYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdHVhbENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuXG4gICAgdmFyIGFjdHVhbE9wdGlvbnMgPSB7fTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBhY3R1YWxPcHRpb25zW2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IFdlYkFwaVJlcXVlc3QuYnVpbGRlcigpXG4gICAgICAud2l0aFBhdGgoJy92MS9hbGJ1bXMvJyArIGFsYnVtSWQpXG4gICAgICAud2l0aFF1ZXJ5UGFyYW1ldGVycyhhY3R1YWxPcHRpb25zKVxuICAgICAgLmJ1aWxkKCk7XG5cbiAgICB0aGlzLl9hZGRBY2Nlc3NUb2tlbihyZXF1ZXN0LCB0aGlzLmdldEFjY2Vzc1Rva2VuKCkpO1xuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wZXJmb3JtUmVxdWVzdChIdHRwTWFuYWdlci5nZXQsIHJlcXVlc3QpO1xuXG4gICAgaWYgKGFjdHVhbENhbGxiYWNrKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBhY3R1YWxDYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBhY3R1YWxDYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogTG9vayB1cCBzZXZlcmFsIGFsYnVtcy5cbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gYWxidW1JZHMgVGhlIElEcyBvZiB0aGUgYWxidW1zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIFRoZSBwb3NzaWJsZSBvcHRpb25zLCBjdXJyZW50bHkgb25seSBtYXJrZXQuXG4gICAqIEBwYXJhbSB7cmVxdWVzdENhbGxiYWNrfSBbY2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrIG1ldGhvZCB0byBiZSBjYWxsZWQgaW5zdGVhZCBvZiB0aGUgcHJvbWlzZS5cbiAgICogQGV4YW1wbGUgZ2V0QWxidW1zKFsnMG9TR3hmV1Nubk9YaEQyZkt1ejJHeScsICczZEJWeUo3SnVPTXQ0R0U5NjA3UWluJ10pLnRoZW4oLi4uKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IEEgcHJvbWlzZSB0aGF0IGlmIHN1Y2Nlc3NmdWwsIHJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb25cbiAgICogICAgICAgICAgYWJvdXQgdGhlIGFsYnVtcy4gTm90IHJldHVybmVkIGlmIGEgY2FsbGJhY2sgaXMgZ2l2ZW4uXG4gICAqL1xuICBnZXRBbGJ1bXM6IGZ1bmN0aW9uKGFsYnVtSWRzLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIC8vIEluIGNhc2Ugc29tZW9uZSBpcyB1c2luZyBhIHZlcnNpb24gd2hlcmUgb3B0aW9ucyBwYXJhbWV0ZXIgZGlkIG5vdCBleGlzdC5cbiAgICB2YXIgYWN0dWFsQ2FsbGJhY2s7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhY3R1YWxDYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdHVhbENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuXG4gICAgdmFyIGFjdHVhbE9wdGlvbnMgPSB7fTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBhY3R1YWxPcHRpb25zW2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IFdlYkFwaVJlcXVlc3QuYnVpbGRlcigpXG4gICAgICAud2l0aFBhdGgoJy92MS9hbGJ1bXMnKVxuICAgICAgLndpdGhRdWVyeVBhcmFtZXRlcnMoe1xuICAgICAgICAnaWRzJyA6IGFsYnVtSWRzLmpvaW4oJywnKVxuICAgICAgfSlcbiAgICAgIC5idWlsZCgpO1xuXG4gICAgdGhpcy5fYWRkQWNjZXNzVG9rZW4ocmVxdWVzdCwgdGhpcy5nZXRBY2Nlc3NUb2tlbigpKTtcbiAgICB0aGlzLl9hZGRRdWVyeVBhcmFtZXRlcnMocmVxdWVzdCwgYWN0dWFsT3B0aW9ucyk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3BlcmZvcm1SZXF1ZXN0KEh0dHBNYW5hZ2VyLmdldCwgcmVxdWVzdCk7XG5cbiAgICBpZiAoYWN0dWFsQ2FsbGJhY2spIHtcbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGFjdHVhbENhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGFjdHVhbENhbGxiYWNrKGVycik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBMb29rIHVwIGFuIGFydGlzdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGFydGlzdElkIFRoZSBhcnRpc3QncyBJRC5cbiAgICogQHBhcmFtIHtyZXF1ZXN0Q2FsbGJhY2t9IFtjYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbnN0ZWFkIG9mIHRoZSBwcm9taXNlLlxuICAgKiBAZXhhbXBsZSBhcGkuZ2V0QXJ0aXN0KCcxdTdra1ZycjE0aUJ2cnBZblpJTEpSJykudGhlbiguLi4pXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfHVuZGVmaW5lZH0gQSBwcm9taXNlIHRoYXQgaWYgc3VjY2Vzc2Z1bCwgcmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvblxuICAgKiAgICAgICAgICBhYm91dCB0aGUgYXJ0aXN0LiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIGdldEFydGlzdDogZnVuY3Rpb24oYXJ0aXN0SWQsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3QgPSBXZWJBcGlSZXF1ZXN0LmJ1aWxkZXIoKVxuICAgICAgLndpdGhQYXRoKCcvdjEvYXJ0aXN0cy8nICsgYXJ0aXN0SWQpXG4gICAgICAuYnVpbGQoKTtcblxuICAgIHRoaXMuX2FkZEFjY2Vzc1Rva2VuKHJlcXVlc3QsIHRoaXMuZ2V0QWNjZXNzVG9rZW4oKSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3BlcmZvcm1SZXF1ZXN0KEh0dHBNYW5hZ2VyLmdldCwgcmVxdWVzdCk7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBMb29rIHVwIHNldmVyYWwgYXJ0aXN0cy5cbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gYXJ0aXN0SWRzIFRoZSBJRHMgb2YgdGhlIGFydGlzdHMuXG4gICAqIEBwYXJhbSB7cmVxdWVzdENhbGxiYWNrfSBbY2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrIG1ldGhvZCB0byBiZSBjYWxsZWQgaW5zdGVhZCBvZiB0aGUgcHJvbWlzZS5cbiAgICogQGV4YW1wbGUgZ2V0QXJ0aXN0cyhbJzBvU0d4ZldTbm5PWGhEMmZLdXoyR3knLCAnM2RCVnlKN0p1T010NEdFOTYwN1FpbiddKS50aGVuKC4uLilcbiAgICogQHJldHVybnMge1Byb21pc2V8dW5kZWZpbmVkfSBBIHByb21pc2UgdGhhdCBpZiBzdWNjZXNzZnVsLCByZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uXG4gICAqICAgICAgICAgIGFib3V0IHRoZSBhcnRpc3RzLiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIGdldEFydGlzdHM6IGZ1bmN0aW9uKGFydGlzdElkcywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdCA9IFdlYkFwaVJlcXVlc3QuYnVpbGRlcigpXG4gICAgICAud2l0aFBhdGgoJy92MS9hcnRpc3RzJylcbiAgICAgIC53aXRoUXVlcnlQYXJhbWV0ZXJzKHtcbiAgICAgICAgJ2lkcycgOiBhcnRpc3RJZHMuam9pbignLCcpXG4gICAgICB9KVxuICAgICAgLmJ1aWxkKCk7XG5cbiAgICB0aGlzLl9hZGRBY2Nlc3NUb2tlbihyZXF1ZXN0LCB0aGlzLmdldEFjY2Vzc1Rva2VuKCkpO1xuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wZXJmb3JtUmVxdWVzdChIdHRwTWFuYWdlci5nZXQsIHJlcXVlc3QpO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2VhcmNoIGZvciBtdXNpYyBlbnRpdGllcyBvZiBjZXJ0YWluIHR5cGVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgVGhlIHNlYXJjaCBxdWVyeS5cbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdHlwZXMgQW4gYXJyYXkgb2YgaXRlbSB0eXBlcyB0byBzZWFyY2ggYWNyb3NzLlxuICAgKiBWYWxpZCB0eXBlcyBhcmU6ICdhbGJ1bScsICdhcnRpc3QnLCAncGxheWxpc3QnLCBhbmQgJ3RyYWNrJy5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBUaGUgcG9zc2libGUgb3B0aW9ucywgZS5nLiBsaW1pdCwgb2Zmc2V0LlxuICAgKiBAcGFyYW0ge3JlcXVlc3RDYWxsYmFja30gW2NhbGxiYWNrXSBPcHRpb25hbCBjYWxsYmFjayBtZXRob2QgdG8gYmUgY2FsbGVkIGluc3RlYWQgb2YgdGhlIHByb21pc2UuXG4gICAqIEBleGFtcGxlIHNlYXJjaCgnQWJiYScsIFsndHJhY2snLCAncGxheWxpc3QnXSwgeyBsaW1pdCA6IDUsIG9mZnNldCA6IDEgfSkudGhlbiguLi4pXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfHVuZGVmaW5lZH0gQSBwcm9taXNlIHRoYXQgaWYgc3VjY2Vzc2Z1bCwgcmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyB0aGVcbiAgICogICAgICAgICAgc2VhcmNoIHJlc3VsdHMuIFRoZSByZXN1bHQgaXMgcGFnaW5hdGVkLiBJZiB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCxcbiAgICogICAgICAgICAgaXQgY29udGFpbnMgYW4gZXJyb3Igb2JqZWN0LiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIHNlYXJjaDogZnVuY3Rpb24ocXVlcnksIHR5cGVzLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0ID0gV2ViQXBpUmVxdWVzdC5idWlsZGVyKClcbiAgICAgIC53aXRoUGF0aCgnL3YxL3NlYXJjaC8nKVxuICAgICAgLndpdGhRdWVyeVBhcmFtZXRlcnMoe1xuICAgICAgICB0eXBlIDogdHlwZXMuam9pbignLCcpLFxuICAgICAgICBxIDogcXVlcnlcbiAgICAgIH0pXG4gICAgICAuYnVpbGQoKTtcblxuICAgIHRoaXMuX2FkZEFjY2Vzc1Rva2VuKHJlcXVlc3QsIHRoaXMuZ2V0QWNjZXNzVG9rZW4oKSk7XG4gICAgdGhpcy5fYWRkUXVlcnlQYXJhbWV0ZXJzKHJlcXVlc3QsIG9wdGlvbnMpO1xuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wZXJmb3JtUmVxdWVzdChIdHRwTWFuYWdlci5nZXQsIHJlcXVlc3QpO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2VhcmNoIGZvciBhbiBhbGJ1bS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IFRoZSBzZWFyY2ggcXVlcnkuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gVGhlIHBvc3NpYmxlIG9wdGlvbnMsIGUuZy4gbGltaXQsIG9mZnNldC5cbiAgICogQHBhcmFtIHtyZXF1ZXN0Q2FsbGJhY2t9IFtjYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbnN0ZWFkIG9mIHRoZSBwcm9taXNlLlxuICAgKiBAZXhhbXBsZSBzZWFyY2hBbGJ1bXMoJ1NwYWNlIE9kZGl0eScsIHsgbGltaXQgOiA1LCBvZmZzZXQgOiAxIH0pLnRoZW4oLi4uKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IEEgcHJvbWlzZSB0aGF0IGlmIHN1Y2Nlc3NmdWwsIHJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlXG4gICAqICAgICAgICAgIHNlYXJjaCByZXN1bHRzLiBUaGUgcmVzdWx0IGlzIHBhZ2luYXRlZC4gSWYgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQsXG4gICAqICAgICAgICAgIGl0IGNvbnRhaW5zIGFuIGVycm9yIG9iamVjdC4gTm90IHJldHVybmVkIGlmIGEgY2FsbGJhY2sgaXMgZ2l2ZW4uXG4gICAqL1xuICBzZWFyY2hBbGJ1bXM6IGZ1bmN0aW9uKHF1ZXJ5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLnNlYXJjaChxdWVyeSwgWydhbGJ1bSddLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlYXJjaCBmb3IgYW4gYXJ0aXN0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgVGhlIHNlYXJjaCBxdWVyeS5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBUaGUgcG9zc2libGUgb3B0aW9ucywgZS5nLiBsaW1pdCwgb2Zmc2V0LlxuICAgKiBAcGFyYW0ge3JlcXVlc3RDYWxsYmFja30gW2NhbGxiYWNrXSBPcHRpb25hbCBjYWxsYmFjayBtZXRob2QgdG8gYmUgY2FsbGVkIGluc3RlYWQgb2YgdGhlIHByb21pc2UuXG4gICAqIEBleGFtcGxlIHNlYXJjaEFydGlzdHMoJ0RhdmlkIEJvd2llJywgeyBsaW1pdCA6IDUsIG9mZnNldCA6IDEgfSkudGhlbiguLi4pXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfHVuZGVmaW5lZH0gQSBwcm9taXNlIHRoYXQgaWYgc3VjY2Vzc2Z1bCwgcmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyB0aGVcbiAgICogICAgICAgICAgc2VhcmNoIHJlc3VsdHMuIFRoZSByZXN1bHQgaXMgcGFnaW5hdGVkLiBJZiB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCxcbiAgICogICAgICAgICAgaXQgY29udGFpbnMgYW4gZXJyb3Igb2JqZWN0LiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIHNlYXJjaEFydGlzdHM6IGZ1bmN0aW9uKHF1ZXJ5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLnNlYXJjaChxdWVyeSwgWydhcnRpc3QnXSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWFyY2ggZm9yIGEgdHJhY2suXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSBUaGUgc2VhcmNoIHF1ZXJ5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIFRoZSBwb3NzaWJsZSBvcHRpb25zLCBlLmcuIGxpbWl0LCBvZmZzZXQuXG4gICAqIEBwYXJhbSB7cmVxdWVzdENhbGxiYWNrfSBbY2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrIG1ldGhvZCB0byBiZSBjYWxsZWQgaW5zdGVhZCBvZiB0aGUgcHJvbWlzZS5cbiAgICogQGV4YW1wbGUgc2VhcmNoVHJhY2tzKCdNci4gQnJpZ2h0c2lkZScsIHsgbGltaXQgOiAzLCBvZmZzZXQgOiAyIH0pLnRoZW4oLi4uKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IEEgcHJvbWlzZSB0aGF0IGlmIHN1Y2Nlc3NmdWwsIHJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlXG4gICAqICAgICAgICAgIHNlYXJjaCByZXN1bHRzLiBUaGUgcmVzdWx0IGlzIHBhZ2luYXRlZC4gSWYgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQsXG4gICAqICAgICAgICAgIGl0IGNvbnRhaW5zIGFuIGVycm9yIG9iamVjdC4gTm90IHJldHVybmVkIGlmIGEgY2FsbGJhY2sgaXMgZ2l2ZW4uXG4gICAqL1xuICBzZWFyY2hUcmFja3M6IGZ1bmN0aW9uKHF1ZXJ5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLnNlYXJjaChxdWVyeSwgWyd0cmFjayddLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlYXJjaCBmb3IgcGxheWxpc3RzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgVGhlIHNlYXJjaCBxdWVyeS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIHBvc3NpYmxlIG9wdGlvbnMuXG4gICAqIEBwYXJhbSB7cmVxdWVzdENhbGxiYWNrfSBbY2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrIG1ldGhvZCB0byBiZSBjYWxsZWQgaW5zdGVhZCBvZiB0aGUgcHJvbWlzZS5cbiAgICogQGV4YW1wbGUgc2VhcmNoUGxheWxpc3RzKCd3b3Jrb3V0JywgeyBsaW1pdCA6IDEsIG9mZnNldCA6IDAgfSkudGhlbiguLi4pXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfHVuZGVmaW5lZH0gQSBwcm9taXNlIHRoYXQgaWYgc3VjY2Vzc2Z1bCwgcmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyB0aGVcbiAgICogICAgICAgICAgc2VhcmNoIHJlc3VsdHMuIFRoZSByZXN1bHQgaXMgcGFnaW5hdGVkLiBJZiB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCxcbiAgICogICAgICAgICAgaXQgY29udGFpbnMgYW4gZXJyb3Igb2JqZWN0LiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIHNlYXJjaFBsYXlsaXN0czogZnVuY3Rpb24ocXVlcnksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoKHF1ZXJ5LCBbJ3BsYXlsaXN0J10sIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfSxcblxuICAvKipcbiAgICogR2V0IGFuIGFydGlzdCdzIGFsYnVtcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGFydGlzdElkIFRoZSBhcnRpc3QncyBJRC5cbiAgICogQG9wdGlvbnMge09iamVjdH0gW29wdGlvbnNdIFRoZSBwb3NzaWJsZSBvcHRpb25zLCBlLmcuIGxpbWl0LCBvZmZzZXQuXG4gICAqIEBwYXJhbSB7cmVxdWVzdENhbGxiYWNrfSBbY2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrIG1ldGhvZCB0byBiZSBjYWxsZWQgaW5zdGVhZCBvZiB0aGUgcHJvbWlzZS5cbiAgICogQGV4YW1wbGUgZ2V0QXJ0aXN0QWxidW1zKCcwb1NHeGZXU25uT1hoRDJmS3V6Mkd5JywgeyBhbGJ1bV90eXBlIDogJ2FsYnVtJywgY291bnRyeSA6ICdHQicsIGxpbWl0IDogMiwgb2Zmc2V0IDogNSB9KS50aGVuKC4uLilcbiAgICogQHJldHVybnMge1Byb21pc2V8dW5kZWZpbmVkfSBBIHByb21pc2UgdGhhdCBpZiBzdWNjZXNzZnVsLCByZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBhbGJ1bXNcbiAgICogICAgICAgICAgZm9yIHRoZSBnaXZlbiBhcnRpc3QuIFRoZSByZXN1bHQgaXMgcGFnaW5hdGVkLiBJZiB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCxcbiAgICogICAgICAgICAgaXQgY29udGFpbnMgYW4gZXJyb3Igb2JqZWN0LiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIGdldEFydGlzdEFsYnVtczogZnVuY3Rpb24oYXJ0aXN0SWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3QgPSBXZWJBcGlSZXF1ZXN0LmJ1aWxkZXIoKVxuICAgICAgLndpdGhQYXRoKCcvdjEvYXJ0aXN0cy8nICsgYXJ0aXN0SWQgKyAnL2FsYnVtcycpXG4gICAgICAuYnVpbGQoKTtcblxuICAgIHRoaXMuX2FkZEFjY2Vzc1Rva2VuKHJlcXVlc3QsIHRoaXMuZ2V0QWNjZXNzVG9rZW4oKSk7XG4gICAgdGhpcy5fYWRkUXVlcnlQYXJhbWV0ZXJzKHJlcXVlc3QsIG9wdGlvbnMpO1xuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wZXJmb3JtUmVxdWVzdChIdHRwTWFuYWdlci5nZXQsIHJlcXVlc3QpO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogR2V0IHRoZSB0cmFja3Mgb2YgYW4gYWxidW0uXG4gICAqIEBwYXJhbSBhbGJ1bUlkIHRoZSBhbGJ1bSdzIElELlxuICAgKiBAb3B0aW9ucyB7T2JqZWN0fSBbb3B0aW9uc10gVGhlIHBvc3NpYmxlIG9wdGlvbnMsIGUuZy4gbGltaXQuXG4gICAqIEBwYXJhbSB7cmVxdWVzdENhbGxiYWNrfSBbY2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrIG1ldGhvZCB0byBiZSBjYWxsZWQgaW5zdGVhZCBvZiB0aGUgcHJvbWlzZS5cbiAgICogQGV4YW1wbGUgZ2V0QWxidW1UcmFja3MoJzQxTW5UaXZrd1RPM1VVSjhEcnFFSkonLCB7IGxpbWl0IDogNSwgb2Zmc2V0IDogMSB9KS50aGVuKC4uLilcbiAgICogQHJldHVybnMge1Byb21pc2V8dW5kZWZpbmVkfSBBIHByb21pc2UgdGhhdCBpZiBzdWNjZXNzZnVsLCByZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIHRoZVxuICAgKiAgICAgICAgICAgICAgICAgICAgdHJhY2tzIGluIHRoZSBhbGJ1bS4gVGhlIHJlc3VsdCBpcyBwYWdpbmF0ZWQuIElmIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkLlxuICAgKiAgICAgICAgICAgICAgICAgICAgaXQgY29udGFpbnMgYW4gZXJyb3Igb2JqZWN0LiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIGdldEFsYnVtVHJhY2tzOiBmdW5jdGlvbihhbGJ1bUlkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0ID0gV2ViQXBpUmVxdWVzdC5idWlsZGVyKClcbiAgICAgIC53aXRoUGF0aCgnL3YxL2FsYnVtcy8nICsgYWxidW1JZCArICcvdHJhY2tzJylcbiAgICAgIC5idWlsZCgpO1xuXG4gICAgdGhpcy5fYWRkQWNjZXNzVG9rZW4ocmVxdWVzdCwgdGhpcy5nZXRBY2Nlc3NUb2tlbigpKTtcbiAgICB0aGlzLl9hZGRRdWVyeVBhcmFtZXRlcnMocmVxdWVzdCwgb3B0aW9ucyk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3BlcmZvcm1SZXF1ZXN0KEh0dHBNYW5hZ2VyLmdldCwgcmVxdWVzdCk7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBHZXQgYW4gYXJ0aXN0J3MgdG9wIHRyYWNrcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGFydGlzdElkIFRoZSBhcnRpc3QncyBJRC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvdW50cnkgVGhlIGNvdW50cnkvdGVycml0b3J5IHdoZXJlIHRoZSB0cmFja3MgYXJlIG1vc3QgcG9wdWxhci4gKGZvcm1hdDogSVNPIDMxNjYtMSBhbHBoYS0yKVxuICAgKiBAcGFyYW0ge3JlcXVlc3RDYWxsYmFja30gW2NhbGxiYWNrXSBPcHRpb25hbCBjYWxsYmFjayBtZXRob2QgdG8gYmUgY2FsbGVkIGluc3RlYWQgb2YgdGhlIHByb21pc2UuXG4gICAqIEBleGFtcGxlIGdldEFydGlzdFRvcFRyYWNrcygnMG9TR3hmV1Nubk9YaEQyZkt1ejJHeScsICdHQicpLnRoZW4oLi4uKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IEEgcHJvbWlzZSB0aGF0IGlmIHN1Y2Nlc3NmdWwsIHJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlXG4gICAqICAgICAgICAgIGFydGlzdCdzIHRvcCB0cmFja3MgaW4gdGhlIGdpdmVuIGNvdW50cnkuIElmIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkLFxuICAgKiAgICAgICAgICBpdCBjb250YWlucyBhbiBlcnJvciBvYmplY3QuIE5vdCByZXR1cm5lZCBpZiBhIGNhbGxiYWNrIGlzIGdpdmVuLlxuICAgKi9cbiAgZ2V0QXJ0aXN0VG9wVHJhY2tzOiBmdW5jdGlvbihhcnRpc3RJZCwgY291bnRyeSwgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdCA9IFdlYkFwaVJlcXVlc3QuYnVpbGRlcigpXG4gICAgICAud2l0aFBhdGgoJy92MS9hcnRpc3RzLycgKyBhcnRpc3RJZCArICcvdG9wLXRyYWNrcycpXG4gICAgICAud2l0aFF1ZXJ5UGFyYW1ldGVycyh7XG4gICAgICAgICdjb3VudHJ5JyA6IGNvdW50cnlcbiAgICAgIH0pXG4gICAgICAuYnVpbGQoKTtcblxuICAgIHRoaXMuX2FkZEFjY2Vzc1Rva2VuKHJlcXVlc3QsIHRoaXMuZ2V0QWNjZXNzVG9rZW4oKSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3BlcmZvcm1SZXF1ZXN0KEh0dHBNYW5hZ2VyLmdldCwgcmVxdWVzdCk7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBHZXQgcmVsYXRlZCBhcnRpc3RzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXJ0aXN0SWQgVGhlIGFydGlzdCdzIElELlxuICAgKiBAcGFyYW0ge3JlcXVlc3RDYWxsYmFja30gW2NhbGxiYWNrXSBPcHRpb25hbCBjYWxsYmFjayBtZXRob2QgdG8gYmUgY2FsbGVkIGluc3RlYWQgb2YgdGhlIHByb21pc2UuXG4gICAqIEBleGFtcGxlIGdldEFydGlzdFJlbGF0ZWRBcnRpc3RzKCcwb1NHeGZXU25uT1hoRDJmS3V6Mkd5JykudGhlbiguLi4pXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfHVuZGVmaW5lZH0gQSBwcm9taXNlIHRoYXQgaWYgc3VjY2Vzc2Z1bCwgcmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyB0aGVcbiAgICogICAgICAgICAgcmVsYXRlZCBhcnRpc3RzLiBJZiB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCwgaXQgY29udGFpbnMgYW4gZXJyb3Igb2JqZWN0LiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIGdldEFydGlzdFJlbGF0ZWRBcnRpc3RzOiBmdW5jdGlvbihhcnRpc3RJZCwgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdCA9IFdlYkFwaVJlcXVlc3QuYnVpbGRlcigpXG4gICAgICAud2l0aFBhdGgoJy92MS9hcnRpc3RzLycgKyBhcnRpc3RJZCArICcvcmVsYXRlZC1hcnRpc3RzJylcbiAgICAgIC5idWlsZCgpO1xuXG4gICAgdGhpcy5fYWRkQWNjZXNzVG9rZW4ocmVxdWVzdCwgdGhpcy5nZXRBY2Nlc3NUb2tlbigpKTtcblxuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcGVyZm9ybVJlcXVlc3QoSHR0cE1hbmFnZXIuZ2V0LCByZXF1ZXN0KTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldCBpbmZvcm1hdGlvbiBhYm91dCBhIHVzZXIuXG4gICAqIEBwYXJhbSB1c2VySWQgVGhlIHVzZXIgSUQuXG4gICAqIEBwYXJhbSB7cmVxdWVzdENhbGxiYWNrfSBbY2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrIG1ldGhvZCB0byBiZSBjYWxsZWQgaW5zdGVhZCBvZiB0aGUgcHJvbWlzZS5cbiAgICogQGV4YW1wbGUgZ2V0VXNlcigndGhlbGlubWljaGFlbCcpLnRoZW4oLi4uKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IEEgcHJvbWlzZSB0aGF0IGlmIHN1Y2Nlc3NmdWwsIHJlc29sdmVzIHRvIGFuIG9iamVjdFxuICAgKiAgICAgICAgICBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSB1c2VyLiBJZiB0aGUgcHJvbWlzZSBpc1xuICAgKiAgICAgICAgICByZWplY3RlZCwgaXQgY29udGFpbnMgYW4gZXJyb3Igb2JqZWN0LiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIGdldFVzZXI6IGZ1bmN0aW9uKHVzZXJJZCwgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdCA9IFdlYkFwaVJlcXVlc3QuYnVpbGRlcigpXG4gICAgICAud2l0aFBhdGgoJy92MS91c2Vycy8nICsgZW5jb2RlVVJJQ29tcG9uZW50KHVzZXJJZCkpXG4gICAgICAuYnVpbGQoKTtcblxuICAgIHRoaXMuX2FkZEFjY2Vzc1Rva2VuKHJlcXVlc3QsIHRoaXMuZ2V0QWNjZXNzVG9rZW4oKSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3BlcmZvcm1SZXF1ZXN0KEh0dHBNYW5hZ2VyLmdldCwgcmVxdWVzdCk7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHVzZXIgdGhhdCBoYXMgc2lnbmVkIGluICh0aGUgY3VycmVudCB1c2VyKS5cbiAgICogQHBhcmFtIHtyZXF1ZXN0Q2FsbGJhY2t9IFtjYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbnN0ZWFkIG9mIHRoZSBwcm9taXNlLlxuICAgKiBAZXhhbXBsZSBnZXRNZSgpLnRoZW4oLi4uKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IEEgcHJvbWlzZSB0aGF0IGlmIHN1Y2Nlc3NmdWwsIHJlc29sdmVzIHRvIGFuIG9iamVjdFxuICAgKiAgICAgICAgICBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSB1c2VyLiBUaGUgYW1vdW50IG9mIGluZm9ybWF0aW9uXG4gICAqICAgICAgICAgIGRlcGVuZHMgb24gdGhlIHBlcm1pc3Npb25zIGdpdmVuIGJ5IHRoZSB1c2VyLiBJZiB0aGUgcHJvbWlzZSBpc1xuICAgKiAgICAgICAgICByZWplY3RlZCwgaXQgY29udGFpbnMgYW4gZXJyb3Igb2JqZWN0LiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIGdldE1lOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0ID0gV2ViQXBpUmVxdWVzdC5idWlsZGVyKClcbiAgICAgIC53aXRoUGF0aCgnL3YxL21lJylcbiAgICAgIC5idWlsZCgpO1xuXG4gICAgdGhpcy5fYWRkQWNjZXNzVG9rZW4ocmVxdWVzdCwgdGhpcy5nZXRBY2Nlc3NUb2tlbigpKTtcblxuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcGVyZm9ybVJlcXVlc3QoSHR0cE1hbmFnZXIuZ2V0LCByZXF1ZXN0KTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldCBhIHVzZXIncyBwbGF5bGlzdHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgQW4gb3B0aW9uYWwgaWQgb2YgdGhlIHVzZXIuIElmIHlvdSBrbm93IHRoZSBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlIGlkIChlLmcuIHNwb3RpZnk6dXNlcjo8aGVyZV9pc190aGVfaWQ+KS4gSWYgbm90IHByb3ZpZGVkLCB0aGUgaWQgb2YgdGhlIHVzZXIgdGhhdCBncmFudGVkXG4gICAqIHRoZSBwZXJtaXNzaW9ucyB3aWxsIGJlIHVzZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gVGhlIG9wdGlvbnMgc3VwcGxpZWQgdG8gdGhpcyByZXF1ZXN0LlxuICAgKiBAcGFyYW0ge3JlcXVlc3RDYWxsYmFja30gW2NhbGxiYWNrXSBPcHRpb25hbCBjYWxsYmFjayBtZXRob2QgdG8gYmUgY2FsbGVkIGluc3RlYWQgb2YgdGhlIHByb21pc2UuXG4gICAqIEBleGFtcGxlIGdldFVzZXJQbGF5bGlzdHMoJ3RoZWxpbm1pY2hhZWwnKS50aGVuKC4uLilcbiAgICogQHJldHVybnMge1Byb21pc2V8dW5kZWZpbmVkfSBBIHByb21pc2UgdGhhdCBpZiBzdWNjZXNzZnVsLCByZXNvbHZlcyB0byBhbiBvYmplY3QgY29udGFpbmluZ1xuICAgKiAgICAgICAgICBhIGxpc3Qgb2YgcGxheWxpc3RzLiBJZiByZWplY3RlZCwgaXQgY29udGFpbnMgYW4gZXJyb3Igb2JqZWN0LiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIGdldFVzZXJQbGF5bGlzdHM6IGZ1bmN0aW9uKHVzZXJJZCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcGF0aDtcbiAgICBpZiAodHlwZW9mIHVzZXJJZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhdGggPSAnL3YxL3VzZXJzLycgKyBlbmNvZGVVUklDb21wb25lbnQodXNlcklkKSArICcvcGxheWxpc3RzJztcbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aCA9ICcvdjEvbWUvcGxheWxpc3RzJztcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IFdlYkFwaVJlcXVlc3QuYnVpbGRlcigpXG4gICAgICAud2l0aFBhdGgocGF0aClcbiAgICAgIC5idWlsZCgpO1xuXG4gICAgdGhpcy5fYWRkQWNjZXNzVG9rZW4ocmVxdWVzdCwgdGhpcy5nZXRBY2Nlc3NUb2tlbigpKTtcbiAgICB0aGlzLl9hZGRRdWVyeVBhcmFtZXRlcnMocmVxdWVzdCwgb3B0aW9ucyk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3BlcmZvcm1SZXF1ZXN0KEh0dHBNYW5hZ2VyLmdldCwgcmVxdWVzdCk7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBHZXQgYSBwbGF5bGlzdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCBUaGUgcGxheWxpc3QncyBvd25lcidzIHVzZXIgSUQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwbGF5bGlzdElkIFRoZSBwbGF5bGlzdCdzIElELlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIFRoZSBvcHRpb25zIHN1cHBsaWVkIHRvIHRoaXMgcmVxdWVzdC5cbiAgICogQHBhcmFtIHtyZXF1ZXN0Q2FsbGJhY2t9IFtjYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbnN0ZWFkIG9mIHRoZSBwcm9taXNlLlxuICAgKiBAZXhhbXBsZSBnZXRQbGF5bGlzdCgndGhlbGlubWljaGFlbCcsICczRXNmVjZYekNIVThTUE5kYm5Gb2dLJykudGhlbiguLi4pXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfHVuZGVmaW5lZH0gQSBwcm9taXNlIHRoYXQgaWYgc3VjY2Vzc2Z1bCwgcmVzb2x2ZXMgdG8gYW4gb2JqZWN0IGNvbnRhaW5pbmdcbiAgICogICAgICAgICAgdGhlIHBsYXlsaXN0LiBJZiByZWplY3RlZCwgaXQgY29udGFpbnMgYW4gZXJyb3Igb2JqZWN0LiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIGdldFBsYXlsaXN0OiBmdW5jdGlvbih1c2VySWQsIHBsYXlsaXN0SWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3QgPSBXZWJBcGlSZXF1ZXN0LmJ1aWxkZXIoKVxuICAgICAgLndpdGhQYXRoKCcvdjEvdXNlcnMvJyArIGVuY29kZVVSSUNvbXBvbmVudCh1c2VySWQpICsgJy9wbGF5bGlzdHMvJyArIHBsYXlsaXN0SWQpXG4gICAgICAuYnVpbGQoKTtcblxuICAgIHRoaXMuX2FkZEFjY2Vzc1Rva2VuKHJlcXVlc3QsIHRoaXMuZ2V0QWNjZXNzVG9rZW4oKSk7XG4gICAgdGhpcy5fYWRkUXVlcnlQYXJhbWV0ZXJzKHJlcXVlc3QsIG9wdGlvbnMpO1xuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wZXJmb3JtUmVxdWVzdChIdHRwTWFuYWdlci5nZXQsIHJlcXVlc3QpO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogR2V0IHRyYWNrcyBpbiBhIHBsYXlsaXN0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIFRIZSBwbGF5bGlzdCdzIG93bmVyJ3MgdXNlciBJRC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYXlsaXN0SWQgVGhlIHBsYXlsaXN0J3MgSUQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gT3B0aW9uYWwgb3B0aW9ucywgc3VjaCBhcyBmaWVsZHMuXG4gICAqIEBwYXJhbSB7cmVxdWVzdENhbGxiYWNrfSBbY2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrIG1ldGhvZCB0byBiZSBjYWxsZWQgaW5zdGVhZCBvZiB0aGUgcHJvbWlzZS5cbiAgICogQGV4YW1wbGUgZ2V0UGxheWxpc3RUcmFja3MoJ3RoZWxpbm1pY2hhZWwnLCAnM2t0QVlOY1JIcGF6SjlxZWNtM3B0bicpLnRoZW4oLi4uKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IEEgcHJvbWlzZSB0aGF0IGlmIHN1Y2Nlc3NmdWwsIHJlc29sdmVzIHRvIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5pbmdcbiAgICogdGhlIHRyYWNrcyBpbiB0aGUgcGxheWxpc3QuIElmIHJlamVjdGVkLCBpdCBjb250YWlucyBhbiBlcnJvciBvYmplY3QuIE5vdCByZXR1cm5lZCBpZiBhIGNhbGxiYWNrIGlzIGdpdmVuLlxuICAgKi9cbiAgZ2V0UGxheWxpc3RUcmFja3M6IGZ1bmN0aW9uKHVzZXJJZCwgcGxheWxpc3RJZCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdCA9IFdlYkFwaVJlcXVlc3QuYnVpbGRlcigpLlxuICAgICAgd2l0aFBhdGgoJy92MS91c2Vycy8nICsgZW5jb2RlVVJJQ29tcG9uZW50KHVzZXJJZCkgKyAnL3BsYXlsaXN0cy8nICsgcGxheWxpc3RJZCArICcvdHJhY2tzJykuXG4gICAgICB3aXRoUXVlcnlQYXJhbWV0ZXJzKG9wdGlvbnMpLlxuICAgICAgYnVpbGQoKTtcblxuICAgIHRoaXMuX2FkZEFjY2Vzc1Rva2VuKHJlcXVlc3QsIHRoaXMuZ2V0QWNjZXNzVG9rZW4oKSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3BlcmZvcm1SZXF1ZXN0KEh0dHBNYW5hZ2VyLmdldCwgcmVxdWVzdCk7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBwbGF5bGlzdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCBUaGUgcGxheWxpc3QncyBvd25lcidzIHVzZXIgSUQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwbGF5bGlzdE5hbWUgVGhlIG5hbWUgb2YgdGhlIHBsYXlsaXN0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIFRoZSBwb3NzaWJsZSBvcHRpb25zLCBjdXJyZW50bHkgb25seSBwdWJsaWMuXG4gICAqIEBwYXJhbSB7cmVxdWVzdENhbGxiYWNrfSBbY2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrIG1ldGhvZCB0byBiZSBjYWxsZWQgaW5zdGVhZCBvZiB0aGUgcHJvbWlzZS5cbiAgICogQGV4YW1wbGUgY3JlYXRlUGxheWxpc3QoJ3RoZWxpbm1pY2hhZWwnLCAnTXkgY29vbCBwbGF5bGlzdCEnLCB7IHB1YmxpYyA6IGZhbHNlIH0pLnRoZW4oLi4uKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IEEgcHJvbWlzZSB0aGF0IGlmIHN1Y2Nlc3NmdWwsIHJlc29sdmVzIHRvIGFuIG9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZVxuICAgKiAgICAgICAgICBjcmVhdGVkIHBsYXlsaXN0LiBJZiByZWplY3RlZCwgaXQgY29udGFpbnMgYW4gZXJyb3Igb2JqZWN0LiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIGNyZWF0ZVBsYXlsaXN0OiBmdW5jdGlvbih1c2VySWQsIHBsYXlsaXN0TmFtZSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAvLyBJbiBjYXNlIHNvbWVvbmUgaXMgdXNpbmcgYSB2ZXJzaW9uIHdoZXJlIG9wdGlvbnMgcGFyYW1ldGVyIGRpZCBub3QgZXhpc3QuXG4gICAgdmFyIGFjdHVhbENhbGxiYWNrO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYWN0dWFsQ2FsbGJhY2sgPSBvcHRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3R1YWxDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cblxuICAgIHZhciBhY3R1YWxPcHRpb25zID0geyAnbmFtZScgOiBwbGF5bGlzdE5hbWUgfTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBhY3R1YWxPcHRpb25zW2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IFdlYkFwaVJlcXVlc3QuYnVpbGRlcigpXG4gICAgICAud2l0aFBhdGgoJy92MS91c2Vycy8nICsgZW5jb2RlVVJJQ29tcG9uZW50KHVzZXJJZCkgKyAnL3BsYXlsaXN0cycpXG4gICAgICAud2l0aEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJyA6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxuICAgICAgLndpdGhCb2R5UGFyYW1ldGVycyhhY3R1YWxPcHRpb25zKVxuICAgICAgLmJ1aWxkKCk7XG5cbiAgICB0aGlzLl9hZGRBY2Nlc3NUb2tlbihyZXF1ZXN0LCB0aGlzLmdldEFjY2Vzc1Rva2VuKCkpO1xuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wZXJmb3JtUmVxdWVzdChIdHRwTWFuYWdlci5wb3N0LCByZXF1ZXN0KTtcblxuICAgIGlmIChhY3R1YWxDYWxsYmFjaykge1xuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgYWN0dWFsQ2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgYWN0dWFsQ2FsbGJhY2soZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvbGxvdyBhIHBsYXlsaXN0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIFRoZSBwbGF5bGlzdCdzIG93bmVyJ3MgdXNlciBJRFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGxheWxpc3RJZCBUaGUgcGxheWxpc3QncyBJRFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIFRoZSBwb3NzaWJsZSBvcHRpb25zLCBjdXJyZW50bHkgb25seSBwdWJsaWMuXG4gICAqIEBwYXJhbSB7cmVxdWVzdENhbGxiYWNrfSBbY2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrIG1ldGhvZCB0byBiZSBjYWxsZWQgaW5zdGVhZCBvZiB0aGUgcHJvbWlzZS5cbiAgICogQHJldHVybnMge1Byb21pc2V8dW5kZWZpbmVkfSBBIHByb21pc2UgdGhhdCBpZiBzdWNjZXNzZnVsLCBzaW1wbHkgcmVzb2x2ZXMgdG8gYW4gZW1wdHkgb2JqZWN0LiBJZiByZWplY3RlZCxcbiAgICogaXQgY29udGFpbnMgYW4gZXJyb3Igb2JqZWN0LiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIGZvbGxvd1BsYXlsaXN0OiBmdW5jdGlvbih1c2VySWQsIHBsYXlsaXN0SWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3QgPSBXZWJBcGlSZXF1ZXN0LmJ1aWxkZXIoKVxuICAgICAgLndpdGhQYXRoKCcvdjEvdXNlcnMvJyArIGVuY29kZVVSSUNvbXBvbmVudCh1c2VySWQpICsgJy9wbGF5bGlzdHMvJyArIHBsYXlsaXN0SWQgKyAnL2ZvbGxvd2VycycpXG4gICAgICAud2l0aEJvZHlQYXJhbWV0ZXJzKG9wdGlvbnMpXG4gICAgICAud2l0aEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJyA6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxuICAgICAgLmJ1aWxkKCk7XG5cbiAgICB0aGlzLl9hZGRBY2Nlc3NUb2tlbihyZXF1ZXN0LCB0aGlzLmdldEFjY2Vzc1Rva2VuKCkpO1xuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wZXJmb3JtUmVxdWVzdChIdHRwTWFuYWdlci5wdXQsIHJlcXVlc3QpO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogVW5mb2xsb3cgYSBwbGF5bGlzdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCBUaGUgcGxheWxpc3QncyBvd25lcidzIHVzZXIgSURcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYXlsaXN0SWQgVGhlIHBsYXlsaXN0J3MgSURcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBUaGUgcG9zc2libGUgb3B0aW9ucywgY3VycmVudGx5IG9ubHkgcHVibGljLlxuICAgKiBAcGFyYW0ge3JlcXVlc3RDYWxsYmFja30gW2NhbGxiYWNrXSBPcHRpb25hbCBjYWxsYmFjayBtZXRob2QgdG8gYmUgY2FsbGVkIGluc3RlYWQgb2YgdGhlIHByb21pc2UuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfHVuZGVmaW5lZH0gQSBwcm9taXNlIHRoYXQgaWYgc3VjY2Vzc2Z1bCwgc2ltcGx5IHJlc29sdmVzIHRvIGFuIGVtcHR5IG9iamVjdC4gSWYgcmVqZWN0ZWQsXG4gICAqIGl0IGNvbnRhaW5zIGFuIGVycm9yIG9iamVjdC4gTm90IHJldHVybmVkIGlmIGEgY2FsbGJhY2sgaXMgZ2l2ZW4uXG4gICAqL1xuICB1bmZvbGxvd1BsYXlsaXN0OiBmdW5jdGlvbih1c2VySWQsIHBsYXlsaXN0SWQsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3QgPSBXZWJBcGlSZXF1ZXN0LmJ1aWxkZXIoKVxuICAgICAgLndpdGhQYXRoKCcvdjEvdXNlcnMvJyArIGVuY29kZVVSSUNvbXBvbmVudCh1c2VySWQpICsgJy9wbGF5bGlzdHMvJyArIHBsYXlsaXN0SWQgKyAnL2ZvbGxvd2VycycpXG4gICAgICAud2l0aEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJyA6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxuICAgICAgLmJ1aWxkKCk7XG5cbiAgICB0aGlzLl9hZGRBY2Nlc3NUb2tlbihyZXF1ZXN0LCB0aGlzLmdldEFjY2Vzc1Rva2VuKCkpO1xuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wZXJmb3JtUmVxdWVzdChIdHRwTWFuYWdlci5kZWwsIHJlcXVlc3QpO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQ2hhbmdlIHBsYXlsaXN0IGRldGFpbHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgVGhlIHBsYXlsaXN0J3Mgb3duZXIncyB1c2VyIElEXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwbGF5bGlzdElkIFRoZSBwbGF5bGlzdCdzIElEXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gVGhlIHBvc3NpYmxlIG9wdGlvbnMsIGUuZy4gbmFtZSwgcHVibGljLlxuICAgKiBAcGFyYW0ge3JlcXVlc3RDYWxsYmFja30gW2NhbGxiYWNrXSBPcHRpb25hbCBjYWxsYmFjayBtZXRob2QgdG8gYmUgY2FsbGVkIGluc3RlYWQgb2YgdGhlIHByb21pc2UuXG4gICAqIEBleGFtcGxlIGNoYW5nZVBsYXlsaXN0RGV0YWlscygndGhlbGlubWljaGFlbCcsICczRXNmVjZYekNIVThTUE5kYm5Gb2dLJywge25hbWU6ICdOZXcgbmFtZScsIHB1YmxpYzogdHJ1ZX0pLnRoZW4oLi4uKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IEEgcHJvbWlzZSB0aGF0IGlmIHN1Y2Nlc3NmdWwsIHNpbXBseSByZXNvbHZlcyB0byBhbiBlbXB0eSBvYmplY3QuIElmIHJlamVjdGVkLFxuICAgKiBpdCBjb250YWlucyBhbiBlcnJvciBvYmplY3QuIE5vdCByZXR1cm5lZCBpZiBhIGNhbGxiYWNrIGlzIGdpdmVuLlxuICAgKi9cbiAgY2hhbmdlUGxheWxpc3REZXRhaWxzOiBmdW5jdGlvbih1c2VySWQsIHBsYXlsaXN0SWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3QgPSBXZWJBcGlSZXF1ZXN0LmJ1aWxkZXIoKVxuICAgICAgLndpdGhQYXRoKCcvdjEvdXNlcnMvJyArIGVuY29kZVVSSUNvbXBvbmVudCh1c2VySWQpICsgJy9wbGF5bGlzdHMvJyArIHBsYXlsaXN0SWQpXG4gICAgICAud2l0aEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJyA6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxuICAgICAgLndpdGhCb2R5UGFyYW1ldGVycyhvcHRpb25zKVxuICAgICAgLmJ1aWxkKCk7XG5cbiAgICB0aGlzLl9hZGRBY2Nlc3NUb2tlbihyZXF1ZXN0LCB0aGlzLmdldEFjY2Vzc1Rva2VuKCkpO1xuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wZXJmb3JtUmVxdWVzdChIdHRwTWFuYWdlci5wdXQsIHJlcXVlc3QpO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQWRkIHRyYWNrcyB0byBhIHBsYXlsaXN0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIFRoZSBwbGF5bGlzdCdzIG93bmVyJ3MgdXNlciBJRFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGxheWxpc3RJZCBUaGUgcGxheWxpc3QncyBJRFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB0cmFja3MgVVJJcyBvZiB0aGUgdHJhY2tzIHRvIGFkZCB0byB0aGUgcGxheWxpc3QuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gT3B0aW9ucywgcG9zaXRpb24gYmVpbmcgdGhlIG9ubHkgb25lLlxuICAgKiBAcGFyYW0ge3JlcXVlc3RDYWxsYmFja30gW2NhbGxiYWNrXSBPcHRpb25hbCBjYWxsYmFjayBtZXRob2QgdG8gYmUgY2FsbGVkIGluc3RlYWQgb2YgdGhlIHByb21pc2UuXG4gICAqIEBleGFtcGxlIGFkZFRyYWNrc1RvUGxheWxpc3QoJ3RoZWxpbm1pY2hhZWwnLCAnM0VzZlY2WHpDSFU4U1BOZGJuRm9nSycsXG4gICAgICAgICAgICAgICdbXCJzcG90aWZ5OnRyYWNrOjRpVjVXOXVZRWRZVVZhNzlBeGI3UmhcIiwgXCJzcG90aWZ5OnRyYWNrOjEzMDFXbGV5VDk4TVN4VkhQWkNBNk1cIl0nKS50aGVuKC4uLilcbiAgICogQHJldHVybnMge1Byb21pc2V8dW5kZWZpbmVkfSBBIHByb21pc2UgdGhhdCBpZiBzdWNjZXNzZnVsIHJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYSBzbmFwc2hvdF9pZC4gSWYgcmVqZWN0ZWQsXG4gICAqIGl0IGNvbnRhaW5zIGFuIGVycm9yIG9iamVjdC4gTm90IHJldHVybmVkIGlmIGEgY2FsbGJhY2sgaXMgZ2l2ZW4uXG4gICAqL1xuICBhZGRUcmFja3NUb1BsYXlsaXN0OiBmdW5jdGlvbih1c2VySWQsIHBsYXlsaXN0SWQsIHRyYWNrcywgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdCA9IFdlYkFwaVJlcXVlc3QuYnVpbGRlcigpXG4gICAgICAud2l0aFBhdGgoJy92MS91c2Vycy8nICsgZW5jb2RlVVJJQ29tcG9uZW50KHVzZXJJZCkgKyAnL3BsYXlsaXN0cy8nICsgcGxheWxpc3RJZCArICcvdHJhY2tzJylcbiAgICAgIC53aXRoSGVhZGVycyh7ICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXG4gICAgICAud2l0aEJvZHlQYXJhbWV0ZXJzKHtcbiAgICAgICAgdXJpczogdHJhY2tzXG4gICAgICB9KVxuICAgICAgLmJ1aWxkKCk7XG5cbiAgICB0aGlzLl9hZGRRdWVyeVBhcmFtZXRlcnMocmVxdWVzdCwgb3B0aW9ucyk7XG4gICAgdGhpcy5fYWRkQWNjZXNzVG9rZW4ocmVxdWVzdCwgdGhpcy5nZXRBY2Nlc3NUb2tlbigpKTtcblxuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcGVyZm9ybVJlcXVlc3QoSHR0cE1hbmFnZXIucG9zdCwgcmVxdWVzdCk7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdHJhY2tzIGZyb20gYSBwbGF5bGlzdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCBUaGUgcGxheWxpc3QncyBvd25lcidzIHVzZXIgSURcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYXlsaXN0SWQgVGhlIHBsYXlsaXN0J3MgSURcbiAgICogQHBhcmFtIHtPYmplY3RbXX0gdHJhY2tzIEFuIGFycmF5IG9mIG9iamVjdHMgY29udGFpbmluZyBhIHByb3BlcnR5IGNhbGxlZCB1cmkgd2l0aCB0aGUgdHJhY2sgVVJJIChTdHJpbmcpLCBhbmRcbiAgICogYSBhbiBvcHRpb25hbCBwcm9wZXJ0eSBjYWxsZWQgcG9zaXRpb25zIChpbnRbXSksIGUuZy4geyB1cmkgOiBcInNwb3RpZnk6dHJhY2s6NDkxck0ySk44S3ZtVjZwMG9ERHVKVFwiLCBwb3NpdGlvbnMgOiBbMCwgMTVdIH1cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucywgc25hcHNob3RfaWQgYmVpbmcgdGhlIG9ubHkgb25lLlxuICAgKiBAcGFyYW0ge3JlcXVlc3RDYWxsYmFja30gW2NhbGxiYWNrXSBPcHRpb25hbCBjYWxsYmFjayBtZXRob2QgdG8gYmUgY2FsbGVkIGluc3RlYWQgb2YgdGhlIHByb21pc2UuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfHVuZGVmaW5lZH0gQSBwcm9taXNlIHRoYXQgaWYgc3VjY2Vzc2Z1bCByZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIGEgc25hcHNob3RfaWQuIElmIHJlamVjdGVkLFxuICAgKiBpdCBjb250YWlucyBhbiBlcnJvciBvYmplY3QuIE5vdCByZXR1cm5lZCBpZiBhIGNhbGxiYWNrIGlzIGdpdmVuLlxuICAgKi9cbiAgcmVtb3ZlVHJhY2tzRnJvbVBsYXlsaXN0OiBmdW5jdGlvbih1c2VySWQsIHBsYXlsaXN0SWQsIHRyYWNrcywgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdCA9IFdlYkFwaVJlcXVlc3QuYnVpbGRlcigpLlxuICAgICAgd2l0aFBhdGgoJy92MS91c2Vycy8nICsgZW5jb2RlVVJJQ29tcG9uZW50KHVzZXJJZCkgKyAnL3BsYXlsaXN0cy8nICsgcGxheWxpc3RJZCArICcvdHJhY2tzJykuXG4gICAgICB3aXRoSGVhZGVycyh7ICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLlxuICAgICAgd2l0aEJvZHlQYXJhbWV0ZXJzKHtcbiAgICAgICAgJ3RyYWNrcyc6IHRyYWNrc1xuICAgICAgfSkuXG4gICAgICBidWlsZCgpO1xuXG4gICAgdGhpcy5fYWRkQm9keVBhcmFtZXRlcnMocmVxdWVzdCwgb3B0aW9ucyk7XG4gICAgdGhpcy5fYWRkQWNjZXNzVG9rZW4ocmVxdWVzdCwgdGhpcy5nZXRBY2Nlc3NUb2tlbigpKTtcblxuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcGVyZm9ybVJlcXVlc3QoSHR0cE1hbmFnZXIuZGVsLCByZXF1ZXN0KTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0cmFja3MgZnJvbSBhIHBsYXlsaXN0IGJ5IHBvc2l0aW9uIGluc3RlYWQgb2Ygc3BlY2lmeWluZyB0aGUgdHJhY2tzJyBVUklzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIFRoZSBwbGF5bGlzdCdzIG93bmVyJ3MgdXNlciBJRFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGxheWxpc3RJZCBUaGUgcGxheWxpc3QncyBJRFxuICAgKiBAcGFyYW0ge2ludFtdfSBwb3NpdGlvbnMgVGhlIHBvc2l0aW9ucyBvZiB0aGUgdHJhY2tzIGluIHRoZSBwbGF5bGlzdCB0aGF0IHNob3VsZCBiZSByZW1vdmVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzbmFwc2hvdF9pZCBUaGUgc25hcHNob3QgSUQsIG9yIHZlcnNpb24sIG9mIHRoZSBwbGF5bGlzdC4gUmVxdWlyZWRcbiAgICogQHBhcmFtIHtyZXF1ZXN0Q2FsbGJhY2t9IFtjYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbnN0ZWFkIG9mIHRoZSBwcm9taXNlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IEEgcHJvbWlzZSB0aGF0IGlmIHN1Y2Nlc3NmdWwgcmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyBhIHNuYXBzaG90X2lkLiBJZiByZWplY3RlZCxcbiAgICogaXQgY29udGFpbnMgYW4gZXJyb3Igb2JqZWN0LiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIHJlbW92ZVRyYWNrc0Zyb21QbGF5bGlzdEJ5UG9zaXRpb246IGZ1bmN0aW9uKHVzZXJJZCwgcGxheWxpc3RJZCwgcG9zaXRpb25zLCBzbmFwc2hvdElkLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0ID0gV2ViQXBpUmVxdWVzdC5idWlsZGVyKCkuXG4gICAgICB3aXRoUGF0aCgnL3YxL3VzZXJzLycgKyBlbmNvZGVVUklDb21wb25lbnQodXNlcklkKSArICcvcGxheWxpc3RzLycgKyBwbGF5bGlzdElkICsgJy90cmFja3MnKS5cbiAgICAgIHdpdGhIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vanNvbicgfSkuXG4gICAgICB3aXRoQm9keVBhcmFtZXRlcnMoe1xuICAgICAgICAncG9zaXRpb25zJzogcG9zaXRpb25zLFxuICAgICAgICAnc25hcHNob3RfaWQnIDogc25hcHNob3RJZFxuICAgICAgfSkuXG4gICAgICBidWlsZCgpO1xuXG4gICAgdGhpcy5fYWRkQWNjZXNzVG9rZW4ocmVxdWVzdCwgdGhpcy5nZXRBY2Nlc3NUb2tlbigpKTtcblxuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcGVyZm9ybVJlcXVlc3QoSHR0cE1hbmFnZXIuZGVsLCByZXF1ZXN0KTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2UgdHJhY2tzIGluIGEgcGxheWxpc3QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgVGhlIHBsYXlsaXN0J3Mgb3duZXIncyB1c2VyIElEXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwbGF5bGlzdElkIFRoZSBwbGF5bGlzdCdzIElEXG4gICAqIEBwYXJhbSB7T2JqZWN0W119IHVyaXMgQW4gYXJyYXkgb2YgdHJhY2sgVVJJcyAoc3RyaW5ncylcbiAgICogQHBhcmFtIHtyZXF1ZXN0Q2FsbGJhY2t9IFtjYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbnN0ZWFkIG9mIHRoZSBwcm9taXNlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IEEgcHJvbWlzZSB0aGF0IGlmIHN1Y2Nlc3NmdWwgcmV0dXJucyBhbiBlbXB0eSBvYmplY3QuIElmIHJlamVjdGVkLFxuICAgKiBpdCBjb250YWlucyBhbiBlcnJvciBvYmplY3QuIE5vdCByZXR1cm5lZCBpZiBhIGNhbGxiYWNrIGlzIGdpdmVuLlxuICAgKi9cbiAgcmVwbGFjZVRyYWNrc0luUGxheWxpc3Q6IGZ1bmN0aW9uKHVzZXJJZCwgcGxheWxpc3RJZCwgdXJpcywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdCA9IFdlYkFwaVJlcXVlc3QuYnVpbGRlcigpLlxuICAgICAgd2l0aFBhdGgoJy92MS91c2Vycy8nICsgZW5jb2RlVVJJQ29tcG9uZW50KHVzZXJJZCkgKyAnL3BsYXlsaXN0cy8nICsgcGxheWxpc3RJZCArICcvdHJhY2tzJykuXG4gICAgICB3aXRoSGVhZGVycyh7ICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLlxuICAgICAgd2l0aEJvZHlQYXJhbWV0ZXJzKHtcbiAgICAgICAgJ3VyaXMnOiB1cmlzXG4gICAgICB9KS5cbiAgICAgIGJ1aWxkKCk7XG5cbiAgICB0aGlzLl9hZGRBY2Nlc3NUb2tlbihyZXF1ZXN0LCB0aGlzLmdldEFjY2Vzc1Rva2VuKCkpO1xuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wZXJmb3JtUmVxdWVzdChIdHRwTWFuYWdlci5wdXQsIHJlcXVlc3QpO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUmVvcmRlciB0cmFja3MgaW4gYSBwbGF5bGlzdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCBUaGUgcGxheWxpc3QncyBvd25lcidzIHVzZXIgSURcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYXlsaXN0SWQgVGhlIHBsYXlsaXN0J3MgSURcbiAgICogQHBhcmFtIHtpbnR9IHJhbmdlU3RhcnQgVGhlIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCB0cmFjayB0byBiZSByZW9yZGVyZWQuXG4gICAqIEBwYXJhbSB7aW50fSBpbnNlcnRCZWZvcmUgVGhlIHBvc2l0aW9uIHdoZXJlIHRoZSB0cmFja3Mgc2hvdWxkIGJlIGluc2VydGVkLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25hbCBwYXJhbWV0ZXJzLCBpLmUuIHJhbmdlX2xlbmd0aCBhbmQgc25hcHNob3RfaWQuXG4gICAqIEBwYXJhbSB7cmVxdWVzdENhbGxiYWNrfSBbY2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrIG1ldGhvZCB0byBiZSBjYWxsZWQgaW5zdGVhZCBvZiB0aGUgcHJvbWlzZS5cbiAgICogQHJldHVybnMge1Byb21pc2V8dW5kZWZpbmVkfSBBIHByb21pc2UgdGhhdCBpZiBzdWNjZXNzZnVsIHJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYSBzbmFwc2hvdF9pZC4gSWYgcmVqZWN0ZWQsXG4gICAqIGl0IGNvbnRhaW5zIGFuIGVycm9yIG9iamVjdC4gTm90IHJldHVybmVkIGlmIGEgY2FsbGJhY2sgaXMgZ2l2ZW4uXG4gICAqL1xuICByZW9yZGVyVHJhY2tzSW5QbGF5bGlzdDogZnVuY3Rpb24odXNlcklkLCBwbGF5bGlzdElkLCByYW5nZVN0YXJ0LCBpbnNlcnRCZWZvcmUsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3QgPSBXZWJBcGlSZXF1ZXN0LmJ1aWxkZXIoKS5cbiAgICAgIHdpdGhQYXRoKCcvdjEvdXNlcnMvJyArIGVuY29kZVVSSUNvbXBvbmVudCh1c2VySWQpICsgJy9wbGF5bGlzdHMvJyArIHBsYXlsaXN0SWQgKyAnL3RyYWNrcycpLlxuICAgICAgd2l0aEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJyA6ICdhcHBsaWNhdGlvbi9qc29uJyB9KS5cbiAgICAgIHdpdGhCb2R5UGFyYW1ldGVycyh7XG4gICAgICAgICdyYW5nZV9zdGFydCc6IHJhbmdlU3RhcnQsXG4gICAgICAgICdpbnNlcnRfYmVmb3JlJyA6IGluc2VydEJlZm9yZVxuICAgICAgfSkuXG4gICAgICBidWlsZCgpO1xuXG4gICAgdGhpcy5fYWRkQWNjZXNzVG9rZW4ocmVxdWVzdCwgdGhpcy5nZXRBY2Nlc3NUb2tlbigpKTtcbiAgICB0aGlzLl9hZGRCb2R5UGFyYW1ldGVycyhyZXF1ZXN0LCBvcHRpb25zKTtcblxuICAgIHZhciBwcm9taXNlID0gIHRoaXMuX3BlcmZvcm1SZXF1ZXN0KEh0dHBNYW5hZ2VyLnB1dCwgcmVxdWVzdCk7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBHZXQgYXVkaW8gZmVhdHVyZXMgZm9yIGEgc2luZ2xlIHRyYWNrIGlkZW50aWZpZWQgYnkgaXRzIHVuaXF1ZSBTcG90aWZ5IElELlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHJhY2tJZCBUaGUgdHJhY2sgSURcbiAgICogQHBhcmFtIHtyZXF1ZXN0Q2FsbGJhY2t9IFtjYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbnN0ZWFkIG9mIHRoZSBwcm9taXNlLlxuICAgKiBAZXhhbXBsZSBnZXRBdWRpb0ZlYXR1cmVzRm9yVHJhY2soJzM4UDNRNFFjZGpRQUxHRjJaOTJCbVInKS50aGVuKC4uLilcbiAgICogQHJldHVybnMge1Byb21pc2V8dW5kZWZpbmVkfSBBIHByb21pc2UgdGhhdCBpZiBzdWNjZXNzZnVsLCByZXNvbHZlcyB0byBhbiBvYmplY3RcbiAgICogICAgICAgICAgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYXVkaW8gZmVhdHVyZXMuIElmIHRoZSBwcm9taXNlIGlzXG4gICAqICAgICAgICAgIHJlamVjdGVkLCBpdCBjb250YWlucyBhbiBlcnJvciBvYmplY3QuIE5vdCByZXR1cm5lZCBpZiBhIGNhbGxiYWNrIGlzIGdpdmVuLlxuICAgKi9cbiAgZ2V0QXVkaW9GZWF0dXJlc0ZvclRyYWNrOiBmdW5jdGlvbih0cmFja0lkLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0ID0gV2ViQXBpUmVxdWVzdC5idWlsZGVyKClcbiAgICAgIC53aXRoUGF0aCgnL3YxL2F1ZGlvLWZlYXR1cmVzLycgKyB0cmFja0lkKVxuICAgICAgLmJ1aWxkKCk7XG5cbiAgICB0aGlzLl9hZGRBY2Nlc3NUb2tlbihyZXF1ZXN0LCB0aGlzLmdldEFjY2Vzc1Rva2VuKCkpO1xuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wZXJmb3JtUmVxdWVzdChIdHRwTWFuYWdlci5nZXQsIHJlcXVlc3QpO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogR2V0IGF1ZGlvIGFuYWx5c2lzIGZvciBhIHNpbmdsZSB0cmFjayBpZGVudGlmaWVkIGJ5IGl0cyB1bmlxdWUgU3BvdGlmeSBJRC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRyYWNrSWQgVGhlIHRyYWNrIElEXG4gICAqIEBwYXJhbSB7cmVxdWVzdENhbGxiYWNrfSBbY2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrIG1ldGhvZCB0byBiZSBjYWxsZWQgaW5zdGVhZCBvZiB0aGUgcHJvbWlzZS5cbiAgICogQGV4YW1wbGUgZ2V0QXVkaW9BbmFseXNpc0ZvclRyYWNrKCczOFAzUTRRY2RqUUFMR0YyWjkyQm1SJykudGhlbiguLi4pXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfHVuZGVmaW5lZH0gQSBwcm9taXNlIHRoYXQgaWYgc3VjY2Vzc2Z1bCwgcmVzb2x2ZXMgdG8gYW4gb2JqZWN0XG4gICAqICAgICAgICAgIGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGF1ZGlvIGFuYWx5c2lzLiBJZiB0aGUgcHJvbWlzZSBpc1xuICAgKiAgICAgICAgICByZWplY3RlZCwgaXQgY29udGFpbnMgYW4gZXJyb3Igb2JqZWN0LiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIGdldEF1ZGlvQW5hbHlzaXNGb3JUcmFjazogZnVuY3Rpb24odHJhY2tJZCwgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdCA9IFdlYkFwaVJlcXVlc3QuYnVpbGRlcigpXG4gICAgICAud2l0aFBhdGgoJy92MS9hdWRpby1hbmFseXNpcy8nICsgdHJhY2tJZClcbiAgICAgIC5idWlsZCgpO1xuXG4gICAgdGhpcy5fYWRkQWNjZXNzVG9rZW4ocmVxdWVzdCwgdGhpcy5nZXRBY2Nlc3NUb2tlbigpKTtcblxuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcGVyZm9ybVJlcXVlc3QoSHR0cE1hbmFnZXIuZ2V0LCByZXF1ZXN0KTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldCBhdWRpbyBmZWF0dXJlcyBmb3IgbXVsdGlwbGUgdHJhY2tzIGlkZW50aWZpZWQgYnkgdGhlaXIgdW5pcXVlIFNwb3RpZnkgSUQuXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHRyYWNrSWRzIFRoZSB0cmFjayBJRHNcbiAgICogQHBhcmFtIHtyZXF1ZXN0Q2FsbGJhY2t9IFtjYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbnN0ZWFkIG9mIHRoZSBwcm9taXNlLlxuICAgKiBAZXhhbXBsZSBnZXRBdWRpb0ZlYXR1cmVzRm9yVHJhY2tzKFsnMzhQM1E0UWNkalFBTEdGMlo5MkJtUicsICcySE8yYm5vTXJwblpVYlVxaWlsTEhpJ10pLnRoZW4oLi4uKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IEEgcHJvbWlzZSB0aGF0IGlmIHN1Y2Nlc3NmdWwsIHJlc29sdmVzIHRvIGFuIG9iamVjdFxuICAgKiAgICAgICAgICBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhdWRpbyBmZWF0dXJlcyBmb3IgdGhlIHRyYWNrcy4gSWYgdGhlIHByb21pc2UgaXNcbiAgICogICAgICAgICAgcmVqZWN0ZWQsIGl0IGNvbnRhaW5zIGFuIGVycm9yIG9iamVjdC4gTm90IHJldHVybmVkIGlmIGEgY2FsbGJhY2sgaXMgZ2l2ZW4uXG4gICAqL1xuICBnZXRBdWRpb0ZlYXR1cmVzRm9yVHJhY2tzOiBmdW5jdGlvbih0cmFja0lkcywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdCA9IFdlYkFwaVJlcXVlc3QuYnVpbGRlcigpXG4gICAgICAud2l0aFBhdGgoJy92MS9hdWRpby1mZWF0dXJlcycpXG4gICAgICAud2l0aFF1ZXJ5UGFyYW1ldGVycyh7XG4gICAgICAgICdpZHMnIDogdHJhY2tJZHMuam9pbignLCcpXG4gICAgICB9KVxuICAgICAgLmJ1aWxkKCk7XG5cbiAgICB0aGlzLl9hZGRBY2Nlc3NUb2tlbihyZXF1ZXN0LCB0aGlzLmdldEFjY2Vzc1Rva2VuKCkpO1xuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wZXJmb3JtUmVxdWVzdChIdHRwTWFuYWdlci5nZXQsIHJlcXVlc3QpO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQ3JlYXRlIGEgcGxheWxpc3Qtc3R5bGUgbGlzdGVuaW5nIGV4cGVyaWVuY2UgYmFzZWQgb24gc2VlZCBhcnRpc3RzLCB0cmFja3MgYW5kIGdlbnJlcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBUaGUgb3B0aW9ucyBzdXBwbGllZCB0byB0aGlzIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7cmVxdWVzdENhbGxiYWNrfSBbY2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrIG1ldGhvZCB0byBiZSBjYWxsZWQgaW5zdGVhZCBvZiB0aGUgcHJvbWlzZS5cbiAgICogQGV4YW1wbGUgZ2V0UmVjb21tZW5kYXRpb25zKHsgbWluX2VuZXJneTogMC40LCBzZWVkX2FydGlzdHM6IFsnNm1mSzZRMnR6TE1FY2hBcjBlOVV6dScsICc0RFlGVk5LWjF1aXhhNlNRVHZ6UXdKJ10sIG1pbl9wb3B1bGFyaXR5OiA1MCB9KS50aGVuKC4uLilcbiAgICogQHJldHVybnMge1Byb21pc2V8dW5kZWZpbmVkfSBBIHByb21pc2UgdGhhdCBpZiBzdWNjZXNzZnVsLCByZXNvbHZlcyB0byBhbiBvYmplY3QgY29udGFpbmluZ1xuICAgKiAgICAgICAgICBhIGxpc3Qgb2YgdHJhY2tzIGFuZCBhIGxpc3Qgb2Ygc2VlZHMuIElmIHJlamVjdGVkLCBpdCBjb250YWlucyBhbiBlcnJvciBvYmplY3QuIE5vdCByZXR1cm5lZCBpZiBhIGNhbGxiYWNrIGlzIGdpdmVuLlxuICAgKi9cbiAgZ2V0UmVjb21tZW5kYXRpb25zOiBmdW5jdGlvbihvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0ID0gV2ViQXBpUmVxdWVzdC5idWlsZGVyKClcbiAgICAgIC53aXRoUGF0aCgnL3YxL3JlY29tbWVuZGF0aW9ucycpXG4gICAgICAuYnVpbGQoKTtcblxuICAgIHZhciBfb3B0cyA9IHt9O1xuICAgIHZhciBvcHRpb25zT2ZUeXBlQXJyYXkgPSBbJ3NlZWRfYXJ0aXN0cycsICdzZWVkX2dlbnJlcycsICdzZWVkX3RyYWNrcyddO1xuICAgIGZvciAodmFyIG9wdGlvbiBpbiBvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShvcHRpb24pKSB7XG4gICAgICAgIGlmIChvcHRpb25zT2ZUeXBlQXJyYXkuaW5kZXhPZihvcHRpb24pICE9PSAtMSAmJlxuICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvcHRpb25zW29wdGlvbl0pID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICAgICAgX29wdHNbb3B0aW9uXSA9IG9wdGlvbnNbb3B0aW9uXS5qb2luKCcsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX29wdHNbb3B0aW9uXSA9IG9wdGlvbnNbb3B0aW9uXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2FkZEFjY2Vzc1Rva2VuKHJlcXVlc3QsIHRoaXMuZ2V0QWNjZXNzVG9rZW4oKSk7XG4gICAgdGhpcy5fYWRkUXVlcnlQYXJhbWV0ZXJzKHJlcXVlc3QsIF9vcHRzKTtcblxuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcGVyZm9ybVJlcXVlc3QoSHR0cE1hbmFnZXIuZ2V0LCByZXF1ZXN0KTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGEgbGlzdCBvZiBhdmFpbGFibGUgZ2VucmVzIHNlZWQgcGFyYW1ldGVyIHZhbHVlcyBmb3IgcmVjb21tZW5kYXRpb25zLlxuICAgKiBAcGFyYW0ge3JlcXVlc3RDYWxsYmFja30gW2NhbGxiYWNrXSBPcHRpb25hbCBjYWxsYmFjayBtZXRob2QgdG8gYmUgY2FsbGVkIGluc3RlYWQgb2YgdGhlIHByb21pc2UuXG4gICAqIEBleGFtcGxlIGdldEF2YWlsYWJsZUdlbnJlU2VlZHMoKS50aGVuKC4uLilcbiAgICogQHJldHVybnMge1Byb21pc2V8dW5kZWZpbmVkfSBBIHByb21pc2UgdGhhdCBpZiBzdWNjZXNzZnVsLCByZXNvbHZlcyB0byBhbiBvYmplY3QgY29udGFpbmluZ1xuICAgKiAgICAgICAgICBhIGxpc3Qgb2YgYXZhaWxhYmxlIGdlbnJlcyB0byBiZSB1c2VkIGFzIHNlZWRzIGZvciByZWNvbW1lbmRhdGlvbnMuXG4gICAqICAgICAgICAgIElmIHJlamVjdGVkLCBpdCBjb250YWlucyBhbiBlcnJvciBvYmplY3QuIE5vdCByZXR1cm5lZCBpZiBhIGNhbGxiYWNrIGlzIGdpdmVuLlxuICAgKi9cbiAgZ2V0QXZhaWxhYmxlR2VucmVTZWVkczogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdCA9IFdlYkFwaVJlcXVlc3QuYnVpbGRlcigpXG4gICAgICAud2l0aFBhdGgoJy92MS9yZWNvbW1lbmRhdGlvbnMvYXZhaWxhYmxlLWdlbnJlLXNlZWRzJylcbiAgICAgIC5idWlsZCgpO1xuXG4gICAgdGhpcy5fYWRkQWNjZXNzVG9rZW4ocmVxdWVzdCwgdGhpcy5nZXRBY2Nlc3NUb2tlbigpKTtcblxuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcGVyZm9ybVJlcXVlc3QoSHR0cE1hbmFnZXIuZ2V0LCByZXF1ZXN0KTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGEgVVJMIHdoZXJlIHRoZSB1c2VyIGNhbiBnaXZlIHRoZSBhcHBsaWNhdGlvbiBwZXJtaXNzaW9ucy5cbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gc2NvcGVzIFRoZSBzY29wZXMgY29ycmVzcG9uZGluZyB0byB0aGUgcGVybWlzc2lvbnMgdGhlIGFwcGxpY2F0aW9uIG5lZWRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RhdGUgQSBwYXJhbWV0ZXIgdGhhdCB5b3UgY2FuIHVzZSB0byBtYWludGFpbiBhIHZhbHVlIGJldHdlZW4gdGhlIHJlcXVlc3QgYW5kIHRoZSBjYWxsYmFjayB0byByZWRpcmVjdF91cmkuSXQgaXMgdXNlZnVsIHRvIHByZXZlbnQgQ1NSRiBleHBsb2l0cy5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIFVSTCB3aGVyZSB0aGUgdXNlciBjYW4gZ2l2ZSBhcHBsaWNhdGlvbiBwZXJtaXNzaW9ucy5cbiAgICovXG4gIGNyZWF0ZUF1dGhvcml6ZVVSTDogZnVuY3Rpb24oc2NvcGVzLCBzdGF0ZSkge1xuICAgIHZhciByZXF1ZXN0ID0gQXV0aGVudGljYXRpb25SZXF1ZXN0LmJ1aWxkZXIoKVxuICAgICAgLndpdGhQYXRoKCcvYXV0aG9yaXplJylcbiAgICAgIC53aXRoUXVlcnlQYXJhbWV0ZXJzKHtcbiAgICAgICAgJ2NsaWVudF9pZCcgOiB0aGlzLmdldENsaWVudElkKCksXG4gICAgICAgICdyZXNwb25zZV90eXBlJyA6ICdjb2RlJyxcbiAgICAgICAgJ3JlZGlyZWN0X3VyaScgOiB0aGlzLmdldFJlZGlyZWN0VVJJKCksXG4gICAgICAgICdzY29wZScgOiBzY29wZXMuam9pbignJTIwJyksXG4gICAgICAgICdzdGF0ZScgOiBzdGF0ZVxuICAgICAgfSlcbiAgICAgIC5idWlsZCgpO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0VVJMKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIHRoZSB0cmFja3MgdGhhdCBhcmUgc2F2ZWQgdG8gdGhlIGF1dGhlbnRpY2F0ZWQgdXNlcnMgWW91ciBNdXNpYyBsaWJyYXJ5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnMsIGJlaW5nIG1hcmtldCwgbGltaXQsIGFuZC9vciBvZmZzZXQuXG4gICAqIEBwYXJhbSB7cmVxdWVzdENhbGxiYWNrfSBbY2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrIG1ldGhvZCB0byBiZSBjYWxsZWQgaW5zdGVhZCBvZiB0aGUgcHJvbWlzZS5cbiAgICogQHJldHVybnMge1Byb21pc2V8dW5kZWZpbmVkfSBBIHByb21pc2UgdGhhdCBpZiBzdWNjZXNzZnVsLCByZXNvbHZlcyB0byBhbiBvYmplY3QgY29udGFpbmluZyBhIHBhZ2luZyBvYmplY3Qgd2hpY2ggaW4gdHVybiBjb250YWluc1xuICAgKiAgICAgICAgICBwbGF5bGlzdCB0cmFjayBvYmplY3RzLiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIGdldE15U2F2ZWRUcmFja3M6IGZ1bmN0aW9uKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3QgPSBXZWJBcGlSZXF1ZXN0LmJ1aWxkZXIoKVxuICAgICAgLndpdGhQYXRoKCcvdjEvbWUvdHJhY2tzJylcbiAgICAgIC53aXRoUXVlcnlQYXJhbWV0ZXJzKG9wdGlvbnMpXG4gICAgICAuYnVpbGQoKTtcblxuICAgIHRoaXMuX2FkZEFjY2Vzc1Rva2VuKHJlcXVlc3QsIHRoaXMuZ2V0QWNjZXNzVG9rZW4oKSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3BlcmZvcm1SZXF1ZXN0KEh0dHBNYW5hZ2VyLmdldCwgcmVxdWVzdCk7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBvbmUgb3IgbW9yZSB0cmFja3MgaXMgYWxyZWFkeSBzYXZlZCBpbiB0aGUgY3VycmVudCBTcG90aWZ5IHVzZXLigJlzIOKAnFlvdXIgTXVzaWPigJ0gbGlicmFyeS5cbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdHJhY2tJZHMgVGhlIHRyYWNrIElEc1xuICAgKiBAcGFyYW0ge3JlcXVlc3RDYWxsYmFja30gW2NhbGxiYWNrXSBPcHRpb25hbCBjYWxsYmFjayBtZXRob2QgdG8gYmUgY2FsbGVkIGluc3RlYWQgb2YgdGhlIHByb21pc2UuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfHVuZGVmaW5lZH0gQSBwcm9taXNlIHRoYXQgaWYgc3VjY2Vzc2Z1bCwgcmVzb2x2ZXMgaW50byBhbiBhcnJheSBvZiBib29sZWFucy4gVGhlIG9yZGVyXG4gICAqIG9mIHRoZSByZXR1cm5lZCBhcnJheSdzIGVsZW1lbnRzIGNvcnJlc3BvbmQgdG8gdGhlIHRyYWNrIElEIGluIHRoZSByZXF1ZXN0LlxuICAgKiBUaGUgYm9vbGVhbiB2YWx1ZSBvZiB0cnVlIGluZGljYXRlcyB0aGF0IHRoZSB0cmFjayBpcyBwYXJ0IG9mIHRoZSB1c2VyJ3MgbGlicmFyeSwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIGNvbnRhaW5zTXlTYXZlZFRyYWNrczogZnVuY3Rpb24odHJhY2tJZHMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3QgPSBXZWJBcGlSZXF1ZXN0LmJ1aWxkZXIoKVxuICAgICAgLndpdGhQYXRoKCcvdjEvbWUvdHJhY2tzL2NvbnRhaW5zJylcbiAgICAgIC53aXRoUXVlcnlQYXJhbWV0ZXJzKHtcbiAgICAgICAgJ2lkcycgOiB0cmFja0lkcy5qb2luKCcsJylcbiAgICAgIH0pXG4gICAgICAuYnVpbGQoKTtcblxuICAgIHRoaXMuX2FkZEFjY2Vzc1Rva2VuKHJlcXVlc3QsIHRoaXMuZ2V0QWNjZXNzVG9rZW4oKSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3BlcmZvcm1SZXF1ZXN0KEh0dHBNYW5hZ2VyLmdldCwgcmVxdWVzdCk7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSB0cmFjayBmcm9tIHRoZSBhdXRoZW50aWNhdGVkIHVzZXIncyBZb3VyIE11c2ljIGxpYnJhcnkuXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHRyYWNrSWRzIFRoZSB0cmFjayBJRHNcbiAgICogQHBhcmFtIHtyZXF1ZXN0Q2FsbGJhY2t9IFtjYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbnN0ZWFkIG9mIHRoZSBwcm9taXNlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IEEgcHJvbWlzZSB0aGF0IGlmIHN1Y2Nlc3NmdWwgcmV0dXJucyBudWxsLCBvdGhlcndpc2UgYW4gZXJyb3IuXG4gICAqIE5vdCByZXR1cm5lZCBpZiBhIGNhbGxiYWNrIGlzIGdpdmVuLlxuICAgKi9cbiAgcmVtb3ZlRnJvbU15U2F2ZWRUcmFja3M6IGZ1bmN0aW9uKHRyYWNrSWRzLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0ID0gV2ViQXBpUmVxdWVzdC5idWlsZGVyKClcbiAgICAgIC53aXRoUGF0aCgnL3YxL21lL3RyYWNrcycpXG4gICAgICAud2l0aEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJyA6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxuICAgICAgLndpdGhCb2R5UGFyYW1ldGVycyh0cmFja0lkcylcbiAgICAgIC5idWlsZCgpO1xuXG4gICAgdGhpcy5fYWRkQWNjZXNzVG9rZW4ocmVxdWVzdCwgdGhpcy5nZXRBY2Nlc3NUb2tlbigpKTtcblxuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcGVyZm9ybVJlcXVlc3QoSHR0cE1hbmFnZXIuZGVsLCByZXF1ZXN0KTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH0sXG5cbiAgIC8qKlxuICAgKiBBZGQgYSB0cmFjayBmcm9tIHRoZSBhdXRoZW50aWNhdGVkIHVzZXIncyBZb3VyIE11c2ljIGxpYnJhcnkuXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHRyYWNrSWRzIFRoZSB0cmFjayBJRHNcbiAgICogQHBhcmFtIHtyZXF1ZXN0Q2FsbGJhY2t9IFtjYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbnN0ZWFkIG9mIHRoZSBwcm9taXNlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IEEgcHJvbWlzZSB0aGF0IGlmIHN1Y2Nlc3NmdWwgcmV0dXJucyBudWxsLCBvdGhlcndpc2UgYW4gZXJyb3IuIE5vdCByZXR1cm5lZCBpZiBhIGNhbGxiYWNrIGlzIGdpdmVuLlxuICAgKi9cbiAgYWRkVG9NeVNhdmVkVHJhY2tzOiBmdW5jdGlvbih0cmFja0lkcywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdCA9IFdlYkFwaVJlcXVlc3QuYnVpbGRlcigpXG4gICAgICAud2l0aFBhdGgoJy92MS9tZS90cmFja3MnKVxuICAgICAgLndpdGhIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vanNvbicgfSlcbiAgICAgIC53aXRoQm9keVBhcmFtZXRlcnModHJhY2tJZHMpXG4gICAgICAuYnVpbGQoKTtcblxuICAgIHRoaXMuX2FkZEFjY2Vzc1Rva2VuKHJlcXVlc3QsIHRoaXMuZ2V0QWNjZXNzVG9rZW4oKSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3BlcmZvcm1SZXF1ZXN0KEh0dHBNYW5hZ2VyLnB1dCwgcmVxdWVzdCk7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW4gYWxidW0gZnJvbSB0aGUgYXV0aGVudGljYXRlZCB1c2VyJ3MgWW91ciBNdXNpYyBsaWJyYXJ5LlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBhbGJ1bUlkcyBUaGUgYWxidW0gSURzXG4gICAqIEBwYXJhbSB7cmVxdWVzdENhbGxiYWNrfSBbY2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrIG1ldGhvZCB0byBiZSBjYWxsZWQgaW5zdGVhZCBvZiB0aGUgcHJvbWlzZS5cbiAgICogQHJldHVybnMge1Byb21pc2V8dW5kZWZpbmVkfSBBIHByb21pc2UgdGhhdCBpZiBzdWNjZXNzZnVsIHJldHVybnMgbnVsbCwgb3RoZXJ3aXNlIGFuIGVycm9yLlxuICAgKiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIHJlbW92ZUZyb21NeVNhdmVkQWxidW1zOiBmdW5jdGlvbihhbGJ1bUlkcywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdCA9IFdlYkFwaVJlcXVlc3QuYnVpbGRlcigpXG4gICAgICAud2l0aFBhdGgoJy92MS9tZS9hbGJ1bXMnKVxuICAgICAgLndpdGhIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vanNvbicgfSlcbiAgICAgIC53aXRoQm9keVBhcmFtZXRlcnMoYWxidW1JZHMpXG4gICAgICAuYnVpbGQoKTtcblxuICAgIHRoaXMuX2FkZEFjY2Vzc1Rva2VuKHJlcXVlc3QsIHRoaXMuZ2V0QWNjZXNzVG9rZW4oKSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3BlcmZvcm1SZXF1ZXN0KEh0dHBNYW5hZ2VyLmRlbCwgcmVxdWVzdCk7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBBZGQgYW4gYWxidW0gZnJvbSB0aGUgYXV0aGVudGljYXRlZCB1c2VyJ3MgWW91ciBNdXNpYyBsaWJyYXJ5LlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBhbGJ1bUlkcyBUaGUgdHJhY2sgSURzXG4gICAqIEBwYXJhbSB7cmVxdWVzdENhbGxiYWNrfSBbY2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrIG1ldGhvZCB0byBiZSBjYWxsZWQgaW5zdGVhZCBvZiB0aGUgcHJvbWlzZS5cbiAgICogQHJldHVybnMge1Byb21pc2V8dW5kZWZpbmVkfSBBIHByb21pc2UgdGhhdCBpZiBzdWNjZXNzZnVsIHJldHVybnMgbnVsbCwgb3RoZXJ3aXNlIGFuIGVycm9yLiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIGFkZFRvTXlTYXZlZEFsYnVtczogZnVuY3Rpb24oYWxidW1JZHMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3QgPSBXZWJBcGlSZXF1ZXN0LmJ1aWxkZXIoKVxuICAgICAgLndpdGhQYXRoKCcvdjEvbWUvYWxidW1zJylcbiAgICAgIC53aXRoSGVhZGVycyh7ICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXG4gICAgICAud2l0aEJvZHlQYXJhbWV0ZXJzKGFsYnVtSWRzKVxuICAgICAgLmJ1aWxkKCk7XG5cbiAgICB0aGlzLl9hZGRBY2Nlc3NUb2tlbihyZXF1ZXN0LCB0aGlzLmdldEFjY2Vzc1Rva2VuKCkpO1xuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wZXJmb3JtUmVxdWVzdChIdHRwTWFuYWdlci5wdXQsIHJlcXVlc3QpO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUmV0cmlldmUgdGhlIGFsYnVtcyB0aGF0IGFyZSBzYXZlZCB0byB0aGUgYXV0aGVudGljYXRlZCB1c2VycyBZb3VyIE11c2ljIGxpYnJhcnkuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gT3B0aW9ucywgYmVpbmcgbWFya2V0LCBsaW1pdCwgYW5kL29yIG9mZnNldC5cbiAgICogQHBhcmFtIHtyZXF1ZXN0Q2FsbGJhY2t9IFtjYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbnN0ZWFkIG9mIHRoZSBwcm9taXNlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IEEgcHJvbWlzZSB0aGF0IGlmIHN1Y2Nlc3NmdWwsIHJlc29sdmVzIHRvIGFuIG9iamVjdCBjb250YWluaW5nIGEgcGFnaW5nIG9iamVjdCB3aGljaCBpbiB0dXJuIGNvbnRhaW5zXG4gICAqICAgICAgICAgIHBsYXlsaXN0IGFsYnVtIG9iamVjdHMuIE5vdCByZXR1cm5lZCBpZiBhIGNhbGxiYWNrIGlzIGdpdmVuLlxuICAgKi9cbiAgZ2V0TXlTYXZlZEFsYnVtczogZnVuY3Rpb24ob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdCA9IFdlYkFwaVJlcXVlc3QuYnVpbGRlcigpXG4gICAgICAud2l0aFBhdGgoJy92MS9tZS9hbGJ1bXMnKVxuICAgICAgLndpdGhRdWVyeVBhcmFtZXRlcnMob3B0aW9ucylcbiAgICAgIC5idWlsZCgpO1xuXG4gICAgdGhpcy5fYWRkQWNjZXNzVG9rZW4ocmVxdWVzdCwgdGhpcy5nZXRBY2Nlc3NUb2tlbigpKTtcblxuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcGVyZm9ybVJlcXVlc3QoSHR0cE1hbmFnZXIuZ2V0LCByZXF1ZXN0KTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIG9uZSBvciBtb3JlIGFsYnVtcyBpcyBhbHJlYWR5IHNhdmVkIGluIHRoZSBjdXJyZW50IFNwb3RpZnkgdXNlcuKAmXMg4oCcWW91ciBNdXNpY+KAnSBsaWJyYXJ5LlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBhbGJ1bUlkcyBUaGUgYWxidW0gSURzXG4gICAqIEBwYXJhbSB7cmVxdWVzdENhbGxiYWNrfSBbY2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrIG1ldGhvZCB0byBiZSBjYWxsZWQgaW5zdGVhZCBvZiB0aGUgcHJvbWlzZS5cbiAgICogQHJldHVybnMge1Byb21pc2V8dW5kZWZpbmVkfSBBIHByb21pc2UgdGhhdCBpZiBzdWNjZXNzZnVsLCByZXNvbHZlcyBpbnRvIGFuIGFycmF5IG9mIGJvb2xlYW5zLiBUaGUgb3JkZXJcbiAgICogb2YgdGhlIHJldHVybmVkIGFycmF5J3MgZWxlbWVudHMgY29ycmVzcG9uZCB0byB0aGUgYWxidW0gSUQgaW4gdGhlIHJlcXVlc3QuXG4gICAqIFRoZSBib29sZWFuIHZhbHVlIG9mIHRydWUgaW5kaWNhdGVzIHRoYXQgdGhlIGFsYnVtIGlzIHBhcnQgb2YgdGhlIHVzZXIncyBsaWJyYXJ5LCBvdGhlcndpc2UgZmFsc2UuXG4gICAqIE5vdCByZXR1cm5lZCBpZiBhIGNhbGxiYWNrIGlzIGdpdmVuLlxuICAgKi9cbiAgY29udGFpbnNNeVNhdmVkQWxidW1zOiBmdW5jdGlvbihhbGJ1bUlkcywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdCA9IFdlYkFwaVJlcXVlc3QuYnVpbGRlcigpXG4gICAgICAud2l0aFBhdGgoJy92MS9tZS9hbGJ1bXMvY29udGFpbnMnKVxuICAgICAgLndpdGhRdWVyeVBhcmFtZXRlcnMoe1xuICAgICAgICAnaWRzJyA6IGFsYnVtSWRzLmpvaW4oJywnKVxuICAgICAgfSlcbiAgICAgIC5idWlsZCgpO1xuXG4gICAgdGhpcy5fYWRkQWNjZXNzVG9rZW4ocmVxdWVzdCwgdGhpcy5nZXRBY2Nlc3NUb2tlbigpKTtcblxuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcGVyZm9ybVJlcXVlc3QoSHR0cE1hbmFnZXIuZ2V0LCByZXF1ZXN0KTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCB1c2VyJ3MgdG9wIGFydGlzdHMgYmFzZWQgb24gY2FsY3VsYXRlZCBhZmZpbml0eS5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBPcHRpb25zLCBiZWluZyB0aW1lX3JhbmdlLCBsaW1pdCwgb2Zmc2V0LlxuICAgKiBAcGFyYW0ge3JlcXVlc3RDYWxsYmFja30gW2NhbGxiYWNrXSBPcHRpb25hbCBjYWxsYmFjayBtZXRob2QgdG8gYmUgY2FsbGVkIGluc3RlYWQgb2YgdGhlIHByb21pc2UuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfHVuZGVmaW5lZH0gQSBwcm9taXNlIHRoYXQgaWYgc3VjY2Vzc2Z1bCwgcmVzb2x2ZXMgaW50byBhIHBhZ2luZyBvYmplY3Qgb2YgYXJ0aXN0cyxcbiAgICogICAgICAgICAgb3RoZXJ3aXNlIGFuIGVycm9yLiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIGdldE15VG9wQXJ0aXN0czogZnVuY3Rpb24ob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdCA9IFdlYkFwaVJlcXVlc3QuYnVpbGRlcigpXG4gICAgICAud2l0aFBhdGgoJy92MS9tZS90b3AvYXJ0aXN0cycpXG4gICAgICAuYnVpbGQoKTtcblxuICAgIHRoaXMuX2FkZEFjY2Vzc1Rva2VuKHJlcXVlc3QsIHRoaXMuZ2V0QWNjZXNzVG9rZW4oKSk7XG4gICAgdGhpcy5fYWRkUXVlcnlQYXJhbWV0ZXJzKHJlcXVlc3QsIG9wdGlvbnMpO1xuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wZXJmb3JtUmVxdWVzdChIdHRwTWFuYWdlci5nZXQsIHJlcXVlc3QpO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IHVzZXIncyB0b3AgdHJhY2tzIGJhc2VkIG9uIGNhbGN1bGF0ZWQgYWZmaW5pdHkuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gT3B0aW9ucywgYmVpbmcgdGltZV9yYW5nZSwgbGltaXQsIG9mZnNldC5cbiAgICogQHBhcmFtIHtyZXF1ZXN0Q2FsbGJhY2t9IFtjYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbnN0ZWFkIG9mIHRoZSBwcm9taXNlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IEEgcHJvbWlzZSB0aGF0IGlmIHN1Y2Nlc3NmdWwsIHJlc29sdmVzIGludG8gYSBwYWdpbmcgb2JqZWN0IG9mIHRyYWNrcyxcbiAgICogICAgICAgICAgb3RoZXJ3aXNlIGFuIGVycm9yLiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIGdldE15VG9wVHJhY2tzOiBmdW5jdGlvbihvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0ID0gV2ViQXBpUmVxdWVzdC5idWlsZGVyKClcbiAgICAgIC53aXRoUGF0aCgnL3YxL21lL3RvcC90cmFja3MnKVxuICAgICAgLmJ1aWxkKCk7XG5cbiAgICB0aGlzLl9hZGRBY2Nlc3NUb2tlbihyZXF1ZXN0LCB0aGlzLmdldEFjY2Vzc1Rva2VuKCkpO1xuICAgIHRoaXMuX2FkZFF1ZXJ5UGFyYW1ldGVycyhyZXF1ZXN0LCBvcHRpb25zKTtcblxuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcGVyZm9ybVJlcXVlc3QoSHR0cE1hbmFnZXIuZ2V0LCByZXF1ZXN0KTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgQ3VycmVudCBVc2VyJ3MgUmVjZW50bHkgUGxheWVkIFRyYWNrc1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnMsIGJlaW5nIHR5cGUsIGFmdGVyLCBsaW1pdCwgYmVmb3JlLlxuICAgKiBAcGFyYW0ge3JlcXVlc3RDYWxsYmFja30gW2NhbGxiYWNrXSBPcHRpb25hbCBjYWxsYmFjayBtZXRob2QgdG8gYmUgY2FsbGVkIGluc3RlYWQgb2YgdGhlIHByb21pc2UuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfHVuZGVmaW5lZH0gQSBwcm9taXNlIHRoYXQgaWYgc3VjY2Vzc2Z1bCwgcmVzb2x2ZXMgaW50byBhIHBhZ2luZyBvYmplY3Qgb2YgdHJhY2tzLFxuICAgKiAgICAgICAgICBvdGhlcndpc2UgYW4gZXJyb3IuIE5vdCByZXR1cm5lZCBpZiBhIGNhbGxiYWNrIGlzIGdpdmVuLlxuICAgKi9cbiAgZ2V0TXlSZWNlbnRseVBsYXllZFRyYWNrczogZnVuY3Rpb24ob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdCA9IFdlYkFwaVJlcXVlc3QuYnVpbGRlcigpXG4gICAgICAud2l0aFBhdGgoJy92MS9tZS9wbGF5ZXIvcmVjZW50bHktcGxheWVkJylcbiAgICAgIC5idWlsZCgpO1xuXG4gICAgdGhpcy5fYWRkQWNjZXNzVG9rZW4ocmVxdWVzdCwgdGhpcy5nZXRBY2Nlc3NUb2tlbigpKTtcbiAgICB0aGlzLl9hZGRRdWVyeVBhcmFtZXRlcnMocmVxdWVzdCwgb3B0aW9ucyk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3BlcmZvcm1SZXF1ZXN0KEh0dHBNYW5hZ2VyLmdldCwgcmVxdWVzdCk7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIEN1cnJlbnQgVXNlcidzIENvbm5lY3QgRGV2aWNlc1xuICAgKiBAcGFyYW0ge3JlcXVlc3RDYWxsYmFja30gW2NhbGxiYWNrXSBPcHRpb25hbCBjYWxsYmFjayBtZXRob2QgdG8gYmUgY2FsbGVkIGluc3RlYWQgb2YgdGhlIHByb21pc2UuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfHVuZGVmaW5lZH0gQSBwcm9taXNlIHRoYXQgaWYgc3VjY2Vzc2Z1bCwgcmVzb2x2ZXMgaW50byBhIHBhZ2luZyBvYmplY3Qgb2YgdHJhY2tzLFxuICAgKiAgICAgICAgICBvdGhlcndpc2UgYW4gZXJyb3IuIE5vdCByZXR1cm5lZCBpZiBhIGNhbGxiYWNrIGlzIGdpdmVuLlxuICAgKi9cbiAgZ2V0TXlEZXZpY2VzOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0ID0gV2ViQXBpUmVxdWVzdC5idWlsZGVyKClcbiAgICAgIC53aXRoUGF0aCgnL3YxL21lL3BsYXllci9kZXZpY2VzJylcbiAgICAgIC5idWlsZCgpO1xuXG4gICAgdGhpcy5fYWRkQWNjZXNzVG9rZW4ocmVxdWVzdCwgdGhpcy5nZXRBY2Nlc3NUb2tlbigpKTtcblxuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcGVyZm9ybVJlcXVlc3QoSHR0cE1hbmFnZXIuZ2V0LCByZXF1ZXN0KTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgQ3VycmVudCBVc2VyJ3MgQ3VycmVudCBQbGF5YmFjayBTdGF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnMsIGJlaW5nIG1hcmtldC5cbiAgICogQHBhcmFtIHtyZXF1ZXN0Q2FsbGJhY2t9IFtjYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbnN0ZWFkIG9mIHRoZSBwcm9taXNlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IEEgcHJvbWlzZSB0aGF0IGlmIHN1Y2Nlc3NmdWwsIHJlc29sdmVzIGludG8gYSBwYWdpbmcgb2JqZWN0IG9mIHRyYWNrcyxcbiAgICogICAgICAgICAgb3RoZXJ3aXNlIGFuIGVycm9yLiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIGdldE15Q3VycmVudFBsYXliYWNrU3RhdGU6IGZ1bmN0aW9uKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3QgPSBXZWJBcGlSZXF1ZXN0LmJ1aWxkZXIoKVxuICAgICAgLndpdGhQYXRoKCcvdjEvbWUvcGxheWVyJylcbiAgICAgIC5idWlsZCgpO1xuXG4gICAgdGhpcy5fYWRkQWNjZXNzVG9rZW4ocmVxdWVzdCwgdGhpcy5nZXRBY2Nlc3NUb2tlbigpKTtcbiAgICB0aGlzLl9hZGRRdWVyeVBhcmFtZXRlcnMocmVxdWVzdCwgb3B0aW9ucyk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3BlcmZvcm1SZXF1ZXN0KEh0dHBNYW5hZ2VyLmdldCwgcmVxdWVzdCk7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBUcmFuc2ZlciBhIFVzZXIncyBQbGF5YmFja1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnMsIGJlaW5nIG1hcmtldC5cbiAgICogQHBhcmFtIHtyZXF1ZXN0Q2FsbGJhY2t9IFtjYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbnN0ZWFkIG9mIHRoZSBwcm9taXNlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IEEgcHJvbWlzZSB0aGF0IGlmIHN1Y2Nlc3NmdWwsIHJlc29sdmVzIGludG8gYSBwYWdpbmcgb2JqZWN0IG9mIHRyYWNrcyxcbiAgICogICAgICAgICAgb3RoZXJ3aXNlIGFuIGVycm9yLiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIHRyYW5zZmVyTXlQbGF5YmFjazogZnVuY3Rpb24ob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdCA9IFdlYkFwaVJlcXVlc3QuYnVpbGRlcigpXG4gICAgICAud2l0aFBhdGgoJy92MS9tZS9wbGF5ZXInKVxuICAgICAgLndpdGhIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vanNvbicgfSlcbiAgICAgIC53aXRoQm9keVBhcmFtZXRlcnMoe1xuICAgICAgICAnZGV2aWNlX2lkcyc6IG9wdGlvbnMuZGV2aWNlSWRzLFxuICAgICAgICAncGxheSc6IG9wdGlvbnMucGxheSB8fCBmYWxzZVxuICAgICAgfSlcbiAgICAgIC5idWlsZCgpO1xuXG4gICAgdGhpcy5fYWRkQWNjZXNzVG9rZW4ocmVxdWVzdCwgdGhpcy5nZXRBY2Nlc3NUb2tlbigpKTtcbiAgICB0aGlzLl9hZGRCb2R5UGFyYW1ldGVycyhyZXF1ZXN0LCBvcHRpb25zKTtcblxuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcGVyZm9ybVJlcXVlc3QoSHR0cE1hbmFnZXIucHV0LCByZXF1ZXN0KTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgY3VycmVudCB1c2VyIGFzIGEgZm9sbG93ZXIgb2Ygb25lIG9yIG1vcmUgb3RoZXIgU3BvdGlmeSB1c2Vycy5cbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdXNlcklkcyBUaGUgSURzIG9mIHRoZSB1c2VycyB0byBiZSBmb2xsb3dlZC5cbiAgICogQHBhcmFtIHtyZXF1ZXN0Q2FsbGJhY2t9IFtjYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbnN0ZWFkIG9mIHRoZSBwcm9taXNlLlxuICAgKiBAZXhhbXBsZSBmb2xsb3dVc2VycyhbJ3RoZWxpbm1pY2hhZWwnLCAnd2l6emxlciddKS50aGVuKC4uLilcbiAgICogQHJldHVybnMge1Byb21pc2V8dW5kZWZpbmVkfSBBIHByb21pc2UgdGhhdCBpZiBzdWNjZXNzZnVsLCBzaW1wbHkgcmVzb2x2ZXMgdG8gYW4gZW1wdHkgb2JqZWN0LiBJZiByZWplY3RlZCxcbiAgICogICAgICAgICAgaXQgY29udGFpbnMgYW4gZXJyb3Igb2JqZWN0LiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIGZvbGxvd1VzZXJzOiBmdW5jdGlvbih1c2VySWRzLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0ID0gV2ViQXBpUmVxdWVzdC5idWlsZGVyKClcbiAgICAgIC53aXRoUGF0aCgnL3YxL21lL2ZvbGxvd2luZycpXG4gICAgICAud2l0aFF1ZXJ5UGFyYW1ldGVycyh7XG4gICAgICAgIGlkczogdXNlcklkcy5qb2luKCcsJyksXG4gICAgICAgIHR5cGU6ICd1c2VyJ1xuICAgICAgfSlcbiAgICAgIC5idWlsZCgpO1xuXG4gICAgdGhpcy5fYWRkQWNjZXNzVG9rZW4ocmVxdWVzdCwgdGhpcy5nZXRBY2Nlc3NUb2tlbigpKTtcblxuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcGVyZm9ybVJlcXVlc3QoSHR0cE1hbmFnZXIucHV0LCByZXF1ZXN0KTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgY3VycmVudCB1c2VyIGFzIGEgZm9sbG93ZXIgb2Ygb25lIG9yIG1vcmUgYXJ0aXN0cy5cbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gYXJ0aXN0SWRzIFRoZSBJRHMgb2YgdGhlIGFydGlzdHMgdG8gYmUgZm9sbG93ZWQuXG4gICAqIEBwYXJhbSB7cmVxdWVzdENhbGxiYWNrfSBbY2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrIG1ldGhvZCB0byBiZSBjYWxsZWQgaW5zdGVhZCBvZiB0aGUgcHJvbWlzZS5cbiAgICogQGV4YW1wbGUgZm9sbG93QXJ0aXN0cyhbJzBMY0pMcWJCbWFHVWZ0MWU5TW04SFYnLCAnM2dxdjFrZ2l2QWM5MktuVW00ZWxLdiddKS50aGVuKC4uLilcbiAgICogQHJldHVybnMge1Byb21pc2V8dW5kZWZpbmVkfSBBIHByb21pc2UgdGhhdCBpZiBzdWNjZXNzZnVsLCBzaW1wbHkgcmVzb2x2ZXMgdG8gYW4gZW1wdHkgb2JqZWN0LiBJZiByZWplY3RlZCxcbiAgICogICAgICAgICAgaXQgY29udGFpbnMgYW4gZXJyb3Igb2JqZWN0LiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIGZvbGxvd0FydGlzdHM6IGZ1bmN0aW9uKGFydGlzdElkcywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdCA9IFdlYkFwaVJlcXVlc3QuYnVpbGRlcigpXG4gICAgICAud2l0aFBhdGgoJy92MS9tZS9mb2xsb3dpbmcnKVxuICAgICAgLndpdGhRdWVyeVBhcmFtZXRlcnMoe1xuICAgICAgICBpZHM6IGFydGlzdElkcy5qb2luKCcsJyksXG4gICAgICAgIHR5cGU6ICdhcnRpc3QnXG4gICAgICB9KVxuICAgICAgLmJ1aWxkKCk7XG5cbiAgICB0aGlzLl9hZGRBY2Nlc3NUb2tlbihyZXF1ZXN0LCB0aGlzLmdldEFjY2Vzc1Rva2VuKCkpO1xuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wZXJmb3JtUmVxdWVzdChIdHRwTWFuYWdlci5wdXQsIHJlcXVlc3QpO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjdXJyZW50IHVzZXIgYXMgYSBmb2xsb3dlciBvZiBvbmUgb3IgbW9yZSBvdGhlciBTcG90aWZ5IHVzZXJzLlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB1c2VySWRzIFRoZSBJRHMgb2YgdGhlIHVzZXJzIHRvIGJlIHVuZm9sbG93ZWQuXG4gICAqIEBwYXJhbSB7cmVxdWVzdENhbGxiYWNrfSBbY2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrIG1ldGhvZCB0byBiZSBjYWxsZWQgaW5zdGVhZCBvZiB0aGUgcHJvbWlzZS5cbiAgICogQGV4YW1wbGUgdW5mb2xsb3dVc2VycyhbJ3RoZWxpbm1pY2hhZWwnLCAnd2l6emxlciddKS50aGVuKC4uLilcbiAgICogQHJldHVybnMge1Byb21pc2V8dW5kZWZpbmVkfSBBIHByb21pc2UgdGhhdCBpZiBzdWNjZXNzZnVsLCBzaW1wbHkgcmVzb2x2ZXMgdG8gYW4gZW1wdHkgb2JqZWN0LiBJZiByZWplY3RlZCxcbiAgICogICAgICAgICAgaXQgY29udGFpbnMgYW4gZXJyb3Igb2JqZWN0LiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIHVuZm9sbG93VXNlcnM6IGZ1bmN0aW9uKHVzZXJJZHMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3QgPSBXZWJBcGlSZXF1ZXN0LmJ1aWxkZXIoKVxuICAgICAgLndpdGhQYXRoKCcvdjEvbWUvZm9sbG93aW5nJylcbiAgICAgIC53aXRoUXVlcnlQYXJhbWV0ZXJzKHtcbiAgICAgICAgaWRzOiB1c2VySWRzLmpvaW4oJywnKSxcbiAgICAgICAgdHlwZTogJ3VzZXInXG4gICAgICB9KVxuICAgICAgLmJ1aWxkKCk7XG5cbiAgICB0aGlzLl9hZGRBY2Nlc3NUb2tlbihyZXF1ZXN0LCB0aGlzLmdldEFjY2Vzc1Rva2VuKCkpO1xuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wZXJmb3JtUmVxdWVzdChIdHRwTWFuYWdlci5kZWwsIHJlcXVlc3QpO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjdXJyZW50IHVzZXIgYXMgYSBmb2xsb3dlciBvZiBvbmUgb3IgbW9yZSBhcnRpc3RzLlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBhcnRpc3RJZHMgVGhlIElEcyBvZiB0aGUgYXJ0aXN0cyB0byBiZSB1bmZvbGxvd2VkLlxuICAgKiBAcGFyYW0ge3JlcXVlc3RDYWxsYmFja30gW2NhbGxiYWNrXSBPcHRpb25hbCBjYWxsYmFjayBtZXRob2QgdG8gYmUgY2FsbGVkIGluc3RlYWQgb2YgdGhlIHByb21pc2UuXG4gICAqIEBleGFtcGxlIHVuZm9sbG93QXJ0aXN0cyhbJzBMY0pMcWJCbWFHVWZ0MWU5TW04SFYnLCAnM2dxdjFrZ2l2QWM5MktuVW00ZWxLdiddKS50aGVuKC4uLilcbiAgICogQHJldHVybnMge1Byb21pc2V8dW5kZWZpbmVkfSBBIHByb21pc2UgdGhhdCBpZiBzdWNjZXNzZnVsLCBzaW1wbHkgcmVzb2x2ZXMgdG8gYW4gZW1wdHkgb2JqZWN0LiBJZiByZWplY3RlZCxcbiAgICogICAgICAgICAgaXQgY29udGFpbnMgYW4gZXJyb3Igb2JqZWN0LiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIHVuZm9sbG93QXJ0aXN0czogZnVuY3Rpb24oYXJ0aXN0SWRzLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0ID0gV2ViQXBpUmVxdWVzdC5idWlsZGVyKClcbiAgICAgIC53aXRoUGF0aCgnL3YxL21lL2ZvbGxvd2luZycpXG4gICAgICAud2l0aFF1ZXJ5UGFyYW1ldGVycyh7XG4gICAgICAgIGlkczogYXJ0aXN0SWRzLmpvaW4oJywnKSxcbiAgICAgICAgdHlwZTogJ2FydGlzdCdcbiAgICAgIH0pXG4gICAgICAuYnVpbGQoKTtcblxuICAgIHRoaXMuX2FkZEFjY2Vzc1Rva2VuKHJlcXVlc3QsIHRoaXMuZ2V0QWNjZXNzVG9rZW4oKSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3BlcmZvcm1SZXF1ZXN0KEh0dHBNYW5hZ2VyLmRlbCwgcmVxdWVzdCk7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVjayB0byBzZWUgaWYgdGhlIGN1cnJlbnQgdXNlciBpcyBmb2xsb3dpbmcgb25lIG9yIG1vcmUgb3RoZXIgU3BvdGlmeSB1c2Vycy5cbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdXNlcklkcyBUaGUgSURzIG9mIHRoZSB1c2VycyB0byBjaGVjayBpZiBhcmUgZm9sbG93ZWQgYnkgdGhlIGN1cnJlbnQgdXNlci5cbiAgICogQHBhcmFtIHtyZXF1ZXN0Q2FsbGJhY2t9IFtjYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbnN0ZWFkIG9mIHRoZSBwcm9taXNlLlxuICAgKiBAZXhhbXBsZSBpc0ZvbGxvd2luZ1VzZXJzKFsndGhlbGlubWljaGFlbCcsICd3aXp6bGVyJ10pLnRoZW4oLi4uKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IEEgcHJvbWlzZSB0aGF0IGlmIHN1Y2Nlc3NmdWwsIHJlc29sdmVzIGludG8gYW4gYXJyYXkgb2YgYm9vbGVhbnMuIFRoZSBvcmRlclxuICAgKiAgICAgICAgICBvZiB0aGUgcmV0dXJuZWQgYXJyYXkncyBlbGVtZW50cyBjb3JyZXNwb25kIHRvIHRoZSB1c2VycyBJRHMgaW4gdGhlIHJlcXVlc3QuXG4gICAqICAgICAgICAgIFRoZSBib29sZWFuIHZhbHVlIG9mIHRydWUgaW5kaWNhdGVzIHRoYXQgdGhlIHVzZXIgaXMgZm9sbG93aW5nIHRoYXQgdXNlciwgb3RoZXJ3aXNlIGlzIG5vdC5cbiAgICogICAgICAgICAgTm90IHJldHVybmVkIGlmIGEgY2FsbGJhY2sgaXMgZ2l2ZW4uXG4gICAqL1xuICBpc0ZvbGxvd2luZ1VzZXJzOiBmdW5jdGlvbih1c2VySWRzLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0ID0gV2ViQXBpUmVxdWVzdC5idWlsZGVyKClcbiAgICAgIC53aXRoUGF0aCgnL3YxL21lL2ZvbGxvd2luZy9jb250YWlucycpXG4gICAgICAud2l0aFF1ZXJ5UGFyYW1ldGVycyh7XG4gICAgICAgIGlkczogdXNlcklkcy5qb2luKCcsJyksXG4gICAgICAgIHR5cGU6ICd1c2VyJ1xuICAgICAgfSlcbiAgICAgIC5idWlsZCgpO1xuXG4gICAgdGhpcy5fYWRkQWNjZXNzVG9rZW4ocmVxdWVzdCwgdGhpcy5nZXRBY2Nlc3NUb2tlbigpKTtcblxuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcGVyZm9ybVJlcXVlc3QoSHR0cE1hbmFnZXIuZ2V0LCByZXF1ZXN0KTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCB1c2VyJ3MgZm9sbG93ZWQgYXJ0aXN0cy5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBPcHRpb25zLCBiZWluZyBhZnRlciBhbmQgbGltaXQuXG4gICAqIEBwYXJhbSB7cmVxdWVzdENhbGxiYWNrfSBbY2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrIG1ldGhvZCB0byBiZSBjYWxsZWQgaW5zdGVhZCBvZiB0aGUgcHJvbWlzZS5cbiAgICogQHJldHVybnMge1Byb21pc2V8dW5kZWZpbmVkfSBBIHByb21pc2UgdGhhdCBpZiBzdWNjZXNzZnVsLCByZXNvbHZlcyB0byBhbiBvYmplY3QgY29udGFpbmluZyBhIHBhZ2luZyBvYmplY3Qgd2hpY2ggY29udGFpbnNcbiAgICogYWxidW0gb2JqZWN0cy4gTm90IHJldHVybmVkIGlmIGEgY2FsbGJhY2sgaXMgZ2l2ZW4uXG4gICAqL1xuICBnZXRGb2xsb3dlZEFydGlzdHM6IGZ1bmN0aW9uKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3QgPSBXZWJBcGlSZXF1ZXN0LmJ1aWxkZXIoKVxuICAgICAgLndpdGhQYXRoKCcvdjEvbWUvZm9sbG93aW5nJylcbiAgICAgIC53aXRoSGVhZGVycyh7ICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXG4gICAgICAud2l0aFF1ZXJ5UGFyYW1ldGVycyh7XG4gICAgICAgIHR5cGUgOiAnYXJ0aXN0J1xuICAgICAgfSlcbiAgICAgIC5idWlsZCgpO1xuXG4gICAgdGhpcy5fYWRkQWNjZXNzVG9rZW4ocmVxdWVzdCwgdGhpcy5nZXRBY2Nlc3NUb2tlbigpKTtcbiAgICB0aGlzLl9hZGRRdWVyeVBhcmFtZXRlcnMocmVxdWVzdCwgb3B0aW9ucyk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3BlcmZvcm1SZXF1ZXN0KEh0dHBNYW5hZ2VyLmdldCwgcmVxdWVzdCk7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB1c2VycyBhcmUgZm9sbG93aW5nIGEgcGxheWxpc3QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgVGhlIHBsYXlsaXN0J3Mgb3duZXIncyB1c2VyIElEXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwbGF5bGlzdElkIFRoZSBwbGF5bGlzdCdzIElEXG4gICAqIEBwYXJhbSB7U3RyaW5nW119IFVzZXIgSURzIG9mIHRoZSBmb2xsb3dpbmcgdXNlcnNcbiAgICogQHBhcmFtIHtyZXF1ZXN0Q2FsbGJhY2t9IFtjYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbnN0ZWFkIG9mIHRoZSBwcm9taXNlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IEEgcHJvbWlzZSB0aGF0IGlmIHN1Y2Nlc3NmdWwgcmV0dXJucyBhbiBhcnJheSBvZiBib29sZWFucy4gSWYgcmVqZWN0ZWQsXG4gICAqIGl0IGNvbnRhaW5zIGFuIGVycm9yIG9iamVjdC4gTm90IHJldHVybmVkIGlmIGEgY2FsbGJhY2sgaXMgZ2l2ZW4uXG4gICAqL1xuICBhcmVGb2xsb3dpbmdQbGF5bGlzdDogZnVuY3Rpb24odXNlcklkLCBwbGF5bGlzdElkLCBmb2xsb3dlcklkcywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdCA9IFdlYkFwaVJlcXVlc3QuYnVpbGRlcigpXG4gICAgICAud2l0aFBhdGgoJy92MS91c2Vycy8nICsgZW5jb2RlVVJJQ29tcG9uZW50KHVzZXJJZCkgKyAnL3BsYXlsaXN0cy8nICsgcGxheWxpc3RJZCArICcvZm9sbG93ZXJzL2NvbnRhaW5zJylcbiAgICAgIC53aXRoUXVlcnlQYXJhbWV0ZXJzKHtcbiAgICAgICAgaWRzIDogZm9sbG93ZXJJZHMuam9pbignLCcpXG4gICAgICB9KVxuICAgICAgLmJ1aWxkKCk7XG5cbiAgICB0aGlzLl9hZGRBY2Nlc3NUb2tlbihyZXF1ZXN0LCB0aGlzLmdldEFjY2Vzc1Rva2VuKCkpO1xuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wZXJmb3JtUmVxdWVzdChIdHRwTWFuYWdlci5nZXQsIHJlcXVlc3QpO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQ2hlY2sgdG8gc2VlIGlmIHRoZSBjdXJyZW50IHVzZXIgaXMgZm9sbG93aW5nIG9uZSBvciBtb3JlIGFydGlzdHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGFydGlzdElkcyBUaGUgSURzIG9mIHRoZSBhcnRpc3RzIHRvIGNoZWNrIGlmIGFyZSBmb2xsb3dlZCBieSB0aGUgY3VycmVudCB1c2VyLlxuICAgKiBAcGFyYW0ge3JlcXVlc3RDYWxsYmFja30gW2NhbGxiYWNrXSBPcHRpb25hbCBjYWxsYmFjayBtZXRob2QgdG8gYmUgY2FsbGVkIGluc3RlYWQgb2YgdGhlIHByb21pc2UuXG4gICAqIEBleGFtcGxlIGlzRm9sbG93aW5nQXJ0aXN0cyhbJzBMY0pMcWJCbWFHVWZ0MWU5TW04SFYnLCAnM2dxdjFrZ2l2QWM5MktuVW00ZWxLdiddKS50aGVuKC4uLilcbiAgICogQHJldHVybnMge1Byb21pc2V8dW5kZWZpbmVkfSBBIHByb21pc2UgdGhhdCBpZiBzdWNjZXNzZnVsLCByZXNvbHZlcyBpbnRvIGFuIGFycmF5IG9mIGJvb2xlYW5zLiBUaGUgb3JkZXJcbiAgICogICAgICAgICAgb2YgdGhlIHJldHVybmVkIGFycmF5J3MgZWxlbWVudHMgY29ycmVzcG9uZCB0byB0aGUgYXJ0aXN0cyBJRHMgaW4gdGhlIHJlcXVlc3QuXG4gICAqICAgICAgICAgIFRoZSBib29sZWFuIHZhbHVlIG9mIHRydWUgaW5kaWNhdGVzIHRoYXQgdGhlIHVzZXIgaXMgZm9sbG93aW5nIHRoYXQgYXJ0aXN0LCBvdGhlcndpc2UgaXMgbm90LlxuICAgKiAgICAgICAgICBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIGlzRm9sbG93aW5nQXJ0aXN0czogZnVuY3Rpb24oYXJ0aXN0SWRzLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0ID0gV2ViQXBpUmVxdWVzdC5idWlsZGVyKClcbiAgICAgIC53aXRoUGF0aCgnL3YxL21lL2ZvbGxvd2luZy9jb250YWlucycpXG4gICAgICAud2l0aFF1ZXJ5UGFyYW1ldGVycyh7XG4gICAgICAgIGlkczogYXJ0aXN0SWRzLmpvaW4oJywnKSxcbiAgICAgICAgdHlwZTogJ2FydGlzdCdcbiAgICAgIH0pXG4gICAgICAuYnVpbGQoKTtcblxuICAgIHRoaXMuX2FkZEFjY2Vzc1Rva2VuKHJlcXVlc3QsIHRoaXMuZ2V0QWNjZXNzVG9rZW4oKSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3BlcmZvcm1SZXF1ZXN0KEh0dHBNYW5hZ2VyLmdldCwgcmVxdWVzdCk7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBuZXcgcmVsZWFzZXNcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBPcHRpb25zLCBiZWluZyBjb3VudHJ5LCBsaW1pdCBhbmQvb3Igb2Zmc2V0LlxuICAgKiBAcGFyYW0ge3JlcXVlc3RDYWxsYmFja30gW2NhbGxiYWNrXSBPcHRpb25hbCBjYWxsYmFjayBtZXRob2QgdG8gYmUgY2FsbGVkIGluc3RlYWQgb2YgdGhlIHByb21pc2UuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfHVuZGVmaW5lZH0gQSBwcm9taXNlIHRoYXQgaWYgc3VjY2Vzc2Z1bCwgcmVzb2x2ZXMgdG8gYW4gb2JqZWN0IGNvbnRhaW5pbmcgYSBwYWdpbmcgb2JqZWN0IHdoaWNoIGNvbnRhaW5zXG4gICAqIGFsYnVtIG9iamVjdHMuIE5vdCByZXR1cm5lZCBpZiBhIGNhbGxiYWNrIGlzIGdpdmVuLlxuICAgKi9cbiAgZ2V0TmV3UmVsZWFzZXM6IGZ1bmN0aW9uKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3QgPSBXZWJBcGlSZXF1ZXN0LmJ1aWxkZXIoKVxuICAgICAgLndpdGhQYXRoKCcvdjEvYnJvd3NlL25ldy1yZWxlYXNlcycpXG4gICAgICAud2l0aEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJyA6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxuICAgICAgLndpdGhRdWVyeVBhcmFtZXRlcnMob3B0aW9ucylcbiAgICAgIC5idWlsZCgpO1xuXG4gICAgdGhpcy5fYWRkQWNjZXNzVG9rZW4ocmVxdWVzdCwgdGhpcy5nZXRBY2Nlc3NUb2tlbigpKTtcblxuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcGVyZm9ybVJlcXVlc3QoSHR0cE1hbmFnZXIuZ2V0LCByZXF1ZXN0KTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGZlYXR1cmVkIHBsYXlsaXN0c1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnMsIGJlaW5nIGNvdW50cnksIGxvY2FsZSwgdGltZXN0YW1wLCBsaW1pdCwgb2Zmc2V0LlxuICAgKiBAcGFyYW0ge3JlcXVlc3RDYWxsYmFja30gW2NhbGxiYWNrXSBPcHRpb25hbCBjYWxsYmFjayBtZXRob2QgdG8gYmUgY2FsbGVkIGluc3RlYWQgb2YgdGhlIHByb21pc2UuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfHVuZGVmaW5lZH0gQSBwcm9taXNlIHRoYXQgaWYgc3VjY2Vzc2Z1bCwgcmVzb2x2ZXMgdG8gYW4gb2JqZWN0IGNvbnRhaW5pbmcgYSBwYWdpbmcgb2JqZWN0IHdoaWNoIGNvbnRhaW5zXG4gICAqIGZlYXR1cmVkIHBsYXlsaXN0cy4gTm90IHJldHVybmVkIGlmIGEgY2FsbGJhY2sgaXMgZ2l2ZW4uXG4gICAqL1xuICBnZXRGZWF0dXJlZFBsYXlsaXN0czogZnVuY3Rpb24ob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdCA9IFdlYkFwaVJlcXVlc3QuYnVpbGRlcigpXG4gICAgICAud2l0aFBhdGgoJy92MS9icm93c2UvZmVhdHVyZWQtcGxheWxpc3RzJylcbiAgICAgIC53aXRoSGVhZGVycyh7ICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXG4gICAgICAud2l0aFF1ZXJ5UGFyYW1ldGVycyhvcHRpb25zKVxuICAgICAgLmJ1aWxkKCk7XG5cbiAgICB0aGlzLl9hZGRBY2Nlc3NUb2tlbihyZXF1ZXN0LCB0aGlzLmdldEFjY2Vzc1Rva2VuKCkpO1xuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wZXJmb3JtUmVxdWVzdChIdHRwTWFuYWdlci5nZXQsIHJlcXVlc3QpO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUmV0cmlldmUgYSBsaXN0IG9mIGNhdGVnb3JpZXMgdXNlZCB0byB0YWcgaXRlbXMgaW4gU3BvdGlmeSAoZS5nLiBpbiB0aGUgJ0Jyb3dzZScgdGFiKVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnMsIGJlaW5nIGNvdW50cnksIGxvY2FsZSwgbGltaXQsIG9mZnNldC5cbiAgICogQHBhcmFtIHtyZXF1ZXN0Q2FsbGJhY2t9IFtjYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbnN0ZWFkIG9mIHRoZSBwcm9taXNlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IEEgcHJvbWlzZSB0aGF0IGlmIHN1Y2Nlc3NmdWwsIHJlc29sdmVzIHRvIGFuIG9iamVjdCBjb250YWluaW5nIGEgcGFnaW5nIG9iamVjdCBvZiBjYXRlZ29yaWVzLlxuICAgKiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIGdldENhdGVnb3JpZXM6IGZ1bmN0aW9uKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3QgPSBXZWJBcGlSZXF1ZXN0LmJ1aWxkZXIoKVxuICAgICAgLndpdGhQYXRoKCcvdjEvYnJvd3NlL2NhdGVnb3JpZXMnKVxuICAgICAgLndpdGhRdWVyeVBhcmFtZXRlcnMob3B0aW9ucylcbiAgICAgIC5idWlsZCgpO1xuXG4gICAgdGhpcy5fYWRkQWNjZXNzVG9rZW4ocmVxdWVzdCwgdGhpcy5nZXRBY2Nlc3NUb2tlbigpKTtcblxuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcGVyZm9ybVJlcXVlc3QoSHR0cE1hbmFnZXIuZ2V0LCByZXF1ZXN0KTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGEgY2F0ZWdvcnkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjYXRlZ29yeUlkIFRoZSBpZCBvZiB0aGUgY2F0ZWdvcnkgdG8gcmV0cmlldmUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gT3B0aW9ucywgYmVpbmcgY291bnRyeSwgbG9jYWxlLlxuICAgKiBAcGFyYW0ge3JlcXVlc3RDYWxsYmFja30gW2NhbGxiYWNrXSBPcHRpb25hbCBjYWxsYmFjayBtZXRob2QgdG8gYmUgY2FsbGVkIGluc3RlYWQgb2YgdGhlIHByb21pc2UuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfHVuZGVmaW5lZH0gQSBwcm9taXNlIHRoYXQgaWYgc3VjY2Vzc2Z1bCwgcmVzb2x2ZXMgdG8gYW4gb2JqZWN0IGNvbnRhaW5pbmcgYSBjYXRlZ29yeSBvYmplY3QuXG4gICAqIE5vdCByZXR1cm5lZCBpZiBhIGNhbGxiYWNrIGlzIGdpdmVuLlxuICAgKi9cbiAgZ2V0Q2F0ZWdvcnk6IGZ1bmN0aW9uKGNhdGVnb3J5SWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3QgPSBXZWJBcGlSZXF1ZXN0LmJ1aWxkZXIoKVxuICAgICAgLndpdGhQYXRoKCcvdjEvYnJvd3NlL2NhdGVnb3JpZXMvJyArIGNhdGVnb3J5SWQpXG4gICAgICAud2l0aFF1ZXJ5UGFyYW1ldGVycyhvcHRpb25zKVxuICAgICAgLmJ1aWxkKCk7XG5cbiAgICB0aGlzLl9hZGRBY2Nlc3NUb2tlbihyZXF1ZXN0LCB0aGlzLmdldEFjY2Vzc1Rva2VuKCkpO1xuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wZXJmb3JtUmVxdWVzdChIdHRwTWFuYWdlci5nZXQsIHJlcXVlc3QpO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUmV0cmlldmUgcGxheWxpc3RzIGZvciBhIGNhdGVnb3J5LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2F0ZWdvcnlJZCBUaGUgaWQgb2YgdGhlIGNhdGVnb3J5IHRvIHJldHJpZXZlIHBsYXlsaXN0cyBmb3IuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gT3B0aW9ucywgYmVpbmcgY291bnRyeSwgbGltaXQsIG9mZnNldC5cbiAgICogQHBhcmFtIHtyZXF1ZXN0Q2FsbGJhY2t9IFtjYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbnN0ZWFkIG9mIHRoZSBwcm9taXNlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IEEgcHJvbWlzZSB0aGF0IGlmIHN1Y2Nlc3NmdWwsIHJlc29sdmVzIHRvIGEgcGFnaW5nIG9iamVjdCBjb250YWluaW5nIHNpbXBsZSBwbGF5bGlzdHMuXG4gICAqIE5vdCByZXR1cm5lZCBpZiBhIGNhbGxiYWNrIGlzIGdpdmVuLlxuICAgKi9cbiAgZ2V0UGxheWxpc3RzRm9yQ2F0ZWdvcnk6IGZ1bmN0aW9uKGNhdGVnb3J5SWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3QgPSBXZWJBcGlSZXF1ZXN0LmJ1aWxkZXIoKVxuICAgICAgLndpdGhQYXRoKCcvdjEvYnJvd3NlL2NhdGVnb3JpZXMvJyArIGNhdGVnb3J5SWQgKyAnL3BsYXlsaXN0cycpXG4gICAgICAud2l0aFF1ZXJ5UGFyYW1ldGVycyhvcHRpb25zKVxuICAgICAgLmJ1aWxkKCk7XG5cbiAgICB0aGlzLl9hZGRBY2Nlc3NUb2tlbihyZXF1ZXN0LCB0aGlzLmdldEFjY2Vzc1Rva2VuKCkpO1xuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wZXJmb3JtUmVxdWVzdChIdHRwTWFuYWdlci5nZXQsIHJlcXVlc3QpO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgfVxufTtcblxuU3BvdGlmeVdlYkFwaS5fYWRkTWV0aG9kcyA9IGZ1bmN0aW9uKG1ldGhvZHMpIHtcbiAgZm9yICh2YXIgaSBpbiBtZXRob2RzKSB7XG4gICAgaWYgKG1ldGhvZHMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIHRoaXMucHJvdG90eXBlW2ldID0gbWV0aG9kc1tpXTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3BvdGlmeVdlYkFwaTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nwb3RpZnktd2ViLWFwaS1ub2RlL3NyYy9zcG90aWZ5LXdlYi1hcGkuanNcbi8vIG1vZHVsZSBpZCA9IDYyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBSZXF1ZXN0ID0gcmVxdWlyZSgnLi9iYXNlLXJlcXVlc3QnKTtcblxudmFyIERFRkFVTFRfSE9TVCA9ICdhY2NvdW50cy5zcG90aWZ5LmNvbScsXG4gICAgREVGQVVMVF9QT1JUID0gNDQzLFxuICAgIERFRkFVTFRfU0NIRU1FID0gJ2h0dHBzJztcblxubW9kdWxlLmV4cG9ydHMuYnVpbGRlciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gUmVxdWVzdC5idWlsZGVyKClcbiAgICAgIC53aXRoSG9zdChERUZBVUxUX0hPU1QpXG4gICAgICAud2l0aFBvcnQoREVGQVVMVF9QT1JUKVxuICAgICAgLndpdGhTY2hlbWUoREVGQVVMVF9TQ0hFTUUpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zcG90aWZ5LXdlYi1hcGktbm9kZS9zcmMvYXV0aGVudGljYXRpb24tcmVxdWVzdC5qc1xuLy8gbW9kdWxlIGlkID0gNjMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFJlcXVlc3QgPSByZXF1aXJlKCcuL2Jhc2UtcmVxdWVzdCcpO1xuXG52YXIgREVGQVVMVF9IT1NUID0gJ2FwaS5zcG90aWZ5LmNvbScsXG4gICAgREVGQVVMVF9QT1JUID0gNDQzLFxuICAgIERFRkFVTFRfU0NIRU1FID0gJ2h0dHBzJztcblxubW9kdWxlLmV4cG9ydHMuYnVpbGRlciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gUmVxdWVzdC5idWlsZGVyKClcbiAgICAgIC53aXRoSG9zdChERUZBVUxUX0hPU1QpXG4gICAgICAud2l0aFBvcnQoREVGQVVMVF9QT1JUKVxuICAgICAgLndpdGhTY2hlbWUoREVGQVVMVF9TQ0hFTUUpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zcG90aWZ5LXdlYi1hcGktbm9kZS9zcmMvd2ViYXBpLXJlcXVlc3QuanNcbi8vIG1vZHVsZSBpZCA9IDYzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzdXBlcmFnZW50ID0gcmVxdWlyZSgnc3VwZXJhZ2VudCcpLFxuICAgIFdlYkFwaUVycm9yID0gcmVxdWlyZSgnLi93ZWJhcGktZXJyb3InKTtcblxudmFyIEh0dHBNYW5hZ2VyID0ge307XG5cbi8qIENyZWF0ZSBzdXBlcmFnZW50IG9wdGlvbnMgZnJvbSB0aGUgYmFzZSByZXF1ZXN0ICovXG52YXIgX2dldFBhcmFtZXRlcnNGcm9tUmVxdWVzdCA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcblxuICB2YXIgb3B0aW9ucyA9IHt9O1xuXG4gIGlmIChyZXF1ZXN0LmdldFF1ZXJ5UGFyYW1ldGVycygpKSB7XG4gICAgb3B0aW9ucy5xdWVyeSA9IHJlcXVlc3QuZ2V0UXVlcnlQYXJhbWV0ZXJzKCk7XG4gIH1cblxuICBpZiAocmVxdWVzdC5nZXRIZWFkZXJzKCkgJiZcbiAgICAgIHJlcXVlc3QuZ2V0SGVhZGVycygpWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nKSB7XG4gICAgb3B0aW9ucy5kYXRhID0gSlNPTi5zdHJpbmdpZnkocmVxdWVzdC5nZXRCb2R5UGFyYW1ldGVycygpKTtcbiAgfSBlbHNlIGlmIChyZXF1ZXN0LmdldEJvZHlQYXJhbWV0ZXJzKCkpIHtcbiAgICBvcHRpb25zLmRhdGEgPSByZXF1ZXN0LmdldEJvZHlQYXJhbWV0ZXJzKCk7XG4gIH1cblxuICBpZiAocmVxdWVzdC5nZXRIZWFkZXJzKCkpIHtcbiAgICBvcHRpb25zLmhlYWRlcnMgPSByZXF1ZXN0LmdldEhlYWRlcnMoKTtcbiAgfVxuICByZXR1cm4gb3B0aW9ucztcbn07XG5cbi8qIENyZWF0ZSBhbiBlcnJvciBvYmplY3QgZnJvbSBhbiBlcnJvciByZXR1cm5lZCBmcm9tIHRoZSBXZWIgQVBJICovXG52YXIgX2dldEVycm9yT2JqZWN0ID0gZnVuY3Rpb24oZGVmYXVsdE1lc3NhZ2UsIGVycikge1xuICB2YXIgZXJyb3JPYmplY3Q7XG4gIGlmICh0eXBlb2YgZXJyLmVycm9yID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgZXJyLmVycm9yLm1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gV2ViIEFQSSBFcnJvciBmb3JtYXRcbiAgICBlcnJvck9iamVjdCA9IG5ldyBXZWJBcGlFcnJvcihlcnIuZXJyb3IubWVzc2FnZSwgZXJyLmVycm9yLnN0YXR1cyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVyci5lcnJvciA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBBdXRob3JpemF0aW9uIEVycm9yIGZvcm1hdFxuICAgIC8qIGpzaGludCBpZ25vcmU6c3RhcnQgKi9cbiAgICBlcnJvck9iamVjdCA9IG5ldyBXZWJBcGlFcnJvcihlcnIuZXJyb3IgKyAnOiAnICsgZXJyWydlcnJvcl9kZXNjcmlwdGlvbiddKTtcbiAgICAvKiBqc2hpbnQgaWdub3JlOmVuZCAqL1xuICB9IGVsc2UgaWYgKHR5cGVvZiBlcnIgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gU2VyaWFsaXplZCBKU09OIGVycm9yXG4gICAgdHJ5IHtcbiAgICAgIHZhciBwYXJzZWRFcnJvciA9IEpTT04ucGFyc2UoZXJyKTtcbiAgICAgIGVycm9yT2JqZWN0ID0gbmV3IFdlYkFwaUVycm9yKHBhcnNlZEVycm9yLmVycm9yLm1lc3NhZ2UsIHBhcnNlZEVycm9yLmVycm9yLnN0YXR1cyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBFcnJvciBub3QgSlNPTiBmb3JtYXR0ZWRcbiAgICB9XG4gIH1cblxuICBpZighZXJyb3JPYmplY3QpIHtcbiAgICAvLyBVbmV4cGVjdGVkIGZvcm1hdFxuICAgIGVycm9yT2JqZWN0ID0gbmV3IFdlYkFwaUVycm9yKGRlZmF1bHRNZXNzYWdlICsgJzogJyArIEpTT04uc3RyaW5naWZ5KGVycikpO1xuICB9XG5cbiAgcmV0dXJuIGVycm9yT2JqZWN0O1xufTtcblxuLyogTWFrZSB0aGUgcmVxdWVzdCB0byB0aGUgV2ViIEFQSSAqL1xuSHR0cE1hbmFnZXIuX21ha2VSZXF1ZXN0ID0gZnVuY3Rpb24obWV0aG9kLCBvcHRpb25zLCB1cmksIGNhbGxiYWNrKSB7XG4gIHZhciByZXEgPSBtZXRob2QodXJpKTtcblxuICBpZiAob3B0aW9ucy5xdWVyeSkge1xuICAgIHJlcS5xdWVyeShvcHRpb25zLnF1ZXJ5KTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmRhdGEgJiYgKCFvcHRpb25zLmhlYWRlcnMgfHwgb3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSAhPT0gJ2FwcGxpY2F0aW9uL2pzb24nKSkge1xuICAgIHJlcS50eXBlKCdmb3JtJyk7XG4gICAgcmVxLnNlbmQob3B0aW9ucy5kYXRhKTtcbiAgfSBlbHNlIGlmIChvcHRpb25zLmRhdGEpIHtcbiAgICByZXEuc2VuZChvcHRpb25zLmRhdGEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGVhZGVycykge1xuICAgIHJlcS5zZXQob3B0aW9ucy5oZWFkZXJzKTtcbiAgfVxuXG4gIHJlcS5lbmQoZnVuY3Rpb24gKGVyciwgcmVzcG9uc2UpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICB2YXIgZXJyb3JPYmplY3QgPSBfZ2V0RXJyb3JPYmplY3QoJ1JlcXVlc3QgZXJyb3InLCB7XG4gICAgICAgIGVycm9yOiBlcnJcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yT2JqZWN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwge1xuICAgICAgYm9keTogcmVzcG9uc2UuYm9keSxcbiAgICAgIGhlYWRlcnM6IHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBzdGF0dXNDb2RlOiByZXNwb25zZS5zdGF0dXNDb2RlXG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBNYWtlIGEgSFRUUCBHRVQgcmVxdWVzdC5cbiAqIEBwYXJhbSB7QmFzZVJlcXVlc3R9IFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICovXG5IdHRwTWFuYWdlci5nZXQgPSBmdW5jdGlvbihyZXF1ZXN0LCBjYWxsYmFjaykge1xuICB2YXIgb3B0aW9ucyA9IF9nZXRQYXJhbWV0ZXJzRnJvbVJlcXVlc3QocmVxdWVzdCk7XG4gIHZhciBtZXRob2QgPSBzdXBlcmFnZW50LmdldDtcblxuICBIdHRwTWFuYWdlci5fbWFrZVJlcXVlc3QobWV0aG9kLCBvcHRpb25zLCByZXF1ZXN0LmdldFVSSSgpLCBjYWxsYmFjayk7XG59O1xuXG4vKipcbiAqIE1ha2UgYSBIVFRQIFBPU1QgcmVxdWVzdC5cbiAqIEBwYXJhbSB7QmFzZVJlcXVlc3R9IFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICovXG5IdHRwTWFuYWdlci5wb3N0ID0gZnVuY3Rpb24ocmVxdWVzdCwgY2FsbGJhY2spIHtcblxuICB2YXIgb3B0aW9ucyA9IF9nZXRQYXJhbWV0ZXJzRnJvbVJlcXVlc3QocmVxdWVzdCk7XG4gIHZhciBtZXRob2QgPSBzdXBlcmFnZW50LnBvc3Q7XG5cbiAgSHR0cE1hbmFnZXIuX21ha2VSZXF1ZXN0KG1ldGhvZCwgb3B0aW9ucywgcmVxdWVzdC5nZXRVUkkoKSwgY2FsbGJhY2spO1xufTtcblxuLyoqXG4gKiBNYWtlIGEgSFRUUCBERUxFVEUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7QmFzZVJlcXVlc3R9IFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICovXG5IdHRwTWFuYWdlci5kZWwgPSBmdW5jdGlvbihyZXF1ZXN0LCBjYWxsYmFjaykge1xuXG4gIHZhciBvcHRpb25zID0gX2dldFBhcmFtZXRlcnNGcm9tUmVxdWVzdChyZXF1ZXN0KTtcbiAgdmFyIG1ldGhvZCA9IHN1cGVyYWdlbnQuZGVsO1xuXG4gIEh0dHBNYW5hZ2VyLl9tYWtlUmVxdWVzdChtZXRob2QsIG9wdGlvbnMsIHJlcXVlc3QuZ2V0VVJJKCksIGNhbGxiYWNrKTtcbn07XG5cbi8qKlxuICogTWFrZSBhIEhUVFAgUFVUIHJlcXVlc3QuXG4gKiBAcGFyYW0ge0Jhc2VSZXF1ZXN0fSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqL1xuSHR0cE1hbmFnZXIucHV0ID0gZnVuY3Rpb24ocmVxdWVzdCwgY2FsbGJhY2spIHtcblxuICB2YXIgb3B0aW9ucyA9IF9nZXRQYXJhbWV0ZXJzRnJvbVJlcXVlc3QocmVxdWVzdCk7XG4gIHZhciBtZXRob2QgPSBzdXBlcmFnZW50LnB1dDtcblxuICBIdHRwTWFuYWdlci5fbWFrZVJlcXVlc3QobWV0aG9kLCBvcHRpb25zLCByZXF1ZXN0LmdldFVSSSgpLCBjYWxsYmFjayk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEh0dHBNYW5hZ2VyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3BvdGlmeS13ZWItYXBpLW5vZGUvc3JjL2h0dHAtbWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gNjMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8qKlxuICogUm9vdCByZWZlcmVuY2UgZm9yIGlmcmFtZXMuXG4gKi9cblxudmFyIHJvb3Q7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgLy8gQnJvd3NlciB3aW5kb3dcbiAgcm9vdCA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7IC8vIFdlYiBXb3JrZXJcbiAgcm9vdCA9IHNlbGY7XG59IGVsc2UgeyAvLyBPdGhlciBlbnZpcm9ubWVudHNcbiAgY29uc29sZS53YXJuKFwiVXNpbmcgYnJvd3Nlci1vbmx5IHZlcnNpb24gb2Ygc3VwZXJhZ2VudCBpbiBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcbiAgcm9vdCA9IHRoaXM7XG59XG5cbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnZW1pdHRlcicpO1xudmFyIHJlcXVlc3RCYXNlID0gcmVxdWlyZSgnLi9yZXF1ZXN0LWJhc2UnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXMtb2JqZWN0Jyk7XG5cbi8qKlxuICogTm9vcC5cbiAqL1xuXG5mdW5jdGlvbiBub29wKCl7fTtcblxuLyoqXG4gKiBFeHBvc2UgYHJlcXVlc3RgLlxuICovXG5cbnZhciByZXF1ZXN0ID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3JlcXVlc3QnKS5iaW5kKG51bGwsIFJlcXVlc3QpO1xuXG4vKipcbiAqIERldGVybWluZSBYSFIuXG4gKi9cblxucmVxdWVzdC5nZXRYSFIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChyb290LlhNTEh0dHBSZXF1ZXN0XG4gICAgICAmJiAoIXJvb3QubG9jYXRpb24gfHwgJ2ZpbGU6JyAhPSByb290LmxvY2F0aW9uLnByb3RvY29sXG4gICAgICAgICAgfHwgIXJvb3QuQWN0aXZlWE9iamVjdCkpIHtcbiAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0O1xuICB9IGVsc2Uge1xuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKTsgfSBjYXRjaChlKSB7fVxuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAuNi4wJyk7IH0gY2F0Y2goZSkge31cbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQLjMuMCcpOyB9IGNhdGNoKGUpIHt9XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUCcpOyB9IGNhdGNoKGUpIHt9XG4gIH1cbiAgdGhyb3cgRXJyb3IoXCJCcm93c2VyLW9ubHkgdmVyaXNvbiBvZiBzdXBlcmFnZW50IGNvdWxkIG5vdCBmaW5kIFhIUlwiKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLCBhZGRlZCB0byBzdXBwb3J0IElFLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgdHJpbSA9ICcnLnRyaW1cbiAgPyBmdW5jdGlvbihzKSB7IHJldHVybiBzLnRyaW0oKTsgfVxuICA6IGZ1bmN0aW9uKHMpIHsgcmV0dXJuIHMucmVwbGFjZSgvKF5cXHMqfFxccyokKS9nLCAnJyk7IH07XG5cbi8qKlxuICogU2VyaWFsaXplIHRoZSBnaXZlbiBgb2JqYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZXJpYWxpemUob2JqKSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgdmFyIHBhaXJzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBwdXNoRW5jb2RlZEtleVZhbHVlUGFpcihwYWlycywga2V5LCBvYmpba2V5XSk7XG4gIH1cbiAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcbn1cblxuLyoqXG4gKiBIZWxwcyAnc2VyaWFsaXplJyB3aXRoIHNlcmlhbGl6aW5nIGFycmF5cy5cbiAqIE11dGF0ZXMgdGhlIHBhaXJzIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHBhaXJzXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqL1xuXG5mdW5jdGlvbiBwdXNoRW5jb2RlZEtleVZhbHVlUGFpcihwYWlycywga2V5LCB2YWwpIHtcbiAgaWYgKHZhbCAhPSBudWxsKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgdmFsLmZvckVhY2goZnVuY3Rpb24odikge1xuICAgICAgICBwdXNoRW5jb2RlZEtleVZhbHVlUGFpcihwYWlycywga2V5LCB2KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsKSkge1xuICAgICAgZm9yKHZhciBzdWJrZXkgaW4gdmFsKSB7XG4gICAgICAgIHB1c2hFbmNvZGVkS2V5VmFsdWVQYWlyKHBhaXJzLCBrZXkgKyAnWycgKyBzdWJrZXkgKyAnXScsIHZhbFtzdWJrZXldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFpcnMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KVxuICAgICAgICArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodmFsID09PSBudWxsKSB7XG4gICAgcGFpcnMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSk7XG4gIH1cbn1cblxuLyoqXG4gKiBFeHBvc2Ugc2VyaWFsaXphdGlvbiBtZXRob2QuXG4gKi9cblxuIHJlcXVlc3Quc2VyaWFsaXplT2JqZWN0ID0gc2VyaWFsaXplO1xuXG4gLyoqXG4gICogUGFyc2UgdGhlIGdpdmVuIHgtd3d3LWZvcm0tdXJsZW5jb2RlZCBgc3RyYC5cbiAgKlxuICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICogQGFwaSBwcml2YXRlXG4gICovXG5cbmZ1bmN0aW9uIHBhcnNlU3RyaW5nKHN0cikge1xuICB2YXIgb2JqID0ge307XG4gIHZhciBwYWlycyA9IHN0ci5zcGxpdCgnJicpO1xuICB2YXIgcGFpcjtcbiAgdmFyIHBvcztcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGFpcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBwYWlyID0gcGFpcnNbaV07XG4gICAgcG9zID0gcGFpci5pbmRleE9mKCc9Jyk7XG4gICAgaWYgKHBvcyA9PSAtMSkge1xuICAgICAgb2JqW2RlY29kZVVSSUNvbXBvbmVudChwYWlyKV0gPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2RlY29kZVVSSUNvbXBvbmVudChwYWlyLnNsaWNlKDAsIHBvcykpXSA9XG4gICAgICAgIGRlY29kZVVSSUNvbXBvbmVudChwYWlyLnNsaWNlKHBvcyArIDEpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIEV4cG9zZSBwYXJzZXIuXG4gKi9cblxucmVxdWVzdC5wYXJzZVN0cmluZyA9IHBhcnNlU3RyaW5nO1xuXG4vKipcbiAqIERlZmF1bHQgTUlNRSB0eXBlIG1hcC5cbiAqXG4gKiAgICAgc3VwZXJhZ2VudC50eXBlcy54bWwgPSAnYXBwbGljYXRpb24veG1sJztcbiAqXG4gKi9cblxucmVxdWVzdC50eXBlcyA9IHtcbiAgaHRtbDogJ3RleHQvaHRtbCcsXG4gIGpzb246ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgeG1sOiAnYXBwbGljYXRpb24veG1sJyxcbiAgdXJsZW5jb2RlZDogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICdmb3JtJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICdmb3JtLWRhdGEnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuLyoqXG4gKiBEZWZhdWx0IHNlcmlhbGl6YXRpb24gbWFwLlxuICpcbiAqICAgICBzdXBlcmFnZW50LnNlcmlhbGl6ZVsnYXBwbGljYXRpb24veG1sJ10gPSBmdW5jdGlvbihvYmope1xuICogICAgICAgcmV0dXJuICdnZW5lcmF0ZWQgeG1sIGhlcmUnO1xuICogICAgIH07XG4gKlxuICovXG5cbiByZXF1ZXN0LnNlcmlhbGl6ZSA9IHtcbiAgICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnOiBzZXJpYWxpemUsXG4gICAnYXBwbGljYXRpb24vanNvbic6IEpTT04uc3RyaW5naWZ5XG4gfTtcblxuIC8qKlxuICAqIERlZmF1bHQgcGFyc2Vycy5cbiAgKlxuICAqICAgICBzdXBlcmFnZW50LnBhcnNlWydhcHBsaWNhdGlvbi94bWwnXSA9IGZ1bmN0aW9uKHN0cil7XG4gICogICAgICAgcmV0dXJuIHsgb2JqZWN0IHBhcnNlZCBmcm9tIHN0ciB9O1xuICAqICAgICB9O1xuICAqXG4gICovXG5cbnJlcXVlc3QucGFyc2UgPSB7XG4gICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnOiBwYXJzZVN0cmluZyxcbiAgJ2FwcGxpY2F0aW9uL2pzb24nOiBKU09OLnBhcnNlXG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBoZWFkZXIgYHN0cmAgaW50b1xuICogYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG1hcHBlZCBmaWVsZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2VIZWFkZXIoc3RyKSB7XG4gIHZhciBsaW5lcyA9IHN0ci5zcGxpdCgvXFxyP1xcbi8pO1xuICB2YXIgZmllbGRzID0ge307XG4gIHZhciBpbmRleDtcbiAgdmFyIGxpbmU7XG4gIHZhciBmaWVsZDtcbiAgdmFyIHZhbDtcblxuICBsaW5lcy5wb3AoKTsgLy8gdHJhaWxpbmcgQ1JMRlxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBsaW5lcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIGxpbmUgPSBsaW5lc1tpXTtcbiAgICBpbmRleCA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGZpZWxkID0gbGluZS5zbGljZSgwLCBpbmRleCkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB0cmltKGxpbmUuc2xpY2UoaW5kZXggKyAxKSk7XG4gICAgZmllbGRzW2ZpZWxkXSA9IHZhbDtcbiAgfVxuXG4gIHJldHVybiBmaWVsZHM7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYG1pbWVgIGlzIGpzb24gb3IgaGFzICtqc29uIHN0cnVjdHVyZWQgc3ludGF4IHN1ZmZpeC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWltZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzSlNPTihtaW1lKSB7XG4gIHJldHVybiAvW1xcLytdanNvblxcYi8udGVzdChtaW1lKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIG1pbWUgdHlwZSBmb3IgdGhlIGdpdmVuIGBzdHJgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHR5cGUoc3RyKXtcbiAgcmV0dXJuIHN0ci5zcGxpdCgvICo7ICovKS5zaGlmdCgpO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gaGVhZGVyIGZpZWxkIHBhcmFtZXRlcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyYW1zKHN0cil7XG4gIHJldHVybiBzdHIuc3BsaXQoLyAqOyAqLykucmVkdWNlKGZ1bmN0aW9uKG9iaiwgc3RyKXtcbiAgICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoLyAqPSAqLyksXG4gICAgICAgIGtleSA9IHBhcnRzLnNoaWZ0KCksXG4gICAgICAgIHZhbCA9IHBhcnRzLnNoaWZ0KCk7XG5cbiAgICBpZiAoa2V5ICYmIHZhbCkgb2JqW2tleV0gPSB2YWw7XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXNwb25zZWAgd2l0aCB0aGUgZ2l2ZW4gYHhocmAuXG4gKlxuICogIC0gc2V0IGZsYWdzICgub2ssIC5lcnJvciwgZXRjKVxuICogIC0gcGFyc2UgaGVhZGVyXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogIEFsaWFzaW5nIGBzdXBlcmFnZW50YCBhcyBgcmVxdWVzdGAgaXMgbmljZTpcbiAqXG4gKiAgICAgIHJlcXVlc3QgPSBzdXBlcmFnZW50O1xuICpcbiAqICBXZSBjYW4gdXNlIHRoZSBwcm9taXNlLWxpa2UgQVBJLCBvciBwYXNzIGNhbGxiYWNrczpcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvJykuZW5kKGZ1bmN0aW9uKHJlcyl7fSk7XG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvJywgZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgU2VuZGluZyBkYXRhIGNhbiBiZSBjaGFpbmVkOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBPciBwYXNzZWQgdG8gYC5zZW5kKClgOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0sIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIE9yIHBhc3NlZCB0byBgLnBvc3QoKWA6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJywgeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqIE9yIGZ1cnRoZXIgcmVkdWNlZCB0byBhIHNpbmdsZSBjYWxsIGZvciBzaW1wbGUgY2FzZXM6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJywgeyBuYW1lOiAndGonIH0sIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogQHBhcmFtIHtYTUxIVFRQUmVxdWVzdH0geGhyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gUmVzcG9uc2UocmVxLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB0aGlzLnJlcSA9IHJlcTtcbiAgdGhpcy54aHIgPSB0aGlzLnJlcS54aHI7XG4gIC8vIHJlc3BvbnNlVGV4dCBpcyBhY2Nlc3NpYmxlIG9ubHkgaWYgcmVzcG9uc2VUeXBlIGlzICcnIG9yICd0ZXh0JyBhbmQgb24gb2xkZXIgYnJvd3NlcnNcbiAgdGhpcy50ZXh0ID0gKCh0aGlzLnJlcS5tZXRob2QgIT0nSEVBRCcgJiYgKHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9PT0gJycgfHwgdGhpcy54aHIucmVzcG9uc2VUeXBlID09PSAndGV4dCcpKSB8fCB0eXBlb2YgdGhpcy54aHIucmVzcG9uc2VUeXBlID09PSAndW5kZWZpbmVkJylcbiAgICAgPyB0aGlzLnhoci5yZXNwb25zZVRleHRcbiAgICAgOiBudWxsO1xuICB0aGlzLnN0YXR1c1RleHQgPSB0aGlzLnJlcS54aHIuc3RhdHVzVGV4dDtcbiAgdGhpcy5fc2V0U3RhdHVzUHJvcGVydGllcyh0aGlzLnhoci5zdGF0dXMpO1xuICB0aGlzLmhlYWRlciA9IHRoaXMuaGVhZGVycyA9IHBhcnNlSGVhZGVyKHRoaXMueGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKTtcbiAgLy8gZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIHNvbWV0aW1lcyBmYWxzZWx5IHJldHVybnMgXCJcIiBmb3IgQ09SUyByZXF1ZXN0cywgYnV0XG4gIC8vIGdldFJlc3BvbnNlSGVhZGVyIHN0aWxsIHdvcmtzLiBzbyB3ZSBnZXQgY29udGVudC10eXBlIGV2ZW4gaWYgZ2V0dGluZ1xuICAvLyBvdGhlciBoZWFkZXJzIGZhaWxzLlxuICB0aGlzLmhlYWRlclsnY29udGVudC10eXBlJ10gPSB0aGlzLnhoci5nZXRSZXNwb25zZUhlYWRlcignY29udGVudC10eXBlJyk7XG4gIHRoaXMuX3NldEhlYWRlclByb3BlcnRpZXModGhpcy5oZWFkZXIpO1xuICB0aGlzLmJvZHkgPSB0aGlzLnJlcS5tZXRob2QgIT0gJ0hFQUQnXG4gICAgPyB0aGlzLl9wYXJzZUJvZHkodGhpcy50ZXh0ID8gdGhpcy50ZXh0IDogdGhpcy54aHIucmVzcG9uc2UpXG4gICAgOiBudWxsO1xufVxuXG4vKipcbiAqIEdldCBjYXNlLWluc2Vuc2l0aXZlIGBmaWVsZGAgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihmaWVsZCl7XG4gIHJldHVybiB0aGlzLmhlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXTtcbn07XG5cbi8qKlxuICogU2V0IGhlYWRlciByZWxhdGVkIHByb3BlcnRpZXM6XG4gKlxuICogICAtIGAudHlwZWAgdGhlIGNvbnRlbnQgdHlwZSB3aXRob3V0IHBhcmFtc1xuICpcbiAqIEEgcmVzcG9uc2Ugb2YgXCJDb250ZW50LVR5cGU6IHRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLThcIlxuICogd2lsbCBwcm92aWRlIHlvdSB3aXRoIGEgYC50eXBlYCBvZiBcInRleHQvcGxhaW5cIi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaGVhZGVyXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuX3NldEhlYWRlclByb3BlcnRpZXMgPSBmdW5jdGlvbihoZWFkZXIpe1xuICAvLyBjb250ZW50LXR5cGVcbiAgdmFyIGN0ID0gdGhpcy5oZWFkZXJbJ2NvbnRlbnQtdHlwZSddIHx8ICcnO1xuICB0aGlzLnR5cGUgPSB0eXBlKGN0KTtcblxuICAvLyBwYXJhbXNcbiAgdmFyIG9iaiA9IHBhcmFtcyhjdCk7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHRoaXNba2V5XSA9IG9ialtrZXldO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYm9keSBgc3RyYC5cbiAqXG4gKiBVc2VkIGZvciBhdXRvLXBhcnNpbmcgb2YgYm9kaWVzLiBQYXJzZXJzXG4gKiBhcmUgZGVmaW5lZCBvbiB0aGUgYHN1cGVyYWdlbnQucGFyc2VgIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtNaXhlZH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5fcGFyc2VCb2R5ID0gZnVuY3Rpb24oc3RyKXtcbiAgdmFyIHBhcnNlID0gcmVxdWVzdC5wYXJzZVt0aGlzLnR5cGVdO1xuICBpZiAoIXBhcnNlICYmIGlzSlNPTih0aGlzLnR5cGUpKSB7XG4gICAgcGFyc2UgPSByZXF1ZXN0LnBhcnNlWydhcHBsaWNhdGlvbi9qc29uJ107XG4gIH1cbiAgcmV0dXJuIHBhcnNlICYmIHN0ciAmJiAoc3RyLmxlbmd0aCB8fCBzdHIgaW5zdGFuY2VvZiBPYmplY3QpXG4gICAgPyBwYXJzZShzdHIpXG4gICAgOiBudWxsO1xufTtcblxuLyoqXG4gKiBTZXQgZmxhZ3Mgc3VjaCBhcyBgLm9rYCBiYXNlZCBvbiBgc3RhdHVzYC5cbiAqXG4gKiBGb3IgZXhhbXBsZSBhIDJ4eCByZXNwb25zZSB3aWxsIGdpdmUgeW91IGEgYC5va2Agb2YgX190cnVlX19cbiAqIHdoZXJlYXMgNXh4IHdpbGwgYmUgX19mYWxzZV9fIGFuZCBgLmVycm9yYCB3aWxsIGJlIF9fdHJ1ZV9fLiBUaGVcbiAqIGAuY2xpZW50RXJyb3JgIGFuZCBgLnNlcnZlckVycm9yYCBhcmUgYWxzbyBhdmFpbGFibGUgdG8gYmUgbW9yZVxuICogc3BlY2lmaWMsIGFuZCBgLnN0YXR1c1R5cGVgIGlzIHRoZSBjbGFzcyBvZiBlcnJvciByYW5naW5nIGZyb20gMS4uNVxuICogc29tZXRpbWVzIHVzZWZ1bCBmb3IgbWFwcGluZyByZXNwb25kIGNvbG9ycyBldGMuXG4gKlxuICogXCJzdWdhclwiIHByb3BlcnRpZXMgYXJlIGFsc28gZGVmaW5lZCBmb3IgY29tbW9uIGNhc2VzLiBDdXJyZW50bHkgcHJvdmlkaW5nOlxuICpcbiAqICAgLSAubm9Db250ZW50XG4gKiAgIC0gLmJhZFJlcXVlc3RcbiAqICAgLSAudW5hdXRob3JpemVkXG4gKiAgIC0gLm5vdEFjY2VwdGFibGVcbiAqICAgLSAubm90Rm91bmRcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhdHVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuX3NldFN0YXR1c1Byb3BlcnRpZXMgPSBmdW5jdGlvbihzdGF0dXMpe1xuICAvLyBoYW5kbGUgSUU5IGJ1ZzogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDA0Njk3Mi9tc2llLXJldHVybnMtc3RhdHVzLWNvZGUtb2YtMTIyMy1mb3ItYWpheC1yZXF1ZXN0XG4gIGlmIChzdGF0dXMgPT09IDEyMjMpIHtcbiAgICBzdGF0dXMgPSAyMDQ7XG4gIH1cblxuICB2YXIgdHlwZSA9IHN0YXR1cyAvIDEwMCB8IDA7XG5cbiAgLy8gc3RhdHVzIC8gY2xhc3NcbiAgdGhpcy5zdGF0dXMgPSB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXM7XG4gIHRoaXMuc3RhdHVzVHlwZSA9IHR5cGU7XG5cbiAgLy8gYmFzaWNzXG4gIHRoaXMuaW5mbyA9IDEgPT0gdHlwZTtcbiAgdGhpcy5vayA9IDIgPT0gdHlwZTtcbiAgdGhpcy5jbGllbnRFcnJvciA9IDQgPT0gdHlwZTtcbiAgdGhpcy5zZXJ2ZXJFcnJvciA9IDUgPT0gdHlwZTtcbiAgdGhpcy5lcnJvciA9ICg0ID09IHR5cGUgfHwgNSA9PSB0eXBlKVxuICAgID8gdGhpcy50b0Vycm9yKClcbiAgICA6IGZhbHNlO1xuXG4gIC8vIHN1Z2FyXG4gIHRoaXMuYWNjZXB0ZWQgPSAyMDIgPT0gc3RhdHVzO1xuICB0aGlzLm5vQ29udGVudCA9IDIwNCA9PSBzdGF0dXM7XG4gIHRoaXMuYmFkUmVxdWVzdCA9IDQwMCA9PSBzdGF0dXM7XG4gIHRoaXMudW5hdXRob3JpemVkID0gNDAxID09IHN0YXR1cztcbiAgdGhpcy5ub3RBY2NlcHRhYmxlID0gNDA2ID09IHN0YXR1cztcbiAgdGhpcy5ub3RGb3VuZCA9IDQwNCA9PSBzdGF0dXM7XG4gIHRoaXMuZm9yYmlkZGVuID0gNDAzID09IHN0YXR1cztcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGBFcnJvcmAgcmVwcmVzZW50YXRpdmUgb2YgdGhpcyByZXNwb25zZS5cbiAqXG4gKiBAcmV0dXJuIHtFcnJvcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnRvRXJyb3IgPSBmdW5jdGlvbigpe1xuICB2YXIgcmVxID0gdGhpcy5yZXE7XG4gIHZhciBtZXRob2QgPSByZXEubWV0aG9kO1xuICB2YXIgdXJsID0gcmVxLnVybDtcblxuICB2YXIgbXNnID0gJ2Nhbm5vdCAnICsgbWV0aG9kICsgJyAnICsgdXJsICsgJyAoJyArIHRoaXMuc3RhdHVzICsgJyknO1xuICB2YXIgZXJyID0gbmV3IEVycm9yKG1zZyk7XG4gIGVyci5zdGF0dXMgPSB0aGlzLnN0YXR1cztcbiAgZXJyLm1ldGhvZCA9IG1ldGhvZDtcbiAgZXJyLnVybCA9IHVybDtcblxuICByZXR1cm4gZXJyO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYFJlc3BvbnNlYC5cbiAqL1xuXG5yZXF1ZXN0LlJlc3BvbnNlID0gUmVzcG9uc2U7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVxdWVzdGAgd2l0aCB0aGUgZ2l2ZW4gYG1ldGhvZGAgYW5kIGB1cmxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gUmVxdWVzdChtZXRob2QsIHVybCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMuX3F1ZXJ5ID0gdGhpcy5fcXVlcnkgfHwgW107XG4gIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICB0aGlzLnVybCA9IHVybDtcbiAgdGhpcy5oZWFkZXIgPSB7fTsgLy8gcHJlc2VydmVzIGhlYWRlciBuYW1lIGNhc2VcbiAgdGhpcy5faGVhZGVyID0ge307IC8vIGNvZXJjZXMgaGVhZGVyIG5hbWVzIHRvIGxvd2VyY2FzZVxuICB0aGlzLm9uKCdlbmQnLCBmdW5jdGlvbigpe1xuICAgIHZhciBlcnIgPSBudWxsO1xuICAgIHZhciByZXMgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJlcyA9IG5ldyBSZXNwb25zZShzZWxmKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGVyciA9IG5ldyBFcnJvcignUGFyc2VyIGlzIHVuYWJsZSB0byBwYXJzZSB0aGUgcmVzcG9uc2UnKTtcbiAgICAgIGVyci5wYXJzZSA9IHRydWU7XG4gICAgICBlcnIub3JpZ2luYWwgPSBlO1xuICAgICAgLy8gaXNzdWUgIzY3NTogcmV0dXJuIHRoZSByYXcgcmVzcG9uc2UgaWYgdGhlIHJlc3BvbnNlIHBhcnNpbmcgZmFpbHNcbiAgICAgIGVyci5yYXdSZXNwb25zZSA9IHNlbGYueGhyICYmIHNlbGYueGhyLnJlc3BvbnNlVGV4dCA/IHNlbGYueGhyLnJlc3BvbnNlVGV4dCA6IG51bGw7XG4gICAgICAvLyBpc3N1ZSAjODc2OiByZXR1cm4gdGhlIGh0dHAgc3RhdHVzIGNvZGUgaWYgdGhlIHJlc3BvbnNlIHBhcnNpbmcgZmFpbHNcbiAgICAgIGVyci5zdGF0dXNDb2RlID0gc2VsZi54aHIgJiYgc2VsZi54aHIuc3RhdHVzID8gc2VsZi54aHIuc3RhdHVzIDogbnVsbDtcbiAgICAgIHJldHVybiBzZWxmLmNhbGxiYWNrKGVycik7XG4gICAgfVxuXG4gICAgc2VsZi5lbWl0KCdyZXNwb25zZScsIHJlcyk7XG5cbiAgICB2YXIgbmV3X2VycjtcbiAgICB0cnkge1xuICAgICAgaWYgKHJlcy5zdGF0dXMgPCAyMDAgfHwgcmVzLnN0YXR1cyA+PSAzMDApIHtcbiAgICAgICAgbmV3X2VyciA9IG5ldyBFcnJvcihyZXMuc3RhdHVzVGV4dCB8fCAnVW5zdWNjZXNzZnVsIEhUVFAgcmVzcG9uc2UnKTtcbiAgICAgICAgbmV3X2Vyci5vcmlnaW5hbCA9IGVycjtcbiAgICAgICAgbmV3X2Vyci5yZXNwb25zZSA9IHJlcztcbiAgICAgICAgbmV3X2Vyci5zdGF0dXMgPSByZXMuc3RhdHVzO1xuICAgICAgfVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgbmV3X2VyciA9IGU7IC8vICM5ODUgdG91Y2hpbmcgcmVzIG1heSBjYXVzZSBJTlZBTElEX1NUQVRFX0VSUiBvbiBvbGQgQW5kcm9pZFxuICAgIH1cblxuICAgIC8vICMxMDAwIGRvbid0IGNhdGNoIGVycm9ycyBmcm9tIHRoZSBjYWxsYmFjayB0byBhdm9pZCBkb3VibGUgY2FsbGluZyBpdFxuICAgIGlmIChuZXdfZXJyKSB7XG4gICAgICBzZWxmLmNhbGxiYWNrKG5ld19lcnIsIHJlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuY2FsbGJhY2sobnVsbCwgcmVzKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIE1peGluIGBFbWl0dGVyYCBhbmQgYHJlcXVlc3RCYXNlYC5cbiAqL1xuXG5FbWl0dGVyKFJlcXVlc3QucHJvdG90eXBlKTtcbmZvciAodmFyIGtleSBpbiByZXF1ZXN0QmFzZSkge1xuICBSZXF1ZXN0LnByb3RvdHlwZVtrZXldID0gcmVxdWVzdEJhc2Vba2V5XTtcbn1cblxuLyoqXG4gKiBTZXQgQ29udGVudC1UeXBlIHRvIGB0eXBlYCwgbWFwcGluZyB2YWx1ZXMgZnJvbSBgcmVxdWVzdC50eXBlc2AuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICBzdXBlcmFnZW50LnR5cGVzLnhtbCA9ICdhcHBsaWNhdGlvbi94bWwnO1xuICpcbiAqICAgICAgcmVxdWVzdC5wb3N0KCcvJylcbiAqICAgICAgICAudHlwZSgneG1sJylcbiAqICAgICAgICAuc2VuZCh4bWxzdHJpbmcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXF1ZXN0LnBvc3QoJy8nKVxuICogICAgICAgIC50eXBlKCdhcHBsaWNhdGlvbi94bWwnKVxuICogICAgICAgIC5zZW5kKHhtbHN0cmluZylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnR5cGUgPSBmdW5jdGlvbih0eXBlKXtcbiAgdGhpcy5zZXQoJ0NvbnRlbnQtVHlwZScsIHJlcXVlc3QudHlwZXNbdHlwZV0gfHwgdHlwZSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgcmVzcG9uc2VUeXBlIHRvIGB2YWxgLiBQcmVzZW50bHkgdmFsaWQgcmVzcG9uc2VUeXBlcyBhcmUgJ2Jsb2InIGFuZFxuICogJ2FycmF5YnVmZmVyJy5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHJlcS5nZXQoJy8nKVxuICogICAgICAgIC5yZXNwb25zZVR5cGUoJ2Jsb2InKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5yZXNwb25zZVR5cGUgPSBmdW5jdGlvbih2YWwpe1xuICB0aGlzLl9yZXNwb25zZVR5cGUgPSB2YWw7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgQWNjZXB0IHRvIGB0eXBlYCwgbWFwcGluZyB2YWx1ZXMgZnJvbSBgcmVxdWVzdC50eXBlc2AuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICBzdXBlcmFnZW50LnR5cGVzLmpzb24gPSAnYXBwbGljYXRpb24vanNvbic7XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnL2FnZW50JylcbiAqICAgICAgICAuYWNjZXB0KCdqc29uJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvYWdlbnQnKVxuICogICAgICAgIC5hY2NlcHQoJ2FwcGxpY2F0aW9uL2pzb24nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhY2NlcHRcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hY2NlcHQgPSBmdW5jdGlvbih0eXBlKXtcbiAgdGhpcy5zZXQoJ0FjY2VwdCcsIHJlcXVlc3QudHlwZXNbdHlwZV0gfHwgdHlwZSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgQXV0aG9yaXphdGlvbiBmaWVsZCB2YWx1ZSB3aXRoIGB1c2VyYCBhbmQgYHBhc3NgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1c2VyXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFzc1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgd2l0aCAndHlwZScgcHJvcGVydHkgJ2F1dG8nIG9yICdiYXNpYycgKGRlZmF1bHQgJ2Jhc2ljJylcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hdXRoID0gZnVuY3Rpb24odXNlciwgcGFzcywgb3B0aW9ucyl7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICB0eXBlOiAnYmFzaWMnXG4gICAgfVxuICB9XG5cbiAgc3dpdGNoIChvcHRpb25zLnR5cGUpIHtcbiAgICBjYXNlICdiYXNpYyc6XG4gICAgICB2YXIgc3RyID0gYnRvYSh1c2VyICsgJzonICsgcGFzcyk7XG4gICAgICB0aGlzLnNldCgnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgc3RyKTtcbiAgICBicmVhaztcblxuICAgIGNhc2UgJ2F1dG8nOlxuICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXI7XG4gICAgICB0aGlzLnBhc3N3b3JkID0gcGFzcztcbiAgICBicmVhaztcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuKiBBZGQgcXVlcnktc3RyaW5nIGB2YWxgLlxuKlxuKiBFeGFtcGxlczpcbipcbiogICByZXF1ZXN0LmdldCgnL3Nob2VzJylcbiogICAgIC5xdWVyeSgnc2l6ZT0xMCcpXG4qICAgICAucXVlcnkoeyBjb2xvcjogJ2JsdWUnIH0pXG4qXG4qIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gdmFsXG4qIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuKiBAYXBpIHB1YmxpY1xuKi9cblxuUmVxdWVzdC5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbih2YWwpe1xuICBpZiAoJ3N0cmluZycgIT0gdHlwZW9mIHZhbCkgdmFsID0gc2VyaWFsaXplKHZhbCk7XG4gIGlmICh2YWwpIHRoaXMuX3F1ZXJ5LnB1c2godmFsKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFF1ZXVlIHRoZSBnaXZlbiBgZmlsZWAgYXMgYW4gYXR0YWNobWVudCB0byB0aGUgc3BlY2lmaWVkIGBmaWVsZGAsXG4gKiB3aXRoIG9wdGlvbmFsIGBmaWxlbmFtZWAuXG4gKlxuICogYGBgIGpzXG4gKiByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICAuYXR0YWNoKCdjb250ZW50JywgbmV3IEJsb2IoWyc8YSBpZD1cImFcIj48YiBpZD1cImJcIj5oZXkhPC9iPjwvYT4nXSwgeyB0eXBlOiBcInRleHQvaHRtbFwifSkpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcGFyYW0ge0Jsb2J8RmlsZX0gZmlsZVxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24oZmllbGQsIGZpbGUsIGZpbGVuYW1lKXtcbiAgdGhpcy5fZ2V0Rm9ybURhdGEoKS5hcHBlbmQoZmllbGQsIGZpbGUsIGZpbGVuYW1lIHx8IGZpbGUubmFtZSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuUmVxdWVzdC5wcm90b3R5cGUuX2dldEZvcm1EYXRhID0gZnVuY3Rpb24oKXtcbiAgaWYgKCF0aGlzLl9mb3JtRGF0YSkge1xuICAgIHRoaXMuX2Zvcm1EYXRhID0gbmV3IHJvb3QuRm9ybURhdGEoKTtcbiAgfVxuICByZXR1cm4gdGhpcy5fZm9ybURhdGE7XG59O1xuXG4vKipcbiAqIEludm9rZSB0aGUgY2FsbGJhY2sgd2l0aCBgZXJyYCBhbmQgYHJlc2BcbiAqIGFuZCBoYW5kbGUgYXJpdHkgY2hlY2suXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNhbGxiYWNrID0gZnVuY3Rpb24oZXJyLCByZXMpe1xuICB2YXIgZm4gPSB0aGlzLl9jYWxsYmFjaztcbiAgdGhpcy5jbGVhclRpbWVvdXQoKTtcbiAgZm4oZXJyLCByZXMpO1xufTtcblxuLyoqXG4gKiBJbnZva2UgY2FsbGJhY2sgd2l0aCB4LWRvbWFpbiBlcnJvci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jcm9zc0RvbWFpbkVycm9yID0gZnVuY3Rpb24oKXtcbiAgdmFyIGVyciA9IG5ldyBFcnJvcignUmVxdWVzdCBoYXMgYmVlbiB0ZXJtaW5hdGVkXFxuUG9zc2libGUgY2F1c2VzOiB0aGUgbmV0d29yayBpcyBvZmZsaW5lLCBPcmlnaW4gaXMgbm90IGFsbG93ZWQgYnkgQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luLCB0aGUgcGFnZSBpcyBiZWluZyB1bmxvYWRlZCwgZXRjLicpO1xuICBlcnIuY3Jvc3NEb21haW4gPSB0cnVlO1xuXG4gIGVyci5zdGF0dXMgPSB0aGlzLnN0YXR1cztcbiAgZXJyLm1ldGhvZCA9IHRoaXMubWV0aG9kO1xuICBlcnIudXJsID0gdGhpcy51cmw7XG5cbiAgdGhpcy5jYWxsYmFjayhlcnIpO1xufTtcblxuLyoqXG4gKiBJbnZva2UgY2FsbGJhY2sgd2l0aCB0aW1lb3V0IGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLl90aW1lb3V0RXJyb3IgPSBmdW5jdGlvbigpe1xuICB2YXIgdGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoJ3RpbWVvdXQgb2YgJyArIHRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnKTtcbiAgZXJyLnRpbWVvdXQgPSB0aW1lb3V0O1xuICB0aGlzLmNhbGxiYWNrKGVycik7XG59O1xuXG4vKipcbiAqIENvbXBvc2UgcXVlcnlzdHJpbmcgdG8gYXBwZW5kIHRvIHJlcS51cmxcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5fYXBwZW5kUXVlcnlTdHJpbmcgPSBmdW5jdGlvbigpe1xuICB2YXIgcXVlcnkgPSB0aGlzLl9xdWVyeS5qb2luKCcmJyk7XG4gIGlmIChxdWVyeSkge1xuICAgIHRoaXMudXJsICs9IH50aGlzLnVybC5pbmRleE9mKCc/JylcbiAgICAgID8gJyYnICsgcXVlcnlcbiAgICAgIDogJz8nICsgcXVlcnk7XG4gIH1cbn07XG5cbi8qKlxuICogSW5pdGlhdGUgcmVxdWVzdCwgaW52b2tpbmcgY2FsbGJhY2sgYGZuKHJlcylgXG4gKiB3aXRoIGFuIGluc3RhbmNlb2YgYFJlc3BvbnNlYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKGZuKXtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgeGhyID0gdGhpcy54aHIgPSByZXF1ZXN0LmdldFhIUigpO1xuICB2YXIgdGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gIHZhciBkYXRhID0gdGhpcy5fZm9ybURhdGEgfHwgdGhpcy5fZGF0YTtcblxuICAvLyBzdG9yZSBjYWxsYmFja1xuICB0aGlzLl9jYWxsYmFjayA9IGZuIHx8IG5vb3A7XG5cbiAgLy8gc3RhdGUgY2hhbmdlXG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuICAgIGlmICg0ICE9IHhoci5yZWFkeVN0YXRlKSByZXR1cm47XG5cbiAgICAvLyBJbiBJRTksIHJlYWRzIHRvIGFueSBwcm9wZXJ0eSAoZS5nLiBzdGF0dXMpIG9mZiBvZiBhbiBhYm9ydGVkIFhIUiB3aWxsXG4gICAgLy8gcmVzdWx0IGluIHRoZSBlcnJvciBcIkNvdWxkIG5vdCBjb21wbGV0ZSB0aGUgb3BlcmF0aW9uIGR1ZSB0byBlcnJvciBjMDBjMDIzZlwiXG4gICAgdmFyIHN0YXR1cztcbiAgICB0cnkgeyBzdGF0dXMgPSB4aHIuc3RhdHVzIH0gY2F0Y2goZSkgeyBzdGF0dXMgPSAwOyB9XG5cbiAgICBpZiAoMCA9PSBzdGF0dXMpIHtcbiAgICAgIGlmIChzZWxmLnRpbWVkb3V0KSByZXR1cm4gc2VsZi5fdGltZW91dEVycm9yKCk7XG4gICAgICBpZiAoc2VsZi5fYWJvcnRlZCkgcmV0dXJuO1xuICAgICAgcmV0dXJuIHNlbGYuY3Jvc3NEb21haW5FcnJvcigpO1xuICAgIH1cbiAgICBzZWxmLmVtaXQoJ2VuZCcpO1xuICB9O1xuXG4gIC8vIHByb2dyZXNzXG4gIHZhciBoYW5kbGVQcm9ncmVzcyA9IGZ1bmN0aW9uKGRpcmVjdGlvbiwgZSkge1xuICAgIGlmIChlLnRvdGFsID4gMCkge1xuICAgICAgZS5wZXJjZW50ID0gZS5sb2FkZWQgLyBlLnRvdGFsICogMTAwO1xuICAgIH1cbiAgICBlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICBzZWxmLmVtaXQoJ3Byb2dyZXNzJywgZSk7XG4gIH1cbiAgaWYgKHRoaXMuaGFzTGlzdGVuZXJzKCdwcm9ncmVzcycpKSB7XG4gICAgdHJ5IHtcbiAgICAgIHhoci5vbnByb2dyZXNzID0gaGFuZGxlUHJvZ3Jlc3MuYmluZChudWxsLCAnZG93bmxvYWQnKTtcbiAgICAgIGlmICh4aHIudXBsb2FkKSB7XG4gICAgICAgIHhoci51cGxvYWQub25wcm9ncmVzcyA9IGhhbmRsZVByb2dyZXNzLmJpbmQobnVsbCwgJ3VwbG9hZCcpO1xuICAgICAgfVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgLy8gQWNjZXNzaW5nIHhoci51cGxvYWQgZmFpbHMgaW4gSUUgZnJvbSBhIHdlYiB3b3JrZXIsIHNvIGp1c3QgcHJldGVuZCBpdCBkb2Vzbid0IGV4aXN0LlxuICAgICAgLy8gUmVwb3J0ZWQgaGVyZTpcbiAgICAgIC8vIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvODM3MjQ1L3htbGh0dHByZXF1ZXN0LXVwbG9hZC10aHJvd3MtaW52YWxpZC1hcmd1bWVudC13aGVuLXVzZWQtZnJvbS13ZWItd29ya2VyLWNvbnRleHRcbiAgICB9XG4gIH1cblxuICAvLyB0aW1lb3V0XG4gIGlmICh0aW1lb3V0ICYmICF0aGlzLl90aW1lcikge1xuICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgc2VsZi50aW1lZG91dCA9IHRydWU7XG4gICAgICBzZWxmLmFib3J0KCk7XG4gICAgfSwgdGltZW91dCk7XG4gIH1cblxuICAvLyBxdWVyeXN0cmluZ1xuICB0aGlzLl9hcHBlbmRRdWVyeVN0cmluZygpO1xuXG4gIC8vIGluaXRpYXRlIHJlcXVlc3RcbiAgaWYgKHRoaXMudXNlcm5hbWUgJiYgdGhpcy5wYXNzd29yZCkge1xuICAgIHhoci5vcGVuKHRoaXMubWV0aG9kLCB0aGlzLnVybCwgdHJ1ZSwgdGhpcy51c2VybmFtZSwgdGhpcy5wYXNzd29yZCk7XG4gIH0gZWxzZSB7XG4gICAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJsLCB0cnVlKTtcbiAgfVxuXG4gIC8vIENPUlNcbiAgaWYgKHRoaXMuX3dpdGhDcmVkZW50aWFscykgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG5cbiAgLy8gYm9keVxuICBpZiAoJ0dFVCcgIT0gdGhpcy5tZXRob2QgJiYgJ0hFQUQnICE9IHRoaXMubWV0aG9kICYmICdzdHJpbmcnICE9IHR5cGVvZiBkYXRhICYmICF0aGlzLl9pc0hvc3QoZGF0YSkpIHtcbiAgICAvLyBzZXJpYWxpemUgc3R1ZmZcbiAgICB2YXIgY29udGVudFR5cGUgPSB0aGlzLl9oZWFkZXJbJ2NvbnRlbnQtdHlwZSddO1xuICAgIHZhciBzZXJpYWxpemUgPSB0aGlzLl9zZXJpYWxpemVyIHx8IHJlcXVlc3Quc2VyaWFsaXplW2NvbnRlbnRUeXBlID8gY29udGVudFR5cGUuc3BsaXQoJzsnKVswXSA6ICcnXTtcbiAgICBpZiAoIXNlcmlhbGl6ZSAmJiBpc0pTT04oY29udGVudFR5cGUpKSBzZXJpYWxpemUgPSByZXF1ZXN0LnNlcmlhbGl6ZVsnYXBwbGljYXRpb24vanNvbiddO1xuICAgIGlmIChzZXJpYWxpemUpIGRhdGEgPSBzZXJpYWxpemUoZGF0YSk7XG4gIH1cblxuICAvLyBzZXQgaGVhZGVyIGZpZWxkc1xuICBmb3IgKHZhciBmaWVsZCBpbiB0aGlzLmhlYWRlcikge1xuICAgIGlmIChudWxsID09IHRoaXMuaGVhZGVyW2ZpZWxkXSkgY29udGludWU7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoZmllbGQsIHRoaXMuaGVhZGVyW2ZpZWxkXSk7XG4gIH1cblxuICBpZiAodGhpcy5fcmVzcG9uc2VUeXBlKSB7XG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9IHRoaXMuX3Jlc3BvbnNlVHlwZTtcbiAgfVxuXG4gIC8vIHNlbmQgc3R1ZmZcbiAgdGhpcy5lbWl0KCdyZXF1ZXN0JywgdGhpcyk7XG5cbiAgLy8gSUUxMSB4aHIuc2VuZCh1bmRlZmluZWQpIHNlbmRzICd1bmRlZmluZWQnIHN0cmluZyBhcyBQT1NUIHBheWxvYWQgKGluc3RlYWQgb2Ygbm90aGluZylcbiAgLy8gV2UgbmVlZCBudWxsIGhlcmUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgeGhyLnNlbmQodHlwZW9mIGRhdGEgIT09ICd1bmRlZmluZWQnID8gZGF0YSA6IG51bGwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cblxuLyoqXG4gKiBFeHBvc2UgYFJlcXVlc3RgLlxuICovXG5cbnJlcXVlc3QuUmVxdWVzdCA9IFJlcXVlc3Q7XG5cbi8qKlxuICogR0VUIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IFtkYXRhXSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5nZXQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ0dFVCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnF1ZXJ5KGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBIRUFEIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IFtkYXRhXSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5oZWFkID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdIRUFEJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogT1BUSU9OUyBxdWVyeSB0byBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBbZGF0YV0gb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3Qub3B0aW9ucyA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnT1BUSU9OUycsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIERFTEVURSBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBkZWwodXJsLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdERUxFVEUnLCB1cmwpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxucmVxdWVzdFsnZGVsJ10gPSBkZWw7XG5yZXF1ZXN0WydkZWxldGUnXSA9IGRlbDtcblxuLyoqXG4gKiBQQVRDSCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR9IFtkYXRhXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wYXRjaCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUEFUQ0gnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBQT1NUIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZH0gW2RhdGFdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnBvc3QgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BPU1QnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBQVVQgYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBbZGF0YV0gb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucHV0ID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdQVVQnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N1cGVyYWdlbnQvbGliL2NsaWVudC5qc1xuLy8gbW9kdWxlIGlkID0gNjMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIlxyXG4vKipcclxuICogRXhwb3NlIGBFbWl0dGVyYC5cclxuICovXHJcblxyXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIGEgbmV3IGBFbWl0dGVyYC5cclxuICpcclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xyXG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE1peGluIHRoZSBlbWl0dGVyIHByb3BlcnRpZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcclxuICogQHJldHVybiB7T2JqZWN0fVxyXG4gKiBAYXBpIHByaXZhdGVcclxuICovXHJcblxyXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcclxuICBmb3IgKHZhciBrZXkgaW4gRW1pdHRlci5wcm90b3R5cGUpIHtcclxuICAgIG9ialtrZXldID0gRW1pdHRlci5wcm90b3R5cGVba2V5XTtcclxuICB9XHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuLyoqXHJcbiAqIExpc3RlbiBvbiB0aGUgZ2l2ZW4gYGV2ZW50YCB3aXRoIGBmbmAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9uID1cclxuRW1pdHRlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG4gICh0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXSlcclxuICAgIC5wdXNoKGZuKTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGRzIGFuIGBldmVudGAgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgYSBzaW5nbGVcclxuICogdGltZSB0aGVuIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgZnVuY3Rpb24gb24oKSB7XHJcbiAgICB0aGlzLm9mZihldmVudCwgb24pO1xyXG4gICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICB9XHJcblxyXG4gIG9uLmZuID0gZm47XHJcbiAgdGhpcy5vbihldmVudCwgb24pO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGBldmVudGAgb3IgYWxsXHJcbiAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vZmYgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuXHJcbiAgLy8gYWxsXHJcbiAgaWYgKDAgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vIHNwZWNpZmljIGV2ZW50XHJcbiAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xyXG5cclxuICAvLyByZW1vdmUgYWxsIGhhbmRsZXJzXHJcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vIHJlbW92ZSBzcGVjaWZpYyBoYW5kbGVyXHJcbiAgdmFyIGNiO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjYiA9IGNhbGxiYWNrc1tpXTtcclxuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XHJcbiAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXHJcbiAgICAsIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcblxyXG4gIGlmIChjYWxsYmFja3MpIHtcclxuICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcclxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJuIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgYGV2ZW50YC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEByZXR1cm4ge0FycmF5fVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW107XHJcbn07XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHJldHVybiB7Qm9vbGVhbn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgcmV0dXJuICEhIHRoaXMubGlzdGVuZXJzKGV2ZW50KS5sZW5ndGg7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2MzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLyoqXG4gKiBNb2R1bGUgb2YgbWl4ZWQtaW4gZnVuY3Rpb25zIHNoYXJlZCBiZXR3ZWVuIG5vZGUgYW5kIGNsaWVudCBjb2RlXG4gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXMtb2JqZWN0Jyk7XG5cbi8qKlxuICogQ2xlYXIgcHJldmlvdXMgdGltZW91dC5cbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5jbGVhclRpbWVvdXQgPSBmdW5jdGlvbiBfY2xlYXJUaW1lb3V0KCl7XG4gIHRoaXMuX3RpbWVvdXQgPSAwO1xuICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogT3ZlcnJpZGUgZGVmYXVsdCByZXNwb25zZSBib2R5IHBhcnNlclxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgdG8gY29udmVydCBpbmNvbWluZyBkYXRhIGludG8gcmVxdWVzdC5ib2R5XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5wYXJzZSA9IGZ1bmN0aW9uIHBhcnNlKGZuKXtcbiAgdGhpcy5fcGFyc2VyID0gZm47XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBPdmVycmlkZSBkZWZhdWx0IHJlcXVlc3QgYm9keSBzZXJpYWxpemVyXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB0byBjb252ZXJ0IGRhdGEgc2V0IHZpYSAuc2VuZCBvciAuYXR0YWNoIGludG8gcGF5bG9hZCB0byBzZW5kXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5zZXJpYWxpemUgPSBmdW5jdGlvbiBzZXJpYWxpemUoZm4pe1xuICB0aGlzLl9zZXJpYWxpemVyID0gZm47XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgdGltZW91dCB0byBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMudGltZW91dCA9IGZ1bmN0aW9uIHRpbWVvdXQobXMpe1xuICB0aGlzLl90aW1lb3V0ID0gbXM7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBQcm9taXNlIHN1cHBvcnRcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RcbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKi9cblxuZXhwb3J0cy50aGVuID0gZnVuY3Rpb24gdGhlbihyZXNvbHZlLCByZWplY3QpIHtcbiAgaWYgKCF0aGlzLl9mdWxsZmlsbGVkUHJvbWlzZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLl9mdWxsZmlsbGVkUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKGlubmVyUmVzb2x2ZSwgaW5uZXJSZWplY3Qpe1xuICAgICAgc2VsZi5lbmQoZnVuY3Rpb24oZXJyLCByZXMpe1xuICAgICAgICBpZiAoZXJyKSBpbm5lclJlamVjdChlcnIpOyBlbHNlIGlubmVyUmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHRoaXMuX2Z1bGxmaWxsZWRQcm9taXNlLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbn1cblxuZXhwb3J0cy5jYXRjaCA9IGZ1bmN0aW9uKGNiKSB7XG4gIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBjYik7XG59O1xuXG4vKipcbiAqIEFsbG93IGZvciBleHRlbnNpb25cbiAqL1xuXG5leHBvcnRzLnVzZSA9IGZ1bmN0aW9uIHVzZShmbikge1xuICBmbih0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cblxuLyoqXG4gKiBHZXQgcmVxdWVzdCBoZWFkZXIgYGZpZWxkYC5cbiAqIENhc2UtaW5zZW5zaXRpdmUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24oZmllbGQpe1xuICByZXR1cm4gdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xufTtcblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBoZWFkZXIgYGZpZWxkYCB2YWx1ZS5cbiAqIFRoaXMgaXMgYSBkZXByZWNhdGVkIGludGVybmFsIEFQSS4gVXNlIGAuZ2V0KGZpZWxkKWAgaW5zdGVhZC5cbiAqXG4gKiAoZ2V0SGVhZGVyIGlzIG5vIGxvbmdlciB1c2VkIGludGVybmFsbHkgYnkgdGhlIHN1cGVyYWdlbnQgY29kZSBiYXNlKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKiBAZGVwcmVjYXRlZFxuICovXG5cbmV4cG9ydHMuZ2V0SGVhZGVyID0gZXhwb3J0cy5nZXQ7XG5cbi8qKlxuICogU2V0IGhlYWRlciBgZmllbGRgIHRvIGB2YWxgLCBvciBtdWx0aXBsZSBmaWVsZHMgd2l0aCBvbmUgb2JqZWN0LlxuICogQ2FzZS1pbnNlbnNpdGl2ZS5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHJlcS5nZXQoJy8nKVxuICogICAgICAgIC5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcbiAqICAgICAgICAuc2V0KCdYLUFQSS1LZXknLCAnZm9vYmFyJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiAgICAgIHJlcS5nZXQoJy8nKVxuICogICAgICAgIC5zZXQoeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywgJ1gtQVBJLUtleSc6ICdmb29iYXInIH0pXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBmaWVsZFxuICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuc2V0ID0gZnVuY3Rpb24oZmllbGQsIHZhbCl7XG4gIGlmIChpc09iamVjdChmaWVsZCkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZmllbGQpIHtcbiAgICAgIHRoaXMuc2V0KGtleSwgZmllbGRba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXSA9IHZhbDtcbiAgdGhpcy5oZWFkZXJbZmllbGRdID0gdmFsO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGhlYWRlciBgZmllbGRgLlxuICogQ2FzZS1pbnNlbnNpdGl2ZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnVuc2V0KCdVc2VyLUFnZW50JylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqL1xuZXhwb3J0cy51bnNldCA9IGZ1bmN0aW9uKGZpZWxkKXtcbiAgZGVsZXRlIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXTtcbiAgZGVsZXRlIHRoaXMuaGVhZGVyW2ZpZWxkXTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFdyaXRlIHRoZSBmaWVsZCBgbmFtZWAgYW5kIGB2YWxgLCBvciBtdWx0aXBsZSBmaWVsZHMgd2l0aCBvbmUgb2JqZWN0XG4gKiBmb3IgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgcmVxdWVzdCBib2RpZXMuXG4gKlxuICogYGBgIGpzXG4gKiByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICAuZmllbGQoJ2ZvbycsICdiYXInKVxuICogICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICAuZmllbGQoeyBmb286ICdiYXInLCBiYXo6ICdxdXgnIH0pXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ3xCbG9ifEZpbGV8QnVmZmVyfGZzLlJlYWRTdHJlYW19IHZhbFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5leHBvcnRzLmZpZWxkID0gZnVuY3Rpb24obmFtZSwgdmFsKSB7XG5cbiAgLy8gbmFtZSBzaG91bGQgYmUgZWl0aGVyIGEgc3RyaW5nIG9yIGFuIG9iamVjdC5cbiAgaWYgKG51bGwgPT09IG5hbWUgfHwgIHVuZGVmaW5lZCA9PT0gbmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignLmZpZWxkKG5hbWUsIHZhbCkgbmFtZSBjYW4gbm90IGJlIGVtcHR5Jyk7XG4gIH1cblxuICBpZiAoaXNPYmplY3QobmFtZSkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gbmFtZSkge1xuICAgICAgdGhpcy5maWVsZChrZXksIG5hbWVba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gdmFsIHNob3VsZCBiZSBkZWZpbmVkIG5vd1xuICBpZiAobnVsbCA9PT0gdmFsIHx8IHVuZGVmaW5lZCA9PT0gdmFsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCcuZmllbGQobmFtZSwgdmFsKSB2YWwgY2FuIG5vdCBiZSBlbXB0eScpO1xuICB9XG4gIHRoaXMuX2dldEZvcm1EYXRhKCkuYXBwZW5kKG5hbWUsIHZhbCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBYm9ydCB0aGUgcmVxdWVzdCwgYW5kIGNsZWFyIHBvdGVudGlhbCB0aW1lb3V0LlxuICpcbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5leHBvcnRzLmFib3J0ID0gZnVuY3Rpb24oKXtcbiAgaWYgKHRoaXMuX2Fib3J0ZWQpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB0aGlzLl9hYm9ydGVkID0gdHJ1ZTtcbiAgdGhpcy54aHIgJiYgdGhpcy54aHIuYWJvcnQoKTsgLy8gYnJvd3NlclxuICB0aGlzLnJlcSAmJiB0aGlzLnJlcS5hYm9ydCgpOyAvLyBub2RlXG4gIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIHRoaXMuZW1pdCgnYWJvcnQnKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEVuYWJsZSB0cmFuc21pc3Npb24gb2YgY29va2llcyB3aXRoIHgtZG9tYWluIHJlcXVlc3RzLlxuICpcbiAqIE5vdGUgdGhhdCBmb3IgdGhpcyB0byB3b3JrIHRoZSBvcmlnaW4gbXVzdCBub3QgYmVcbiAqIHVzaW5nIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCIgd2l0aCBhIHdpbGRjYXJkLFxuICogYW5kIGFsc28gbXVzdCBzZXQgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFsc1wiXG4gKiB0byBcInRydWVcIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMud2l0aENyZWRlbnRpYWxzID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhpcyBpcyBicm93c2VyLW9ubHkgZnVuY3Rpb25hbGl0eS4gTm9kZSBzaWRlIGlzIG5vLW9wLlxuICB0aGlzLl93aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IHRoZSBtYXggcmVkaXJlY3RzIHRvIGBuYC4gRG9lcyBub3RpbmcgaW4gYnJvd3NlciBYSFIgaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG5cbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLnJlZGlyZWN0cyA9IGZ1bmN0aW9uKG4pe1xuICB0aGlzLl9tYXhSZWRpcmVjdHMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ29udmVydCB0byBhIHBsYWluIGphdmFzY3JpcHQgb2JqZWN0IChub3QgSlNPTiBzdHJpbmcpIG9mIHNjYWxhciBwcm9wZXJ0aWVzLlxuICogTm90ZSBhcyB0aGlzIG1ldGhvZCBpcyBkZXNpZ25lZCB0byByZXR1cm4gYSB1c2VmdWwgbm9uLXRoaXMgdmFsdWUsXG4gKiBpdCBjYW5ub3QgYmUgY2hhaW5lZC5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IGRlc2NyaWJpbmcgbWV0aG9kLCB1cmwsIGFuZCBkYXRhIG9mIHRoaXMgcmVxdWVzdFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLnRvSlNPTiA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB7XG4gICAgbWV0aG9kOiB0aGlzLm1ldGhvZCxcbiAgICB1cmw6IHRoaXMudXJsLFxuICAgIGRhdGE6IHRoaXMuX2RhdGEsXG4gICAgaGVhZGVyczogdGhpcy5faGVhZGVyXG4gIH07XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGEgaG9zdCBvYmplY3QsXG4gKiB3ZSBkb24ndCB3YW50IHRvIHNlcmlhbGl6ZSB0aGVzZSA6KVxuICpcbiAqIFRPRE86IGZ1dHVyZSBwcm9vZiwgbW92ZSB0byBjb21wb2VudCBsYW5kXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuX2lzSG9zdCA9IGZ1bmN0aW9uIF9pc0hvc3Qob2JqKSB7XG4gIHZhciBzdHIgPSB7fS50b1N0cmluZy5jYWxsKG9iaik7XG5cbiAgc3dpdGNoIChzdHIpIHtcbiAgICBjYXNlICdbb2JqZWN0IEZpbGVdJzpcbiAgICBjYXNlICdbb2JqZWN0IEJsb2JdJzpcbiAgICBjYXNlICdbb2JqZWN0IEZvcm1EYXRhXSc6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogU2VuZCBgZGF0YWAgYXMgdGhlIHJlcXVlc3QgYm9keSwgZGVmYXVsdGluZyB0aGUgYC50eXBlKClgIHRvIFwianNvblwiIHdoZW5cbiAqIGFuIG9iamVjdCBpcyBnaXZlbi5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgICAvLyBtYW51YWwganNvblxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdqc29uJylcbiAqICAgICAgICAgLnNlbmQoJ3tcIm5hbWVcIjpcInRqXCJ9JylcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBhdXRvIGpzb25cbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBtYW51YWwgeC13d3ctZm9ybS11cmxlbmNvZGVkXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnR5cGUoJ2Zvcm0nKVxuICogICAgICAgICAuc2VuZCgnbmFtZT10aicpXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gYXV0byB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnZm9ybScpXG4gKiAgICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGRlZmF1bHRzIHRvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICogICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAuc2VuZCgnbmFtZT10b2JpJylcbiAqICAgICAgICAuc2VuZCgnc3BlY2llcz1mZXJyZXQnKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBkYXRhXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5zZW5kID0gZnVuY3Rpb24oZGF0YSl7XG4gIHZhciBvYmogPSBpc09iamVjdChkYXRhKTtcbiAgdmFyIHR5cGUgPSB0aGlzLl9oZWFkZXJbJ2NvbnRlbnQtdHlwZSddO1xuXG4gIC8vIG1lcmdlXG4gIGlmIChvYmogJiYgaXNPYmplY3QodGhpcy5fZGF0YSkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgdGhpcy5fZGF0YVtrZXldID0gZGF0YVtrZXldO1xuICAgIH1cbiAgfSBlbHNlIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgZGF0YSkge1xuICAgIC8vIGRlZmF1bHQgdG8geC13d3ctZm9ybS11cmxlbmNvZGVkXG4gICAgaWYgKCF0eXBlKSB0aGlzLnR5cGUoJ2Zvcm0nKTtcbiAgICB0eXBlID0gdGhpcy5faGVhZGVyWydjb250ZW50LXR5cGUnXTtcbiAgICBpZiAoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgPT0gdHlwZSkge1xuICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGFcbiAgICAgICAgPyB0aGlzLl9kYXRhICsgJyYnICsgZGF0YVxuICAgICAgICA6IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEgPSAodGhpcy5fZGF0YSB8fCAnJykgKyBkYXRhO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgfVxuXG4gIGlmICghb2JqIHx8IHRoaXMuX2lzSG9zdChkYXRhKSkgcmV0dXJuIHRoaXM7XG5cbiAgLy8gZGVmYXVsdCB0byBqc29uXG4gIGlmICghdHlwZSkgdGhpcy50eXBlKCdqc29uJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N1cGVyYWdlbnQvbGliL3JlcXVlc3QtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNjM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIFRoZSBub2RlIGFuZCBicm93c2VyIG1vZHVsZXMgZXhwb3NlIHZlcnNpb25zIG9mIHRoaXMgd2l0aCB0aGVcbi8vIGFwcHJvcHJpYXRlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGJvdW5kIGFzIGZpcnN0IGFyZ3VtZW50XG4vKipcbiAqIElzc3VlIGEgcmVxdWVzdDpcbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICByZXF1ZXN0KCdHRVQnLCAnL3VzZXJzJykuZW5kKGNhbGxiYWNrKVxuICogICAgcmVxdWVzdCgnL3VzZXJzJykuZW5kKGNhbGxiYWNrKVxuICogICAgcmVxdWVzdCgnL3VzZXJzJywgY2FsbGJhY2spXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IHVybCBvciBjYWxsYmFja1xuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcmVxdWVzdChSZXF1ZXN0Q29uc3RydWN0b3IsIG1ldGhvZCwgdXJsKSB7XG4gIC8vIGNhbGxiYWNrXG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiB1cmwpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3RDb25zdHJ1Y3RvcignR0VUJywgbWV0aG9kKS5lbmQodXJsKTtcbiAgfVxuXG4gIC8vIHVybCBmaXJzdFxuICBpZiAoMiA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0Q29uc3RydWN0b3IoJ0dFVCcsIG1ldGhvZCk7XG4gIH1cblxuICByZXR1cm4gbmV3IFJlcXVlc3RDb25zdHJ1Y3RvcihtZXRob2QsIHVybCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWVzdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N1cGVyYWdlbnQvbGliL3JlcXVlc3QuanNcbi8vIG1vZHVsZSBpZCA9IDYzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFdlYmFwaUVycm9yKG1lc3NhZ2UsIHN0YXR1c0NvZGUpIHtcbiAgdGhpcy5uYW1lID0gJ1dlYmFwaUVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gKG1lc3NhZ2UgfHwgJycpO1xuICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xufVxuXG5XZWJhcGlFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gV2ViYXBpRXJyb3I7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3BvdGlmeS13ZWItYXBpLW5vZGUvc3JjL3dlYmFwaS1lcnJvci5qc1xuLy8gbW9kdWxlIGlkID0gNjM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS0yIS4vTmF2aWdhdGlvbi5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS0yIS4vTmF2aWdhdGlvbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLTIhLi9OYXZpZ2F0aW9uLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDYzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG4uTmF2aWdhdGlvbi1yb290LTJnY0p4IHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIG1hcmdpbjogNnB4IDAgMDtcXG59XFxuXFxuLk5hdmlnYXRpb24tbGluay1OdGwzNSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAzcHggOHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjEyNWVtOyAvKiB+MThweCAqL1xcbn1cXG5cXG4uTmF2aWdhdGlvbi1saW5rLU50bDM1LFxcbi5OYXZpZ2F0aW9uLWxpbmstTnRsMzU6YWN0aXZlLFxcbi5OYXZpZ2F0aW9uLWxpbmstTnRsMzU6dmlzaXRlZCB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbn1cXG5cXG4uTmF2aWdhdGlvbi1saW5rLU50bDM1OmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbn1cXG5cXG4uTmF2aWdhdGlvbi1oaWdobGlnaHQtMlVObHEge1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICBtYXJnaW4tbGVmdDogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uTmF2aWdhdGlvbi1oaWdobGlnaHQtMlVObHE6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4uTmF2aWdhdGlvbi1zcGFjZXItM3ZaVkcge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9zdGVwaGFuaWUvZGV2L1NpZGVQcm9qZWN0cy9Wb3RlTGlzdC9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7O0dBT0c7O0FBRUg7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsbUJBQW1CLENBQUMsV0FBVztDQUNoQzs7QUFFRDs7O0VBR0UsZ0NBQWdDO0NBQ2pDOztBQUVEO0VBQ0UsOEJBQThCO0NBQy9COztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLCtCQUErQjtDQUNoQzs7QUFFRDtFQUNFLGdDQUFnQztDQUNqQ1wiLFwiZmlsZVwiOlwiTmF2aWdhdGlvbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG4ucm9vdCB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBtYXJnaW46IDZweCAwIDA7XFxufVxcblxcbi5saW5rIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDNweCA4cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEuMTI1ZW07IC8qIH4xOHB4ICovXFxufVxcblxcbi5saW5rLFxcbi5saW5rOmFjdGl2ZSxcXG4ubGluazp2aXNpdGVkIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxufVxcblxcbi5saW5rOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbn1cXG5cXG4uaGlnaGxpZ2h0IHtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhpZ2hsaWdodDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5zcGFjZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJOYXZpZ2F0aW9uLXJvb3QtMmdjSnhcIixcblx0XCJsaW5rXCI6IFwiTmF2aWdhdGlvbi1saW5rLU50bDM1XCIsXG5cdFwiaGlnaGxpZ2h0XCI6IFwiTmF2aWdhdGlvbi1oaWdobGlnaHQtMlVObHFcIixcblx0XCJzcGFjZXJcIjogXCJOYXZpZ2F0aW9uLXNwYWNlci0zdlpWR1wiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDYzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvY29tcG9uZW50cy9IZWFkZXIvbG9nby1zbWFsbC5wbmc/MmY3NTEyODVcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlYWRlci9sb2dvLXNtYWxsLnBuZ1xuLy8gbW9kdWxlIGlkID0gNjQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9jb21wb25lbnRzL0hlYWRlci9sb2dvLXNtYWxsQDJ4LnBuZz84ODQ0MjYyYlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2xvZ28tc21hbGxAMngucG5nXG4vLyBtb2R1bGUgaWQgPSA2NDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9Gb290ZXIuY3NzJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnO1xuXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy50ZXh0fT7CqSBTdGVmZmlBcHBzPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5zcGFjZXJ9PsK3PC9zcGFuPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17cy5saW5rfSB0bz1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShGb290ZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtMiEuL0Zvb3Rlci5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS0yIS4vRm9vdGVyLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtMiEuL0Zvb3Rlci5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmNzc1xuLy8gbW9kdWxlIGlkID0gNjQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqLyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqLyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLkZvb3Rlci1yb290LTFVVU15IHtcXG4gIGJhY2tncm91bmQ6ICMzMzM7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLkZvb3Rlci1jb250YWluZXItM2RmQUMge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAyMHB4IDE1cHg7XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLkZvb3Rlci10ZXh0LTNSZVVOIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5Gb290ZXItc3BhY2VyLTI5N3hFIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxufVxcblxcbi5Gb290ZXItdGV4dC0zUmVVTixcXG4uRm9vdGVyLWxpbmstM3FIakYge1xcbiAgcGFkZGluZzogMnB4IDVweDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4uRm9vdGVyLWxpbmstM3FIakYsXFxuLkZvb3Rlci1saW5rLTNxSGpGOmFjdGl2ZSxcXG4uRm9vdGVyLWxpbmstM3FIakY6dmlzaXRlZCB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uRm9vdGVyLWxpbmstM3FIakY6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvc3RlcGhhbmllL2Rldi9TaWRlUHJvamVjdHMvVm90ZUxpc3Qvc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7R0FPRzs7QUFFSDs7Ozs7OztHQU9HOztBQUVIO0VBQ0U7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RTs7RUFFOUU7O2dGQUU4RSxFQUFFLGdDQUFnQyxFQUFFLDJCQUEyQixFQUFFLDZCQUE2QixDQUFDLGlDQUFpQztDQUMvTTs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxnQ0FBZ0M7Q0FDakM7O0FBRUQ7RUFDRSxnQ0FBZ0M7Q0FDakM7O0FBRUQ7O0VBRUUsaUJBQWlCO0VBQ2pCLGVBQWU7Q0FDaEI7O0FBRUQ7OztFQUdFLGdDQUFnQztFQUNoQyxzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSw4QkFBOEI7Q0FDL0JcIixcImZpbGVcIjpcIkZvb3Rlci5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi8gIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqLyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi8gLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxufVxcblxcbi5yb290IHtcXG4gIGJhY2tncm91bmQ6ICMzMzM7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHggMTVweDtcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGV4dCB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG4uc3BhY2VyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxufVxcblxcbi50ZXh0LFxcbi5saW5rIHtcXG4gIHBhZGRpbmc6IDJweCA1cHg7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLmxpbmssXFxuLmxpbms6YWN0aXZlLFxcbi5saW5rOnZpc2l0ZWQge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmxpbms6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiRm9vdGVyLXJvb3QtMVVVTXlcIixcblx0XCJjb250YWluZXJcIjogXCJGb290ZXItY29udGFpbmVyLTNkZkFDXCIsXG5cdFwidGV4dFwiOiBcIkZvb3Rlci10ZXh0LTNSZVVOXCIsXG5cdFwic3BhY2VyXCI6IFwiRm9vdGVyLXNwYWNlci0yOTd4RVwiLFxuXHRcImxpbmtcIjogXCJGb290ZXItbGluay0zcUhqRlwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSA2NDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZmluZFRhYmJhYmxlRGVzY2VuZGFudHM7XG4vKiFcbiAqIEFkYXB0ZWQgZnJvbSBqUXVlcnkgVUkgY29yZVxuICpcbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKlxuICogaHR0cDovL2FwaS5qcXVlcnl1aS5jb20vY2F0ZWdvcnkvdWktY29yZS9cbiAqL1xuXG52YXIgdGFiYmFibGVOb2RlID0gL2lucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b258b2JqZWN0LztcblxuZnVuY3Rpb24gaGlkZGVuKGVsKSB7XG4gIHJldHVybiBlbC5vZmZzZXRXaWR0aCA8PSAwICYmIGVsLm9mZnNldEhlaWdodCA8PSAwIHx8IGVsLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJztcbn1cblxuZnVuY3Rpb24gdmlzaWJsZShlbGVtZW50KSB7XG4gIHZhciBwYXJlbnRFbGVtZW50ID0gZWxlbWVudDtcbiAgd2hpbGUgKHBhcmVudEVsZW1lbnQpIHtcbiAgICBpZiAocGFyZW50RWxlbWVudCA9PT0gZG9jdW1lbnQuYm9keSkgYnJlYWs7XG4gICAgaWYgKGhpZGRlbihwYXJlbnRFbGVtZW50KSkgcmV0dXJuIGZhbHNlO1xuICAgIHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGZvY3VzYWJsZShlbGVtZW50LCBpc1RhYkluZGV4Tm90TmFOKSB7XG4gIHZhciBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgdmFyIHJlcyA9IHRhYmJhYmxlTm9kZS50ZXN0KG5vZGVOYW1lKSAmJiAhZWxlbWVudC5kaXNhYmxlZCB8fCAobm9kZU5hbWUgPT09IFwiYVwiID8gZWxlbWVudC5ocmVmIHx8IGlzVGFiSW5kZXhOb3ROYU4gOiBpc1RhYkluZGV4Tm90TmFOKTtcbiAgcmV0dXJuIHJlcyAmJiB2aXNpYmxlKGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiB0YWJiYWJsZShlbGVtZW50KSB7XG4gIHZhciB0YWJJbmRleCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICBpZiAodGFiSW5kZXggPT09IG51bGwpIHRhYkluZGV4ID0gdW5kZWZpbmVkO1xuICB2YXIgaXNUYWJJbmRleE5hTiA9IGlzTmFOKHRhYkluZGV4KTtcbiAgcmV0dXJuIChpc1RhYkluZGV4TmFOIHx8IHRhYkluZGV4ID49IDApICYmIGZvY3VzYWJsZShlbGVtZW50LCAhaXNUYWJJbmRleE5hTik7XG59XG5cbmZ1bmN0aW9uIGZpbmRUYWJiYWJsZURlc2NlbmRhbnRzKGVsZW1lbnQpIHtcbiAgcmV0dXJuIFtdLnNsaWNlLmNhbGwoZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJyksIDApLmZpbHRlcih0YWJiYWJsZSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvdGFiYmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDY0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYXNzZXJ0Tm9kZUxpc3QgPSBhc3NlcnROb2RlTGlzdDtcbmV4cG9ydHMuc2V0RWxlbWVudCA9IHNldEVsZW1lbnQ7XG5leHBvcnRzLnRyeUZvcmNlRmFsbGJhY2sgPSB0cnlGb3JjZUZhbGxiYWNrO1xuZXhwb3J0cy52YWxpZGF0ZUVsZW1lbnQgPSB2YWxpZGF0ZUVsZW1lbnQ7XG5leHBvcnRzLmhpZGUgPSBoaWRlO1xuZXhwb3J0cy5zaG93ID0gc2hvdztcbmV4cG9ydHMuZG9jdW1lbnROb3RSZWFkeU9yU1NSVGVzdGluZyA9IGRvY3VtZW50Tm90UmVhZHlPclNTUlRlc3Rpbmc7XG5leHBvcnRzLnJlc2V0Rm9yVGVzdGluZyA9IHJlc2V0Rm9yVGVzdGluZztcbnZhciBnbG9iYWxFbGVtZW50ID0gbnVsbDtcblxuZnVuY3Rpb24gYXNzZXJ0Tm9kZUxpc3Qobm9kZUxpc3QsIHNlbGVjdG9yKSB7XG4gIGlmICghbm9kZUxpc3QgfHwgIW5vZGVMaXN0Lmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcigncmVhY3QtbW9kYWw6IE5vIGVsZW1lbnRzIHdlcmUgZm91bmQgZm9yIHNlbGVjdG9yICcgKyBzZWxlY3RvciArICcuJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0RWxlbWVudChlbGVtZW50KSB7XG4gIHZhciB1c2VFbGVtZW50ID0gZWxlbWVudDtcbiAgaWYgKHR5cGVvZiB1c2VFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodXNlRWxlbWVudCk7XG4gICAgYXNzZXJ0Tm9kZUxpc3QoZWwsIHVzZUVsZW1lbnQpO1xuICAgIHVzZUVsZW1lbnQgPSAnbGVuZ3RoJyBpbiBlbCA/IGVsWzBdIDogZWw7XG4gIH1cbiAgZ2xvYmFsRWxlbWVudCA9IHVzZUVsZW1lbnQgfHwgZ2xvYmFsRWxlbWVudDtcbiAgcmV0dXJuIGdsb2JhbEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHRyeUZvcmNlRmFsbGJhY2soKSB7XG4gIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5ib2R5KSB7XG4gICAgLy8gZm9yY2UgZmFsbGJhY2sgdG8gZG9jdW1lbnQuYm9keVxuICAgIHNldEVsZW1lbnQoZG9jdW1lbnQuYm9keSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUVsZW1lbnQoYXBwRWxlbWVudCkge1xuICBpZiAoIWFwcEVsZW1lbnQgJiYgIWdsb2JhbEVsZW1lbnQgJiYgIXRyeUZvcmNlRmFsbGJhY2soKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihbJ3JlYWN0LW1vZGFsOiBDYW5ub3QgZmFsbGJhY2sgdG8gYGRvY3VtZW50LmJvZHlgLCBiZWNhdXNlIGl0XFwncyBub3QgcmVhZHkgb3IgYXZhaWxhYmxlLicsICdJZiB5b3UgYXJlIGRvaW5nIHNlcnZlci1zaWRlIHJlbmRlcmluZywgdXNlIHRoaXMgZnVuY3Rpb24gdG8gZGVmaW5lZCBhbiBlbGVtZW50LicsICdgTW9kYWwuc2V0QXBwRWxlbWVudChlbClgIHRvIG1ha2UgdGhpcyBhY2Nlc3NpYmxlJ10pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhpZGUoYXBwRWxlbWVudCkge1xuICB2YWxpZGF0ZUVsZW1lbnQoYXBwRWxlbWVudCk7XG4gIChhcHBFbGVtZW50IHx8IGdsb2JhbEVsZW1lbnQpLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xufVxuXG5mdW5jdGlvbiBzaG93KGFwcEVsZW1lbnQpIHtcbiAgdmFsaWRhdGVFbGVtZW50KGFwcEVsZW1lbnQpO1xuICAoYXBwRWxlbWVudCB8fCBnbG9iYWxFbGVtZW50KS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG59XG5cbmZ1bmN0aW9uIGRvY3VtZW50Tm90UmVhZHlPclNTUlRlc3RpbmcoKSB7XG4gIGdsb2JhbEVsZW1lbnQgPSBudWxsO1xufVxuXG5mdW5jdGlvbiByZXNldEZvclRlc3RpbmcoKSB7XG4gIGdsb2JhbEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9oZWxwZXJzL2FyaWFBcHBIaWRlci5qc1xuLy8gbW9kdWxlIGlkID0gNjQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4ZW52ID0gcmVxdWlyZSgnZXhlbnYnKTtcblxudmFyIF9leGVudjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGVudik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBFRSA9IF9leGVudjIuZGVmYXVsdDtcblxudmFyIFNhZmVIVE1MRWxlbWVudCA9IEVFLmNhblVzZURPTSA/IHdpbmRvdy5IVE1MRWxlbWVudCA6IHt9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTYWZlSFRNTEVsZW1lbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvc2FmZUhUTUxFbGVtZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA2NDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfTW9kYWwgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTW9kYWwnKTtcblxudmFyIF9Nb2RhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Nb2RhbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9Nb2RhbDIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYm9keU9wZW5DbGFzc05hbWUgPSBleHBvcnRzLnBvcnRhbENsYXNzTmFtZSA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9Nb2RhbFBvcnRhbCA9IHJlcXVpcmUoJy4vTW9kYWxQb3J0YWwnKTtcblxudmFyIF9Nb2RhbFBvcnRhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Nb2RhbFBvcnRhbCk7XG5cbnZhciBfYXJpYUFwcEhpZGVyID0gcmVxdWlyZSgnLi4vaGVscGVycy9hcmlhQXBwSGlkZXInKTtcblxudmFyIGFyaWFBcHBIaWRlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9hcmlhQXBwSGlkZXIpO1xuXG52YXIgX3NhZmVIVE1MRWxlbWVudCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvc2FmZUhUTUxFbGVtZW50Jyk7XG5cbnZhciBfc2FmZUhUTUxFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NhZmVIVE1MRWxlbWVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHBvcnRhbENsYXNzTmFtZSA9IGV4cG9ydHMucG9ydGFsQ2xhc3NOYW1lID0gJ1JlYWN0TW9kYWxQb3J0YWwnO1xudmFyIGJvZHlPcGVuQ2xhc3NOYW1lID0gZXhwb3J0cy5ib2R5T3BlbkNsYXNzTmFtZSA9ICdSZWFjdE1vZGFsX19Cb2R5LS1vcGVuJztcblxudmFyIHJlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyID0gX3JlYWN0RG9tMi5kZWZhdWx0LnVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyO1xuXG5mdW5jdGlvbiBnZXRQYXJlbnRFbGVtZW50KHBhcmVudFNlbGVjdG9yKSB7XG4gIHJldHVybiBwYXJlbnRTZWxlY3RvcigpO1xufVxuXG52YXIgTW9kYWwgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTW9kYWwsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1vZGFsKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNb2RhbCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gTW9kYWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihNb2RhbCkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnJlbW92ZVBvcnRhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF9yZWFjdERvbTIuZGVmYXVsdC51bm1vdW50Q29tcG9uZW50QXROb2RlKF90aGlzLm5vZGUpO1xuICAgICAgdmFyIHBhcmVudCA9IGdldFBhcmVudEVsZW1lbnQoX3RoaXMucHJvcHMucGFyZW50U2VsZWN0b3IpO1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKF90aGlzLm5vZGUpO1xuICAgIH0sIF90aGlzLnJlbmRlclBvcnRhbCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgX3RoaXMucG9ydGFsID0gcmVuZGVyU3VidHJlZUludG9Db250YWluZXIoX3RoaXMsIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Nb2RhbFBvcnRhbDIuZGVmYXVsdCwgX2V4dGVuZHMoeyBkZWZhdWx0U3R5bGVzOiBNb2RhbC5kZWZhdWx0U3R5bGVzIH0sIHByb3BzKSksIF90aGlzLm5vZGUpO1xuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1vZGFsLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMubm9kZS5jbGFzc05hbWUgPSB0aGlzLnByb3BzLnBvcnRhbENsYXNzTmFtZTtcblxuICAgICAgdmFyIHBhcmVudCA9IGdldFBhcmVudEVsZW1lbnQodGhpcy5wcm9wcy5wYXJlbnRTZWxlY3Rvcik7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKTtcblxuICAgICAgdGhpcy5yZW5kZXJQb3J0YWwodGhpcy5wcm9wcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICAgIHZhciBpc09wZW4gPSBuZXdQcm9wcy5pc09wZW47XG4gICAgICAvLyBTdG9wIHVubmVjZXNzYXJ5IHJlbmRlcnMgaWYgbW9kYWwgaXMgcmVtYWluaW5nIGNsb3NlZFxuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuaXNPcGVuICYmICFpc09wZW4pIHJldHVybjtcblxuICAgICAgdmFyIGN1cnJlbnRQYXJlbnQgPSBnZXRQYXJlbnRFbGVtZW50KHRoaXMucHJvcHMucGFyZW50U2VsZWN0b3IpO1xuICAgICAgdmFyIG5ld1BhcmVudCA9IGdldFBhcmVudEVsZW1lbnQobmV3UHJvcHMucGFyZW50U2VsZWN0b3IpO1xuXG4gICAgICBpZiAobmV3UGFyZW50ICE9PSBjdXJyZW50UGFyZW50KSB7XG4gICAgICAgIGN1cnJlbnRQYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcbiAgICAgICAgbmV3UGFyZW50LmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVuZGVyUG9ydGFsKG5ld1Byb3BzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVwZGF0ZShuZXdQcm9wcykge1xuICAgICAgaWYgKG5ld1Byb3BzLnBvcnRhbENsYXNzTmFtZSAhPT0gdGhpcy5wcm9wcy5wb3J0YWxDbGFzc05hbWUpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTmFtZSA9IG5ld1Byb3BzLnBvcnRhbENsYXNzTmFtZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKCF0aGlzLm5vZGUpIHJldHVybjtcblxuICAgICAgdmFyIHN0YXRlID0gdGhpcy5wb3J0YWwuc3RhdGU7XG4gICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgIHZhciBjbG9zZXNBdCA9IHN0YXRlLmlzT3BlbiAmJiB0aGlzLnByb3BzLmNsb3NlVGltZW91dE1TICYmIChzdGF0ZS5jbG9zZXNBdCB8fCBub3cgKyB0aGlzLnByb3BzLmNsb3NlVGltZW91dE1TKTtcblxuICAgICAgaWYgKGNsb3Nlc0F0KSB7XG4gICAgICAgIGlmICghc3RhdGUuYmVmb3JlQ2xvc2UpIHtcbiAgICAgICAgICB0aGlzLnBvcnRhbC5jbG9zZVdpdGhUaW1lb3V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMucmVtb3ZlUG9ydGFsLCBjbG9zZXNBdCAtIG5vdyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbW92ZVBvcnRhbCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiAnc2V0QXBwRWxlbWVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEFwcEVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgYXJpYUFwcEhpZGVyLnNldEVsZW1lbnQoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdpbmplY3RDU1MnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbmplY3RDU1MoKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgY29uc29sZS53YXJuKCdSZWFjdC1Nb2RhbDogaW5qZWN0Q1NTIGhhcyBiZWVuIGRlcHJlY2F0ZWQgJyArICdhbmQgbm8gbG9uZ2VyIGhhcyBhbnkgZWZmZWN0LiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gYSBsYXRlciB2ZXJzaW9uJyk7XG4gICAgfVxuICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXG4gICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXMgKi9cblxuICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXMgKi9cblxuICB9XSk7XG5cbiAgcmV0dXJuIE1vZGFsO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuTW9kYWwucHJvcFR5cGVzID0ge1xuICBpc09wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbC5pc1JlcXVpcmVkLFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgY29udGVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gICAgb3ZlcmxheTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RcbiAgfSksXG4gIHBvcnRhbENsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGJvZHlPcGVuQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XSksXG4gIG92ZXJsYXlDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RdKSxcbiAgYXBwRWxlbWVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5pbnN0YW5jZU9mKF9zYWZlSFRNTEVsZW1lbnQyLmRlZmF1bHQpLFxuICBvbkFmdGVyT3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvblJlcXVlc3RDbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBjbG9zZVRpbWVvdXRNUzogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGFyaWFIaWRlQXBwOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgcGFyZW50U2VsZWN0b3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgYXJpYTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHJvbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBjb250ZW50TGFiZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5Nb2RhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzT3BlbjogZmFsc2UsXG4gIHBvcnRhbENsYXNzTmFtZTogcG9ydGFsQ2xhc3NOYW1lLFxuICBib2R5T3BlbkNsYXNzTmFtZTogYm9keU9wZW5DbGFzc05hbWUsXG4gIGFyaWFIaWRlQXBwOiB0cnVlLFxuICBjbG9zZVRpbWVvdXRNUzogMCxcbiAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljazogdHJ1ZSxcbiAgcGFyZW50U2VsZWN0b3I6IGZ1bmN0aW9uIHBhcmVudFNlbGVjdG9yKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xuICB9XG59O1xuTW9kYWwuZGVmYXVsdFN0eWxlcyA9IHtcbiAgb3ZlcmxheToge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpJ1xuICB9LFxuICBjb250ZW50OiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnNDBweCcsXG4gICAgbGVmdDogJzQwcHgnLFxuICAgIHJpZ2h0OiAnNDBweCcsXG4gICAgYm90dG9tOiAnNDBweCcsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNjY2MnLFxuICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnLFxuICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIHBhZGRpbmc6ICcyMHB4J1xuICB9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gTW9kYWw7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2NvbXBvbmVudHMvTW9kYWwuanNcbi8vIG1vZHVsZSBpZCA9IDY0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX2VsZW1lbnRDbGFzcyA9IHJlcXVpcmUoJ2VsZW1lbnQtY2xhc3MnKTtcblxudmFyIF9lbGVtZW50Q2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZWxlbWVudENsYXNzKTtcblxudmFyIF9mb2N1c01hbmFnZXIgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2ZvY3VzTWFuYWdlcicpO1xuXG52YXIgZm9jdXNNYW5hZ2VyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2ZvY3VzTWFuYWdlcik7XG5cbnZhciBfc2NvcGVUYWIgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3Njb3BlVGFiJyk7XG5cbnZhciBfc2NvcGVUYWIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NvcGVUYWIpO1xuXG52YXIgX2FyaWFBcHBIaWRlciA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYXJpYUFwcEhpZGVyJyk7XG5cbnZhciBhcmlhQXBwSGlkZXIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfYXJpYUFwcEhpZGVyKTtcblxudmFyIF9yZWZDb3VudCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcmVmQ291bnQnKTtcblxudmFyIHJlZkNvdW50ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3JlZkNvdW50KTtcblxudmFyIF9zYWZlSFRNTEVsZW1lbnQgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3NhZmVIVE1MRWxlbWVudCcpO1xuXG52YXIgX3NhZmVIVE1MRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zYWZlSFRNTEVsZW1lbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8vIHNvIHRoYXQgb3VyIENTUyBpcyBzdGF0aWNhbGx5IGFuYWx5emFibGVcbnZhciBDTEFTU19OQU1FUyA9IHtcbiAgb3ZlcmxheTogJ1JlYWN0TW9kYWxfX092ZXJsYXknLFxuICBjb250ZW50OiAnUmVhY3RNb2RhbF9fQ29udGVudCdcbn07XG5cbnZhciBUQUJfS0VZID0gOTtcbnZhciBFU0NfS0VZID0gMjc7XG5cbnZhciBNb2RhbFBvcnRhbCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhNb2RhbFBvcnRhbCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTW9kYWxQb3J0YWwocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9kYWxQb3J0YWwpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE1vZGFsUG9ydGFsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTW9kYWxQb3J0YWwpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zZXRGb2N1c0FmdGVyUmVuZGVyID0gZnVuY3Rpb24gKGZvY3VzKSB7XG4gICAgICBfdGhpcy5mb2N1c0FmdGVyUmVuZGVyID0gZm9jdXM7XG4gICAgfTtcblxuICAgIF90aGlzLnNldE92ZXJsYXlSZWYgPSBmdW5jdGlvbiAob3ZlcmxheSkge1xuICAgICAgX3RoaXMub3ZlcmxheSA9IG92ZXJsYXk7XG4gICAgfTtcblxuICAgIF90aGlzLnNldENvbnRlbnRSZWYgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgX3RoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgfTtcblxuICAgIF90aGlzLmFmdGVyQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb2N1c01hbmFnZXIucmV0dXJuRm9jdXMoKTtcbiAgICAgIGZvY3VzTWFuYWdlci50ZWFyZG93blNjb3BlZEZvY3VzKCk7XG4gICAgfTtcblxuICAgIF90aGlzLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5iZWZvcmVPcGVuKCk7XG4gICAgICBpZiAoX3RoaXMuc3RhdGUuYWZ0ZXJPcGVuICYmIF90aGlzLnN0YXRlLmJlZm9yZUNsb3NlKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5jbG9zZVRpbWVyKTtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBiZWZvcmVDbG9zZTogZmFsc2UgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb2N1c01hbmFnZXIuc2V0dXBTY29wZWRGb2N1cyhfdGhpcy5ub2RlKTtcbiAgICAgICAgZm9jdXNNYW5hZ2VyLm1hcmtGb3JGb2N1c0xhdGVyKCk7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHsgaXNPcGVuOiB0cnVlIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGFmdGVyT3BlbjogdHJ1ZSB9KTtcblxuICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5pc09wZW4gJiYgX3RoaXMucHJvcHMub25BZnRlck9wZW4pIHtcbiAgICAgICAgICAgIF90aGlzLnByb3BzLm9uQWZ0ZXJPcGVuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5iZWZvcmVDbG9zZSgpO1xuICAgICAgaWYgKF90aGlzLnByb3BzLmNsb3NlVGltZW91dE1TID4gMCkge1xuICAgICAgICBfdGhpcy5jbG9zZVdpdGhUaW1lb3V0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5jbG9zZVdpdGhvdXRUaW1lb3V0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmZvY3VzQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5jb250ZW50ICYmICFfdGhpcy5jb250ZW50SGFzRm9jdXMoKSAmJiBfdGhpcy5jb250ZW50LmZvY3VzKCk7XG4gICAgfTtcblxuICAgIF90aGlzLmNsb3NlV2l0aFRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY2xvc2VzQXQgPSBEYXRlLm5vdygpICsgX3RoaXMucHJvcHMuY2xvc2VUaW1lb3V0TVM7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGJlZm9yZUNsb3NlOiB0cnVlLCBjbG9zZXNBdDogY2xvc2VzQXQgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5jbG9zZVRpbWVyID0gc2V0VGltZW91dChfdGhpcy5jbG9zZVdpdGhvdXRUaW1lb3V0LCBfdGhpcy5zdGF0ZS5jbG9zZXNBdCAtIERhdGUubm93KCkpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmNsb3NlV2l0aG91dFRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGJlZm9yZUNsb3NlOiBmYWxzZSxcbiAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgICAgYWZ0ZXJPcGVuOiBmYWxzZSxcbiAgICAgICAgY2xvc2VzQXQ6IG51bGxcbiAgICAgIH0sIF90aGlzLmFmdGVyQ2xvc2UpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gVEFCX0tFWSkge1xuICAgICAgICAoMCwgX3Njb3BlVGFiMi5kZWZhdWx0KShfdGhpcy5jb250ZW50LCBldmVudCk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRVNDX0tFWSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdGhpcy5yZXF1ZXN0Q2xvc2UoZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVPdmVybGF5T25DbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnNob3VsZENsb3NlID09PSBudWxsKSB7XG4gICAgICAgIF90aGlzLnNob3VsZENsb3NlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnNob3VsZENsb3NlICYmIF90aGlzLnByb3BzLnNob3VsZENsb3NlT25PdmVybGF5Q2xpY2spIHtcbiAgICAgICAgaWYgKF90aGlzLm93bmVySGFuZGxlc0Nsb3NlKCkpIHtcbiAgICAgICAgICBfdGhpcy5yZXF1ZXN0Q2xvc2UoZXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLmZvY3VzQ29udGVudCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBfdGhpcy5zaG91bGRDbG9zZSA9IG51bGw7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUNvbnRlbnRPbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2hvdWxkQ2xvc2UgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVxdWVzdENsb3NlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gX3RoaXMub3duZXJIYW5kbGVzQ2xvc2UoKSAmJiBfdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZShldmVudCk7XG4gICAgfTtcblxuICAgIF90aGlzLm93bmVySGFuZGxlc0Nsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlO1xuICAgIH07XG5cbiAgICBfdGhpcy5zaG91bGRCZUNsb3NlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhX3RoaXMuc3RhdGUuaXNPcGVuICYmICFfdGhpcy5zdGF0ZS5iZWZvcmVDbG9zZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuY29udGVudEhhc0ZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IF90aGlzLmNvbnRlbnQgfHwgX3RoaXMuY29udGVudC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuYnVpbGRDbGFzc05hbWUgPSBmdW5jdGlvbiAod2hpY2gsIGFkZGl0aW9uYWwpIHtcbiAgICAgIHZhciBjbGFzc05hbWVzID0gKHR5cGVvZiBhZGRpdGlvbmFsID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihhZGRpdGlvbmFsKSkgPT09ICdvYmplY3QnID8gYWRkaXRpb25hbCA6IHtcbiAgICAgICAgYmFzZTogQ0xBU1NfTkFNRVNbd2hpY2hdLFxuICAgICAgICBhZnRlck9wZW46IENMQVNTX05BTUVTW3doaWNoXSArICctLWFmdGVyLW9wZW4nLFxuICAgICAgICBiZWZvcmVDbG9zZTogQ0xBU1NfTkFNRVNbd2hpY2hdICsgJy0tYmVmb3JlLWNsb3NlJ1xuICAgICAgfTtcbiAgICAgIHZhciBjbGFzc05hbWUgPSBjbGFzc05hbWVzLmJhc2U7XG4gICAgICBpZiAoX3RoaXMuc3RhdGUuYWZ0ZXJPcGVuKSB7XG4gICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSArICcgJyArIGNsYXNzTmFtZXMuYWZ0ZXJPcGVuO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLnN0YXRlLmJlZm9yZUNsb3NlKSB7XG4gICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSArICcgJyArIGNsYXNzTmFtZXMuYmVmb3JlQ2xvc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHlwZW9mIGFkZGl0aW9uYWwgPT09ICdzdHJpbmcnICYmIGFkZGl0aW9uYWwgPyBjbGFzc05hbWUgKyAnICcgKyBhZGRpdGlvbmFsIDogY2xhc3NOYW1lO1xuICAgIH07XG5cbiAgICBfdGhpcy5hcmlhQXR0cmlidXRlcyA9IGZ1bmN0aW9uIChpdGVtcykge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGl0ZW1zKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbmFtZSkge1xuICAgICAgICBhY2NbJ2FyaWEtJyArIG5hbWVdID0gaXRlbXNbbmFtZV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG4gICAgfTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgYWZ0ZXJPcGVuOiBmYWxzZSxcbiAgICAgIGJlZm9yZUNsb3NlOiBmYWxzZVxuICAgIH07XG5cbiAgICBfdGhpcy5zaG91bGRDbG9zZSA9IG51bGw7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1vZGFsUG9ydGFsLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAvLyBGb2N1cyBuZWVkcyB0byBiZSBzZXQgd2hlbiBtb3VudGluZyBhbmQgYWxyZWFkeSBvcGVuXG4gICAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5zZXRGb2N1c0FmdGVyUmVuZGVyKHRydWUpO1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBpZiAobmV3UHJvcHMuYm9keU9wZW5DbGFzc05hbWUgIT09IHRoaXMucHJvcHMuYm9keU9wZW5DbGFzc05hbWUpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUud2FybignUmVhY3QtTW9kYWw6IFwiYm9keU9wZW5DbGFzc05hbWVcIiBwcm9wIGhhcyBiZWVuIG1vZGlmaWVkLiAnICsgJ1RoaXMgbWF5IGNhdXNlIHVuZXhwZWN0ZWQgYmVoYXZpb3Igd2hlbiBtdWx0aXBsZSBtb2RhbHMgYXJlIG9wZW4uJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIEZvY3VzIG9ubHkgbmVlZHMgdG8gYmUgc2V0IG9uY2Ugd2hlbiB0aGUgbW9kYWwgaXMgYmVpbmcgb3BlbmVkXG4gICAgICBpZiAoIXRoaXMucHJvcHMuaXNPcGVuICYmIG5ld1Byb3BzLmlzT3Blbikge1xuICAgICAgICB0aGlzLnNldEZvY3VzQWZ0ZXJSZW5kZXIodHJ1ZSk7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmlzT3BlbiAmJiAhbmV3UHJvcHMuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICBpZiAodGhpcy5mb2N1c0FmdGVyUmVuZGVyKSB7XG4gICAgICAgIHRoaXMuZm9jdXNDb250ZW50KCk7XG4gICAgICAgIHRoaXMuc2V0Rm9jdXNBZnRlclJlbmRlcihmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuYmVmb3JlQ2xvc2UoKTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NlVGltZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2JlZm9yZU9wZW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiZWZvcmVPcGVuKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYXBwRWxlbWVudCA9IF9wcm9wcy5hcHBFbGVtZW50LFxuICAgICAgICAgIGFyaWFIaWRlQXBwID0gX3Byb3BzLmFyaWFIaWRlQXBwLFxuICAgICAgICAgIGJvZHlPcGVuQ2xhc3NOYW1lID0gX3Byb3BzLmJvZHlPcGVuQ2xhc3NOYW1lO1xuXG4gICAgICByZWZDb3VudC5hZGQoYm9keU9wZW5DbGFzc05hbWUpO1xuICAgICAgLy8gQWRkIGJvZHkgY2xhc3NcbiAgICAgICgwLCBfZWxlbWVudENsYXNzMi5kZWZhdWx0KShkb2N1bWVudC5ib2R5KS5hZGQoYm9keU9wZW5DbGFzc05hbWUpO1xuICAgICAgLy8gQWRkIGFyaWEtaGlkZGVuIHRvIGFwcEVsZW1lbnRcbiAgICAgIGlmIChhcmlhSGlkZUFwcCkge1xuICAgICAgICBhcmlhQXBwSGlkZXIuaGlkZShhcHBFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdiZWZvcmVDbG9zZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJlZm9yZUNsb3NlKCkge1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFwcEVsZW1lbnQgPSBfcHJvcHMyLmFwcEVsZW1lbnQsXG4gICAgICAgICAgYXJpYUhpZGVBcHAgPSBfcHJvcHMyLmFyaWFIaWRlQXBwLFxuICAgICAgICAgIGJvZHlPcGVuQ2xhc3NOYW1lID0gX3Byb3BzMi5ib2R5T3BlbkNsYXNzTmFtZTtcblxuICAgICAgcmVmQ291bnQucmVtb3ZlKGJvZHlPcGVuQ2xhc3NOYW1lKTtcbiAgICAgIC8vIFJlbW92ZSBjbGFzcyBpZiBubyBtb3JlIG1vZGFscyBhcmUgb3BlblxuICAgICAgaWYgKHJlZkNvdW50LmNvdW50KGJvZHlPcGVuQ2xhc3NOYW1lKSA9PT0gMCkge1xuICAgICAgICAoMCwgX2VsZW1lbnRDbGFzczIuZGVmYXVsdCkoZG9jdW1lbnQuYm9keSkucmVtb3ZlKGJvZHlPcGVuQ2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICAgIC8vIFJlc2V0IGFyaWEtaGlkZGVuIGF0dHJpYnV0ZSBpZiBhbGwgbW9kYWxzIGhhdmUgYmVlbiByZW1vdmVkXG4gICAgICBpZiAoYXJpYUhpZGVBcHAgJiYgcmVmQ291bnQudG90YWxDb3VudCgpIDwgMSkge1xuICAgICAgICBhcmlhQXBwSGlkZXIuc2hvdyhhcHBFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEb24ndCBzdGVhbCBmb2N1cyBmcm9tIGlubmVyIGVsZW1lbnRzXG5cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMzLmNsYXNzTmFtZSxcbiAgICAgICAgICBvdmVybGF5Q2xhc3NOYW1lID0gX3Byb3BzMy5vdmVybGF5Q2xhc3NOYW1lLFxuICAgICAgICAgIGRlZmF1bHRTdHlsZXMgPSBfcHJvcHMzLmRlZmF1bHRTdHlsZXM7XG5cbiAgICAgIHZhciBjb250ZW50U3R5bGVzID0gY2xhc3NOYW1lID8ge30gOiBkZWZhdWx0U3R5bGVzLmNvbnRlbnQ7XG4gICAgICB2YXIgb3ZlcmxheVN0eWxlcyA9IG92ZXJsYXlDbGFzc05hbWUgPyB7fSA6IGRlZmF1bHRTdHlsZXMub3ZlcmxheTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2hvdWxkQmVDbG9zZWQoKSA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCBudWxsKSA6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogdGhpcy5zZXRPdmVybGF5UmVmLFxuICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5idWlsZENsYXNzTmFtZSgnb3ZlcmxheScsIG92ZXJsYXlDbGFzc05hbWUpLFxuICAgICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgb3ZlcmxheVN0eWxlcywgdGhpcy5wcm9wcy5zdHlsZS5vdmVybGF5KSxcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZU92ZXJsYXlPbkNsaWNrIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIF9leHRlbmRzKHtcbiAgICAgICAgICAgIHJlZjogdGhpcy5zZXRDb250ZW50UmVmLFxuICAgICAgICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBjb250ZW50U3R5bGVzLCB0aGlzLnByb3BzLnN0eWxlLmNvbnRlbnQpLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmJ1aWxkQ2xhc3NOYW1lKCdjb250ZW50JywgY2xhc3NOYW1lKSxcbiAgICAgICAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG4gICAgICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNvbnRlbnRPbkNsaWNrLFxuICAgICAgICAgICAgcm9sZTogdGhpcy5wcm9wcy5yb2xlLFxuICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiB0aGlzLnByb3BzLmNvbnRlbnRMYWJlbFxuICAgICAgICAgIH0sIHRoaXMuYXJpYUF0dHJpYnV0ZXModGhpcy5wcm9wcy5hcmlhIHx8IHt9KSksXG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNb2RhbFBvcnRhbDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbk1vZGFsUG9ydGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3R5bGU6IHtcbiAgICBvdmVybGF5OiB7fSxcbiAgICBjb250ZW50OiB7fVxuICB9XG59O1xuTW9kYWxQb3J0YWwucHJvcFR5cGVzID0ge1xuICBpc09wZW46IF9wcm9wVHlwZXMuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgZGVmYXVsdFN0eWxlczogX3Byb3BUeXBlcy5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRlbnQ6IF9wcm9wVHlwZXMuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBvdmVybGF5OiBfcHJvcFR5cGVzLlByb3BUeXBlcy5vYmplY3RcbiAgfSksXG4gIHN0eWxlOiBfcHJvcFR5cGVzLlByb3BUeXBlcy5zaGFwZSh7XG4gICAgY29udGVudDogX3Byb3BUeXBlcy5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIG92ZXJsYXk6IF9wcm9wVHlwZXMuUHJvcFR5cGVzLm9iamVjdFxuICB9KSxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzLlByb3BUeXBlcy5vbmVPZlR5cGUoW19wcm9wVHlwZXMuUHJvcFR5cGVzLnN0cmluZywgX3Byb3BUeXBlcy5Qcm9wVHlwZXMub2JqZWN0XSksXG4gIG92ZXJsYXlDbGFzc05hbWU6IF9wcm9wVHlwZXMuUHJvcFR5cGVzLm9uZU9mVHlwZShbX3Byb3BUeXBlcy5Qcm9wVHlwZXMuc3RyaW5nLCBfcHJvcFR5cGVzLlByb3BUeXBlcy5vYmplY3RdKSxcbiAgYm9keU9wZW5DbGFzc05hbWU6IF9wcm9wVHlwZXMuUHJvcFR5cGVzLnN0cmluZyxcbiAgYXJpYUhpZGVBcHA6IF9wcm9wVHlwZXMuUHJvcFR5cGVzLmJvb2wsXG4gIGFwcEVsZW1lbnQ6IF9wcm9wVHlwZXMuUHJvcFR5cGVzLmluc3RhbmNlT2YoX3NhZmVIVE1MRWxlbWVudDIuZGVmYXVsdCksXG4gIG9uQWZ0ZXJPcGVuOiBfcHJvcFR5cGVzLlByb3BUeXBlcy5mdW5jLFxuICBvblJlcXVlc3RDbG9zZTogX3Byb3BUeXBlcy5Qcm9wVHlwZXMuZnVuYyxcbiAgY2xvc2VUaW1lb3V0TVM6IF9wcm9wVHlwZXMuUHJvcFR5cGVzLm51bWJlcixcbiAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljazogX3Byb3BUeXBlcy5Qcm9wVHlwZXMuYm9vbCxcbiAgcm9sZTogX3Byb3BUeXBlcy5Qcm9wVHlwZXMuc3RyaW5nLFxuICBjb250ZW50TGFiZWw6IF9wcm9wVHlwZXMuUHJvcFR5cGVzLnN0cmluZyxcbiAgYXJpYTogX3Byb3BUeXBlcy5Qcm9wVHlwZXMub2JqZWN0LFxuICBjaGlsZHJlbjogX3Byb3BUeXBlcy5Qcm9wVHlwZXMubm9kZVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IE1vZGFsUG9ydGFsO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9jb21wb25lbnRzL01vZGFsUG9ydGFsLmpzXG4vLyBtb2R1bGUgaWQgPSA2NTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgcmV0dXJuIG5ldyBFbGVtZW50Q2xhc3Mob3B0cylcbn1cblxuZnVuY3Rpb24gaW5kZXhPZihhcnIsIHByb3ApIHtcbiAgaWYgKGFyci5pbmRleE9mKSByZXR1cm4gYXJyLmluZGV4T2YocHJvcClcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKylcbiAgICBpZiAoYXJyW2ldID09PSBwcm9wKSByZXR1cm4gaVxuICByZXR1cm4gLTFcbn1cblxuZnVuY3Rpb24gRWxlbWVudENsYXNzKG9wdHMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEVsZW1lbnRDbGFzcykpIHJldHVybiBuZXcgRWxlbWVudENsYXNzKG9wdHMpXG4gIHZhciBzZWxmID0gdGhpc1xuICBpZiAoIW9wdHMpIG9wdHMgPSB7fVxuXG4gIC8vIHNpbWlsYXIgZG9pbmcgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCBidXQgd29ya3MgaW4gSUU4XG4gIGlmIChvcHRzLm5vZGVUeXBlKSBvcHRzID0ge2VsOiBvcHRzfVxuXG4gIHRoaXMub3B0cyA9IG9wdHNcbiAgdGhpcy5lbCA9IG9wdHMuZWwgfHwgZG9jdW1lbnQuYm9keVxuICBpZiAodHlwZW9mIHRoaXMuZWwgIT09ICdvYmplY3QnKSB0aGlzLmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmVsKVxufVxuXG5FbGVtZW50Q2xhc3MucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICB2YXIgZWwgPSB0aGlzLmVsXG4gIGlmICghZWwpIHJldHVyblxuICBpZiAoZWwuY2xhc3NOYW1lID09PSBcIlwiKSByZXR1cm4gZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lXG4gIHZhciBjbGFzc2VzID0gZWwuY2xhc3NOYW1lLnNwbGl0KCcgJylcbiAgaWYgKGluZGV4T2YoY2xhc3NlcywgY2xhc3NOYW1lKSA+IC0xKSByZXR1cm4gY2xhc3Nlc1xuICBjbGFzc2VzLnB1c2goY2xhc3NOYW1lKVxuICBlbC5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oJyAnKVxuICByZXR1cm4gY2xhc3Nlc1xufVxuXG5FbGVtZW50Q2xhc3MucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICB2YXIgZWwgPSB0aGlzLmVsXG4gIGlmICghZWwpIHJldHVyblxuICBpZiAoZWwuY2xhc3NOYW1lID09PSBcIlwiKSByZXR1cm5cbiAgdmFyIGNsYXNzZXMgPSBlbC5jbGFzc05hbWUuc3BsaXQoJyAnKVxuICB2YXIgaWR4ID0gaW5kZXhPZihjbGFzc2VzLCBjbGFzc05hbWUpXG4gIGlmIChpZHggPiAtMSkgY2xhc3Nlcy5zcGxpY2UoaWR4LCAxKVxuICBlbC5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oJyAnKVxuICByZXR1cm4gY2xhc3Nlc1xufVxuXG5FbGVtZW50Q2xhc3MucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICB2YXIgZWwgPSB0aGlzLmVsXG4gIGlmICghZWwpIHJldHVyblxuICB2YXIgY2xhc3NlcyA9IGVsLmNsYXNzTmFtZS5zcGxpdCgnICcpXG4gIHJldHVybiBpbmRleE9mKGNsYXNzZXMsIGNsYXNzTmFtZSkgPiAtMVxufVxuXG5FbGVtZW50Q2xhc3MucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICB2YXIgZWwgPSB0aGlzLmVsXG4gIGlmICghZWwpIHJldHVyblxuICBpZiAodGhpcy5oYXMoY2xhc3NOYW1lKSkgdGhpcy5yZW1vdmUoY2xhc3NOYW1lKVxuICBlbHNlIHRoaXMuYWRkKGNsYXNzTmFtZSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtY2xhc3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaGFuZGxlQmx1ciA9IGhhbmRsZUJsdXI7XG5leHBvcnRzLmhhbmRsZUZvY3VzID0gaGFuZGxlRm9jdXM7XG5leHBvcnRzLm1hcmtGb3JGb2N1c0xhdGVyID0gbWFya0ZvckZvY3VzTGF0ZXI7XG5leHBvcnRzLnJldHVybkZvY3VzID0gcmV0dXJuRm9jdXM7XG5leHBvcnRzLnNldHVwU2NvcGVkRm9jdXMgPSBzZXR1cFNjb3BlZEZvY3VzO1xuZXhwb3J0cy50ZWFyZG93blNjb3BlZEZvY3VzID0gdGVhcmRvd25TY29wZWRGb2N1cztcblxudmFyIF90YWJiYWJsZSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvdGFiYmFibGUnKTtcblxudmFyIF90YWJiYWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90YWJiYWJsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBmb2N1c0xhdGVyRWxlbWVudHMgPSBbXTtcbnZhciBtb2RhbEVsZW1lbnQgPSBudWxsO1xudmFyIG5lZWRUb0ZvY3VzID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGhhbmRsZUJsdXIoKSB7XG4gIG5lZWRUb0ZvY3VzID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRm9jdXMoKSB7XG4gIGlmIChuZWVkVG9Gb2N1cykge1xuICAgIG5lZWRUb0ZvY3VzID0gZmFsc2U7XG4gICAgaWYgKCFtb2RhbEVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gbmVlZCB0byBzZWUgaG93IGpRdWVyeSBzaGltcyBkb2N1bWVudC5vbignZm9jdXNpbicpIHNvIHdlIGRvbid0IG5lZWQgdGhlXG4gICAgLy8gc2V0VGltZW91dCwgZmlyZWZveCBkb2Vzbid0IHN1cHBvcnQgZm9jdXNpbiwgaWYgaXQgZGlkLCB3ZSBjb3VsZCBmb2N1c1xuICAgIC8vIHRoZSBlbGVtZW50IG91dHNpZGUgb2YgYSBzZXRUaW1lb3V0LiBTaWRlLWVmZmVjdCBvZiB0aGlzIGltcGxlbWVudGF0aW9uXG4gICAgLy8gaXMgdGhhdCB0aGUgZG9jdW1lbnQuYm9keSBnZXRzIGZvY3VzLCBhbmQgdGhlbiB3ZSBmb2N1cyBvdXIgZWxlbWVudCByaWdodFxuICAgIC8vIGFmdGVyLCBzZWVtcyBmaW5lLlxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1vZGFsRWxlbWVudC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgZWwgPSAoMCwgX3RhYmJhYmxlMi5kZWZhdWx0KShtb2RhbEVsZW1lbnQpWzBdIHx8IG1vZGFsRWxlbWVudDtcbiAgICAgIGVsLmZvY3VzKCk7XG4gICAgfSwgMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFya0ZvckZvY3VzTGF0ZXIoKSB7XG4gIGZvY3VzTGF0ZXJFbGVtZW50cy5wdXNoKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5mdW5jdGlvbiByZXR1cm5Gb2N1cygpIHtcbiAgdmFyIHRvRm9jdXMgPSBudWxsO1xuICB0cnkge1xuICAgIHRvRm9jdXMgPSBmb2N1c0xhdGVyRWxlbWVudHMucG9wKCk7XG4gICAgdG9Gb2N1cy5mb2N1cygpO1xuICAgIHJldHVybjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUud2FybihbJ1lvdSB0cmllZCB0byByZXR1cm4gZm9jdXMgdG8nLCB0b0ZvY3VzLCAnYnV0IGl0IGlzIG5vdCBpbiB0aGUgRE9NIGFueW1vcmUnXS5qb2luKFwiIFwiKSk7XG4gIH1cbn1cbi8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXG5mdW5jdGlvbiBzZXR1cFNjb3BlZEZvY3VzKGVsZW1lbnQpIHtcbiAgbW9kYWxFbGVtZW50ID0gZWxlbWVudDtcblxuICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGhhbmRsZUJsdXIsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZUZvY3VzLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29uQmx1cicsIGhhbmRsZUJsdXIpO1xuICAgIGRvY3VtZW50LmF0dGFjaEV2ZW50KCdvbkZvY3VzJywgaGFuZGxlRm9jdXMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRlYXJkb3duU2NvcGVkRm9jdXMoKSB7XG4gIG1vZGFsRWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVCbHVyKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZUZvY3VzKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuZGV0YWNoRXZlbnQoJ29uQmx1cicsIGhhbmRsZUJsdXIpO1xuICAgIGRvY3VtZW50LmRldGFjaEV2ZW50KCdvbkZvY3VzJywgaGFuZGxlRm9jdXMpO1xuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvZm9jdXNNYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA2NTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzY29wZVRhYjtcblxudmFyIF90YWJiYWJsZSA9IHJlcXVpcmUoJy4vdGFiYmFibGUnKTtcblxudmFyIF90YWJiYWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90YWJiYWJsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHNjb3BlVGFiKG5vZGUsIGV2ZW50KSB7XG4gIHZhciB0YWJiYWJsZSA9ICgwLCBfdGFiYmFibGUyLmRlZmF1bHQpKG5vZGUpO1xuICBpZiAoIXRhYmJhYmxlLmxlbmd0aCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBmaW5hbFRhYmJhYmxlID0gdGFiYmFibGVbZXZlbnQuc2hpZnRLZXkgPyAwIDogdGFiYmFibGUubGVuZ3RoIC0gMV07XG4gIHZhciBsZWF2aW5nRmluYWxUYWJiYWJsZSA9IGZpbmFsVGFiYmFibGUgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgfHxcbiAgLy8gaGFuZGxlIGltbWVkaWF0ZSBzaGlmdCt0YWIgYWZ0ZXIgb3BlbmluZyB3aXRoIG1vdXNlXG4gIG5vZGUgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gIGlmICghbGVhdmluZ0ZpbmFsVGFiYmFibGUpIHJldHVybjtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgdmFyIHRhcmdldCA9IHRhYmJhYmxlW2V2ZW50LnNoaWZ0S2V5ID8gdGFiYmFibGUubGVuZ3RoIC0gMSA6IDBdO1xuICB0YXJnZXQuZm9jdXMoKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9zY29wZVRhYi5qc1xuLy8gbW9kdWxlIGlkID0gNjUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmFkZCA9IGFkZDtcbmV4cG9ydHMucmVtb3ZlID0gcmVtb3ZlO1xuZXhwb3J0cy5jb3VudCA9IGNvdW50O1xuZXhwb3J0cy50b3RhbENvdW50ID0gdG90YWxDb3VudDtcbnZhciBtb2RhbHMgPSB7fTtcblxuZnVuY3Rpb24gYWRkKGJvZHlDbGFzcykge1xuICAvLyBTZXQgdmFyaWFibGUgYW5kIGRlZmF1bHQgaWYgbm9uZVxuICBpZiAoIW1vZGFsc1tib2R5Q2xhc3NdKSB7XG4gICAgbW9kYWxzW2JvZHlDbGFzc10gPSAwO1xuICB9XG4gIG1vZGFsc1tib2R5Q2xhc3NdICs9IDE7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShib2R5Q2xhc3MpIHtcbiAgaWYgKG1vZGFsc1tib2R5Q2xhc3NdKSB7XG4gICAgbW9kYWxzW2JvZHlDbGFzc10gLT0gMTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb3VudChib2R5Q2xhc3MpIHtcbiAgcmV0dXJuIG1vZGFsc1tib2R5Q2xhc3NdO1xufVxuXG5mdW5jdGlvbiB0b3RhbENvdW50KCkge1xuICByZXR1cm4gT2JqZWN0LmtleXMobW9kYWxzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3Vycikge1xuICAgIHJldHVybiBhY2MgKyBtb2RhbHNbY3Vycl07XG4gIH0sIDApO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9oZWxwZXJzL3JlZkNvdW50LmpzXG4vLyBtb2R1bGUgaWQgPSA2NTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE1IEplZCBXYXRzb24uXG4gIEJhc2VkIG9uIGNvZGUgdGhhdCBpcyBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBjYW5Vc2VET00gPSAhIShcblx0XHR0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuXHRcdHdpbmRvdy5kb2N1bWVudCAmJlxuXHRcdHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50XG5cdCk7XG5cblx0dmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0ge1xuXG5cdFx0Y2FuVXNlRE9NOiBjYW5Vc2VET00sXG5cblx0XHRjYW5Vc2VXb3JrZXJzOiB0eXBlb2YgV29ya2VyICE9PSAndW5kZWZpbmVkJyxcblxuXHRcdGNhblVzZUV2ZW50TGlzdGVuZXJzOlxuXHRcdFx0Y2FuVXNlRE9NICYmICEhKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIHx8IHdpbmRvdy5hdHRhY2hFdmVudCksXG5cblx0XHRjYW5Vc2VWaWV3cG9ydDogY2FuVXNlRE9NICYmICEhd2luZG93LnNjcmVlblxuXG5cdH07XG5cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBFeGVjdXRpb25FbnZpcm9ubWVudDtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuRXhlY3V0aW9uRW52aXJvbm1lbnQgPSBFeGVjdXRpb25FbnZpcm9ubWVudDtcblx0fVxuXG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXhlbnYvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3BvdGlmeVdlYkFwaSBmcm9tICdzcG90aWZ5LXdlYi1hcGktbm9kZSc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xuaW1wb3J0IHMgZnJvbSAnLi9QbGF5bGlzdC5jc3MnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuXG5jb25zdCBDTElFTlRfSUQgPSAnYjhhZTM2Mjg2ZjFjNGRiMjhhOGEyYmEzODBhNGQ4Y2MnO1xuY29uc3QgQ0xJRU5UX1NFQ1JFVCA9ICcxOGNmYzc1ZTlmNGI0Nzg1YWMzMjVlYWEzOGEwOTVjOSc7XG5jb25zdCBSRURJUkVDVF9VUkkgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2NhbGxiYWNrJztcblxuY2xhc3MgUGxheWxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBnZXRTcG90aWZ5KHRva2VuKXtcbiAgICBjb25zdCBzcG90aWZ5QXBpID0gbmV3IFNwb3RpZnlXZWJBcGkoe1xuICAgICAgY2xpZW50SWQgOiBDTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQgOiBDTElFTlRfU0VDUkVULFxuICAgICAgcmVkaXJlY3RfdXJpOiBSRURJUkVDVF9VUklcbiAgICB9KTtcblxuICAgIHNwb3RpZnlBcGkuc2V0QWNjZXNzVG9rZW4odG9rZW4pO1xuICAgIHNwb3RpZnlBcGkuZ2V0UGxheWxpc3QoJ3N0ZXBoYW5pZWN1cnJhbicsJzdsajFnZHd3d2NjeWpFVlhpRXlJYlEnKVxuICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICBjb25zdCBpdGVtcyA9IHJlcy5ib2R5LnRyYWNrcy5pdGVtcztcbiAgICAgICBjb25zdCB0cmFja3MgPSBpdGVtcy5tYXAoeD0+IE9iamVjdC5hc3NpZ24oeC50cmFjaywgeyBhZGRlZEJ5OiB4LmFkZGVkX2J5LmlkIH0pKTtcbiAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgIHBsYXlsaXN0OiByZXMuYm9keSxcbiAgICAgICAgIHRyYWNrc1xuICAgICAgIH0pO1xuICAgICB9LCAoZXJyKSA9PntcbiAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBpZighbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UuYXV0aFRva2VuKSB7XG4gICAgICAvL3RvZG8gbG9naW4gc3R1ZmZcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5nZXRTcG90aWZ5KEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmF1dGhUb2tlbikuYWNjZXNzX3Rva2VuKTtcbiAgfVxuXG4gIHRyYWNrKHRyYWNrLCBpZHgpIHtcbiAgICBjb25zdCBhcnRpc3RzID0gdHJhY2suYXJ0aXN0cy5tYXAoeD0+eC5uYW1lKS5qb2luKCcsICcpO1xuICAgIGNvbnN0IHJvd1N0eWxlID0gaWR4ICUgMiA/IHMuZXZlbiA6IHMub2RkO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5yb3csIHJvd1N0eWxlKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLmNlbGwsIHMudHJhY2spfT5cbiAgICAgICAgICB7dHJhY2submFtZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLmNlbGwsIHMuYXJ0aXN0KX0+XG4gICAgICAgICAge2FydGlzdHN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5jZWxsLCBzLmFkZGVkQnkpfT5cbiAgICAgICAgICB7dHJhY2suYWRkZWRCeX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNlbGx9PlxuICAgICAgICAgIFZvdGVzOiAxMFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCB7IHBsYXlsaXN0LCB0cmFja3MgfSA9IHRoaXMuc3RhdGUgfHwge307XG4gICAgaWYoIXRyYWNrcykgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPntwbGF5bGlzdC5uYW1lfTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbH0+XG4gICAgICAgICAge3RyYWNrcy5tYXAodGhpcy50cmFjayl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShQbGF5bGlzdCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9wbGF5bGlzdC9QbGF5bGlzdC5qcyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS0yIS4vUGxheWxpc3QuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtMiEuL1BsYXlsaXN0LmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtMiEuL1BsYXlsaXN0LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yb3V0ZXMvcGxheWxpc3QvUGxheWxpc3QuY3NzXG4vLyBtb2R1bGUgaWQgPSA2NjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5QbGF5bGlzdC1jb2wtMktOZVIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5QbGF5bGlzdC1yb3ctX2V5WFAge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHBhZGRpbmc6IDFlbSAwO1xcbn1cXG5cXG4uUGxheWxpc3QtY2VsbC0xX3htbCB7XFxuICBwYWRkaW5nOiAwIDFlbTtcXG59XFxuXFxuLlBsYXlsaXN0LXRyYWNrLTF1M0JVIHtcXG4gIG1pbi13aWR0aDogMzAlO1xcbn1cXG5cXG4uUGxheWxpc3QtYXJ0aXN0LTNUNnFzIHtcXG4gIG1pbi13aWR0aDogMjAlO1xcbn1cXG5cXG4uUGxheWxpc3QtYWRkZWRCeS02OUdhcCB7XFxuICBtaW4td2lkdGg6IDIwJTtcXG59XFxuXFxuLlBsYXlsaXN0LWV2ZW4tM25oYW8ge1xcbn1cXG5cXG4uUGxheWxpc3Qtb2RkLTJTNDJlIHtcXG4gIGJhY2tncm91bmQ6ICM5MmU1ZmM7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvc3RlcGhhbmllL2Rldi9TaWRlUHJvamVjdHMvVm90ZUxpc3Qvc3JjL3JvdXRlcy9wbGF5bGlzdC9QbGF5bGlzdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsOEJBQThCO01BQzFCLDJCQUEyQjtVQUN2Qix1QkFBdUI7Q0FDaEM7O0FBRUQ7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsOEJBQThCO01BQzFCLHdCQUF3QjtVQUNwQixvQkFBb0I7RUFDNUIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7Q0FDQzs7QUFFRDtFQUNFLG9CQUFvQjtDQUNyQlwiLFwiZmlsZVwiOlwiUGxheWxpc3QuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb2wge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHBhZGRpbmc6IDFlbSAwO1xcbn1cXG5cXG4uY2VsbCB7XFxuICBwYWRkaW5nOiAwIDFlbTtcXG59XFxuXFxuLnRyYWNrIHtcXG4gIG1pbi13aWR0aDogMzAlO1xcbn1cXG5cXG4uYXJ0aXN0IHtcXG4gIG1pbi13aWR0aDogMjAlO1xcbn1cXG5cXG4uYWRkZWRCeSB7XFxuICBtaW4td2lkdGg6IDIwJTtcXG59XFxuXFxuLmV2ZW4ge1xcbn1cXG5cXG4ub2RkIHtcXG4gIGJhY2tncm91bmQ6ICM5MmU1ZmM7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjb2xcIjogXCJQbGF5bGlzdC1jb2wtMktOZVJcIixcblx0XCJyb3dcIjogXCJQbGF5bGlzdC1yb3ctX2V5WFBcIixcblx0XCJjZWxsXCI6IFwiUGxheWxpc3QtY2VsbC0xX3htbFwiLFxuXHRcInRyYWNrXCI6IFwiUGxheWxpc3QtdHJhY2stMXUzQlVcIixcblx0XCJhcnRpc3RcIjogXCJQbGF5bGlzdC1hcnRpc3QtM1Q2cXNcIixcblx0XCJhZGRlZEJ5XCI6IFwiUGxheWxpc3QtYWRkZWRCeS02OUdhcFwiLFxuXHRcImV2ZW5cIjogXCJQbGF5bGlzdC1ldmVuLTNuaGFvXCIsXG5cdFwib2RkXCI6IFwiUGxheWxpc3Qtb2RkLTJTNDJlXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL3JvdXRlcy9wbGF5bGlzdC9QbGF5bGlzdC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDY2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBOzs7Ozs7O0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7QUEvQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBREE7QUFDQTtBQUNBO0FBeUJBOzs7Ozs7OztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3pLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNaQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFNQTs7OztBQWJBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQUNBO0FBYUE7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUxBO0FBREE7QUFhQTs7OztBQWhCQTtBQUNBO0FBa0JBOzs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBOzs7O0FBNUNBO0FBQ0E7QUE4Q0E7Ozs7Ozs7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdmlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQy84QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2JBOzs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQURBO0FBUUE7Ozs7QUFYQTtBQUNBO0FBYUE7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcFdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWQTtBQWVBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUZBO0FBUUE7Ozs7QUFoRUE7QUFDQTtBQW1FQTs7Ozs7OztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9