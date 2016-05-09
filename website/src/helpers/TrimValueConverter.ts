/** Trim the string to 'limit' characters (the limit includes the ellipses at the end, i.e. ...) */
export class TrimValueConverter {
    toView(str: string, limit = 30) {
        return str && str.length > limit
            ? str.slice(0, limit - 3) + '...'
            : str;
    }
}