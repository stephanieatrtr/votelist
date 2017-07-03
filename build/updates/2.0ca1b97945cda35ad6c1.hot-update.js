require("source-map-support").install();
exports.id = 2;
exports.modules = {

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
var _jsxFileName = '/Users/stephanie/dev/votelist/src/routes/playlist-login/PlaylistLogin.js';






const CLIENT_ID = 'b8ae36286f1c4db28a8a2ba380a4d8cc';
const CLIENT_SECRET = '18cfc75e9f4b4785ac325eaa38a095c9';
const REDIRECT_URI = 'http://localhost:3000/callback';

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
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI
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
          lineNumber: 57
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__PlaylistLogin_css___default.a.children, __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: user.images[0].url, __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8yLjBjYTFiOTc5NDVjZGEzNWFkNmMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3JvdXRlcy9wbGF5bGlzdC1sb2dpbi9QbGF5bGlzdExvZ2luLmpzP2M0MTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTcG90aWZ5V2ViQXBpIGZyb20gJ3Nwb3RpZnktd2ViLWFwaS1ub2RlJztcbmltcG9ydCBzIGZyb20gJy4vUGxheWxpc3RMb2dpbi5jc3MnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5jb25zdCBDTElFTlRfSUQgPSAnYjhhZTM2Mjg2ZjFjNGRiMjhhOGEyYmEzODBhNGQ4Y2MnO1xuY29uc3QgQ0xJRU5UX1NFQ1JFVCA9ICcxOGNmYzc1ZTlmNGI0Nzg1YWMzMjVlYWEzOGEwOTVjOSc7XG5jb25zdCBSRURJUkVDVF9VUkkgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2NhbGxiYWNrJztcblxuY2xhc3MgUGxheWxpc3RMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGdldEtleXMoaGFzaCkge1xuICAgIGNvbnN0IGtleVZhbFBhaXJzID0gaGFzaC5zcGxpdCgnJicpO1xuICAgIGNvbnN0IGF1dGggPSB7fTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBrZXlWYWxQYWlycy5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBrZXlWYWwgPSBrZXlWYWxQYWlyc1tpXS5zcGxpdCgnPScpO1xuICAgICAgYXV0aFtrZXlWYWxbMF1dID0ga2V5VmFsWzFdO1xuICAgIH1cblxuICAgIHJldHVybiBhdXRoO1xuICB9XG5cbiAgZ2V0U3BvdGlmeSh0b2tlbil7XG4gICAgY29uc3Qgc3BvdGlmeUFwaSA9IG5ldyBTcG90aWZ5V2ViQXBpKHtcbiAgICAgIGNsaWVudElkIDogQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0IDogQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIHJlZGlyZWN0X3VyaTogUkVESVJFQ1RfVVJJXG4gICAgfSk7XG5cbiAgICBzcG90aWZ5QXBpLnNldEFjY2Vzc1Rva2VuKHRva2VuKTtcbiAgICBzcG90aWZ5QXBpLmdldE1lKClcbiAgICAudGhlbigocmVzKT0+e1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHVzZXI6IHJlcy5ib2R5XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgY29uc3QgYXV0aEhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7XG4gICAgY29uc3QgYXV0aCA9IHRoaXMuZ2V0S2V5cyhhdXRoSGFzaCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGF1dGggfSk7XG4gICAgaWYoIWxvY2FsU3RvcmFnZS5hdXRoVG9rZW4pIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoVG9rZW4nLCBKU09OLnN0cmluZ2lmeShhdXRoKSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0aFRpbWUnLCBtb21lbnQoKS5mb3JtYXQoKSk7XG4gICAgfVxuICAgIHRoaXMuZ2V0U3BvdGlmeShhdXRoLmFjY2Vzc190b2tlbik7XG5cbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHthdXRoLCB1c2VyfSA9IHRoaXMuc3RhdGUgfHwge307XG4gICAgaWYoIXVzZXIpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmJhc2V9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jaGlsZHJlbn0+XG4gICAgICAgICAgPGltZyBzcmM9e3VzZXIuaW1hZ2VzWzBdLnVybH0vPlxuICAgICAgICAgIDxkaXY+V2VsY29tZSB7dXNlci5kaXNwbGF5X25hbWV9ITwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoUGxheWxpc3RMb2dpbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9wbGF5bGlzdC1sb2dpbi9QbGF5bGlzdExvZ2luLmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQVFBO0FBQ0E7QUF2REE7QUFDQTtBQXlEQTs7OztBIiwic291cmNlUm9vdCI6IiJ9