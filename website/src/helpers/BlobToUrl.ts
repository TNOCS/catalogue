/**
 * Convert the blob to a data url so we can display it in an img tag
 * See also: https://www.danyow.net/binding-to-file-inputs-with-aurelia/
 */
export class BlobToUrlValueConverter {
    toView(blob) {
        return URL.createObjectURL(blob);
    }
}