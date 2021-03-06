import LeapYear from "../src/LeapYear"

describe('LeapYear Should', () => {
  it('return true when year is divisible by 400', () => {
    const leapYear = new LeapYear()
    expect(leapYear.check(2400)).toBeTruthy()
    expect(leapYear.check(2000)).toBeTruthy()
  })
  it('return false when year is not divisible by 4', () => {
    const leapYear = new LeapYear()
    expect(leapYear.check(2017)).toBeFalsy()
    expect(leapYear.check(2018)).toBeFalsy()
  })
  it('return false when year is divisible by 100 and not divisible by 400', () => {
    const leapYear = new LeapYear()
    expect(leapYear.check(1700)).toBeFalsy()
    expect(leapYear.check(1800)).toBeFalsy()
  })
  it('return true when year is divisible by 4 and not divisible by 100', () => {
    const leapYear = new LeapYear()
    expect(leapYear.check(2008)).toBeTruthy()
    expect(leapYear.check(2012)).toBeTruthy()
    expect(leapYear.check(2016)).toBeTruthy()
  })
})
