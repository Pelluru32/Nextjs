"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n//import { useEffect, useState } from \"react\"\n\n\nconst Dummy_Meetups = [\n    {\n        id: \"m1\",\n        title: \"A first meetup\",\n        image: \"https://wallsdesk.com/wp-content/uploads/2016/05/Waterfalls-Photos.jpg\",\n        address: \"some address 5, 1234 city\",\n        description: \"this is first meetup\"\n    },\n    {\n        id: \"m2\",\n        title: \"A second meetup\",\n        image: \"https://wonderfulengineering.com/wp-content/uploads/2014/01/beautiful-wallpaper-39.jpg\",\n        address: \"some address 9, dg city\",\n        description: \"this is second meetup\"\n    }\n];\nconst Homepage = (props)=>{\n    /* const [meetups,setMeetups]=useState([])\r\n    useEffect(()=>{\r\n        setMeetups(Dummy_Meetups)\r\n    },[]) */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        meetups: props.meetups\n    }, void 0, false, {\n        fileName: \"D:\\\\Nextjs\\\\06-onwards-to-a-bigger-project-starting-project\\\\pages\\\\index.js\",\n        lineNumber: 26,\n        columnNumber: 11\n    }, undefined);\n};\n_c = Homepage;\nvar __N_SSG = true;\n/* export async function getServerSideProps(context){\r\n    const req=context.req;\r\n    const res=context.res  //if auth useful\r\n    return {\r\n        props:{\r\n            meetups:Dummy_Meetups\r\n        }\r\n    }\r\n} \r\n */ /* harmony default export */ __webpack_exports__[\"default\"] = (Homepage);\nvar _c;\n$RefreshReg$(_c, \"Homepage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsNkNBQTZDOztBQUVZO0FBRXpELE1BQU1DLGdCQUFjO0lBQUM7UUFDakJDLElBQUc7UUFDSEMsT0FBTTtRQUNOQyxPQUFNO1FBQ05DLFNBQVE7UUFDUkMsYUFBWTtJQUNoQjtJQUFFO1FBQ0VKLElBQUc7UUFDSEMsT0FBTTtRQUNOQyxPQUFNO1FBQ05DLFNBQVE7UUFDUkMsYUFBWTtJQUNoQjtDQUFFO0FBRUYsTUFBTUMsV0FBVyxDQUFDQztJQUNkOzs7VUFHTSxHQUVSLHFCQUFRLDhEQUFDUixzRUFBVUE7UUFBQ1MsU0FBU0QsTUFBTUM7Ozs7OztBQUVyQztLQVJNRjs7QUE2Qk47Ozs7Ozs7OztDQVNDLEdBQ0QsK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy9pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiXHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiXHJcblxyXG5jb25zdCBEdW1teV9NZWV0dXBzPVt7XHJcbiAgICBpZDpcIm0xXCIsXHJcbiAgICB0aXRsZTpcIkEgZmlyc3QgbWVldHVwXCIsXHJcbiAgICBpbWFnZTpcImh0dHBzOi8vd2FsbHNkZXNrLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wNS9XYXRlcmZhbGxzLVBob3Rvcy5qcGdcIixcclxuICAgIGFkZHJlc3M6XCJzb21lIGFkZHJlc3MgNSwgMTIzNCBjaXR5XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcInRoaXMgaXMgZmlyc3QgbWVldHVwXCJcclxufSx7XHJcbiAgICBpZDpcIm0yXCIsXHJcbiAgICB0aXRsZTpcIkEgc2Vjb25kIG1lZXR1cFwiLFxyXG4gICAgaW1hZ2U6XCJodHRwczovL3dvbmRlcmZ1bGVuZ2luZWVyaW5nLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wMS9iZWF1dGlmdWwtd2FsbHBhcGVyLTM5LmpwZ1wiLFxyXG4gICAgYWRkcmVzczpcInNvbWUgYWRkcmVzcyA5LCBkZyBjaXR5XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcInRoaXMgaXMgc2Vjb25kIG1lZXR1cFwiXHJcbn1dXHJcblxyXG5jb25zdCBIb21lcGFnZSA9IChwcm9wcykgPT4ge1xyXG4gICAgLyogY29uc3QgW21lZXR1cHMsc2V0TWVldHVwc109dXNlU3RhdGUoW10pXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXRNZWV0dXBzKER1bW15X01lZXR1cHMpXHJcbiAgICB9LFtdKSAqL1xyXG5cclxuICByZXR1cm4gIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9Lz5cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgICAgICdtb25nb2RiK3NydjovL2dvd3RoYW06SVNLaUVkMjZGOWpuUVlsS0BjbHVzdGVyMC5jbWtma3V3Lm1vbmdvZGIubmV0L01lZXRVcERCP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSdcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBcclxuICAgICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XHJcblxyXG4gICAgICBtZWV0dXBzPWF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KClcclxuICAgICAgY2xpZW50LmNsb3NlKClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOntcclxuICAgICAgICAgICAgbWVldHVwczptZWV0dXBzXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXZhbGlkYXRlOjFcclxuICAgIH1cclxufVxyXG5cclxuLyogZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcclxuICAgIGNvbnN0IHJlcT1jb250ZXh0LnJlcTtcclxuICAgIGNvbnN0IHJlcz1jb250ZXh0LnJlcyAgLy9pZiBhdXRoIHVzZWZ1bFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgIG1lZXR1cHM6RHVtbXlfTWVldHVwc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlXHJcbiJdLCJuYW1lcyI6WyJNZWV0dXBMaXN0IiwiRHVtbXlfTWVldHVwcyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVwYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});