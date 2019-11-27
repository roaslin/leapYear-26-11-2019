import LeapYear from "../src/LeapYear"

describe('LeapYear Should', () => {
  it('return true when check year 2016', () => {
    const leapYear = new LeapYear()
    expect(leapYear.check(2016)).toBeTruthy()
  })
})
