export class Utils {
    static generatePassword(length = 8) {
        var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }

    /** Create a save mail to link */
    static createMailToLink(to: string, subject: string, body: string) {
        return `mailto:${to.replace(' ', '')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
}