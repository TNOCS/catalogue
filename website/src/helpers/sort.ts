export class SortValueConverter {
    toView(array: any[], propertyName: string, direction: 'ascending' | 'descending') {
        if (!array || array.length === 0) return array;
        var factor = direction === 'ascending' ? 1 : -1;
        return array
            .sort((a, b) => {
                let ap = a[propertyName];
                let bp = b[propertyName];
                if (typeof ap === 'string' && typeof bp === 'string') {
                    return factor * ap.toLowerCase().localeCompare(bp.toLowerCase());
                }
                return (ap - bp) * factor
            });
    }
}