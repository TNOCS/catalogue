export class FormatDateValueConverter {
    toView(date, format = 'yyyy-MM-dd') {
        if (typeof date === 'string') date = new Date(<string>date);
        if (!(date instanceof Date)) return '';
        switch (format) {
            case 'yyyy-MM-dd':
                let month = date.getMonth() + 1;
                let day = date.getDate();
                let year = date.getFullYear();
                return `${year}-${this.twoDigits(month)}-${this.twoDigits(day)}`;
        }
    }
    
    private twoDigits(digit: number) {
        return digit > 9 ? digit : `0${digit}`;
    }
}