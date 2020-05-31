'use strict';

class LoginPage {
    get username() { return $('#user-name') }
    get password() { return $('#password') }
    get submitBtn() { return $('input[type="submit"]') }
}
module.exports = LoginPage;