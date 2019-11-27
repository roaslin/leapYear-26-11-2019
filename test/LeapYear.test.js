import LeapYear from "../src/LeapYear"

describe('LeapYear Should', () => {
  it('return true when year is divisible by 400', () => {
    const leapYear = new LeapYear()
    expect(leapYear.check(2400)).toBeTruthy()
  })
})
