export default class LeapYear {
    check(year) {
        if (isDivisibleBy4(year) && isNotDivisibleBy100(year)) {
            return true
        }
        return isDivisibleBy400(year);
    }
}

function isNotDivisibleBy100(year) {
    return year % 100 != 0;
}

function isDivisibleBy4(year) {
    return year % 4 == 0;
}

function isDivisibleBy400(year) {
    return year % 400 == 0;
}
