webpackJsonp([0,6],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__.e/* nsure */(1, function(require) {
	  __webpack_require__(1)
	  __webpack_require__(2)
	  __webpack_require__(3)
	  
	  angular.module('app', [
	    'ngRoute',
	    'ngTouch',
	    __webpack_require__(4).name,
	    __webpack_require__(6).name,
	    __webpack_require__(12).name,
	    __webpack_require__(215).name,
	    __webpack_require__(331).name,
	    __webpack_require__(709).name,
	    __webpack_require__(726).name,
	    __webpack_require__(807).name,
	    __webpack_require__(842).name,
	    __webpack_require__(846).name,
	    __webpack_require__(849).name,
	    __webpack_require__(281).name
	  ])
	    .config(function($routeProvider, $locationProvider) {
	      $locationProvider.hashPrefix('!')
	      $routeProvider
	        .otherwise({
	          redirectTo: '/devices'
	        })
	    })

	    .config(function(hotkeysProvider) {
	      hotkeysProvider.templateTitle = 'Keyboard Shortcuts:'
	    })
	})


/***/ })
]);