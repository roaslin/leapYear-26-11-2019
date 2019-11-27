import LeapYear from "../src/LeapYear"

describe('LeapYear Should', () => {
  it('return true when is leapYear', () => {
    const leapYear = new LeapYear()
    expect(leapYear.check(2400)).toBeTruthy()
    expect(leapYear.check(2000)).toBeTruthy()

  })
})
