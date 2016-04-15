

 export default class AccountController {
    static $inject = ["$state"];
    private message: string;

    constructor(private state: angular.ui.IStateService) {
        this.message = "This is first controller";
    }
}
