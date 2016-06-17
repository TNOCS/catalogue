/** 
 * Convert a list of File objects to an array
 * See also: https://www.danyow.net/binding-to-file-inputs-with-aurelia/
 */
export class FileListToArrayValueConverter {
    toView(fileList) {
        let files = [];
        if (!fileList) {
            return files;
        }
        for (let i = 0; i < fileList.length; i++) {
            files.push(fileList.item(i));
        }
        return files;
    }
}