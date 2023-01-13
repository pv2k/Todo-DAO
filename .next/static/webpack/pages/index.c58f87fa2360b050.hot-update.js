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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_TodoListApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/TodoListApp */ \"./context/TodoListApp.js\");\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/index.module.css */ \"./styles/index.module.css\");\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _loading_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading.gif */ \"./loading.gif\");\n/* harmony import */ var _MetaMask_Fox_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MetaMask_Fox.png */ \"./MetaMask_Fox.png\");\n/* harmony import */ var _component_Data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/Data */ \"./component/Data.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n//Add the functionality of automatic reload upon creation of todo\nconst Home = ()=>{\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { checkWalletConnection , connectWallet , toDoList , getListData , toggleFunction , currentAccount , error , allTodoList , myList , allAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_TodoListApp__WEBPACK_IMPORTED_MODULE_3__.TodoListContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkWalletConnection();\n        getListData();\n    }, []);\n    const checkMessage = ()=>{\n        console.log(message);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().home),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().navBar),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _MetaMask_Fox_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                        alt: \"Loading\",\n                        width: 50,\n                        height: 50\n                    }, void 0, false, {\n                        fileName: \"/Users/pv2k/Smart Contracts/Todo-DAO/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().connect),\n                        children: !currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: connectWallet,\n                            children: \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pv2k/Smart Contracts/Todo-DAO/pages/index.js\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: [\n                                currentAccount.slice(0, 15),\n                                \"....\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/pv2k/Smart Contracts/Todo-DAO/pages/index.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/pv2k/Smart Contracts/Todo-DAO/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pv2k/Smart Contracts/Todo-DAO/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().home_box),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().home_completed),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"ToDo History List\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pv2k/Smart Contracts/Todo-DAO/pages/index.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: myList.map((el, id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().home_completed_list),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdVerified, {\n                                                className: \"Style.iconColor\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pv2k/Smart Contracts/Todo-DAO/pages/index.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    el.slice(0, 30),\n                                                    \"...\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/pv2k/Smart Contracts/Todo-DAO/pages/index.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, id, true, {\n                                        fileName: \"/Users/pv2k/Smart Contracts/Todo-DAO/pages/index.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/pv2k/Smart Contracts/Todo-DAO/pages/index.js\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pv2k/Smart Contracts/Todo-DAO/pages/index.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().home_verticalline)\n                    }, void 0, false, {\n                        fileName: \"/Users/pv2k/Smart Contracts/Todo-DAO/pages/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().home_create),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().home_create_box),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Create TodoList on BlockChain\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pv2k/Smart Contracts/Todo-DAO/pages/index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().home_create_input),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"Text\",\n                                            placeholder: \"Enter Todo text\",\n                                            onChange: (e)=>setMessage(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pv2k/Smart Contracts/Todo-DAO/pages/index.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_9__.IoIosSend, {\n                                            className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().iconBlack),\n                                            onClick: ()=>toDoList(message)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pv2k/Smart Contracts/Todo-DAO/pages/index.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 17\n                                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_9__.IoIosSend, {\n                                            className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().iconBlack),\n                                            onClick: connectWallet\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pv2k/Smart Contracts/Todo-DAO/pages/index.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/pv2k/Smart Contracts/Todo-DAO/pages/index.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Data__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    allTodoList: allTodoList,\n                                    allAddress: allAddress,\n                                    myList: myList,\n                                    toggleFunction: toggleFunction\n                                }, void 0, false, {\n                                    fileName: \"/Users/pv2k/Smart Contracts/Todo-DAO/pages/index.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/pv2k/Smart Contracts/Todo-DAO/pages/index.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/pv2k/Smart Contracts/Todo-DAO/pages/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pv2k/Smart Contracts/Todo-DAO/pages/index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pv2k/Smart Contracts/Todo-DAO/pages/index.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"9nNIQ7I7mm/6kfKeYTs/Vur6tiE=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBK0Q7QUFDbkI7QUFDVTtBQUNJO0FBQzNCO0FBRTBCO0FBQ1Y7QUFDVjtBQUNNO0FBQ047QUFFckMsaUVBQWlFO0FBQ2pFLE1BQU1lLE9BQU8sSUFBTTs7SUFDakIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNLEVBQ0ppQixzQkFBcUIsRUFDckJDLGNBQWEsRUFDYkMsU0FBUSxFQUNSQyxZQUFXLEVBQ1hDLGVBQWMsRUFDZEMsZUFBYyxFQUNkQyxNQUFLLEVBQ0xDLFlBQVcsRUFDWEMsT0FBTSxFQUNOQyxXQUFVLEVBQ1gsR0FBR3hCLGlEQUFVQSxDQUFDTyxpRUFBZUE7SUFFOUJSLGdEQUFTQSxDQUFDLElBQU07UUFDZGdCO1FBQ0FHO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTU8sZUFBZSxJQUFNO1FBQ3pCQyxRQUFRQyxHQUFHLENBQUNkO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ2U7UUFBSUMsV0FBV3JCLHNFQUFVOzswQkFDeEIsOERBQUNvQjtnQkFBSUMsV0FBV3JCLHdFQUFZOztrQ0FDMUIsOERBQUNGLG1EQUFLQTt3QkFBQzBCLEtBQUt0Qix5REFBUUE7d0JBQUV1QixLQUFJO3dCQUFVQyxPQUFPO3dCQUFJQyxRQUFROzs7Ozs7a0NBQ3ZELDhEQUFDUDt3QkFBSUMsV0FBV3JCLHlFQUFhO2tDQUMxQixDQUFDWSwrQkFDQSw4REFBQ2lCOzRCQUFPQyxTQUFTdEI7c0NBQWU7Ozs7O3NEQUVoQyw4REFBQ3FCOztnQ0FBUWpCLGVBQWVtQixLQUFLLENBQUMsR0FBRTtnQ0FBSTs7Ozs7O3FDQUNyQzs7Ozs7Ozs7Ozs7OzBCQUlMLDhEQUFDWDtnQkFBSUMsV0FBV3JCLDBFQUFjOztrQ0FDNUIsOERBQUNvQjt3QkFBSUMsV0FBV3JCLGdGQUFvQjs7MENBQ2hDLDhEQUFDa0M7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ2Q7MENBQ0VMLE9BQU9vQixHQUFHLENBQUMsQ0FBQ0MsSUFBSUMsbUJBQ2YsOERBQUNqQjt3Q0FBSUMsV0FBV3JCLHFGQUF5Qjs7MERBQ3ZDLDhEQUFDUCxzREFBVUE7Z0RBQUM0QixXQUFVOzs7Ozs7MERBQ3RCLDhEQUFDa0I7O29EQUFHSCxHQUFHTCxLQUFLLENBQUMsR0FBRTtvREFBSTs7Ozs7Ozs7dUNBRjJCTTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FReEQsOERBQUNqQjt3QkFBSUMsV0FBV3JCLG1GQUF1Qjs7Ozs7O2tDQUl2Qyw4REFBQ29CO3dCQUFJQyxXQUFXckIsNkVBQWlCO2tDQUMvQiw0RUFBQ29COzRCQUFJQyxXQUFXckIsaUZBQXFCOzs4Q0FDbkMsOERBQUNrQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDZDtvQ0FBSUMsV0FBV3JCLG1GQUF1Qjs7c0RBQ3JDLDhEQUFDNEM7NENBQ0NDLE1BQUs7NENBQ0xDLGFBQVk7NENBQ1pDLFVBQVUsQ0FBQ0MsSUFBTTFDLFdBQVcwQyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozt3Q0FFM0N0QywrQkFDQyw4REFBQ2xCLHFEQUFTQTs0Q0FBQzJCLFdBQVdyQiwyRUFBZTs0Q0FBRThCLFNBQVMsSUFBTXJCLFNBQVNKOzs7OztzRUFFL0QsOERBQUNYLHFEQUFTQTs0Q0FBQzJCLFdBQVdyQiwyRUFBZTs0Q0FBRThCLFNBQVN0Qjs7Ozs7cURBQ2pEOzs7Ozs7OzhDQUdILDhEQUFDTCx1REFBSUE7b0NBQ0hXLGFBQWFBO29DQUNiRSxZQUFZQTtvQ0FDWkQsUUFBUUE7b0NBQ1JKLGdCQUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTlCO0dBbkZNUDtLQUFBQTtBQXFGTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWRWZXJpZmllZCB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IHsgSW9Jb3NTZW5kLCBJb01kQ2xvc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcbmltcG9ydCB7IEFpRmlsbExvY2ssIEFpRmlsbFVubG9jayB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuIFxuaW1wb3J0IHsgVG9kb0xpc3RDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9Ub2RvTGlzdEFwcCc7XG5pbXBvcnQgU3R5bGUgZnJvbSAnLi4vc3R5bGVzL2luZGV4Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vbG9hZGluZy5naWYnO1xuaW1wb3J0IE1ldGFtYXNrIGZyb20gJy4uL01ldGFNYXNrX0ZveC5wbmcnO1xuaW1wb3J0IERhdGEgZnJvbSAnLi4vY29tcG9uZW50L0RhdGEnO1xuXG4vL0FkZCB0aGUgZnVuY3Rpb25hbGl0eSBvZiBhdXRvbWF0aWMgcmVsb2FkIHVwb24gY3JlYXRpb24gb2YgdG9kb1xuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgeyBcbiAgICBjaGVja1dhbGxldENvbm5lY3Rpb24sIFxuICAgIGNvbm5lY3RXYWxsZXQsIFxuICAgIHRvRG9MaXN0LCBcbiAgICBnZXRMaXN0RGF0YSwgXG4gICAgdG9nZ2xlRnVuY3Rpb24gLFxuICAgIGN1cnJlbnRBY2NvdW50LFxuICAgIGVycm9yLFxuICAgIGFsbFRvZG9MaXN0LFxuICAgIG15TGlzdCxcbiAgICBhbGxBZGRyZXNzXG4gIH0gPSB1c2VDb250ZXh0KFRvZG9MaXN0Q29udGV4dCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja1dhbGxldENvbm5lY3Rpb24oKTtcbiAgICBnZXRMaXN0RGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY2hlY2tNZXNzYWdlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaG9tZX0+IFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLm5hdkJhcn0+XG4gICAgICAgIDxJbWFnZSBzcmM9e01ldGFtYXNrfSBhbHQ9XCJMb2FkaW5nXCIgd2lkdGg9ezUwfSBoZWlnaHQ9ezUwfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29ubmVjdH0+XG4gICAgICAgICAgeyFjdXJyZW50QWNjb3VudCA/IChcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y29ubmVjdFdhbGxldH0+Q29ubmVjdCBXYWxsZXQ8L2J1dHRvbj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGJ1dHRvbj57Y3VycmVudEFjY291bnQuc2xpY2UoMCwxNSl9Li4uLjwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5ob21lX2JveH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5ob21lX2NvbXBsZXRlZH0+XG4gICAgICAgICAgICA8aDI+VG9EbyBIaXN0b3J5IExpc3Q8L2gyPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge215TGlzdC5tYXAoKGVsLCBpZCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5ob21lX2NvbXBsZXRlZF9saXN0fSBrZXk9e2lkfT4gXG4gICAgICAgICAgICAgICAgICA8TWRWZXJpZmllZCBjbGFzc05hbWU9J1N0eWxlLmljb25Db2xvcicgLz5cbiAgICAgICAgICAgICAgICAgIDxwPntlbC5zbGljZSgwLDMwKX0uLi48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhvbWVfdmVydGljYWxsaW5lfT5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaG9tZV9jcmVhdGV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5ob21lX2NyZWF0ZV9ib3h9PlxuICAgICAgICAgICAgPGgyPkNyZWF0ZSBUb2RvTGlzdCBvbiBCbG9ja0NoYWluPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5ob21lX2NyZWF0ZV9pbnB1dH0+XG4gICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICB0eXBlPVwiVGV4dFwiIFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVG9kbyB0ZXh0XCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfSBcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2N1cnJlbnRBY2NvdW50ID8gKFxuICAgICAgICAgICAgICAgIDxJb0lvc1NlbmQgY2xhc3NOYW1lPXtTdHlsZS5pY29uQmxhY2t9IG9uQ2xpY2s9eygpID0+IHRvRG9MaXN0KG1lc3NhZ2UpfSAvPlxuICAgICAgICAgICAgICApOiAoXG4gICAgICAgICAgICAgICAgPElvSW9zU2VuZCBjbGFzc05hbWU9e1N0eWxlLmljb25CbGFja30gb25DbGljaz17Y29ubmVjdFdhbGxldH0gLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8RGF0YVxuICAgICAgICAgICAgICBhbGxUb2RvTGlzdD17YWxsVG9kb0xpc3R9XG4gICAgICAgICAgICAgIGFsbEFkZHJlc3M9e2FsbEFkZHJlc3N9XG4gICAgICAgICAgICAgIG15TGlzdD17bXlMaXN0fVxuICAgICAgICAgICAgICB0b2dnbGVGdW5jdGlvbj17dG9nZ2xlRnVuY3Rpb259XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJNZFZlcmlmaWVkIiwiSW9Jb3NTZW5kIiwiSW9NZENsb3NlIiwiQWlGaWxsTG9jayIsIkFpRmlsbFVubG9jayIsIkltYWdlIiwiVG9kb0xpc3RDb250ZXh0IiwiU3R5bGUiLCJMb2FkaW5nIiwiTWV0YW1hc2siLCJEYXRhIiwiSG9tZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY2hlY2tXYWxsZXRDb25uZWN0aW9uIiwiY29ubmVjdFdhbGxldCIsInRvRG9MaXN0IiwiZ2V0TGlzdERhdGEiLCJ0b2dnbGVGdW5jdGlvbiIsImN1cnJlbnRBY2NvdW50IiwiZXJyb3IiLCJhbGxUb2RvTGlzdCIsIm15TGlzdCIsImFsbEFkZHJlc3MiLCJjaGVja01lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaG9tZSIsIm5hdkJhciIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiY29ubmVjdCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzbGljZSIsImhvbWVfYm94IiwiaG9tZV9jb21wbGV0ZWQiLCJoMiIsIm1hcCIsImVsIiwiaWQiLCJob21lX2NvbXBsZXRlZF9saXN0IiwicCIsImhvbWVfdmVydGljYWxsaW5lIiwiaG9tZV9jcmVhdGUiLCJob21lX2NyZWF0ZV9ib3giLCJob21lX2NyZWF0ZV9pbnB1dCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpY29uQmxhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});