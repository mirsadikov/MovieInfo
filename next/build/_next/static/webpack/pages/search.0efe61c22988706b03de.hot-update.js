self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ search; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_HP_Desktop_MovieInfo_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_HP_Desktop_MovieInfo_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_HP_Desktop_MovieInfo_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_HP_Desktop_MovieInfo_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Loader */ "./components/Loader.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\HP\\Desktop\\MovieInfo\\next\\pages\\search.js",
    _s = $RefreshSig$();







function search() {
  _s();

  var _this = this;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var q = router.query.q;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
      query = _useState[0],
      setQuery = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
      searchKeyword = _useState2[0],
      setSearchKeyword = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),
      isMovie = _useState3[0],
      setIsMovie = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      moviesList = _useState4[0],
      setMoviesList = _useState4[1];

  var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(); // useReducer

  var initialState = {
    loading: false
  };

  function reducer(state, action) {
    switch (action.type) {
      case "input":
        // const queries = new URLSearchParams(location.search);
        // const q = queries.get("q");
        searchKeyword ? setQuery(searchKeyword) : setQuery(q);
        return {
          loading: true
        };

      case "finish":
        return {
          loading: false
        };

      default:
        throw new Error();
    }
  }

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_4__.useReducer)(reducer, initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    window.scrollTo(0, 0);
    dispatch({
      type: "input"
    });

    var fetchData = /*#__PURE__*/function () {
      var _ref = (0,C_Users_HP_Desktop_MovieInfo_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_HP_Desktop_MovieInfo_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(type, query) {
        var _yield$axios$get, moviesData;

        return C_Users_HP_Desktop_MovieInfo_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(type);
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_5___default().get("https://api.themoviedb.org/3/search/".concat(type, "?api_key=2050ac8db077eda8b90b74a0f1423975&query=").concat(query, "&include_adult=false"));

              case 3:
                _yield$axios$get = _context.sent;
                moviesData = _yield$axios$get.data;
                console.log(moviesData);
                setMoviesList(moviesData.results);
                dispatch({
                  type: "finish"
                });
                window.scrollBy({
                  top: ref.current.offsetTop - window.scrollY - 100,
                  behavior: "smooth"
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    if (isMovie && query) {
      fetchData("movie", query);
    } else if (!isMovie && query) {
      fetchData("tv", query);
    } else {
      dispatch({
        type: "finish"
      });
    }
  }, [isMovie, query]);

  var searchHandler = function searchHandler(e) {
    e.preventDefault();
    searchKeyword && setQuery(searchKeyword);
    searchKeyword && router.push("/search?q=".concat(searchKeyword));
  };

  var typeChangeHandler = function typeChangeHandler() {
    setIsMovie(!isMovie);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "MovieInfo | Search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this), !state.loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        className: "result",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: "/",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 17
            }, this), " / ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: "/search",
              children: "Search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 46
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            id: "resultpath",
            children: "Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "container",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "text",
                placeholder: "Search by name...",
                id: "movieNameInput",
                onChange: function onChange(e) {
                  return setSearchKeyword(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                type: "submit",
                id: "searchButton",
                onClick: searchHandler,
                children: "Search"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          id: "content-type",
          ref: ref,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "radio",
              hidden: true,
              checked: isMovie,
              id: "type-movie",
              className: "type-input",
              name: "type",
              readOnly: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              id: "typemovie",
              className: "movieType",
              onClick: typeChangeHandler,
              children: "Movies"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "radio",
              hidden: true,
              id: "type-serie",
              className: "type-input",
              name: "type",
              checked: !isMovie,
              readOnly: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              id: "typeserie",
              className: "movieType",
              onClick: typeChangeHandler,
              children: "TV shows"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
          id: "resultContainer",
          children: query ? moviesList.length !== 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
            className: "figuresContainer",
            children: moviesList.map(function (movie) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                href: isMovie ? "/details/movie/".concat(movie.id) : "/details/tv/".concat(movie.id),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("figure", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: movie.poster_path ? "https://image.tmdb.org/t/p/w500".concat(movie.poster_path) : movie.backdrop_path ? "https://image.tmdb.org/t/p/w500".concat(movie.backdrop_path) : "/next/build/static/images/no-image.png",
                    alt: movie.id
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 27
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("figcaption", {
                    children: movie.original_title || movie.original_name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 173,
                    columnNumber: 27
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 25
                }, _this)
              }, movie.id, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 23
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 19
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              children: "No movies"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "duck",
              src: "/next/build/static/images/duck.gif",
              alt: "duck"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 21
            }, this)]
          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            children: "Search something"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 11
      }, this)]
    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(search, "aSw1d40UVLbOb5SW73OYM7NEjWY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbInNlYXJjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInEiLCJxdWVyeSIsInVzZVN0YXRlIiwic2V0UXVlcnkiLCJzZWFyY2hLZXl3b3JkIiwic2V0U2VhcmNoS2V5d29yZCIsImlzTW92aWUiLCJzZXRJc01vdmllIiwibW92aWVzTGlzdCIsInNldE1vdmllc0xpc3QiLCJyZWYiLCJ1c2VSZWYiLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkVycm9yIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidXNlRWZmZWN0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJmZXRjaERhdGEiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJtb3ZpZXNEYXRhIiwiZGF0YSIsInJlc3VsdHMiLCJzY3JvbGxCeSIsInRvcCIsImN1cnJlbnQiLCJvZmZzZXRUb3AiLCJzY3JvbGxZIiwiYmVoYXZpb3IiLCJzZWFyY2hIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsInR5cGVDaGFuZ2VIYW5kbGVyIiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJtYXAiLCJtb3ZpZSIsImlkIiwicG9zdGVyX3BhdGgiLCJiYWNrZHJvcF9wYXRoIiwib3JpZ2luYWxfdGl0bGUiLCJvcmlnaW5hbF9uYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFDL0IsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUQrQixNQUd2QkMsQ0FIdUIsR0FHakJGLE1BQU0sQ0FBQ0csS0FIVSxDQUd2QkQsQ0FIdUI7O0FBQUEsa0JBS0xFLCtDQUFRLEVBTEg7QUFBQSxNQUt4QkQsS0FM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O0FBQUEsY0ExQkY7QUFBQSxvQkFERCxnQkFtSEMsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZISjtBQUFBLGtCQURGO0FBNEhEOztHQWpNdUJsRCxNO1VBQ1BFLGtEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC4wZWZlNjFjMjI5ODg3MDZiMDNkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VhcmNoKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCB7IHEgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzZWFyY2hLZXl3b3JkLCBzZXRTZWFyY2hLZXl3b3JkXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2lzTW92aWUsIHNldElzTW92aWVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW21vdmllc0xpc3QsIHNldE1vdmllc0xpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAvLyB1c2VSZWR1Y2VyXHJcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0geyBsb2FkaW5nOiBmYWxzZSB9O1xyXG5cclxuICBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBcImlucHV0XCI6XHJcbiAgICAgICAgLy8gY29uc3QgcXVlcmllcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKTtcclxuICAgICAgICAvLyBjb25zdCBxID0gcXVlcmllcy5nZXQoXCJxXCIpO1xyXG4gICAgICAgIHNlYXJjaEtleXdvcmQgPyBzZXRRdWVyeShzZWFyY2hLZXl3b3JkKSA6IHNldFF1ZXJ5KHEpO1xyXG4gICAgICAgIHJldHVybiB7IGxvYWRpbmc6IHRydWUgfTtcclxuICAgICAgY2FzZSBcImZpbmlzaFwiOlxyXG4gICAgICAgIHJldHVybiB7IGxvYWRpbmc6IGZhbHNlIH07XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cclxuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJpbnB1dFwiIH0pO1xyXG5cclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh0eXBlLCBxdWVyeSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyh0eXBlKTtcclxuICAgICAgY29uc3QgeyBkYXRhOiBtb3ZpZXNEYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvc2VhcmNoLyR7dHlwZX0/YXBpX2tleT0yMDUwYWM4ZGIwNzdlZGE4YjkwYjc0YTBmMTQyMzk3NSZxdWVyeT0ke3F1ZXJ5fSZpbmNsdWRlX2FkdWx0PWZhbHNlYFxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc29sZS5sb2cobW92aWVzRGF0YSk7XHJcblxyXG4gICAgICBzZXRNb3ZpZXNMaXN0KG1vdmllc0RhdGEucmVzdWx0cyk7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJmaW5pc2hcIiB9KTtcclxuICAgICAgd2luZG93LnNjcm9sbEJ5KHtcclxuICAgICAgICB0b3A6IHJlZi5jdXJyZW50Lm9mZnNldFRvcCAtIHdpbmRvdy5zY3JvbGxZIC0gMTAwLFxyXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGlzTW92aWUgJiYgcXVlcnkpIHtcclxuICAgICAgZmV0Y2hEYXRhKFwibW92aWVcIiwgcXVlcnkpO1xyXG4gICAgfSBlbHNlIGlmICghaXNNb3ZpZSAmJiBxdWVyeSkge1xyXG4gICAgICBmZXRjaERhdGEoXCJ0dlwiLCBxdWVyeSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiZmluaXNoXCIgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2lzTW92aWUsIHF1ZXJ5XSk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2VhcmNoS2V5d29yZCAmJiBzZXRRdWVyeShzZWFyY2hLZXl3b3JkKTtcclxuICAgIHNlYXJjaEtleXdvcmQgJiYgcm91dGVyLnB1c2goYC9zZWFyY2g/cT0ke3NlYXJjaEtleXdvcmR9YCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdHlwZUNoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vdmllKCFpc01vdmllKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk1vdmllSW5mbyB8IFNlYXJjaDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgeyFzdGF0ZS5sb2FkaW5nID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJyZXN1bHRcIj5cclxuICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+IC8gPExpbmsgaHJlZj1cIi9zZWFyY2hcIj5TZWFyY2g8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxoMiBpZD1cInJlc3VsdHBhdGhcIj5TZWFyY2g8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IG5hbWUuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibW92aWVOYW1lSW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoS2V5d29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInNlYXJjaEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2VhcmNoSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudC10eXBlXCIgcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBoaWRkZW5cclxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aXNNb3ZpZX1cclxuICAgICAgICAgICAgICAgICAgaWQ9XCJ0eXBlLW1vdmllXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHlwZS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0eXBlXCJcclxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwidHlwZW1vdmllXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW92aWVUeXBlXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dHlwZUNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIE1vdmllc1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwidHlwZS1zZXJpZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR5cGUtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyFpc01vdmllfVxyXG4gICAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJ0eXBlc2VyaWVcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3ZpZVR5cGVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0eXBlQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgVFYgc2hvd3NcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJyZXN1bHRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICB7cXVlcnkgPyAoXHJcbiAgICAgICAgICAgICAgICBtb3ZpZXNMaXN0Lmxlbmd0aCAhPT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmlndXJlc0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHttb3ZpZXNMaXN0Lm1hcCgobW92aWUpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzTW92aWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYC9kZXRhaWxzL21vdmllLyR7bW92aWUuaWR9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgL2RldGFpbHMvdHYvJHttb3ZpZS5pZH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttb3ZpZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZpZS5wb3N0ZXJfcGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAke21vdmllLnBvc3Rlcl9wYXRofWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1vdmllLmJhY2tkcm9wX3BhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGBodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwJHttb3ZpZS5iYWNrZHJvcF9wYXRofWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiL25leHQvYnVpbGQvc3RhdGljL2ltYWdlcy9uby1pbWFnZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXttb3ZpZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21vdmllLm9yaWdpbmFsX3RpdGxlIHx8IG1vdmllLm9yaWdpbmFsX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+Tm8gbW92aWVzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkdWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9uZXh0L2J1aWxkL3N0YXRpYy9pbWFnZXMvZHVjay5naWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZHVja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxoMT5TZWFyY2ggc29tZXRoaW5nPC9oMT5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPExvYWRlciAvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9