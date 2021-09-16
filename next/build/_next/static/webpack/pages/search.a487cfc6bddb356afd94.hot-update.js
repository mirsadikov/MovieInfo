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
                console.log(ref);
                window.scrollBy({
                  top: ref.current.offsetTop - window.scrollY - 100,
                  behavior: "smooth"
                });

              case 10:
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
        lineNumber: 81,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
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
              lineNumber: 88,
              columnNumber: 17
            }, this), " / ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: "/search",
              children: "Search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 46
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            id: "resultpath",
            children: "Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
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
                lineNumber: 93,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                type: "submit",
                id: "searchButton",
                onClick: searchHandler,
                children: "Search"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          id: "content-type",
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
              lineNumber: 113,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              id: "typemovie",
              className: "movieType",
              onClick: typeChangeHandler,
              children: "Movies"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
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
              lineNumber: 131,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              id: "typeserie",
              className: "movieType",
              onClick: typeChangeHandler,
              children: "TV shows"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
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
                    lineNumber: 164,
                    columnNumber: 27
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("figcaption", {
                    children: movie.original_title || movie.original_name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 27
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
                  columnNumber: 25
                }, _this)
              }, movie.id, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 23
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 19
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              children: "No movies"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "duck",
              src: "/next/build/static/images/duck.gif",
              alt: "duck"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 21
            }, this)]
          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            children: "Search something"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }, this)]
    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 198,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbInNlYXJjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInEiLCJxdWVyeSIsInVzZVN0YXRlIiwic2V0UXVlcnkiLCJzZWFyY2hLZXl3b3JkIiwic2V0U2VhcmNoS2V5d29yZCIsImlzTW92aWUiLCJzZXRJc01vdmllIiwibW92aWVzTGlzdCIsInNldE1vdmllc0xpc3QiLCJyZWYiLCJ1c2VSZWYiLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkVycm9yIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidXNlRWZmZWN0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJmZXRjaERhdGEiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJtb3ZpZXNEYXRhIiwiZGF0YSIsInJlc3VsdHMiLCJzY3JvbGxCeSIsInRvcCIsImN1cnJlbnQiLCJvZmZzZXRUb3AiLCJzY3JvbGxZIiwiYmVoYXZpb3IiLCJzZWFyY2hIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsInR5cGVDaGFuZ2VIYW5kbGVyIiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJtYXAiLCJtb3ZpZSIsImlkIiwicG9zdGVyX3BhdGgiLCJiYWNrZHJvcF9wYXRoIiwib3JpZ2luYWxfdGl0bGUiLCJvcmlnaW5hbF9uYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFDL0IsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUQrQixNQUd2QkMsQ0FIdUIsR0FHakJGLE1BQU0sQ0FBQ0csS0FIVSxDQUd2QkQsQ0FIdUI7O0FBQUEsa0JBS0xFLCtDQUFRLEVBTEg7QUFBQSxNQUt4QkQsS0FM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QUE7QUFBQTtBQUFBO0FBQUEsY0ExQkY7QUFBQSxvQkFERCxnQkFtSEMsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZISjtBQUFBLGtCQURGO0FBNEhEOztHQWxNdUJsRCxNO1VBQ1BFLGtEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC5hNDg3Y2ZjNmJkZGIzNTZhZmQ5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VhcmNoKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCB7IHEgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzZWFyY2hLZXl3b3JkLCBzZXRTZWFyY2hLZXl3b3JkXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2lzTW92aWUsIHNldElzTW92aWVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW21vdmllc0xpc3QsIHNldE1vdmllc0xpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAvLyB1c2VSZWR1Y2VyXHJcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0geyBsb2FkaW5nOiBmYWxzZSB9O1xyXG5cclxuICBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBcImlucHV0XCI6XHJcbiAgICAgICAgLy8gY29uc3QgcXVlcmllcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKTtcclxuICAgICAgICAvLyBjb25zdCBxID0gcXVlcmllcy5nZXQoXCJxXCIpO1xyXG4gICAgICAgIHNlYXJjaEtleXdvcmQgPyBzZXRRdWVyeShzZWFyY2hLZXl3b3JkKSA6IHNldFF1ZXJ5KHEpO1xyXG4gICAgICAgIHJldHVybiB7IGxvYWRpbmc6IHRydWUgfTtcclxuICAgICAgY2FzZSBcImZpbmlzaFwiOlxyXG4gICAgICAgIHJldHVybiB7IGxvYWRpbmc6IGZhbHNlIH07XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cclxuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJpbnB1dFwiIH0pO1xyXG5cclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh0eXBlLCBxdWVyeSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyh0eXBlKTtcclxuICAgICAgY29uc3QgeyBkYXRhOiBtb3ZpZXNEYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvc2VhcmNoLyR7dHlwZX0/YXBpX2tleT0yMDUwYWM4ZGIwNzdlZGE4YjkwYjc0YTBmMTQyMzk3NSZxdWVyeT0ke3F1ZXJ5fSZpbmNsdWRlX2FkdWx0PWZhbHNlYFxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc29sZS5sb2cobW92aWVzRGF0YSk7XHJcblxyXG4gICAgICBzZXRNb3ZpZXNMaXN0KG1vdmllc0RhdGEucmVzdWx0cyk7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJmaW5pc2hcIiB9KTtcclxuICAgICAgY29uc29sZS5sb2cocmVmKVxyXG4gICAgICB3aW5kb3cuc2Nyb2xsQnkoe1xyXG4gICAgICAgIHRvcDogcmVmLmN1cnJlbnQub2Zmc2V0VG9wIC0gd2luZG93LnNjcm9sbFkgLSAxMDAsXHJcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoaXNNb3ZpZSAmJiBxdWVyeSkge1xyXG4gICAgICBmZXRjaERhdGEoXCJtb3ZpZVwiLCBxdWVyeSk7XHJcbiAgICB9IGVsc2UgaWYgKCFpc01vdmllICYmIHF1ZXJ5KSB7XHJcbiAgICAgIGZldGNoRGF0YShcInR2XCIsIHF1ZXJ5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJmaW5pc2hcIiB9KTtcclxuICAgIH1cclxuICB9LCBbaXNNb3ZpZSwgcXVlcnldKTtcclxuXHJcbiAgY29uc3Qgc2VhcmNoSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZWFyY2hLZXl3b3JkICYmIHNldFF1ZXJ5KHNlYXJjaEtleXdvcmQpO1xyXG4gICAgc2VhcmNoS2V5d29yZCAmJiByb3V0ZXIucHVzaChgL3NlYXJjaD9xPSR7c2VhcmNoS2V5d29yZH1gKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0eXBlQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNldElzTW92aWUoIWlzTW92aWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TW92aWVJbmZvIHwgU2VhcmNoPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICB7IXN0YXRlLmxvYWRpbmcgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cInJlc3VsdFwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz4gLyA8TGluayBocmVmPVwiL3NlYXJjaFwiPlNlYXJjaDwvTGluaz5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGgyIGlkPVwicmVzdWx0cGF0aFwiPlNlYXJjaDwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgbmFtZS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJtb3ZpZU5hbWVJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hLZXl3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic2VhcmNoQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzZWFyY2hIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50LXR5cGVcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzTW92aWV9XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwidHlwZS1tb3ZpZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR5cGUtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInR5cGVtb3ZpZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdmllVHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3R5cGVDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBNb3ZpZXNcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgICAgICAgICBpZD1cInR5cGUtc2VyaWVcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eXBlLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInR5cGVcIlxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXshaXNNb3ZpZX1cclxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwidHlwZXNlcmllXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW92aWVUeXBlXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dHlwZUNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFRWIHNob3dzXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwicmVzdWx0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAge3F1ZXJ5ID8gKFxyXG4gICAgICAgICAgICAgICAgbW92aWVzTGlzdC5sZW5ndGggIT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZpZ3VyZXNDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bW92aWVzTGlzdC5tYXAoKG1vdmllKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc01vdmllXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAvZGV0YWlscy9tb3ZpZS8ke21vdmllLmlkfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYC9kZXRhaWxzL3R2LyR7bW92aWUuaWR9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bW92aWUuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92aWUucG9zdGVyX3BhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGBodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwJHttb3ZpZS5wb3N0ZXJfcGF0aH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtb3ZpZS5iYWNrZHJvcF9wYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMCR7bW92aWUuYmFja2Ryb3BfcGF0aH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi9uZXh0L2J1aWxkL3N0YXRpYy9pbWFnZXMvbm8taW1hZ2UucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17bW92aWUuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb3ZpZS5vcmlnaW5hbF90aXRsZSB8fCBtb3ZpZS5vcmlnaW5hbF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPk5vIG1vdmllczwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHVja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvbmV4dC9idWlsZC9zdGF0aWMvaW1hZ2VzL2R1Y2suZ2lmXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImR1Y2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8aDE+U2VhcmNoIHNvbWV0aGluZzwvaDE+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxMb2FkZXIgLz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==