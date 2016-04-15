import AccountController from "./Account/account.component";

class ConfigSettings {
    static $inject = ["$stateProvider", "$urlRouterProvider"];
    constructor($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        //Now setup the states here

        $stateProvider.state("login", {
            url: "/login",
            templateUrl: "account/account.component.html",
            controller: "AccountController as vm"
        });
    }
}

var UatWorkAppControllers = angular.module("UatWorkApp.Controllers",[]);
UatWorkAppControllers.controller("AccountController", AccountController);

var UatWorkApp = angular.module("UatWorkApp", ["ui.router", "UatWorkApp.Controllers"]);
UatWorkApp.config(ConfigSettings);




