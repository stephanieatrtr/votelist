require("source-map-support").install();
exports.id = 2;
exports.modules = {

/***/ "./src/constants.js":
/***/ (function(module, exports) {

const CLIENT_ID = 'b8ae36286f1c4db28a8a2ba380a4d8cc';
const CLIENT_SECRET = '18cfc75e9f4b4785ac325eaa38a095c9';
const REDIRECT_URI = 'http://localhost:3000/callback';

/***/ }),

/***/ "./src/routes/playlist-login/PlaylistLogin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_spotify_web_api_node__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_spotify_web_api_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_spotify_web_api_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PlaylistLogin_css__ = __webpack_require__("./src/routes/playlist-login/PlaylistLogin.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PlaylistLogin_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__PlaylistLogin_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__("./src/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__constants__);
var _jsxFileName = '/Users/stephanie/dev/votelist/src/routes/playlist-login/PlaylistLogin.js';








class PlaylistLogin extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  getKeys(hash) {
    const keyValPairs = hash.split('&');
    const auth = {};

    for (let i = 0; i < keyValPairs.length; i++) {
      const keyVal = keyValPairs[i].split('=');
      auth[keyVal[0]] = keyVal[1];
    }

    return auth;
  }

  getSpotify(token) {
    const spotifyApi = new __WEBPACK_IMPORTED_MODULE_1_spotify_web_api_node___default.a({
      clientId: __WEBPACK_IMPORTED_MODULE_5__constants__["CLIENT_ID"],
      clientSecret: __WEBPACK_IMPORTED_MODULE_5__constants__["CLIENT_SECRET"],
      redirect_uri: __WEBPACK_IMPORTED_MODULE_5__constants__["REDIRECT_URI"]
    });

    spotifyApi.setAccessToken(token);
    spotifyApi.getMe().then(res => {
      this.setState({
        user: res.body
      });
    });
  }

  componentDidMount() {
    const authHash = window.location.hash.substring(1);
    const auth = this.getKeys(authHash);
    this.setState({ auth });
    if (!localStorage.authToken) {
      localStorage.setItem('authToken', JSON.stringify(auth));
      localStorage.setItem('authTime', __WEBPACK_IMPORTED_MODULE_4_moment___default.a().format());
    }
    this.getSpotify(auth.access_token);
  }

  render() {
    const { auth, user } = this.state || {};
    if (!user) return null;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__PlaylistLogin_css___default.a.base, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__PlaylistLogin_css___default.a.children, __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: user.images[0].url, __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          },
          'Welcome ',
          user.display_name,
          '!'
        )
      )
    );
  }

}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_2__PlaylistLogin_css___default.a)(PlaylistLogin));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8yLmUyMDAyNGFlMjEzMDA5NDk0OTJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbnN0YW50cy5qcz9hNzc0Iiwid2VicGFjazovLy9zcmMvcm91dGVzL3BsYXlsaXN0LWxvZ2luL1BsYXlsaXN0TG9naW4uanM/YzQxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDTElFTlRfSUQgPSAnYjhhZTM2Mjg2ZjFjNGRiMjhhOGEyYmEzODBhNGQ4Y2MnO1xuY29uc3QgQ0xJRU5UX1NFQ1JFVCA9ICcxOGNmYzc1ZTlmNGI0Nzg1YWMzMjVlYWEzOGEwOTVjOSc7XG5jb25zdCBSRURJUkVDVF9VUkkgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2NhbGxiYWNrJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29uc3RhbnRzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTcG90aWZ5V2ViQXBpIGZyb20gJ3Nwb3RpZnktd2ViLWFwaS1ub2RlJztcbmltcG9ydCBzIGZyb20gJy4vUGxheWxpc3RMb2dpbi5jc3MnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5pbXBvcnQgeyBDTElFTlRfSUQsIENMSUVOVF9TRUNSRVQsIFJFRElSRUNUX1VSSSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNsYXNzIFBsYXlsaXN0TG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBnZXRLZXlzKGhhc2gpIHtcbiAgICBjb25zdCBrZXlWYWxQYWlycyA9IGhhc2guc3BsaXQoJyYnKTtcbiAgICBjb25zdCBhdXRoID0ge307XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwga2V5VmFsUGFpcnMubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3Qga2V5VmFsID0ga2V5VmFsUGFpcnNbaV0uc3BsaXQoJz0nKTtcbiAgICAgIGF1dGhba2V5VmFsWzBdXSA9IGtleVZhbFsxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXV0aDtcbiAgfVxuXG4gIGdldFNwb3RpZnkodG9rZW4pe1xuICAgIGNvbnN0IHNwb3RpZnlBcGkgPSBuZXcgU3BvdGlmeVdlYkFwaSh7XG4gICAgICBjbGllbnRJZCA6IENMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldCA6IENMSUVOVF9TRUNSRVQsXG4gICAgICByZWRpcmVjdF91cmk6IFJFRElSRUNUX1VSSVxuICAgIH0pO1xuXG4gICAgc3BvdGlmeUFwaS5zZXRBY2Nlc3NUb2tlbih0b2tlbik7XG4gICAgc3BvdGlmeUFwaS5nZXRNZSgpXG4gICAgLnRoZW4oKHJlcyk9PntcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB1c2VyOiByZXMuYm9keVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGNvbnN0IGF1dGhIYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpO1xuICAgIGNvbnN0IGF1dGggPSB0aGlzLmdldEtleXMoYXV0aEhhc2gpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhdXRoIH0pO1xuICAgIGlmKCFsb2NhbFN0b3JhZ2UuYXV0aFRva2VuKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0aFRva2VuJywgSlNPTi5zdHJpbmdpZnkoYXV0aCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGhUaW1lJywgbW9tZW50KCkuZm9ybWF0KCkpO1xuICAgIH1cbiAgICB0aGlzLmdldFNwb3RpZnkoYXV0aC5hY2Nlc3NfdG9rZW4pO1xuXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCB7YXV0aCwgdXNlcn0gPSB0aGlzLnN0YXRlIHx8IHt9O1xuICAgIGlmKCF1c2VyKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5iYXNlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY2hpbGRyZW59PlxuICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLmltYWdlc1swXS51cmx9Lz5cbiAgICAgICAgICA8ZGl2PldlbGNvbWUge3VzZXIuZGlzcGxheV9uYW1lfSE8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKFBsYXlsaXN0TG9naW4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvcGxheWxpc3QtbG9naW4vUGxheWxpc3RMb2dpbi5qcyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBUUE7QUFDQTtBQXZEQTtBQUNBO0FBeURBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=