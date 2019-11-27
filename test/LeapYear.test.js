import LeapYear from "../src/LeapYear"

describe('LeapYear Should', () => {
  it('return true when is leapYear', () => {
    const leapYear = new LeapYear()
    expect(leapYear.check(2400)).toBeTruthy()
    expect(leapYear.check(2000)).toBeTruthy()
  })
  it('return false when is not leapYear', () => {
    const leapYear = new LeapYear()
    expect(leapYear.check(2017)).toBeFalsy()
    expect(leapYear.check(2018)).toBeFalsy()
  })
})
