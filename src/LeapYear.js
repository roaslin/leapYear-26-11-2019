export default class LeapYear {
    check(year){
       return isDivisibleBy400(year);
    }
}

function isDivisibleBy400(year) {
    return year % 400 == 0;
}
