require("source-map-support").install();
exports.id = 2;
exports.modules = {

/***/ "./src/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__("./src/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__config__);


const CLIENT_ID = 'b8ae36286f1c4db28a8a2ba380a4d8cc';
/* harmony export (immutable) */ __webpack_exports__["a"] = CLIENT_ID;

const CLIENT_SECRET = '18cfc75e9f4b4785ac325eaa38a095c9';
/* harmony export (immutable) */ __webpack_exports__["b"] = CLIENT_SECRET;

const REDIRECT_URI = __WEBPACK_IMPORTED_MODULE_0__config___default.a.api.serverUrl + '/callback';
/* harmony export (immutable) */ __webpack_exports__["c"] = REDIRECT_URI;


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
      clientId: __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* CLIENT_ID */],
      clientSecret: __WEBPACK_IMPORTED_MODULE_5__constants__["b" /* CLIENT_SECRET */],
      redirect_uri: __WEBPACK_IMPORTED_MODULE_5__constants__["c" /* REDIRECT_URI */]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8yLjIyYTMxYjAwMGZlOTNlODE5MDVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbnN0YW50cy5qcz9hNzc0KioiLCJ3ZWJwYWNrOi8vL3NyYy9yb3V0ZXMvcGxheWxpc3QtbG9naW4vUGxheWxpc3RMb2dpbi5qcz9jNDEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgY29uc3QgQ0xJRU5UX0lEID0gJ2I4YWUzNjI4NmYxYzRkYjI4YThhMmJhMzgwYTRkOGNjJztcbmV4cG9ydCBjb25zdCBDTElFTlRfU0VDUkVUID0gJzE4Y2ZjNzVlOWY0YjQ3ODVhYzMyNWVhYTM4YTA5NWM5JztcbmV4cG9ydCBjb25zdCBSRURJUkVDVF9VUkkgPSBjb25maWcuYXBpLnNlcnZlclVybCArICcvY2FsbGJhY2snO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb25zdGFudHMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNwb3RpZnlXZWJBcGkgZnJvbSAnc3BvdGlmeS13ZWItYXBpLW5vZGUnO1xuaW1wb3J0IHMgZnJvbSAnLi9QbGF5bGlzdExvZ2luLmNzcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmltcG9ydCB7IENMSUVOVF9JRCwgQ0xJRU5UX1NFQ1JFVCwgUkVESVJFQ1RfVVJJIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuY2xhc3MgUGxheWxpc3RMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGdldEtleXMoaGFzaCkge1xuICAgIGNvbnN0IGtleVZhbFBhaXJzID0gaGFzaC5zcGxpdCgnJicpO1xuICAgIGNvbnN0IGF1dGggPSB7fTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBrZXlWYWxQYWlycy5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBrZXlWYWwgPSBrZXlWYWxQYWlyc1tpXS5zcGxpdCgnPScpO1xuICAgICAgYXV0aFtrZXlWYWxbMF1dID0ga2V5VmFsWzFdO1xuICAgIH1cblxuICAgIHJldHVybiBhdXRoO1xuICB9XG5cbiAgZ2V0U3BvdGlmeSh0b2tlbil7XG4gICAgY29uc3Qgc3BvdGlmeUFwaSA9IG5ldyBTcG90aWZ5V2ViQXBpKHtcbiAgICAgIGNsaWVudElkIDogQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0IDogQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIHJlZGlyZWN0X3VyaTogUkVESVJFQ1RfVVJJXG4gICAgfSk7XG5cbiAgICBzcG90aWZ5QXBpLnNldEFjY2Vzc1Rva2VuKHRva2VuKTtcbiAgICBzcG90aWZ5QXBpLmdldE1lKClcbiAgICAudGhlbigocmVzKT0+e1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHVzZXI6IHJlcy5ib2R5XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgY29uc3QgYXV0aEhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7XG4gICAgY29uc3QgYXV0aCA9IHRoaXMuZ2V0S2V5cyhhdXRoSGFzaCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGF1dGggfSk7XG4gICAgaWYoIWxvY2FsU3RvcmFnZS5hdXRoVG9rZW4pIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoVG9rZW4nLCBKU09OLnN0cmluZ2lmeShhdXRoKSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0aFRpbWUnLCBtb21lbnQoKS5mb3JtYXQoKSk7XG4gICAgfVxuICAgIHRoaXMuZ2V0U3BvdGlmeShhdXRoLmFjY2Vzc190b2tlbik7XG5cbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHthdXRoLCB1c2VyfSA9IHRoaXMuc3RhdGUgfHwge307XG4gICAgaWYoIXVzZXIpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmJhc2V9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jaGlsZHJlbn0+XG4gICAgICAgICAgPGltZyBzcmM9e3VzZXIuaW1hZ2VzWzBdLnVybH0vPlxuICAgICAgICAgIDxkaXY+V2VsY29tZSB7dXNlci5kaXNwbGF5X25hbWV9ITwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoUGxheWxpc3RMb2dpbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9wbGF5bGlzdC1sb2dpbi9QbGF5bGlzdExvZ2luLmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBREE7QUFRQTtBQUNBO0FBdkRBO0FBQ0E7QUF5REE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==