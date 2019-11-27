import LeapYear from "../src/LeapYear"

describe('LeapYear Should', () => {
  it('return true when is leapYear', () => {
    const leapYear = new LeapYear()
    expect(leapYear.check(2016)).toBeTruthy()
  })
})
