require("source-map-support").install();
exports.id = 1;
exports.modules = {

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
var _jsxFileName = '/Users/stephanie/dev/votelist/src/routes/playlist/Playlist.js';







const CLIENT_ID = 'b8ae36286f1c4db28a8a2ba380a4d8cc';
const CLIENT_SECRET = '18cfc75e9f4b4785ac325eaa38a095c9';
const REDIRECT_URI = 'http://localhost:3000/callback';

class Playlist extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  getSpotify(token) {
    const spotifyApi = new __WEBPACK_IMPORTED_MODULE_1_spotify_web_api_node___default.a({
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI
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
          lineNumber: 50
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_2__Playlist_css___default.a.cell, __WEBPACK_IMPORTED_MODULE_2__Playlist_css___default.a.track), __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        },
        track.name
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_2__Playlist_css___default.a.cell, __WEBPACK_IMPORTED_MODULE_2__Playlist_css___default.a.artist), __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        },
        artists
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default.a(__WEBPACK_IMPORTED_MODULE_2__Playlist_css___default.a.cell, __WEBPACK_IMPORTED_MODULE_2__Playlist_css___default.a.addedBy), __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        },
        track.addedBy
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Playlist_css___default.a.cell, __source: {
            fileName: _jsxFileName,
            lineNumber: 60
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
          lineNumber: 69
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
          lineNumber: 72
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        },
        playlist.name
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Playlist_css___default.a.col, __source: {
            fileName: _jsxFileName,
            lineNumber: 74
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8xLjdjY2VmMDJkMjU4YzUwMzQ0ZTAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3JvdXRlcy9wbGF5bGlzdC9QbGF5bGlzdC5qcz84MDg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3BvdGlmeVdlYkFwaSBmcm9tICdzcG90aWZ5LXdlYi1hcGktbm9kZSc7XG5pbXBvcnQgcyBmcm9tICcuL1BsYXlsaXN0LmNzcyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmNvbnN0IENMSUVOVF9JRCA9ICdiOGFlMzYyODZmMWM0ZGIyOGE4YTJiYTM4MGE0ZDhjYyc7XG5jb25zdCBDTElFTlRfU0VDUkVUID0gJzE4Y2ZjNzVlOWY0YjQ3ODVhYzMyNWVhYTM4YTA5NWM5JztcbmNvbnN0IFJFRElSRUNUX1VSSSA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvY2FsbGJhY2snO1xuXG5jbGFzcyBQbGF5bGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGdldFNwb3RpZnkodG9rZW4pe1xuICAgIGNvbnN0IHNwb3RpZnlBcGkgPSBuZXcgU3BvdGlmeVdlYkFwaSh7XG4gICAgICBjbGllbnRJZCA6IENMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldCA6IENMSUVOVF9TRUNSRVQsXG4gICAgICByZWRpcmVjdF91cmk6IFJFRElSRUNUX1VSSVxuICAgIH0pO1xuXG4gICAgc3BvdGlmeUFwaS5zZXRBY2Nlc3NUb2tlbih0b2tlbik7XG4gICAgc3BvdGlmeUFwaS5nZXRQbGF5bGlzdCgnc3RlcGhhbmllY3VycmFuJywnN2xqMWdkd3d3Y2N5akVWWGlFeUliUScpXG4gICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgIGNvbnN0IGl0ZW1zID0gcmVzLmJvZHkudHJhY2tzLml0ZW1zO1xuICAgICAgIGNvbnN0IHRyYWNrcyA9IGl0ZW1zLm1hcCh4PT4gT2JqZWN0LmFzc2lnbih4LnRyYWNrLCB7IGFkZGVkQnk6IHguYWRkZWRfYnkuaWQgfSkpO1xuICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgcGxheWxpc3Q6IHJlcy5ib2R5LFxuICAgICAgICAgdHJhY2tzXG4gICAgICAgfSk7XG4gICAgIH0sIChlcnIpID0+e1xuICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhdXRoVG9rZW4nKTtcbiAgICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGlmKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS5hdXRoVG9rZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihtb21lbnQoKS5kaWZmKG1vbWVudChsb2NhbFN0b3JhZ2UuYXV0aFRpbWUpLCAnbWludXRlcycpID4gMikge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F1dGhUb2tlbicpO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0U3BvdGlmeShKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5hdXRoVG9rZW4pLmFjY2Vzc190b2tlbik7XG4gIH1cblxuICB0cmFjayh0cmFjaywgaWR4KSB7XG4gICAgY29uc3QgYXJ0aXN0cyA9IHRyYWNrLmFydGlzdHMubWFwKHg9PngubmFtZSkuam9pbignLCAnKTtcbiAgICBjb25zdCByb3dTdHlsZSA9IGlkeCAlIDIgPyBzLmV2ZW4gOiBzLm9kZDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMucm93LCByb3dTdHlsZSl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5jZWxsLCBzLnRyYWNrKX0+XG4gICAgICAgICAge3RyYWNrLm5hbWV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5jZWxsLCBzLmFydGlzdCl9PlxuICAgICAgICAgIHthcnRpc3RzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMuY2VsbCwgcy5hZGRlZEJ5KX0+XG4gICAgICAgICAge3RyYWNrLmFkZGVkQnl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jZWxsfT5cbiAgICAgICAgICBWb3RlczogMTBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgeyBwbGF5bGlzdCwgdHJhY2tzIH0gPSB0aGlzLnN0YXRlIHx8IHt9O1xuICAgIGlmKCF0cmFja3MpIHJldHVybiA8ZGl2PkxvZ2luIHRvIGFjY2VzcyBwbGF5bGlzdDwvZGl2PjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+e3BsYXlsaXN0Lm5hbWV9PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29sfT5cbiAgICAgICAgICB7dHJhY2tzLm1hcCh0aGlzLnRyYWNrKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKFBsYXlsaXN0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL3BsYXlsaXN0L1BsYXlsaXN0LmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFGQTtBQVFBO0FBQ0E7QUFyRUE7QUFDQTtBQXVFQTs7OztBIiwic291cmNlUm9vdCI6IiJ9