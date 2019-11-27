export default class LeapYear {
    check(year) {
        if (year % 4 == 0 && year % 100 != 0) {
            return true
        }
        return isDivisibleBy400(year);
    }
}

function isDivisibleBy400(year) {
    return year % 400 == 0;
}
