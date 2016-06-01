export class ToUppercaseValueConverter {
    toView(value) {
        return value && value.toUpperCase();
    }
}


/**
 * Usage
 *
 * <require from="ToUppercase"></require>
 * stringVal = 'This is my test string';
 * <h1 textContent.bind="stringVal | toUppercase">THIS IS MY TEST STRING</h1>
 */