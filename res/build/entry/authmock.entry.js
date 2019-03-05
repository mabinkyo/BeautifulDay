webpackJsonp([4,6],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__.e/* nsure */(5, function(require) {
	  __webpack_require__(13)

	  __webpack_require__(1)
	  __webpack_require__(2)
	  __webpack_require__(3)

	  angular.module('app', [
	    'ngRoute',
	    'ngTouch',
	    __webpack_require__(4).name,
	    __webpack_require__(864).name,
	    __webpack_require__(869).name,
	    __webpack_require__(877).name
	  ])
	    .config(function($routeProvider, $locationProvider) {
	      $locationProvider.html5Mode(true)
	      $routeProvider
	        .otherwise({
	          redirectTo: '/auth/mock/'
	        })
	    })
	})


/***/ })
]);