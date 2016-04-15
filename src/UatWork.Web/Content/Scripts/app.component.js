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
//# sourceMappingURL=app.component.js.map