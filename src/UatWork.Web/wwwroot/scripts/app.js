(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var AccountController = (function () {
    function AccountController(state) {
        this.state = state;
        this.message = "This is first controller";
    }
    AccountController.$inject = ["$state"];
    return AccountController;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AccountController;

},{}],2:[function(require,module,exports){
"use strict";
var account_component_1 = require("./Account/account.component");
var ConfigSettings = (function () {
    function ConfigSettings($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        //Now setup the states here
        $stateProvider.state("login", {
            url: "/login",
            templateUrl: "",
            controller: "AccountController as vm"
        });
    }
    ConfigSettings.$inject = ["$stateProvider", "$urlRouterProvider"];
    return ConfigSettings;
}());
var UatWorkAppControllers = angular.module("UatWorkApp.Controllers", []);
UatWorkAppControllers.controller("AccountController", account_component_1.default);
var UatWorkApp = angular.module("UatWorkApp", ["ui.router", "UatWorkApp.Controllers"]);
UatWorkApp.config(ConfigSettings);

},{"./Account/account.component":1}],3:[function(require,module,exports){
angular.module("Templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("account/account.component.html","<h1> this is sample page</h1>");}]);
},{}]},{},[3,2]);
