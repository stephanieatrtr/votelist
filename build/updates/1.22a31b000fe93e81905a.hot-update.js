require("source-map-support").install();
exports.id = 1;
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

/***/ "./src/routes/playlist/Playlist.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_spotify_web_api_node__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_spotify_web_api_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_spotify_web_api_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Playlist_css__ = __webpack_require__("./src/routes/playlist/Playlist.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Playlist_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Playlist_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__("./src/constants.js");
var _jsxFileName = '/Users/stephanie/dev/votelist/src/routes/playlist/Playlist.js';








class Playlist extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  getSpotify(token) {
    const spotifyApi = new __WEBPACK_IMPORTED_MODULE_1_spotify_web_api_node___default.a({
      clientId: __WEBPACK_IMPORTED_MODULE_6__constants__["a" /* CLIENT_ID */],
      clientSecret: __WEBPACK_IMPORTED_MODULE_6__constants__["b" /* CLIENT_SECRET */],
      redirect_uri: __WEBPACK_IMPORTED_MODULE_6__constants__["c" /* REDIRECT_URI */]
    });

    spotifyApi.setAccessToken(token);
    spotifyApi.getPlaylist('stephaniecurran', '7lj1gdwwwccyjEVXiEyIbQ').then(res => {
      const items = res.body.tracks.items;
      const tracks = items.map(x => Object.assign(x.track, { addedBy: x.added_by.id }));
      this.setState({
        playlist: res.body,
        tracks
      });
    }, err => {
      localStorage.removeItem('authToken');
    });
  }

  componentDidMount() {
    if (!localStorage || !localStorage.authToken) {
      return;
    }

    if (__WEBPACK_IMPORTED_MODULE_5_moment___default.a().diff(__WEBPACK_IMPORTED_MODULE_5_moment___default.a(localStorage.authTime), 'minutes') > 2) {
      localStorage.removeItem('authToken');
      return;
    }

    this.getSpotify(JSON.parse(localStorage.authToken).access_token);
  }

  track(track, idx) {
    const artists = track.artists.map(x => x.name).join(', ');
    const rowStyle = idx % 2 ? __WEBPACK_IMPORTED_MODULE_2__Playlist_css___default.a.even : __WEBPACK_IMPORTED_MODULE_2__Playlist_css___default.a.odd;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_2__Playlist_css___default.a.row, rowStyle), __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_2__Playlist_css___default.a.cell, __WEBPACK_IMPORTED_MODULE_2__Playlist_css___default.a.track), __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        },
        track.name
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_2__Playlist_css___default.a.cell, __WEBPACK_IMPORTED_MODULE_2__Playlist_css___default.a.artist), __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        },
        artists
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_2__Playlist_css___default.a.cell, __WEBPACK_IMPORTED_MODULE_2__Playlist_css___default.a.addedBy), __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        },
        track.addedBy
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Playlist_css___default.a.cell, __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        },
        'Votes: 10'
      )
    );
  }

  render() {
    const { playlist, tracks } = this.state || {};
    if (!tracks) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      },
      'Login to access playlist'
    );

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        },
        playlist.name
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Playlist_css___default.a.col, __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        },
        tracks.map(this.track)
      )
    );
  }

}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_2__Playlist_css___default.a)(Playlist));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8xLjIyYTMxYjAwMGZlOTNlODE5MDVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbnN0YW50cy5qcz9hNzc0Iiwid2VicGFjazovLy9zcmMvcm91dGVzL3BsYXlsaXN0L1BsYXlsaXN0LmpzPzgwODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBDTElFTlRfSUQgPSAnYjhhZTM2Mjg2ZjFjNGRiMjhhOGEyYmEzODBhNGQ4Y2MnO1xuZXhwb3J0IGNvbnN0IENMSUVOVF9TRUNSRVQgPSAnMThjZmM3NWU5ZjRiNDc4NWFjMzI1ZWFhMzhhMDk1YzknO1xuZXhwb3J0IGNvbnN0IFJFRElSRUNUX1VSSSA9IGNvbmZpZy5hcGkuc2VydmVyVXJsICsgJy9jYWxsYmFjayc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbnN0YW50cy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3BvdGlmeVdlYkFwaSBmcm9tICdzcG90aWZ5LXdlYi1hcGktbm9kZSc7XG5pbXBvcnQgcyBmcm9tICcuL1BsYXlsaXN0LmNzcyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBDTElFTlRfSUQsIENMSUVOVF9TRUNSRVQsIFJFRElSRUNUX1VSSSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNsYXNzIFBsYXlsaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgZ2V0U3BvdGlmeSh0b2tlbil7XG4gICAgY29uc3Qgc3BvdGlmeUFwaSA9IG5ldyBTcG90aWZ5V2ViQXBpKHtcbiAgICAgIGNsaWVudElkIDogQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0IDogQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIHJlZGlyZWN0X3VyaTogUkVESVJFQ1RfVVJJXG4gICAgfSk7XG5cbiAgICBzcG90aWZ5QXBpLnNldEFjY2Vzc1Rva2VuKHRva2VuKTtcbiAgICBzcG90aWZ5QXBpLmdldFBsYXlsaXN0KCdzdGVwaGFuaWVjdXJyYW4nLCc3bGoxZ2R3d3djY3lqRVZYaUV5SWJRJylcbiAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgY29uc3QgaXRlbXMgPSByZXMuYm9keS50cmFja3MuaXRlbXM7XG4gICAgICAgY29uc3QgdHJhY2tzID0gaXRlbXMubWFwKHg9PiBPYmplY3QuYXNzaWduKHgudHJhY2ssIHsgYWRkZWRCeTogeC5hZGRlZF9ieS5pZCB9KSk7XG4gICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICBwbGF5bGlzdDogcmVzLmJvZHksXG4gICAgICAgICB0cmFja3NcbiAgICAgICB9KTtcbiAgICAgfSwgKGVycikgPT57XG4gICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F1dGhUb2tlbicpO1xuICAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgaWYoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLmF1dGhUb2tlbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKG1vbWVudCgpLmRpZmYobW9tZW50KGxvY2FsU3RvcmFnZS5hdXRoVGltZSksICdtaW51dGVzJykgPiAyKSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXV0aFRva2VuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5nZXRTcG90aWZ5KEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmF1dGhUb2tlbikuYWNjZXNzX3Rva2VuKTtcbiAgfVxuXG4gIHRyYWNrKHRyYWNrLCBpZHgpIHtcbiAgICBjb25zdCBhcnRpc3RzID0gdHJhY2suYXJ0aXN0cy5tYXAoeD0+eC5uYW1lKS5qb2luKCcsICcpO1xuICAgIGNvbnN0IHJvd1N0eWxlID0gaWR4ICUgMiA/IHMuZXZlbiA6IHMub2RkO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5yb3csIHJvd1N0eWxlKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLmNlbGwsIHMudHJhY2spfT5cbiAgICAgICAgICB7dHJhY2submFtZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLmNlbGwsIHMuYXJ0aXN0KX0+XG4gICAgICAgICAge2FydGlzdHN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5jZWxsLCBzLmFkZGVkQnkpfT5cbiAgICAgICAgICB7dHJhY2suYWRkZWRCeX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNlbGx9PlxuICAgICAgICAgIFZvdGVzOiAxMFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCB7IHBsYXlsaXN0LCB0cmFja3MgfSA9IHRoaXMuc3RhdGUgfHwge307XG4gICAgaWYoIXRyYWNrcykgcmV0dXJuIDxkaXY+TG9naW4gdG8gYWNjZXNzIHBsYXlsaXN0PC9kaXY+O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj57cGxheWxpc3QubmFtZX08L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb2x9PlxuICAgICAgICAgIHt0cmFja3MubWFwKHRoaXMudHJhY2spfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoUGxheWxpc3QpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvcGxheWxpc3QvUGxheWxpc3QuanMiXSwibWFwcGluZ3MiOiI7O0E7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFGQTtBQVFBO0FBQ0E7QUF0RUE7QUFDQTtBQXdFQTs7OztBIiwic291cmNlUm9vdCI6IiJ9