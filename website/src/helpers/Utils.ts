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

    static getGuid() {
        var guid = (Utils.S4() + Utils.S4() + '-' + Utils.S4() + '-4' + Utils.S4().substr(0, 3) + '-' + Utils.S4() + '-' + Utils.S4() + Utils.S4() + Utils.S4()).toLowerCase();
        return guid;
    }

    static S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
     
}