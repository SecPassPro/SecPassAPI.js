/* This is the class for the SecPassAPI. You can find all functions here, all commented which function they have.
 * If you need a smaller version, check out the minified version in the GitHub releases section. */
class SecPassAPI {
    
    // Constructs the API with the values 'service', which is the name of your company/page/service,
    // the 'username' of the user and the 'secret', which should be generated with an API of your choice
    constructor(service, username, secret) {
        this.service = service;
        this.username = username;
        this.secret = secret;
    }

    // Generate an URL for the OTPAuth-Protocol, which can be used with SecPass Pro, 
    // but also with other TOTP-services like Authy ang Google Authenticator
    getOTPAuthURL() {
        return "otpauth://totp/" + this.username + "?issuer=" + this.service + "&secret=" + this.secret;
    }

    // Generate an URL for the SecPassPro-Protocol
    // NOTICE: Currently redirects to 'createOTPAuthURL()', because Protocol isn't finished yet
    getSPPURL() {
        return this.getOTPAuthURL();
    }

    // Opens the OTPAuth-URL directly
    openOAuthURL() {
        window.open(this.getOTPAuthURL());
    }

    // Creates a button which can be clicked to automatically use the OTPAuth URL
    createOTPAuthButton() {
        return "<button href='" + this.getOTPAuthURL() + "'>Open in 2FA-App</button>";
    }

    // Creates a button which can be clicked to automatically use the SecPassPro-Protocol
    // NOTICE: Currently redirects to 'createOTPAuthButton()', because Protocol isn't finished yet
    createSPPButton() {
        return this.createOTPAuthButton();
    }
    
}
